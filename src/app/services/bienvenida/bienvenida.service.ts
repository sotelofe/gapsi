import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, map } from 'rxjs';
import { environment } from "src/enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})

export class BienvenidaService {
  url = environment.urlApiGapsiLocal;
  path = this.url+"/bienvenida"

  constructor(private http: HttpClient) {}

  obtenerUsuario() {
    return this.http
      .get(this.path + '/obtenerUsuario')
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => {
          throw 'Ocurrio el siguiente error en la solicitud: ' + err;
        })
      );
  }

  obtenerVersionSistema() {
    return this.http
      .get(this.path + '/obtenerVersionSistema')
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((err) => {
          throw 'Ocurrio el siguiente error en la solicitud: ' + err;
        })
      );
  }
}
