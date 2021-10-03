import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingPropertiesComponent } from './databinding-properties.component';

describe('DatabindingPropertiesComponent', () => {
  let component: DatabindingPropertiesComponent;
  let fixture: ComponentFixture<DatabindingPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
