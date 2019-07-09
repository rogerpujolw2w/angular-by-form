import { Component, OnInit } from '@angular/core';
import { FullUser } from '../../shared/classes/full-user';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-form03component',
  templateUrl: './form03component.component.html',
  styleUrls: ['./form03component.component.scss']
})

export class Form03componentComponent implements OnInit {

  user:FullUser = new FullUser;

  constructor() { }

  ngOnInit() {
  }

  botonDesactivado:boolean=true;

checkButton() {
  console.log(this.userData.realname === '' || this.userData.username === '');
  console.log(this.userData.realname);
  console.log(this.userData.username);
  this.botonDesactivado = (
    this.userData.realname === '' || this.userData.username === ''
  );
}

  saveUser():void {
    this.user.setRealname(this.userData.realname);
    this.user.setUsername(this.userData.username);
    this.user.setPassword(this.userData.password);
    this.user.setEmail(this.userData.email);
    this.user.setContinent(this.userData.continent);
    this.user.setGender(this.userData.gender);
    this.user.setUpTo18(this.userData.upTo18);
  }


  public genders = {
    H: {
      label: 'Hombre',
      id: 'gender_H',
      value: 'H',
      name: 'genderOption',
      checked: false
    },
    M: {
      label: 'Mujer',
      id: 'gender_M',
      value: 'M',
      name: 'genderOption',
      checked: true
    }
  };
  public userData = {
    realname: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    continent: '0',
    gender: 'H',
    upTo18: false
  };
  public placeholders = {
    realname: 'Teclea tu nombre y apellidos',
    username: 'Teclea tu nombre de usuario',
    userpass: 'Teclea tu contraseña',
    userconfimrpass: 'Repite tu contraseña',
    email: 'Teclea tu email'
  };
  public continents = [
    {
      value: '0',
      text: 'Selecciona continente',
      selected: true,
      disabled: true
    },
    {
      value: 'EU',
      text: 'Europa',
      selected: false,
      disabled: false
    },
    {
      value: 'AM',
      text: 'América',
      selected: false,
      disabled: false
    },
    {
      value: 'AF',
      text: 'África',
      selected: false,
      disabled: false
    },
    {
      value: 'AS',
      text: 'Asia',
      selected: false,
      disabled: false
    },
    {
      value: 'OC',
      text: 'Oceanía',
      selected: false,
      disabled: false
    }
  ];

}
