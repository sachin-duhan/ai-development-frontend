import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationComponent } from './evaluation.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [EvaluationComponent],
    imports: [
        CommonModule, ChartsModule,
        EvaluationRoutingModule,
        FormsModule,
    ]
})
export class EvaluationModule { }
