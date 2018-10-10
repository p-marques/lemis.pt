import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lemis-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  videoUrl = '/assets/videos/welcome_video_high_quality.mp4';

  constructor() { }

  ngOnInit() {
  }

}
