import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {Task1Component} from './task1.component';
import {CommonModule} from '@angular/common';

export const routes = [
  {path: '', component:Task1Component, pathMatch: 'full'},
];

@NgModule({
  declarations: [
    Task1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Task1Module {
  static routes = routes;
}
