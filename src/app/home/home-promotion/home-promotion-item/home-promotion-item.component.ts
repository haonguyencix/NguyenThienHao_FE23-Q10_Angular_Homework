import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-promotion-item',
  templateUrl: './home-promotion-item.component.html',
  styleUrls: ['./home-promotion-item.component.scss']
})
export class HomePromotionItemComponent implements OnInit {
  
  @Input() image;
  constructor() { }

  ngOnInit() {
  }

}
