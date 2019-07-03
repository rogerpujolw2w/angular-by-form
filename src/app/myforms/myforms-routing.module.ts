import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01componentComponent } from './form01component/form01component.component';

const routes: Routes = [
  {path: 'form01', component: Form01componentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyformsRoutingModule { }
