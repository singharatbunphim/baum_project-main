import { Component, Input, OnInit } from '@angular/core';
import { itemCardProject } from 'src/app/types/types';
@Component({
  selector: 'app-carditem-project',
  templateUrl: './carditem-project.component.html',
  styleUrls: ['./carditem-project.component.scss']
})
export class CarditemProjectComponent implements OnInit {

  @Input() data: itemCardProject;
  constructor() { }

  ngOnInit(): void {
  }

}
