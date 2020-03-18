import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from '../shared/shared.module';


import { LayoutComponent } from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
