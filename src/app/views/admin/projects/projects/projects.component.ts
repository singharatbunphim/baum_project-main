import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  textsearch: any;
  projects: any[] = [
    {
      owner: 'LnwZa007',
      image: '',
      caption: 'captionn!!!!',
      details: 'This is a first project',
      created_date: '2000-01-23T04:56:07.000+00:00',
      title: 'FristProject'
    },
]

  first = 0;
  pageOption: any[] = [10];
  rows = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
