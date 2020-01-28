import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Record } from '../../../../services/record'
import { ServiceService } from '../../../../services/service.service';
import { Student } from '../../../../services/student';
import { StudentInfo } from '../../../../services/studentInfo';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  record: Record;
  suggestions: Array<StudentInfo>;
  constructor(private fb: FormBuilder, private service: ServiceService) { 
    this.record = new Record();
    this.suggestions = new Array<StudentInfo>();
  }

  ngOnInit() {
    this.reset(new Record());
    this.record.batch = "2020-B";
    this.record.studentId = "5e2f98377063159f1c61b498"
    this.record.email= "email@gmail.com";
    
  }
  reset(val) {
    this.myForm = this.fb.group({
      studentName: [val.studentName, Validators.required],
      receivedBy: [val.receivedBy, Validators.required],
      dateReceived: [val.dateReceived, Validators.required],
      month: [val.month, Validators.required],
      amount: [val.amount, Validators.required]
    });
  }

  
  validate(value, validation) {
    var valid:number = 0;
    if (this.myForm.get(value).touched) {
      validation.forEach(error => {
        if (this.myForm.get(value).hasError(error)) {
          valid++;
        }
      });
    }
    return valid > 0;
  }

  onSubmit() {
    this.service.createRecord(this.record).subscribe(
      (response: Record) =>  {
      this.reset(new Record());
      console.log(response);
      alert("Record successfully created!")
      }, error => {
        alert("error occured")
        console.log(error);
      }
    )
  }

  getSuggestions(name) {
    this.service.getSuggestions(name).subscribe(
      (response: StudentInfo[]) => {
        this.suggestions = response;
        console.log(this.suggestions);
      }
     
    )
  }
}
