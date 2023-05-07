import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticComponent } from './components/statistic/statistic.component';
import { HttpClientModule } from '@angular/common/http';
import { StatisticRouting } from './statistic-routing.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TreeSelectModule } from 'primeng/treeselect';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StatisticComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StatisticRouting,
    ButtonModule,
    CardModule,
    TreeSelectModule,
    FormsModule
  ]
})
export class StatisticModule { }
