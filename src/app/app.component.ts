import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav:any = MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  public sidenavitems1=[
    {id:1,name:"Home",icon:'home'},
    {id:2,name:"Explore",icon:'explore'},
    {id:3,name:"Subscriptions",icon:'subscriptions'},
  ]
  public sidenavitems2=[
    {id:1,name:"Libary",icon:'video_library'},
    {id:2,name:"History",icon:'history'},
    {id:3,name:"Watch Later",icon:'video_library'},
    {id:4,name:"Liked Videos",icon:'thumb_up'},
  ]
  public sidenavitems3=[
    {id:1,name:"Youtube Premium",icon:'smart_display'},
    {id:2,name:"Flims",icon:'movie'},
    {id:3,name:"Gaming",icon:'sports_esports'},
    {id:4,name:"Live",icon:'stream'},
    {id:5,name:"Fashion and Beauty",icon:'style'},
    {id:6,name:"Learning",icon:'lightbulb'},
    {id:7,name:"sport",icon:'emoji_events'},
  ]
  public sidenavitems4=[
    {id:1,name:"Settings",icon:'settings'},
    {id:2,name:"Report History",icon:'flag'},
    {id:3,name:"Help",icon:'help_outline'},
    {id:4,name:"Send Feedback",icon:'reviews'},
  ]
  public create=[
    {id:1,name:"Upload video",icon:"slideshow"},
    {id:2,name:"Go live",icon:"live_tv"},
  ]
  public youtubeapps=[
    {id:1,name:"Youtube Tv",icon:"ondemand_video"},
    {id:2,name:"Youtube Music",icon:"audiotrack"},
    {id:3,name:"Youtube Kids",icon:"smart_display"},
    {id:4,name:"Creator Academy",icon:"personal_video"},
    {id:5,name:"Youtube for Artists",icon:"personal_video"},
  ]
  public signin1=[
    {id:1,name:"Create a Channel",icon:"account_box"},
    {id:2,name:"Purchases and Memberships",icon:"monetization_on"},
    {id:3,name:"Youtube Studio",icon:"video_settings"},
    {id:4,name:"Switch Account",icon:"switch_account"},
    {id:5,name:"Sign Out",icon:"logout"},
    
  ]
  public signin2=[
    {id:1,name:"Apperence",icon:"mode_night"},
    {id:2,name:"Language",icon:"translate"},
    {id:3,name:"Location",icon:"public"},
    {id:4,name:"Settings",icon:"settings"},
    {id:5,name:"Your data in Youtube",icon:"data_usage"},
    {id:6,name:"Help",icon:"help_outline"},
    {id:7,name:"Send Feedback",icon:"feedback"},
    {id:8,name:"Keyboard Shortcuts",icon:"keyboard"},

  ]
  public sides=[
    {id:1,name:"Home",icon:"home"},
    {id:2,name:"Explore",icon:"explore"},
    {id:3,name:"Subscriptions",icon:"subscriptions"},
    {id:4,name:"Library",icon:"video_library"},
    {id:5,name:"History",icon:"history"},
    
  ]
  

}



