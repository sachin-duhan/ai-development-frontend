import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsIntefaceComponent } from './questions-inteface.component';

const routes: Routes = [{ path: '', component: QuestionsIntefaceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsIntefaceRoutingModule { }
