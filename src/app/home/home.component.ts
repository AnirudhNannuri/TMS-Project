import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentImg;
  constructor() { }

  ngOnInit(): void {
    this.changeBG();
  }


  images = ['bg-img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

  delay() {
    return new Promise(resolve => {
      setTimeout(resolve, 1700);
    });
  }
  async changeBG(){
    while(true)
    {
      for(var bg in this.images)
      {
        this.currentImg= this.images[bg];
        await this.delay();
      }
    }
  }

}
