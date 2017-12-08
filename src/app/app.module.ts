import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevelperComponent } from './develper/develper.component';


import AppRoutes from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DevelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
