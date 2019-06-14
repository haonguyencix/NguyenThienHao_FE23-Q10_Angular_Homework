import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrls: ['./home-product-card.component.scss']
})
export class HomeProductCardComponent implements OnInit {
  @Input() card: {
    image: string,
    name: string,
    description: string
  };

  constructor() { }

  ngOnInit() {
  }
}
