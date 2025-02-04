import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KProfileComponent } from './k-profile.component';

describe('KProfileComponent', () => {
  let component: KProfileComponent;
  let fixture: ComponentFixture<KProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KProfileComponent]
    });
    fixture = TestBed.createComponent(KProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
