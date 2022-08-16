import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  //Declarando API a consumir
  _url = 'http://190.60.101.59:6003/api/Personas';
  constructor(private http: HttpClient) {
    console.log('Servicio persona');
  }
  //Método para realizar el POST en la API
  postPersonas(user: any) {
    console.log(user);

    let header = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.post<any>(this._url, user).subscribe((data) => {
      alert(data);
    });
  }
}
