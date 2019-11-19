import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { DialogFunctionsComponent } from './dialog-functions/dialog-functions.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{

  constructor(private dialog: MatDialog) { }

  openDialog(){                                  //Basic
    this.dialog.open(DialogExampleComponent)
  }

  funcDialog(){                                  //Functions
    let dialogRef = this.dialog.open(DialogFunctionsComponent, {data: {name: 'Praveen'}}) //2nd is optional

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result : ${result}`);
    })
  }



}
