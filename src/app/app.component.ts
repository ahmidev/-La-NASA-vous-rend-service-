import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imgOfTheDay = '';
  constructor(public serviceNasa: NasaService){}

  ngOnInit(): void {
    this.serviceNasa.getImageOfTheDay().subscribe(data=>{
      this.imgOfTheDay = data.url
      
    })
  }
}
