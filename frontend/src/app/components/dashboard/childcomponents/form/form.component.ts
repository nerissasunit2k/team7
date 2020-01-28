import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Record } from '../../../../services/record'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  record: Record;
  constructor(private fb: FormBuilder) { 
    this.record = new Record();
  }

  ngOnInit() {
    this.reset(new Record());
    
  }
  reset(val) {
    this.myForm = this.fb.group({
      name: [val.name, Validators.required],
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
}
