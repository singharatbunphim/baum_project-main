import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})



export class CourseEditComponent implements OnInit {
  cities: any[];

  constructor() {
    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];
   }

  ngOnInit(): void {

  }

}
