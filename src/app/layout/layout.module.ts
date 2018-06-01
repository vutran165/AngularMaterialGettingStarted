import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { HeaderComponent } from '../layout/components/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule { }
