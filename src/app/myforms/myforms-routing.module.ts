import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01componentComponent } from './form01component/form01component.component';
import { Form02componentComponent } from './form02component/form02component.component';

const routes: Routes = [
  {path: 'form01', component: Form01componentComponent},
  {path: 'form02', component: Form02componentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyformsRoutingModule { }
