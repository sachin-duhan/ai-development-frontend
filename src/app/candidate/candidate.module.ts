import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateComponent } from './candidate.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [CandidateComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    PdfViewerModule,
    FormsModule
  ]
})
export class CandidateModule { }
