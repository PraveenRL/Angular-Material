import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  minDate = new Date(2019, 4, 24);
  maxDate = new Date;             //month start from 0, so for april -> 3

  dateFiler = date => {
    const day = date.getDay();
    return day !=0 && day != 6;   //making saturday and sunday disable
  }

}
