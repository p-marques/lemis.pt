import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lemis-news-item-delta',
  templateUrl: './news-item-delta.component.html',
  styleUrls: ['./news-items.css']
})
export class NewsItemDeltaComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Lemis Ibérica - Notícias - Nova Cadeira de Aluno Delta');
  }

}
