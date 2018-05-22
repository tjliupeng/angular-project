import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
    selector: 'app-pop-message',
    templateUrl: './pop-message.component.html',
    styleUrls: ['./pop-message.component.css']
})

export class  PopMessageComponent {
    public showMessage: any;
    constructor(public dialogRef: MatDialogRef < PopMessageComponent>,
        @Inject(MAT_DIALOG_DATA) public message: any) {
            this.showMessage = message;
        }
    onNoClick(): void {
        this.dialogRef.close();
    }
}
