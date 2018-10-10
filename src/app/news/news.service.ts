import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewsCollection, INewsItem } from '../models/news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {
    private _newsApiUrl = '/api/news.json';

   public getNewsItems(): Observable<INewsCollection> {
        return this.http.get<INewsCollection>(this._newsApiUrl);
    }

    constructor(private http: HttpClient) { }
}
