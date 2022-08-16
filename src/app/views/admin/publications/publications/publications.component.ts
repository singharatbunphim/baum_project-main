import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  textsearch: any;
  publications: any[] = [
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
