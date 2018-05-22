import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-tags',
  templateUrl: './add-tags.component.html',
  styleUrls: ['./add-tags.component.css']
})
export class AddTagsComponent {
  newDicomTags: string;
  constructor(
    public dialogRef: MatDialogRef<AddTagsComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close({
        newDicomTags: this.newDicomTags
    });

  }
}
