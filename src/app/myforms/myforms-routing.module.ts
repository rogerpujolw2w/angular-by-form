import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01componentComponent } from './form01component/form01component.component';
import { Form02componentComponent } from './form02component/form02component.component';
import { Form03componentComponent } from './form03component/form03component.component';
import { Form04componentComponent } from './form04component/form04component.component';

const routes: Routes = [
  {path: 'form01', component: Form01componentComponent},
  {path: 'form02', component: Form02componentComponent},
  {path: 'form03', component: Form03componentComponent},
  {path: 'form04', component: Form04componentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyformsRoutingModule { }
