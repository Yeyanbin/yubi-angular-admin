import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IFormConfig } from '@interface/config';
import { UserModule } from '@store/user';
import { text } from '@utils/lang';

// tslint:disable: no-non-null-assertion

@Injectable()
export class LoginConfig {

  constructor(private userModule: UserModule) {

  }

  loginFormConfig: IFormConfig = {
    class: [ 'login-form' ],
    showFormData: true,
    width: 300,
    formName: text.user!.loginTitle,
    formControlItems: [
      {
        formControlType: 'input',
        formControlName: 'userName',
        span: 24,
        default: null,
        preContent: '',
        nzTip: {
          error: 'Please input your username!',
        },
        inputType: 'text',
        inputIcon: 'user',
        placeholder: text.user?.username,
        validators: [
          Validators.required
        ]
      },
      {
        formControlType: 'input',
        formControlName: 'password',
        span: 24,
        default: null,
        preContent: '',
        nzTip: {
          error: 'Please input your Password!',
        },
        inputType: 'password',
        inputIcon: 'lock',
        placeholder: text.user?.password,
        validators: [
          Validators.required
        ]
      },
      {
        formControlType: 'checkbox',
        formControlName: 'remember',
        span: 12,
        default: true,
        preContent: '',
        nzTip: {},
        content: text.user?.rememberMe,
        validators: []
      }
    ],
    otherItems: [
      {
        extendType: 'a',
        span: 12,
        class: [
          'login-form-forgot'
        ],
        content: text.user?.forgetPwd
      },
      {
        extendType: 'button',
        span: 24,
        buttonType: 'primary',
        content: text.user?.login,
        class: [
          'login-form-button',
          'login-form-margin'
        ],
        clickFunc: (validateForm: any) => {
          // login function
          const params = validateForm.value;
          const success = this.userModule.login(params.userName, params.password, params.remember);
          if ( success ) {
            // true
          } else {
            // false
          }
        },
      },
      {
        extendType: 'a',
        span: 12,
        class: [],
        content: text.user?.register
      }
    ]
  };
}
