import { Component } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent {

  nodes: any[] = [{
    "label": "Node 1",
  },
{
    "label": "Node 2",
}]
  selectedNodes: any = ''

}
