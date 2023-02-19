import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMapComponent } from './core/main-map/main-map.component';
import { MapContentComponent } from './core/map-content/map-content.component';
import { ShaderComponent } from './core/shader/shader.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMapComponent,
    MapContentComponent,
    ShaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
