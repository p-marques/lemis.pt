import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lemis-news-item-museu-valegre',
  templateUrl: './news-item-museu-valegre.component.html',
  styleUrls: ['./news-items.css']
})
export class NewsItemMuseuVAlegreComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Lemis Ibérica - Notícias - Mobiliário Lemis no Museu da Vista Alegre');
  }

}
