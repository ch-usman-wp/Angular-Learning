export class User{
    constructor(public email: string, public id: string, private  _token: string, private _tokemExpirationDate: Date){}
get token(){
    if(!this._tokemExpirationDate || new Date() > this._tokemExpirationDate){
        return null;
    }
        return this._token;
    }
}