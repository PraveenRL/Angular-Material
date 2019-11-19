import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-functions',
  templateUrl: './dialog-functions.component.html',
  styleUrls: ['./dialog-functions.component.css']
})
export class DialogFunctionsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
