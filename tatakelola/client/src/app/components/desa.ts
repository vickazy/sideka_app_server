import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from '../services/data';
import { MapUtils } from '../helpers/mapUtils';
import { Progress } from 'angular-progress-http';

import * as ngxLeaflet from '@asymmetrik/ngx-leaflet';
import * as L from 'leaflet';

import 'rxjs/add/operator/map';

@Component({
    selector: 'st-desa',
    templateUrl: '../templates/desa.html'
})
export class DesaComponent implements OnInit, OnDestroy {
    activeMenu: string;
    activeMap: L.Map;
    mapOptions: L.MapOptions;
    geoJSONOptions: L.GeoJSONOptions;
    geoJSON: L.GeoJSON;
    data: any[];
    bigConfig: any[];
    sidebarCollapsed: boolean;
    summaries: any;
    progress: Progress;

    constructor(
        private _http: Http,
        private _dataService: DataService,
        private _router: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.sidebarCollapsed = false;
        this.summaries = {};

        this.mapOptions = {
            layers: [L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
            zoom: 14,
            center: L.latLng([-7.547389769590928, 108.21044272398679])
        }

        this._http.get('assets/bigConfig.json').map(res => res.json()).subscribe(
            data => {
                this.bigConfig = data;
            },
            error => { }
        )
        
        this._router.params.subscribe(
           params => {
               let regionId = params['regionId'];
               this.loadGeojsonByRegion(regionId);
               this.loadSummariesByRegion(regionId);  
           }
        )

        this.geoJSONOptions = {
            style: (feature) => {
                return { color: '#000', weight: 0.5 }
            },
            onEachFeature: (feature, layer) => {
                 for (let i = 0; i < this.bigConfig.length; i++) {
                    let indicator = this.bigConfig[i];
                    let element = null;

                    for (let j = 0; j < indicator.elements.length; j++) {
                        let current = indicator.elements[j];

                        if (current.values) {
                            let valueKeys = Object.keys(current.values);

                            if (valueKeys.every(valueKey => feature["properties"][valueKey] === current.values[valueKey])) {
                                element = current;
                                break;
                            }
                        }
                    }

                    if (!element)
                        continue;

                    if (element['style']) {
                        let style = MapUtils.setupStyle(element['style']);
                        layer['setStyle'](style);
                    }
                }
            }
        }
    }

    loadGeojsonByRegion(regionId): void {
        this._dataService.getGeojsonsByRegion(regionId, {}, this.progressListener.bind(this)).subscribe(
            geojson => {
                if(geojson.length === 0)
                    return;

                this.setMapLayout(geojson);
            }
        )
    }

    loadSummariesByRegion(regionId): void {
        this._dataService.getSummariesByRegion(regionId, {}, null).subscribe(
            summaries => {
                if(summaries.length > 0)
                    this.summaries = summaries[0];

                console.log(this.summaries);
            }
        )
    }

    ngOnDestroy(): void { }

    setActiveMenu(menu: string): boolean {
        this.activeMenu = menu;
        switch(menu){
            case 'pembangunan':
            break;
            case 'batas':
            break;
        }
        return false;
    }

    setMapLayout(geoJson): void {
        let landuse = geoJson.filter(e => e.type === 'landuse')[0];
        let transport = geoJson.filter(e => e.type === 'network_transportation')[0];
        let facilities = geoJson.filter(e => e.type === 'facilities_infrastructures')[0];
        let waters = geoJson.filter(e => e.type === 'waters')[0];
        let boundary = geoJson.filter(e => e.type === 'boundary')[0];
       
        let geoJsonLayer: any = MapUtils.createGeoJson();

        if(waters)
            geoJsonLayer.features = geoJsonLayer.features.concat(waters.data.features);
        if(transport)
            geoJsonLayer.features = geoJsonLayer.features.concat(transport.data.features); 
        if(landuse)
            geoJsonLayer.features = geoJsonLayer.features.concat(landuse.data.features);
        if(facilities)
            geoJsonLayer.features = geoJsonLayer.features.concat(facilities.data.features);

        L.geoJSON(geoJsonLayer, this.geoJSONOptions).addTo(this.activeMap);

        let center = MapUtils.getCentroid(landuse.data.features);

        this.activeMap.setView([center[1], center[0]], 14);
    }

    clearGeoJSON(): void {
        if (this.geoJSON)
            this.activeMap.removeLayer(this.geoJSON);
    }

    onMapReady(map: L.Map): void {
        this.activeMap = map;
    }

    progressListener(progress: Progress): void {
        this.progress = progress;
    }
}