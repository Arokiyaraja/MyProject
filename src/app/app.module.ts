import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TwoComponent } from './two/two.component';
import { ProduitComponent } from './produit/produit.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    TwoComponent,
    ProduitComponent,
    EtudiantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
