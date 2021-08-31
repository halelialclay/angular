import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from '../../dto/post';

@Injectable()
export class EditService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: HttpClient) { }

  getAllPosts() {
    let url: string = "api/blog/all";

    return this.http.get(url)
      .toPromise()
      .then(
        r => this.checkLogin(r)
      )
      .catch(this.handleError);
  }

  getPost(postId:string) {
    let url: string = `api/blog?_id=${postId}`;

    return this.http.get(url)
      .toPromise()
      .then(
        r => this.checkLogin(r)
      )
      .catch(this.handleError);
  }

  updatePost(post: Post) {
    let url: string = `api/blog?_id=${post._id}`;

    return this.http.put<boolean>(url, post)
      .toPromise()  .then( r => this.checkLogin(r)
      )
      .catch(this.handleError);
  }

  createNewPost(title: string,date:string,userId:string,userName:string) {
    let url: string = `api/blog`;

    return this.http.post(url, { "title": title , "date":date,"userId":userId ,"userName":userName})
      .toPromise()
      .then(
        r => this.checkLogin(r)
      )
      .catch(this.handleError);
  }

  checkLogin(res: any) {
    /*
    if (res.login && res.login == 0) {
      this.authService.logout();
      this.router.navigate(['/edit/login']);
    }
    else*/
    return res;
  }


  handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }


 
}
