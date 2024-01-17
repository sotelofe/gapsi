import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { BienvenidoComponent } from './template/bienvenido/bienvenido.component';

@NgModule({
  declarations: [
    AppComponent,
    ProveedorComponent,
    HeaderComponent,
    BienvenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
