import { Component, OnInit, Input } from '@angular/core';
import { StudentInfo } from '../../../../../services/studentInfo';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['../../student-table/student-table.component.scss']
})
export class SuggestionsComponent implements OnInit {
  @Input() suggestions: Array<StudentInfo>;
  constructor() { 
    this.suggestions = new  Array<StudentInfo>();
  }

  ngOnInit() {
  }

}
