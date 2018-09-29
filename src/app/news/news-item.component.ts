import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { INewsItem } from '../models/news';
import { SnackService } from '../shared/snack.service';

@Component({
  selector: 'lemis-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  public get currentNewsItem(): INewsItem {
    return this.newsService.currentNewsItem;
  }

  constructor(private route: ActivatedRoute, private newsService: NewsService,
    private router: Router, private snackService: SnackService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (!param) {
      this.router.navigate(['/news']);
    }

    if (!this.newsService.currentNewsItem) {
      const id = +param;
      this.getNewsItem(id);
    }
  }

  getNewsItem(id: number): void {
    this.newsService.getNewsItem(id).subscribe(
      item => {
        if (!item) {
          this.snackService.showSnackBar('News item not found', 'OH NO!', 10000);
          this.router.navigate(['/news']);
        }
        this.newsService.currentNewsItem = item;
      }
    );
  }
}
