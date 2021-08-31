import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit.component';
import { MainComponent } from './main.component';
import { PostEditComponent } from './post-edit.component';
import { ViewBlogComponent } from '../view-blog/view-blog.component';

const editRoutes: Routes = [
  {
    
    path: '', component: EditComponent,
  
    children: [
      { path: '', redirectTo: 'main' },
      { path: 'main', component: MainComponent },
      { path: 'post', component: PostEditComponent },
      /*
      { path: 'login/:key', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'site', component: SiteComponent, canActivate: [AuthGuard] },
      { path: 'details', component: DetailsComponent, canActivate: [AuthGuard] },
      { path: 'muzmanim', component: MuzmanimComponent, canActivate: [AuthGuard] },
      { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
      { path: 'mesimot', component: MesimotComponent, canActivate: [AuthGuard] },
      { path: 'tafkidim', component: TafkidimComponent, canActivate: [AuthGuard] },
      { path: 'hotzaot', component: HotzaotComponent, canActivate: [AuthGuard] },
      { path: 'hasaot', component: HasaotComponent, canActivate: [AuthGuard] },
      { path: 'hazmana', component: HazmanaComponent, canActivate: [AuthGuard] },
      { path: 'tables', component: TablesComponent, canActivate: [AuthGuard] },
      { path: 'pages/:pageurl', component: PagesComponent },
      { path: '', redirectTo: 'main' }
      */
      /*
      {
          path: '',
          canActivateChild: [AuthGuard],
          children: [
              { path: 'details', component: DetailsComponent }
          ]
          */
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(editRoutes)


  ],
  exports: [
    RouterModule
  ]
})
export class EditRoutingModule { }
