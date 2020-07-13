import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProgramManagerRoutingModule } from './program-manager-routing.module';
import { ProgramManagerComponent } from './program-manager.component';


@NgModule({
  declarations: [ProgramManagerComponent],
  imports: [
    CommonModule,
    ProgramManagerRoutingModule,
    FormsModule,
  ]
})
export class ProgramManagerModule { }
