import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '../shared/translate.service';
import { LanguageCode } from '../models/enums';
import { INavTranslation } from '../models/translation';
import { Router } from '@angular/router';

@Component({
  selector: 'lemis-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private _isHome: boolean;
  navTranslation: INavTranslation[] = [];

  public get currentLanguage(): LanguageCode {
    return this.translateService.appLanguage;
  }

  public get isHome(): boolean {
    this._isHome = (this.router.url === '/' || this.router.url === '/home');
    return this._isHome;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
  );

  ngOnInit(): void {
    this.translateService.getNavStrings().subscribe(
      value => {
        this.navTranslation = value.navTranslations;
      }
    );
  }

  changeLanguage(language: LanguageCode): void {
    this.translateService.appLanguage = language;
  }

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private translateService: TranslateService) {}

  }
