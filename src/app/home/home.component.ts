import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public matgrid=[
    {id:1,name:"",cols:1,rows:1, img:"assets/img-1.jpg",view:'2.1M',week:'2week',h3:"Lorem ipsum, or ",p:"The passage "},
    {id:2,name:"",cols:1,rows:1, img:"assets/img-2.jpg",view:'2.2M',week:'3week',h3:'used in laying out',p:"a surge in popularity "},
    {id:3,name:"",cols:1,rows:1, img:"assets/img-3.jpg",view:'2.3M',week:'4week',h3:'graphic or web designs',p:"during the 1960s"},
    {id:4,name:"",cols:1,rows:1, img:"assets/img-4.jpg",view:'2.1M',week:'5week',h3:'attributed to an',p:"when Letraset used it "},
    {id:5,name:"",cols:1,rows:1, img:"assets/img-5.jpg",view:'2.4M',week:'6week',h3:'t Malorum for use in a',p:"on their dry-transfer sheets"},
    {id:6,name:"",cols:1,rows:1, img:"assets/img-6.jpg",view:'2.5M',week:'7week',h3:'The purpose of lorem',p:" and again during the 90s"},
    {id:7,name:"",cols:1,rows:1, img:"assets/img-7.jpg",view:'2.6M',week:'7week',h3:'of text (sentence',p:"as desktop publishers bundled"},
    {id:8,name:"",cols:1,rows:1, img:"assets/img-8.jpg",view:'2.7M',week:'9week',h3:'et Malorum for use in a',p:"the text with  "},
    {id:1,name:"",cols:1,rows:1, img:"assets/img-1.jpg",view:'2.8M',week:'2week',h3:'Lorem ipsum, or',p:"The passage experienced"},
    {id:2,name:"",cols:1,rows:1, img:"assets/img-2.jpg",view:'2.1M',week:'3week',h3:'used in laying out',p:"a surge in popularity "},
    {id:3,name:"",cols:1,rows:1, img:"assets/img-3.jpg",view:'2.2M',week:'4week',h3:'graphic or web designs',p:"during the 1960s"},
    {id:4,name:"",cols:1,rows:1, img:"assets/img-4.jpg",view:'2.3M',week:'5week',h3:'attributed to an',p:"when Letraset used it "},
    {id:5,name:"",cols:1,rows:1, img:"assets/img-5.jpg",view:'2.4M',week:'6week',h3:'t Malorum for use in a',p:"on their dry-transfer sheets"},
    {id:6,name:"",cols:1,rows:1, img:"assets/img-6.jpg",view:'2.5M',week:'7week',h3:'The purpose of lorem',p:" and again during the 90s"},
    {id:7,name:"",cols:1,rows:1, img:"assets/img-7.jpg",view:'2.6M',week:'8week',h3:'of text (sentence',p:"as desktop publisher"},
    {id:8,name:"",cols:1,rows:1, img:"assets/img-8.jpg",view:'2.7M',week:'9week',h3:'et Malorum for use in a',p:"the text with"},
  ]
  public chips=[
    {id:1,name:"All"},
    {id:2,name:"Mixes"},
    {id:3,name:"Live"},
    {id:4,name:"Comedies"},
    // {id:5,name:"T-series"},
    // {id:6,name:"Natok"},
    // {id:7,name:"Webseries"},
    // {id:8,name:"Flim"},
    // {id:9,name:"Addition"},
    // {id:10,name:"Game shows"},
    // {id:1,name:"All"},
    // {id:2,name:"Mixes"},
    // {id:3,name:"Live"},
    // {id:4,name:"Comedies"},
    // {id:1,name:"All"},
    // {id:2,name:"Mixes"},
    // {id:3,name:"Live"},
    // {id:4,name:"Comedies"},
  ]
}
