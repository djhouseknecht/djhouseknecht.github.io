import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SawComponent } from './saw.component';

const routes: Routes = [{ path: '', component: SawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SawRoutingModule { }
