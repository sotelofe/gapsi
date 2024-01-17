
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { BienvenidoComponent } from './template/bienvenido/bienvenido.component';

const routes: Routes = [
 // {
  //  path: '',
  //  loadChildren: () => import('./template/template.module').then(m => m.TemplateModule),
  //},

  {
    path: '',
    component: BienvenidoComponent,
  },

  {
    path: 'proveedores',
    component: ProveedorComponent,
  },

 // {
 //   path: 'proveedores',
 //   loadChildren: () => import('./proveedor/proveedor.module').then(m => m.ProveedorModule),
 // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
