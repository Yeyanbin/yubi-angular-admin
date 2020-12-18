import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IFormConfig } from '@interface/config';
import { getUserModule } from '@store/user';

const userModule = getUserModule();

export const loginFormConfig: IFormConfig = {
  class: [ 'login-form' ],
  showFormData: true,
  width: 300,
  formName: 'Login',
  formControlItems: [
    {
      formControlType: 'input',
      formControlName: 'userName',
      // labelSpan: 0,
      // controlSpan: 24,
      span: 24,
      default: null,
      preContent: '',
      nzTip: {
        error: 'Please input your username!',
      },
      inputType: 'text',
      inputIcon: 'user',
      placeholder: 'Username',
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
      content: 'Remember me',
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
      content: 'Forgot password'
    },
    {
      extendType: 'button',
      span: 24,
      buttonType: 'primary',
      content: 'Log in',
      class: [
        'login-form-button',
        'login-form-margin'
      ],
      clickFunc: (validateForm: any) => {
        // login function
        const params = validateForm.value;
        const success = userModule.action.login(params.userName, params.password)
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
      content: 'register now!'
    }
  ]
};
