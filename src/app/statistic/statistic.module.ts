import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './components/statistic/statistic.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { StatisticRouting } from './statistic-routing.module';




@NgModule({
  declarations: [
    StatisticComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StatisticRouting


  ]
})
export class StatisticModule { }
