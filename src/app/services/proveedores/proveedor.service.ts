import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, map } from 'rxjs';
import { environment } from "src/enviroments/enviroment";

@Injectable({
  providedIn: 'root'
})

export class ProveedorService {
  url = environment.urlApiGapsiLocal;
  path = this.url+"/proveedor"

  constructor(private http: HttpClient) {}

  consulta() {
    return this.http
      .get(this.path + '/consulta')
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
