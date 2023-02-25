import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  postData:any
  constructor(private postService: PostService, private ar: ActivatedRoute){}
  ngOnInit(){
    this.postData = this.postService
      .readPost(this.ar.snapshot.params["id"])
      .subscribe({
        next: (data:any) => {this.postData = data.data[0]},
        error: (err) => {console.log(err)}
      })
  }
}
