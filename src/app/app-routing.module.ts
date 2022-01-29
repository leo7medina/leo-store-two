import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CategoryComponent} from "./pages/category/category.component";
import {LoginComponent} from "./pages/login/login.component";
import {MycartComponent} from "./pages/mycart/mycart.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {RegisterComponent} from "./pages/register/register.component";
import {RecoveryComponent} from "./pages/recovery/recovery.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'category/:id', component: CategoryComponent},
  { path: 'login', component: LoginComponent},
  { path: 'my-cart', component: MycartComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'recovery', component: RecoveryComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
