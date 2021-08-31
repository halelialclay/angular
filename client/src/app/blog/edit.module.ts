import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
//import { CKEditorModule } from 'ngx-ckeditor';
//import { AngularEditorModule } from '@kolkov/angular-editor';

//import { CoreModule } from '../core/core.module';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { MainComponent } from './main.component';
import { AuthService } from './services/auth.service';
import { EditService } from './services/edit.service';
import { PostEditComponent } from './post-edit.component';
import { UploadComponent } from './upload.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, EditRoutingModule, HttpClientModule, CKEditorModule,
    //CalendarModule, CardModule, DialogModule, DropdownModule, FileUploadModule, TableModule,
    //TabViewModule, GrowlModule, CoreModule, OverlayPanelModule, SelectButtonModule, ToastModule,
    //ConfirmDialogModule, MultiSelectModule, DragDropModule, AutoCompleteModule, AccordionModule
  ],
  declarations: [
    EditComponent, MainComponent, PostEditComponent, UploadComponent
    //LoginComponent, DetailsComponent, RecoverComponent, PasswordComponent, MainComponent,
    //HeaderComponent, TopButtonsComponent, SiteComponent, EditorComponent, HasaotComponent, ListComponent, HasaotListComponent,
    //MuzmanimComponent, ListsComponent, MuzmanimListComponent, HazmanaComponent, /*SendHazmanaComponent,*/
    //MesimotComponent, TafkidimComponent, HotzaotComponent, TablesComponent, Draggable
  ],
  providers: [AuthService, EditService]//[AuthService, AuthGuard, DetailsService, HazmanaService, MuzmanimService, ReshimotService, TablesService, HasaotService, SharedService, MessageService, ConfirmationService, CookieService]

})
export class EditModule { }
