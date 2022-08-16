import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carditem-public',
  templateUrl: './carditem-public.component.html',
  styleUrls: ['./carditem-public.component.scss']
})
export class CarditemPublicComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
