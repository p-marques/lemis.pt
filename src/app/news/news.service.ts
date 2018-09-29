import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewsCollection } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public getNewsItems(): Observable<INewsCollection> {
    return this.http.get<INewsCollection>('api/news.json');
  }

  constructor(private http: HttpClient) { }
}
