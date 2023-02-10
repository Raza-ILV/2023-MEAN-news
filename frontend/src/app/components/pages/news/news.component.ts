import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { Post } from 'src/app/post';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  news:any
  constructor(private postServce: PostService){}
  ngOnInit() {
    this.readNews()
  }
  readNews(){
    this.postServce.readNews().subscribe({
      next: (data:any) => {
         this.news = data["data"]
         console.log(this.news)
      },
      error: (err) => {console.log(err)}
    })
  }
}
