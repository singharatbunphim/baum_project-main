import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  openMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }



  HandleClick(){
    this.openMenu = !this.openMenu;
  }
}
