import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    HomeComponent,
    NavMenuComponent,
    TruncatePipe
  ]
})
export class SharedModule { }
