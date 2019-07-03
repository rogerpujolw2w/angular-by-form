export class User {

  private _id: string;
  private _usuario: string;
  private _clave: string;

  constructor() {
    this._id = this.uniqueId();
    this._usuario = "";
    this._clave = "";
  }

  getUser():string {
    return this._usuario;
  }

  setUser(usu: string) {
    this._usuario = usu;
  }

  getPassword():string {
    return this._clave;
  }

  setPassword(pass: string) {
    this._clave = pass;
  }

  getId(): string {
    return this._id;
  }

  private uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    unique = unique.toString().replace('.',thisMS.toString());
    return unique;
  }

}
