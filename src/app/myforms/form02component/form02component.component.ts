import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-form02component',
  templateUrl: './form02component.component.html',
  styleUrls: ['./form02component.component.scss']
})
export class Form02componentComponent implements OnInit {

  usu: User=new User();

  pu: string = "Nombre de usuario";
  pp: string = "Clave";

  valorretorno: string="";
  displayerror: boolean=false;

  createUser(event:any, myform2:any):void {

    event.preventDefault();

    if (myform2[0].value === '' || myform2[1].value === '') {
      this.displayerror = true;
    } else {
      this.displayerror = false;
      //this.valorretorno = myform1[0].value + ' - ' + myform1[1].value;
      this.usu.setUser(myform2[0].value);
      this.valorretorno = this.usu.getUser() + myform2[1].value + this.usu.getId();

      myform2.reset();
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
