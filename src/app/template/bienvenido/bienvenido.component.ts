import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BienvenidaService } from 'src/app/services/bienvenida/bienvenida.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent implements OnInit {


  bienvenido!:string;
  version!:string;

  constructor(private serviceBienvenida:BienvenidaService,
              private router: Router,){

  }

  ngOnInit(){
    this.obtieneUsuarioBienvenida();
    this.obtieneVersionSistema();
  }

  obtieneUsuarioBienvenida(){
    this.serviceBienvenida.obtenerUsuario()
      .subscribe((resp) => {
          this.bienvenido = resp.usuario;
      });
  }

  obtieneVersionSistema(){
    this.serviceBienvenida.obtenerVersionSistema()
    .subscribe((resp) => {
        this.version =resp.version;
    });
  }

  continuar(){
    this.router.navigate(['/proveedores']);
  }


}
