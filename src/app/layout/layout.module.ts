import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { ComponentComponent } from './component/component/component.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, ComponentComponent, SidebarComponent, HeaderComponent]
})
export class LayoutModule { }
