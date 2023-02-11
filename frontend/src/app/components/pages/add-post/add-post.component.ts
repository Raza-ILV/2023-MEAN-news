import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {  
  ngOnInit(): void {}
  title:string
  image:string
  article:string
  description:string
  post:Post
  constructor(private router: Router, private postService: PostService){}

  
  clearImage(){
    this.image = ""
  }
  addPost(){
    this.post = {
      title: this.title,
      image: this.image,
      article: this.article,
      description: this.article.slice(0, 200) + "..."
    }
    this.postService.createPost(this.post).subscribe({
      next: (data:any) => {
        console.log(data)
        this.router.navigate(["/news"])
      },
      error: (err) => {console.log(err)}
    })
  }
}
