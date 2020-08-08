import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramManagerRoutingModule } from './program-manager-routing.module';
import { ProgramManagerComponent } from './program-manager.component';

@NgModule({
  declarations: [ProgramManagerComponent],
  imports: [
    CommonModule,
    ProgramManagerRoutingModule,
  ]
})
export class ProgramManagerModule { }
