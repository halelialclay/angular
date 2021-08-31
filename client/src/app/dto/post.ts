import { Data } from '@angular/router';

export class Post {
  _id: string;
  userId:string;
  writer:string;
  title: string;
  content: string;
  published: boolean;
  publishDate: string;
}