import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { QuestionsIntefaceRoutingModule } from './questions-inteface-routing.module';
import { QuestionsIntefaceComponent } from './questions-inteface.component';
import { VideoRecorderComponent } from '../component/video-recorder/video-recorder.component';
import { VideoUploaderComponent } from '../component/video-uploader/video-uploader.component';

@NgModule({
    declarations: [QuestionsIntefaceComponent, VideoRecorderComponent, VideoUploaderComponent],
    imports: [
        CommonModule,
        FormsModule,
        QuestionsIntefaceRoutingModule,
    ]
})
export class QuestionsIntefaceModule { }
