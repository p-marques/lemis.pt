import { Injectable } from '@angular/core';
import { LanguageCode } from '../models/enums';
import { HttpClient } from '@angular/common/http';
import { INavTranslations } from '../models/translation';
import { Observable } from 'rxjs';
import { ICompanyText } from '../models/company';
import { IContactsTranslations } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private _appLanguage: LanguageCode;
  public get appLanguage(): LanguageCode {
    this._appLanguage = +localStorage.getItem('lemis-app-language');
    return this._appLanguage || LanguageCode.POR;
  }
  public set appLanguage(v: LanguageCode) {
    localStorage.setItem('lemis-app-language', v.toString());
    this._appLanguage = v;
  }

  public get translatedOk(): string {
    return ['OK', 'D\'accord', 'OK'][this.appLanguage];
  }

  // Methods
  public getNavStrings(): Observable<INavTranslations> {
    return this.http.get<INavTranslations>('/api/navText.json');
  }

  public getCompanyString(): Observable<ICompanyText> {
    return this.http.get<ICompanyText>('/api/company.json');
  }

  public getContactsStrings(): Observable<IContactsTranslations> {
    return this.http.get<IContactsTranslations>('/api/contacts.json');
  }

  constructor(private http: HttpClient) { }
}
