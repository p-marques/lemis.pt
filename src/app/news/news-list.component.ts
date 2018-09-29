import { Component, OnInit } from '@angular/core';
import { INewsCollection, INewsItem } from '../models/news';
import { NewsService } from './news.service';
import { LanguageCode } from '../models/enums';
import { TranslateService } from '../shared/translate.service';

@Component({
  selector: 'lemis-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  newsItems: INewsItem[] = [];
  readMoreText: string[] = ['Ler Mais', 'Ler Mais FR', 'Ler Mais EN'];

  public get currentLanguage(): LanguageCode {
    return this.translateService.appLanguage;
  }

  constructor(private translateService: TranslateService, private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getNewsItems().subscribe(
      data => { this.newsItems = data.newsItems; console.log(data); }
    );
  }

}