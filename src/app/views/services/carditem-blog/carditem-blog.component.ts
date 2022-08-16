import { Component, OnInit , Input } from '@angular/core';
import { itemCardList } from '../../../types/types'
@Component({
  selector: 'app-carditem-blog',
  templateUrl: './carditem-blog.component.html',
  styleUrls: ['./carditem-blog.component.scss']
})
export class CarditemBlogComponent implements OnInit {

  @Input() data: itemCardList;
  constructor() {
   }

  ngOnInit(): void {
  }

}
