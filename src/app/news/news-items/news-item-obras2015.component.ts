import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lemis-news-item-obras2015',
  templateUrl: './news-item-obras2015.component.html',
  styleUrls: ['./news-items.css']
})
export class NewsItemObras2015Component implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Lemis Ibérica - Notícias - Principais Obras da Lemis em 2015');
  }

}
