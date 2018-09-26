import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '../shared/translate.service';
import { LanguageCode } from '../models/enums';
import { INavTranslation } from '../models/translation';

@Component({
  selector: 'lemis-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navTranslation: INavTranslation[] = [];

  public get currentLanguage(): LanguageCode {
    return this.translateService.appLanguage;
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


  constructor(private breakpointObserver: BreakpointObserver, private translateService: TranslateService) {}

  }
