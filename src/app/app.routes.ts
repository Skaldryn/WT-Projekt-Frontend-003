
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ListComponent} from './list/list.component';
import {ProfileComponent} from './profile/profile.component';
import {MakeprofileComponent} from "./makeprofile/makeprofile.component";
import {ReactiveFormsModule} from "@angular/forms";


export const routes: Routes = [

  { path: "", component: HomeComponent, pathMatch: 'full'},
  //{ path: "list", component: ListComponent},
  { path: "plant", component: ListComponent},
  //{ path: "profile", component: ProfileComponent},
  { path: "plant/:id", component: ProfileComponent},
  { path: "makeprofile", component: MakeprofileComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
