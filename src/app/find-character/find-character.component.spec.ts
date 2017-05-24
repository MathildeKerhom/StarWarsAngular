import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCharacterComponent } from './find-character.component';

describe('FindCharacterComponent', () => {
  let component: FindCharacterComponent;
  let fixture: ComponentFixture<FindCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
