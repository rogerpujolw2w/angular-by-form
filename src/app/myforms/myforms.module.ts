import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyformsRoutingModule } from './myforms-routing.module';
import { Form01componentComponent } from './form01component/form01component.component';
import { Form02componentComponent } from './form02component/form02component.component';
import { Form03componentComponent } from './form03component/form03component.component';
import { Form04componentComponent } from './form04component/form04component.component';

@NgModule({
  declarations: [Form01componentComponent, Form02componentComponent, Form03componentComponent, Form04componentComponent],
  imports: [
    CommonModule,
    FormsModule,
    MyformsRoutingModule
  ],
  exports: [Form01componentComponent, Form02componentComponent, Form03componentComponent, Form04componentComponent]
})
export class MyformsModule { }
