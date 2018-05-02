import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicomSearchComponent } from './dicom-search.component';

describe('DicomSearchComponent', () => {
  let component: DicomSearchComponent;
  let fixture: ComponentFixture<DicomSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicomSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicomSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
