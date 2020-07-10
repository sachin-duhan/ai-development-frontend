import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsIntefaceRoutingModule } from './questions-inteface-routing.module';
import { QuestionsIntefaceComponent } from './questions-inteface.component';


@NgModule({
  declarations: [QuestionsIntefaceComponent],
  imports: [
    CommonModule,
    QuestionsIntefaceRoutingModule
  ]
})
export class QuestionsIntefaceModule { }
