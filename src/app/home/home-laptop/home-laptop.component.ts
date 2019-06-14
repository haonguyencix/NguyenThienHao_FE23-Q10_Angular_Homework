import { Component, OnInit } from '@angular/core';
import {LaptopData} from '../../../assets/laptop-data.js';

@Component({
  selector: 'app-home-laptop',
  templateUrl: './home-laptop.component.html',
  styleUrls: ['./home-laptop.component.scss']
})
export class HomeLaptopComponent implements OnInit {

  public LaptopData = LaptopData;
  constructor() { }

  ngOnInit() {
  }

}
