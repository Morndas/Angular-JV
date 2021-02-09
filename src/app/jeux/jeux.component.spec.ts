import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxComponent } from './jeux.component';
import { } from 'jasmine';

describe('JeuxComponent', () => {
  let component: JeuxComponent;
  let fixture: ComponentFixture<JeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
