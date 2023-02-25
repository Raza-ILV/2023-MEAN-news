import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/pages/add-post/add-post.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { NewsComponent } from './components/pages/news/news.component';
import { PostComponent } from './components/pages/post/post.component';

const routes: Routes = [
  {path: "", redirectTo: "news", pathMatch: 'full'},
  {path: "news", component: NewsComponent},
  {path: "add-post", component: AddPostComponent},
  {path: "news/:id", component: PostComponent},
  {path: "**", component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
