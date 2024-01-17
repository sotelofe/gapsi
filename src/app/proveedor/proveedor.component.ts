import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProveedorService } from '../services/proveedores/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss']
})
export class ProveedorComponent implements OnInit{

  proveedores:any;

  constructor(private serviceProveedor:ProveedorService,
    private router: Router,){

  }

  ngOnInit(){
    this.consultaListaProveedores();
  }

  consultaListaProveedores(){
    this.serviceProveedor.consulta()
    .subscribe((resp) => {
        console.log(resp);
        this.proveedores = resp;
    });
  }

}
