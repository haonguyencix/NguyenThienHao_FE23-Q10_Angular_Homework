import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeSmartphoneComponent } from './home-smartphone/home-smartphone.component';
import { HomeLaptopComponent } from './home-laptop/home-laptop.component';
import { HomePromotionComponent } from './home-promotion/home-promotion.component';
import { HomeProductCardComponent } from './home-product-card/home-product-card.component';
import { HomePromotionItemComponent } from './home-promotion/home-promotion-item/home-promotion-item.component';


@NgModule({
  declarations: [HomeComponent, HomeNavbarComponent, HomeCarouselComponent, HomeSmartphoneComponent, HomeLaptopComponent, HomePromotionComponent, HomeProductCardComponent, HomePromotionItemComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
