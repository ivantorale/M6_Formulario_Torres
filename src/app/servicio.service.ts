import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './formulario/formulario/formulario.component';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  

  constructor() {

  }
  public user: User[] = [];
  public sendUser(datos: any):Observable<User[]>{
    if(datos != ""){
      this.user.push(datos)
      console.log(this.user)
    }
    return of(this.user)
  }

}
