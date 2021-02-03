import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CineDetalleComponent } from './cine-detalle/cine-detalle.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'search',  component: CineDetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
