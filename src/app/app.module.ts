import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorsService } from './service/service-errors.service';
import { ErrorsComponent } from './errors/errors.component';


@NgModule({
  declarations: [
            
  ],

  imports: [
    BrowserModule,
    HttpClientModule // Importa HttpClientModule si estás usando HttpClient en tu servicio
    // Otros módulos importados
  ],
  providers: [
    ErrorsService // Agrega tu servicio al arreglo de proveedores
    // Otros proveedores si los tienes
  ]
})
export class AppModule { }

