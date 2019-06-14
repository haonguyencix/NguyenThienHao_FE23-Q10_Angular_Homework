import { Component, OnInit } from '@angular/core';
import {PromotionData} from '../../../assets/promotion-data.js';

@Component({
  selector: 'app-home-promotion',
  templateUrl: './home-promotion.component.html',
  styleUrls: ['./home-promotion.component.scss']
})
export class HomePromotionComponent implements OnInit {
  
  public PromotionData: String[] = PromotionData;
  constructor() { }

  ngOnInit() {
  }

}
