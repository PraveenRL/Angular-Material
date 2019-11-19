import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {

  constructor(private snackBar: MatSnackBar) { }

  openSnackbar(message, action){
    this.snackBar.open(message, action);
  }

  openSnack(message, action){
    let snackBarRef = this.snackBar.open(message, action, {duration: 2000});

    snackBarRef.afterDismissed().subscribe(() => {    //We can use these two for 'undo'
      console.log('The Snackbar was dismissed')
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The Snackbar action was triggered')
    })
  }
}
