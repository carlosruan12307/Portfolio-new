import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonHeaderComponent } from './button-header.component';
import { CommonModule } from '@angular/common';

describe('ButtonHeaderComponent', () => {
  let component: ButtonHeaderComponent;
  let fixture: ComponentFixture<ButtonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
