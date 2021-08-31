import { Component, OnDestroy, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Post } from '../dto/post';
import { EditService } from './services/edit.service';
import { Subscription } from 'rxjs';

import '@ckeditor/ckeditor5-build-classic/build/translations/he';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//import { CKEditorComponent } from 'ngx-ckeditor';
//declare var CKEDITOR: any;


@Component({
  templateUrl: 'post-edit.component.html'
})
export class PostEditComponent implements OnDestroy{
  _id: string;

  post: Post;
  sub: Subscription;

  constructor(public editService: EditService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.params_subscribe();
  }

  public Editor = ClassicEditor;
  public config = {
    language: 'he',
    contentsLangDirection: 'rtl',
    height: 500

    /*toolbar: ["heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "|",
      "justifyLeft", "justifyRight", "justifyCenter",
      "|", "indent", "outdent", "|", "imageUpload", "blockQuote", "insertTable", "mediaEmbed", "undo", "redo"]
    */
  };

  params_subscribe() {
    this.sub = this.activatedRoute.queryParams.subscribe(params => {
      /*
      if (params['id'] == 0) {
        this.post = {
          postId: 0,
          content: "",
          publishDate: new Date(),
          published: false,
          title: "פוסט חדש"
        };
      }
      else {
      */
        this._id = params['_id'];
        this.loadPost(this._id);

     
    })
  }

  loadPost(_id: string) {
    this.editService.getPost(_id)
      .then(p =>{
        this.post = p});
  }

  updatePost() {
    this.editService.updatePost(this.post)
      .then(p => {
        if(p==true)
        this.router.navigate(["/blog"])
        

      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
