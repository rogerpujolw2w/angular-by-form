import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyformsRoutingModule } from './myforms-routing.module';
import { Form01componentComponent } from './form01component/form01component.component';
import { Form02componentComponent } from './form02component/form02component.component';

@NgModule({
  declarations: [Form01componentComponent, Form02componentComponent],
  imports: [
    CommonModule,
    MyformsRoutingModule
  ],
  exports: [Form01componentComponent, Form02componentComponent]
})
export class MyformsModule { }
