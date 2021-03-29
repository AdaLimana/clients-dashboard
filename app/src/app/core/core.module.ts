import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatCardModule, 
  MatIconModule 
} from "@angular/material";
import { FlexLayoutModule } from '@angular/flex-layout';

import { OverviewBoxComponent } from './overview-box/overview-box.component';

@NgModule({
  declarations: [
    OverviewBoxComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    OverviewBoxComponent
  ]
})
export class CoreModule { }
