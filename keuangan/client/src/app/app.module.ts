import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ProgressHttpModule } from 'angular-progress-http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgPipesModule } from 'ngx-pipes';
import { TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './components/app';
import { HeaderComponent } from './components/header';
import { ProgressComponent } from './components/progress';
import { ProgressRecapitulationComponent } from './components/progressRecapitulation';
import { ProgressTimelineComponent } from './components/progressTimeline';
import { ProgressDetailComponent } from './components/progressDetail';
import { ProgressRevenueChartComponent } from './components/progressRevenueChart';
import { ProgressRealizationChartComponent } from './components/progressRealizationChart';
import { BudgetComponent } from './components/budget';
import { BudgetRecapitulationComponent } from './components/budgetRecapitulation';
import { BudgetDetailComponent } from './components/budgetDetail';
import { BudgetTableComponent } from './components/budgetTable';
import { BudgetChartComponent } from './components/budgetChart';
import { BudgetLikelihoodComponent } from './components/budgetLikelihood';
import { SummaryComponent } from './components/summary';

import { FormatCurrencyPipe } from './pipes/formatCurrency';
import { HideBudgetDetailPipe } from './pipes/hideBudgetDetail';
import { BudgetTypePipe } from './pipes/budgetType';
import { RegionTypePipe } from './pipes/regionType';

import { DataService } from './services/data';
import { SharedService } from './services/shared';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressComponent,
    ProgressRecapitulationComponent,
    ProgressTimelineComponent,
    ProgressDetailComponent,
    ProgressRevenueChartComponent,
    ProgressRealizationChartComponent,
    BudgetComponent,
    BudgetRecapitulationComponent,
    BudgetDetailComponent,
    BudgetTableComponent,
    BudgetChartComponent,
    BudgetLikelihoodComponent,
    SummaryComponent,
    HideBudgetDetailPipe,
    BudgetTypePipe,
    FormatCurrencyPipe,
    RegionTypePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ProgressHttpModule,
    ChartsModule,
    NgPipesModule,
    TabsModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'progress/region/0', pathMatch: 'full' },
      { path: 'progress/region/:regionId', component: ProgressComponent }, 
      { path: 'budget/region/:regionId', component: BudgetComponent },
      { path: 'summary/region/:regionId', component: SummaryComponent },
      { path: '**', redirectTo: 'progress/region/0' }
    ]),
  ],
  providers: [
    DataService,
    SharedService,
    { provide: LOCALE_ID, useValue: 'id-ID' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
