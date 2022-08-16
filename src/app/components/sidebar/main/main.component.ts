import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';
@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'File',
      items: [
          {label: 'New', icon: 'pi pi-plus'},
          {label: 'Open', icon: 'pi pi-download'}
      ]
  },
  {
      label: 'Edit',
      items: [
          {label: 'Undo', icon: 'pi pi-refresh'},
          {label: 'Redo', icon: 'pi pi-repeat'}
      ]
  }];
}

}
