import { Component, OnInit } from '@angular/core';
import { SmartphoneData } from '../../../assets/smartphone-data';

@Component({
  selector: 'app-home-smartphone',
  templateUrl: './home-smartphone.component.html',
  styleUrls: ['./home-smartphone.component.scss']
})
export class HomeSmartphoneComponent implements OnInit {

  public SmartphoneData = SmartphoneData;
  
  constructor() { }

  ngOnInit() {
  }

}
