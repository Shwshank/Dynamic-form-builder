import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFeildComponent } from './text-feild.component';

describe('TextFeildComponent', () => {
  let component: TextFeildComponent;
  let fixture: ComponentFixture<TextFeildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFeildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
