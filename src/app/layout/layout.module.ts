import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './components/main/main.component';
import { MatMenuModule, MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports : [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [LayoutComponent, SidebarComponent, MainComponent]
})
export class LayoutModule { }
