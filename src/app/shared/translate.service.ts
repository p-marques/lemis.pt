import { Injectable } from '@angular/core';
import { LanguageCode } from '../models/enums';
import { HttpClient } from '@angular/common/http';
import { INavTranslations } from '../models/translation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private _appLanguage: LanguageCode = LanguageCode.POR;
  public get appLanguage(): LanguageCode {
    return this._appLanguage;
  }
  public set appLanguage(v: LanguageCode) {
    this._appLanguage = v;
  }

  // Methods
  public getNavStrings(): Observable<INavTranslations> {
    return this.http.get<INavTranslations>('api/navText.json');
  }

  constructor(private http: HttpClient) { }
}
