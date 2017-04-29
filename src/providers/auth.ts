import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
/*import { Observable } from 'rxjs';*/
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {

  constructor(public http: Http) {
  }

  signUp(name:string, user_name: string, email:string, password:string,){
   return this.http.post('http://localhost:8000/api/user',
      {name:name, email:email, user_name: user_name, password:password},
      {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})});
  }

  signIn(email:string, password:string){
    return this.http.post('http://localhost:8000/api/user/signin',
      { email:email, password:password},
      {headers: new Headers({'X-Requested-With':'XMLHttpRequest'})});
  }

}
