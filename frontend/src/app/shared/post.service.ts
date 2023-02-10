import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from "../post"
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private baseUri: string = "http://localhost:8080"
  private headers = new HttpHeaders().set("Content-Type", "application/json")
  constructor(private http: HttpClient) { }

  createPost(post: Post){
    return this.http.post(this.baseUri + "/add-post", post, {headers: this.headers})
  }
  readNews(){
    return this.http.get(this.baseUri + "/news", {headers: this.headers})
  }
  readPost(id:string){
    return this.http.get(this.baseUri + "/news/" + id, {headers: this.headers})
  }
}
