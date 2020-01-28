import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  path:string = "/dashboard/student-list";
  min: boolean = false;
  constructor(private location: Location, private route: Router) {
    this.path = this.location.path();
    this.route.events.subscribe((val) => {
     if (val instanceof NavigationEnd) {
      this.path = val.url;
      if (this.path.includes('payCounterpart')) {
        this.path = "/dashboard/form";
      }
      
     }
    })
   }

  ngOnInit() {
  }

  goto(path) {
    this.route.navigate([path]);
    this.path = path;
  }
  
}
