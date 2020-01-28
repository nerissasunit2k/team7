import { Component, OnInit} from '@angular/core';
import { ServiceService } from '../../../../services/service.service';
import { Student } from '../../../../services/student';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  public listOfStudents: Array<Student>;

  constructor(private location: Location, private service: ServiceService, private router: Router) {
    this.listOfStudents = new Array<Student>();
   }

  ngOnInit() {
   this.listOfStudents =  this.service.getData();
  }

  pay(id) {
    this.router.navigate(['/dashboard/payCounterpart/'+id]);
  }

}
