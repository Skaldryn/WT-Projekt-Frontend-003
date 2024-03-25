
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {ListComponent} from './list/list.component';
import {ProfileComponent} from './profile/profile.component';
import {MakeprofileComponent} from "./makeprofile/makeprofile.component";

export const routes: Routes = [

  { path: "home", component: HomeComponent},
  //{ path: "list", component: ListComponent},
  { path: "plant", component: ListComponent},
  //{ path: "profile", component: ProfileComponent},
  { path: "plant/:id", component: ProfileComponent},
  { path: "makeprofile", component: MakeprofileComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
