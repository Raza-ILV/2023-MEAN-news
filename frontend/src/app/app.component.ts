import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private theme: ThemeService){}
  darkTheme:boolean
  ngOnInit() {
    let temp:any = localStorage.getItem("darkTheme")
    if(JSON.parse(temp) == null){
      this.theme.themeInit()
      this.darkTheme = true
    } else if(JSON.parse(temp)){
      this.darkTheme = true
    } else {
      this.darkTheme = false
    }
  }
}
