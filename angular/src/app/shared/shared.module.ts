import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    HomeComponent,
    NavMenuComponent
  ]
})
export class SharedModule { }
