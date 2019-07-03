export class User {

  private _id: string;
  private _usuario: string;
  private _clave: string;

  getUser():string {
    return this._usuario;
  }

  setUser(_usu: string) {
    this._usuario = _usu;
  }

}
