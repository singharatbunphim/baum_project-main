import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {


  textsearch: any;
  courses: any[] = [
    {
      id: '01',
      coursename: 'Php',
      caption: 'This is course awesome',
      status: true,
    },
    {
      id: '02',
      coursename: 'Javascript',
      caption: 'This is course awesome',
      status: false,
    },
    {
      id: '03',
      coursename: 'Nodejs',
      caption: 'This is course awesome',
      status: false,
    },
    {
      id: '04',
      coursename: 'Nodejs',
      caption: 'This is course awesome',
      status: true,
    },
    {
      id: '05',
      coursename: 'Nodejs',
      caption: 'This is course awesome',
      status: true,
    },
    {
      id: '06',
      coursename: 'Nodejs',
      caption: 'This is course awesome',
      status: false,
    },
    {
      id: '07',
      coursename: 'Nodejs',
      caption: 'This is course awesome',
      status: true,
    },
    {
      id: '08',
      coursename: 'Nodejs',
      caption: 'This is course awesome',
      status: true,
    },
    {
      id: '09',
      coursename: 'Nodejs',
      caption: 'This is course awesome',
      status: true,
    },
    {
      id: '10',
      coursename: 'Nodejs',
      caption: 'This is course awesome',
      status: true,
    },
]

  first = 0;
  pageOption: any[] = [10];
  rows = 5;

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }


}