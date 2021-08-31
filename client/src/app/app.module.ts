
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { DividersListComponent } from './dividers-list/dividers-list.component';
import { DividerService } from './services/divider.service';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import { SettInIsraelComponent } from './sett-in-israel/sett-in-israel.component';
import { SettInIsraelListService } from './services/sett-in-israel-list.service';
import { UpdateDividerComponent } from './update-divider/update-divider.component';
import {DialogModule} from 'primeng/dialog';
import { CalenderComponent } from './calender/calender.component';
import {CalendarModule} from 'primeng/calendar';
import { DistributionListComponent } from './distribution-list/distribution-list.component';
import {GMapModule} from 'primeng/gmap';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AddressListComponent } from './address-list/address-list.component';
import { TableModule } from 'primeng/table';
import {ListboxModule} from 'primeng/listbox';
import {AvatarModule} from 'primeng/avatar';
import {CardModule} from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import {SidebarModule} from 'primeng/sidebar';
import {EditorModule} from 'primeng/editor';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import { ChartModule } from 'primeng/chart';
import {BadgeModule} from 'primeng/badge';



import {ButtonModule} from 'primeng/button';

import { MapModule, MapAPILoader, BingMapAPILoaderConfig, BingMapAPILoader, WindowRef, DocumentRef } from "angular-maps";
import { BingMapComponent } from './map-control/bing-map.component';
import { DivPageComponent } from './div-page/div-page.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LoggedInterceptorService } from './services/logged-interceptor.service';
import { MessageComponent } from './message/message.component';
import { AuthGuardService } from './services/auth-guard.service';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DividersListComponent,
    SettInIsraelComponent,
    SettInIsraelComponent,
    UpdateDividerComponent,
    CalenderComponent,
    DistributionListComponent,
    AddressListComponent,
    BingMapComponent,
    DivPageComponent,
    ViewBlogComponent,
    StatisticsComponent,
    MessageComponent],
  imports: [
    BrowserModule,
    BadgeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataViewModule,
    DropdownModule,
    DialogModule,
    CalendarModule,
    GMapModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ListboxModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    ChipModule,
    ChartModule,
    SidebarModule,
    EditorModule,
    ScrollPanelModule,
    MapModule.forRootBing()
  ],
  providers: [LoginService,DividerService,SettInIsraelListService, AuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass:LoggedInterceptorService, multi:true },
    {
      provide: MapAPILoader, deps: [], useFactory: MapServiceProviderFactory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function MapServiceProviderFactory() {
  let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
  bc.apiKey = "ApwMt2Mi8PPu1XpTXHMDw2kN9kJ1PgepsDmLKmoE47XskWgtsSWgfP4X8UiqPM4x"; // your bing map key
  bc.branch = "experimental";

  return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
}
