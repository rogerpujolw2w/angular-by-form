import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';
import { FormArray } from '@angular/forms';
//import { NavbarComponent } from '../../commons/navbar/navbar.component';

@Component({
  selector: 'app-form01component',
  templateUrl: './form01component.component.html',
  styleUrls: ['./form01component.component.scss']
})
export class Form01componentComponent implements OnInit {

  usu: User=new User();
  //nav: NavbarComponent = new NavbarComponent();

  constructor() { }

  placeholder = { 'username' : 'Nombre de usuario' , 'userpass' : 'Clave' };

  valorretorno: string = '';
  displayerror: boolean = false;

  username: string="";
  password: string="";

  eventlogin(event:any, myform1:any):void {

    event.preventDefault();

    console.log(this.username);
    console.log(this.password);

/*     if (myform1[0].value === '' || myform1[1].value === '') {
      this.displayerror = true;
    } else {
      this.displayerror = false;
      //this.valorretorno = myform1[0].value + ' - ' + myform1[1].value;
      this.usu.setUser(myform1[0].value);
      this.valorretorno = this.usu.getUser();
      localStorage.setItem('logged', '1');
      //this.nav.getStatus();
      myform1.reset();
    }
 */  }

  ngOnInit() {
  }

}
