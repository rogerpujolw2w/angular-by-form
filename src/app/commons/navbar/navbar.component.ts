import { Component, OnInit, SimpleChange, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnChanges, OnInit  {

  constructor() { }

  verMenu:string="";

  getStatus() {
    this.verMenu = localStorage.getItem('logged');
  }

  ngOnInit() {
    this.verMenu = localStorage.getItem('logged');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.verMenu = localStorage.getItem('logged');
 }
}

/*
export class NavbarComponent implements OnInit {

  constructor() { }

  verMenu:string="";

  ngOnInit() {
    this.verMenu = localStorage.getItem('logged');
  }

  getLocal() {
    this.verMenu = localStorage.getItem('logged');
  }

}
*/
