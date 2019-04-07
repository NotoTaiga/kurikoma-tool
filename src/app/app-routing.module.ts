import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectComponent } from './component/select/select.component';
import { ShowComponent } from './component/show/show.component';
 
const routes: Routes = [
  { path: "", redirectTo: "/SelectComponent", pathMatch: "full" },
  { path: "SelectComponent", component: SelectComponent },
  { path: "ShowComponent", component: ShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
