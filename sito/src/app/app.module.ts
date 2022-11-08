import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ProdottoComponent } from './prodotto/prodotto.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { HomeComponent } from './home/home.component';
import { FilterProductsPipe } from './filter-products.pipe';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProdottoComponent,
    ProdottiComponent,
    CarrelloComponent,
    HomeComponent,
    FilterProductsPipe,
    LoginComponent,
    CheckOutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
