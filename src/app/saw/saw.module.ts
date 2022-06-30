import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SawRoutingModule } from './saw-routing.module';
import { SawComponent } from './saw.component';


@NgModule({
  declarations: [SawComponent],
  imports: [
    CommonModule,
    SawRoutingModule
  ]
})
export class SawModule { }
