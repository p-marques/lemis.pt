import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { HomeService } from './home.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lemis-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isWorking = true;
  homeImages: string[] = [];
  imageIndex = 0;

  constructor(private homeService: HomeService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Lemis Ibérica - Home');

    for (let index = 1; index <= 8; index++) {
      const element = '/assets/images/lemis_home_' + index + '.jpg';

      this.homeService.getImage(element).subscribe(data => {
        this.homeImages.push(window.URL.createObjectURL(data));
        if (this.isWorking) { this.isWorking = false; }
      });
    }

    const time = timer(5000, 5000);
    const imageSub = time.subscribe(() => {
      if (this.imageIndex < 7) {
        this.imageIndex++;
      }
      else {
        this.imageIndex = 0;
      }
    });

  }
}
