import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { CheckOutComponent } from './check-out/check-out.component';

const routes: Routes = [
  {path:"", component: HomeComponent },
  {path:"prodotti", component: ProdottiComponent },
  {path:"prodotti/:name", component: ProdottoComponent },
  {path:"carrello", component: CarrelloComponent,canActivate: [AuthGuardService] },
  {path:"checkout", component: CheckOutComponent,canActivate: [AuthGuardService] },
  {path:"login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

