import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePromotionItemComponent } from './home-promotion-item.component';

describe('HomePromotionItemComponent', () => {
  let component: HomePromotionItemComponent;
  let fixture: ComponentFixture<HomePromotionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePromotionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePromotionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
