import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResultsComponent } from './pages/results/results.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'resultados', pathMatch: 'full' },
  {path:'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path:'resultados', component: ResultsComponent, canActivate:[AuthGuard]},
  // {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
