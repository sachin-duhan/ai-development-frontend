import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsIntefaceRoutingModule } from './questions-inteface-routing.module';
import { QuestionsIntefaceComponent } from './questions-inteface.component';
import { VideoRecorderComponent } from '../component/video-recorder/video-recorder.component';

@NgModule({
  declarations: [QuestionsIntefaceComponent, VideoRecorderComponent],
  imports: [
    CommonModule,
    QuestionsIntefaceRoutingModule,
  ]
})
export class QuestionsIntefaceModule { }
