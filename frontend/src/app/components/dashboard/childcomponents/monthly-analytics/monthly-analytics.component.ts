import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../services/service.service';
import { Stat } from '../../../../services/monthlystat';

@Component({
  selector: 'app-monthly-analytics',
  templateUrl: './monthly-analytics.component.html',
  styleUrls: ['.././student-table/student-table.component.scss']
})
export class MonthlyAnalyticsComponent implements OnInit {
  monthlyStat: Array<Stat>;
  constructor(private service: ServiceService) { 
    this.monthlyStat = new Array<Stat>();
  }

  ngOnInit() {
    this.monthlyStat = this.service.getMonthlyStat();
  }

}
