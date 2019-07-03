import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyformsRoutingModule } from './myforms-routing.module';
import { Form01componentComponent } from './form01component/form01component.component';

@NgModule({
  declarations: [Form01componentComponent],
  imports: [
    CommonModule,
    MyformsRoutingModule
  ],
  exports: [Form01componentComponent]
})
export class MyformsModule { }
