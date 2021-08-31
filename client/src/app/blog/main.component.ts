import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { EditService } from './services/edit.service';
import { Post } from '../dto/post';
import { LoginService } from '../services/login.service';



@Component({
  templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit{
  posts: Post[];
date:string=this.getToday()
userId:string;
  constructor(public editService: EditService, private _router: Router, private login:LoginService) {
  }

  ngOnInit() {
    this.loadArticleList()
  }

  loadArticleList() {
    this.editService.getAllPosts()
      .then(c => this.posts = c);
  }

  addPost() {
    let title = prompt("כותרת הפוסט");

    if (title && title > "") {
      this.editService.createNewPost(title,this.date,this.login.loggedInUser._id,this.login.loggedInUser.firstName+" "+this.login.loggedInUser.lastName)
        .then(c=> this.posts = c)
    }
  }
  getToday(){
    let d = new Date()
    return `${d.getFullYear()}-${this.getDateParam(d.getMonth()+1)}-${this.getDateParam(d.getDate())}`;
  }
  getDateParam(n:number):string{
    return (n<10)?'0' + n: n.toString();
  }
  update(post: Post) {
    this._router.navigate(["/blog/post"], { queryParams: { "_id": post._id } });
  }
}
