import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-add-list',
  templateUrl: './course-add-list.component.html',
  styleUrls: ['./course-add-list.component.scss']
})
export class CourseAddListComponent implements OnInit {
  
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
