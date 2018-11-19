import { Component, OnInit } from '@angular/core';
import { INewsItem } from '../models/news';
import { NewsService } from './news.service';
import { LanguageCode } from '../models/enums';
import { TranslateService } from '../shared/translate.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lemis-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsItems: INewsItem[] = [];

  public get currentLanguage(): LanguageCode {
    return this.translateService.appLanguage;
  }

  constructor(private translateService: TranslateService, private newsService: NewsService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Lemis Ibérica - Notícias');

    this.newsService.getNewsItems().subscribe(
      data => this.newsItems = data.newsItems
    );
  }

}
