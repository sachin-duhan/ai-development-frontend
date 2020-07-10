import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramManagerComponent } from './program-manager.component';

const routes: Routes = [{ path: '', component: ProgramManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramManagerRoutingModule { }
