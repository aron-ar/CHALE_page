import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosVoluntariosComponent } from './nuestros-voluntarios.component';

describe('NuestrosVoluntariosComponent', () => {
  let component: NuestrosVoluntariosComponent;
  let fixture: ComponentFixture<NuestrosVoluntariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuestrosVoluntariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosVoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
