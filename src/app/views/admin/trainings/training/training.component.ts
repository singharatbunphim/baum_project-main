import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  textsearch: any;
  trainings: any[] = [
    {
      title: 'Title Training',
      place: 'place',
      price: 300,
      caption: 'This is caption',
      days: 5,
      limit: 100,
      type: 'Online',
      courseId: "1",
      start_date: "2000-01-23T04:56:07.000+00:00"

    }
]

  first = 0;
  pageOption: any[] = [10];
  rows = 5;

  constructor() { }

  ngOnInit() {
  }


}
