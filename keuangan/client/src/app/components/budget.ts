import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data';
import { SharedService } from '../services/shared';

@Component({
    selector: 'sk-budget',
    templateUrl: '../templates/budget.html',
})

export class BudgetComponent implements OnInit, OnDestroy {

    private _subscriptions: Subscription[] = [];

    regionId: string;

    constructor(
        private _route: ActivatedRoute,
        private _dataService: DataService,
        private _sharedService: SharedService
    ) {

    }

    ngOnInit(): void {        
        this._sharedService.setState('budget');
        let routeSubscription = this._route.params.subscribe(params => {
            this.regionId = params['regionId'];     
            if (!this._sharedService.region || this._sharedService.region.id !== this.regionId)       
                this._dataService.getRegion(this.regionId, null, null).subscribe(region => {
                    this._sharedService.setRegion(region);
                })            
        });

        this._subscriptions.push(routeSubscription);
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }

}
