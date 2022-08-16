import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  textsearch: any;
  blogs: any[] = [
    {
      owner: 'admin1414',
      titile: 'Water Pump!!',
      caption: 'This is Blog awesome',
      status: true,
    },
]

  first = 0;
  pageOption: any[] = [10];
  rows = 5;



  constructor() { }

  ngOnInit() {
  }


}
