import { Component, OnInit } from '@angular/core';  
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';  
@Component({  
  selector: 'app-task-add',  
  templateUrl: './task-add.component.html',  
  styleUrls: ['./task-add.component.css']  
})  
export class TaskAddComponent implements OnInit {  
  angForm: FormGroup;  
  constructor(private fb: FormBuilder) {  
    this.createForm();  
  }  
  createForm() {  
    this.angForm = this.fb.group({  
      TaskName: ['', Validators.required ],  
      TaskDescription: ['', Validators.required ]
    });  
  }  
  ngOnInit() {  
  }  
}  