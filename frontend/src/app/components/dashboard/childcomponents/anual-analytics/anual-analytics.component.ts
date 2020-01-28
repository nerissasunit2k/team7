import { Component, OnInit } from '@angular/core';
import { Stat } from '../../../../services/monthlystat';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-anual-analytics',
  templateUrl: './anual-analytics.component.html',
  styleUrls: ['.././student-table/student-table.component.scss']
})
export class AnualAnalyticsComponent implements OnInit {

  monthlyStat: Array<Stat>;
  constructor(private service: ServiceService) { 
    this.monthlyStat = new Array<Stat>();
  }

  ngOnInit() {
    this.monthlyStat = this.service.getAnualStat();
  }
}
