import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../shared/email.service';
import { IEmailJsParams } from '../models/email';
import { LanguageCode } from '../models/enums';
import { TranslateService } from '../shared/translate.service';
import { IContactsTranslations } from '../models/contacts';
import { SnackService } from '../shared/snack.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lemis-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactsStrings: IContactsTranslations;
  working = false;

  contactFormGroup = new FormGroup({
    nameFormControl: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    messageFormControl: new FormControl('', [Validators.required, Validators.minLength(15), Validators.maxLength(500)])
  });

  public get currentLanguage(): LanguageCode {
    return this.translateService.appLanguage;
  }

  public get nameFormControl(): FormControl {
    return <FormControl>this.contactFormGroup.controls.nameFormControl;
  }

  public get emailFormControl(): FormControl {
    return <FormControl>this.contactFormGroup.controls.emailFormControl;
  }

  public get messageFormControl(): FormControl {
    return <FormControl>this.contactFormGroup.controls.messageFormControl;
  }

  constructor(private emailService: EmailService, private translateService: TranslateService,
    private snackService: SnackService, private route: ActivatedRoute) { }

  ngOnInit() {
    const errorSnackStrings = [
      'Algo correu mal e parte da página não carregou. Por favor tente novamente.',
      'Une erreur s\'est produite et une partie de la page n\'a pas été chargée. Veuillez réessayer.',
      'Something went wrong and part of the page did not load. Please try again.'
    ];

    this.translateService.getContactsStrings().subscribe(
      data => this.contactsStrings = data,
      error => this.snackService.showSnackBar(errorSnackStrings[this.currentLanguage], this.translateService.translatedOk, 0)

    );
  }

  public onSubmitContactForm(): void {
    if (!this.contactFormGroup.valid) { return; }
    else {
      const params: IEmailJsParams = {
        visitorName: this.nameFormControl.value,
        visitorEmail: this.emailFormControl.value,
        visitorMsg: this.messageFormControl.value
      };

      this.working = true;
      const email = this.emailService.getEmailObject(params);
      this.emailService.sendContactEmail(email).subscribe(
        response => this.handleFormSentSuccess(response),
        error => this.handleFormSentError(error)
      );
    }
  }

  private handleFormSentSuccess(response: any): void {
    if (response !== 200) {
      this.handleFormSentError(response);
      return;
    }

    this.working = false;
    this.snackService.showSnackBar(this.contactsStrings.snackResponses[0][this.currentLanguage], this.translateService.translatedOk, 3000);
  }

  private handleFormSentError(response: any): void {
    if (response === 200) {
      this.handleFormSentSuccess(response);
      return;
    }

    this.working = false;
    this.snackService.showSnackBar(this.contactsStrings.snackResponses[1][this.currentLanguage], this.translateService.translatedOk, 0);
  }

}
