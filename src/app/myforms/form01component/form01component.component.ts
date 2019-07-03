import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-form01component',
  templateUrl: './form01component.component.html',
  styleUrls: ['./form01component.component.scss']
})
export class Form01componentComponent implements OnInit {

  usu: User=new User();

  constructor() { }

  valorretorno: string="";
  displayerror: boolean=false;

  eventlogin(event:any, myform1:any):void {

    event.preventDefault();

    if (myform1[0].value === '' || myform1[1].value === '') {
      this.displayerror = true;
    } else {
      this.displayerror = false;
      //this.valorretorno = myform1[0].value + ' - ' + myform1[1].value;
      this.usu.setUser(myform1[0].value);
      this.valorretorno = this.usu.getUser();

      myform1.reset();
    }
  }

  ngOnInit() {
  }

}
