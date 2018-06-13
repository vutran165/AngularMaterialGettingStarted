import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutComponent } from '../layout/layout.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';



import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './components/main/main.component';
import { MatMenuModule, MatButtonModule, MatToolbarModule,
  MatIconModule, MatCardModule, MatSidenavModule, MatButtonToggleModule, MatTree, MatTreeModule } from '@angular/material';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    LayoutRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTreeModule,

  ],
  exports : [
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatTreeModule
  ],
  declarations: [LayoutComponent, SidebarComponent, MainComponent],
  entryComponents: [SidebarComponent, MainComponent],
  bootstrap: [SidebarComponent, MainComponent],
  providers: []
})
export class LayoutModule { }
