import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  opened = false;

  log(state){           //We can use different functions by this, this is an example only
    console.log(state);
  }
  constructor() { }

  ngOnInit() {
  }

}
