import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';
import { CustomValidators } from 'ng2-validation';
import { AccordionConfig } from 'ngx-bootstrap';

@Component({
  selector: 'my-app',
  providers: [
    {
      provide: AccordionConfig,
      useFactory: () => {
        return Object.assign(new AccordionConfig(), {closeOthers: true});
      }
    }
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  user = {
    url: '',
    mail: '',
    mail_confirm: ''
  };

  show() {
    console.log('URL：' + this.user.url);
    console.log('メールアドレス：' + this.user.mail);
    console.log('メールアドレス（確認）：' + this.user.mail_confirm);
  }

  // constructor(private builder: FormBuilder) {}

  // url2 = new FormControl('',
  // [
  //   Validators.required,
  //   CustomValidators.url
  // ]);

  // mail2 = new FormControl('hoge@example.com', [
  //   Validators.required,
  //   Validators.email
  // ]);

  // mail_confirm2 = new FormControl('', [
  //   CustomValidators.equalTo(this.mail2)
  // ]);

  // myForm2 = this.builder.group({
  //   url2: this.url2,
  //   mail2: this.mail2,
  //   mail_confirm2: this.mail_confirm2
  // });

  // show2() {
  //   console.log('URL：' + this.url2.value);
  //   console.log('メールアドレス：' + this.mail2.value);
  //   console.log('メールアドレス（確認）：' + this.mail_confirm2.value);
  // }

  name = 'Angular'
}
