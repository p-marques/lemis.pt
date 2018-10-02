import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../shared/translate.service';
import { ICompanyText } from '../models/company';
import { LanguageCode } from '../models/enums';

@Component({
  selector: 'lemis-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyText: ICompanyText;
  public get currentLng(): LanguageCode {
    return this.translateService.appLanguage;
  }

  public get companyTabHeader(): string {
    let v: string;
    switch (this.currentLng) {
      case LanguageCode.FR:
        v = 'Entreprise';
        break;
      case LanguageCode.EN:
        v = 'Company';
        break;
      default:
        v = 'Empresa';
        break;
    }
    return v;
  }

  public get historyTabHeader(): string {
    let v: string;
    switch (this.currentLng) {
      case LanguageCode.FR:
        v = 'Histoire';
        break;
      case LanguageCode.EN:
        v = 'History';
        break;
      default:
        v = 'História';
        break;
    }
    return v;
  }

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.getCompanyString().subscribe(
      data => this.companyText = data
    );
  }

  public goToContent(): void {
    const el = document.getElementById('lemis');
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

}
