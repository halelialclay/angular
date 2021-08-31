import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressListComponent } from './address-list/address-list.component';
import { DivPageComponent } from './div-page/div-page.component';
import { DividersListComponent } from './dividers-list/dividers-list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SettInIsraelComponent } from './sett-in-israel/sett-in-israel.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {path:'dividers',component:DividersListComponent, canActivate:[AuthGuardService], data:{role:'manager'}},
  {path:'settInIsrael',component:SettInIsraelComponent,canActivate:[AuthGuardService], data:{role:'manager'}},
{path:'addressList',component:AddressListComponent,canActivate:[AuthGuardService], data:{role:'manager'}},
{path:'divPage',component:DivPageComponent,canActivate:[AuthGuardService], data:{role:'divider'}},
{ path: 'blog', loadChildren: () => import('./blog/edit.module').then(m => m.EditModule) },
{path: 'viewblog', component:ViewBlogComponent},
{path: 'statistics', component:StatisticsComponent,canActivate:[AuthGuardService], data:{role:'manager'}},
{path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
