import { Component, OnInit } from '@angular/core';
//import { EditService } from '../blog/services/edit.service';
import { Router, NavigationExtras } from '@angular/router';
import { Post } from 'src/app/dto/post';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: []
})
export class ViewBlogComponent implements OnInit {
allViewPost:Post[];
image:boolean=false;
  constructor(public editService: BlogService) { }
  ngOnInit(): void {
   this.editService.getAllViewPost().subscribe(view=>{
      this.allViewPost=view;
    })

  }

}
