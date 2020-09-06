import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselToolsComponent } from './carousel-tools.component';

describe('CarouselToolsComponent', () => {
  let component: CarouselToolsComponent;
  let fixture: ComponentFixture<CarouselToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
