import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { DicomSearchService } from './dicom-search.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dicom-search',
  templateUrl: './dicom-search.component.html',
  styleUrls: ['./dicom-search.component.css']
})
export class DicomSearchComponent implements OnInit {
  @ViewChild('patientNameInput') private elementRef: ElementRef;
  patientNameFormControl = new FormControl();
  tagsFormControl = new FormControl();
  hospitalFormControl = new FormControl();

  constructor(private searchService: DicomSearchService) { }

  ngOnInit() {
    this.elementRef.nativeElement.focus();
  }

  newSearch() {
    let strval = this.patientNameFormControl.value ? this.patientNameFormControl.value.trim() : '';
    this.searchService.patientnamestr = strval;
    strval = this.tagsFormControl.value ? this.tagsFormControl.value.trim() : '';
    this.searchService.tagstr = strval;
    strval = this.hospitalFormControl.value ? this.hospitalFormControl.value.trim() : '';
    this.searchService.hospitalstr = strval;
    this.searchService.scrollid = '';
    if (this.searchService.dicomSearchResults.length > 0) {
      this.searchService.dicomSearchResults = [];
    }

    this.search();
  }

  search() {
    this.searchService.Search().subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  resetQuery() {
    this.patientNameFormControl.setValue('');
    this.tagsFormControl.setValue('');
    this.hospitalFormControl.setValue('');
    this.searchService.scrollid = '';
    this.searchService.dicomSearchResults = [];
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if ((window.innerHeight + window.scrollY === document.body.scrollHeight) && (this.searchService.total > 0)) {
      if (this.searchService.currenttotal < this.searchService.total) {
        this.search();
      }
    }
  }
}
