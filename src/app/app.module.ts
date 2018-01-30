import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NovoCartaoComponent } from './novo-cartao/novo-cartao.component';
import { MuralComponent } from './mural/mural.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NovoCartaoComponent,
    MuralComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
