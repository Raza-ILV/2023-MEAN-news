import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnInit{
  constructor() { }
  darkTheme:boolean
  ngOnInit(){}
  themeInit(){
    localStorage.setItem("darkTheme", "true")
  }
  switchTheme(){
    let temp:any = localStorage.getItem("darkTheme")
    if(JSON.parse(temp)){
      localStorage.setItem("darkTheme", "false")
      location.reload()
    } else {
      localStorage.setItem("darkTheme", "true")
      location.reload()
    }
  }
  returnTheme(){
    let temp:any = localStorage.getItem("darkTheme")
    return JSON.parse(temp)
  }
}
