import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewsCollection, INewsItem } from '../models/news';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private _newsApiUrl = 'api/news.json';

    private _currentNewsItem: INewsItem;
    public get currentNewsItem(): INewsItem {
        return this._currentNewsItem;
    }
    public set currentNewsItem(v: INewsItem) {
        this._currentNewsItem = v;
    }

    public getNewsItems(): Observable<INewsCollection> {
        return this.http.get<INewsCollection>(this._newsApiUrl);
    }

    public getNewsItem(id: number): Observable<INewsItem | undefined> {
        return this.getNewsItems().pipe(
            map((news: INewsCollection) => news.newsItems.find(x => x.id === id))
          );
    }

    constructor(private http: HttpClient) { }
}
