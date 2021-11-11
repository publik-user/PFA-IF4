import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSharedComponent } from './member-shared.component';

describe('MemberSharedComponent', () => {
  let component: MemberSharedComponent;
  let fixture: ComponentFixture<MemberSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
