import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KLTComponent } from './klt.component';

describe('KLTComponent', () => {
  let component: KLTComponent;
  let fixture: ComponentFixture<KLTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KLTComponent]
    });
    fixture = TestBed.createComponent(KLTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
