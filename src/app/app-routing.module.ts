import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './commons/home/home.component';
import { NotfoundComponent } from './commons/notfound/notfound.component';

const routes: Routes = [
  {path:'', redirectTo: 'home' , pathMatch : 'full'},
  {path:'home', component: HomeComponent},
  {path:'myforms', loadChildren: () => import('./myforms/myforms.module').then(mod => mod.MyformsModule)},
  {path:'**', component: NotfoundComponent}
]; // Array de rutas

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
