import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataService } from '../@service/data.service';

@NgModule({
    declarations: [CandidateComponent],
    imports: [
        CommonModule,
        CandidateRoutingModule,
        PdfViewerModule
    ],
    providers: [DataService]
})
export class CandidateModule { }
