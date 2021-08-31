import { Injectable } from '@angular/core';
import { Post } from '../dto/post';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }


  getAllViewPost(){
    let url: string = "api/blog/allViewPost";
return this.http.get<Post[]>(url);
  }
}
