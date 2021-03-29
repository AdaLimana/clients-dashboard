import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes } from '@angular/router';

import { 
  MatButtonModule, 
  MatCardModule, 
  MatIconModule, 
  MatTooltipModule 
} from '@angular/material';

import { ClientComponent } from './client.component';
import { ClientService } from 'src/app/services/client.service';
import { FlexLayoutModule } from '@angular/flex-layout';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule,

  ],
  providers: [ClientService]
})
export class ClientModule {}
