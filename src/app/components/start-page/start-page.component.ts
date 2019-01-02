import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  /** Songs to play */
  song = new Audio();

  constructor() { }

  ngOnInit() {
    this.song.src = 'assets/audio/echoesOfTime.mp3';
    this.song.loop = true;
    this.song.load();
    this.song.play();
  }

}
