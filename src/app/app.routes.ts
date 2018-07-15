import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'app', loadChildren: './layout/layout.module#LayoutModule'}
];
