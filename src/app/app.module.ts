
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ImagenComponent } from './imagen/imagen.component'; 

@NgModule({
  declarations: [AppComponent, DescripcionComponent, ImagenComponent], 
  imports: [BrowserModule],
  exports: [DescripcionComponent, [ImagenComponent]],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
