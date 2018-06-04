import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './components/main/main.component';
import { MatMenuModule, MatButtonModule, MatToolbarModule,
  MatIconModule, MatCardModule, MatSidenavModule, MatButtonToggleModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
  ],
  exports : [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonToggleModule,
  ],
  declarations: [LayoutComponent, SidebarComponent, MainComponent],
  entryComponents: [SidebarComponent, MainComponent],
  bootstrap: [SidebarComponent, MainComponent],
  providers: []
})
export class LayoutModule { }
