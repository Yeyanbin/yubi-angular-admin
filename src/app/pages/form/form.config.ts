import { Validators } from '@angular/forms';

export const loginFormConfig = {
  class: [ 'login-form' ],
  showFormData: true,
  width: 300,
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
        console.log(validateForm.value);
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

export const searchFormConfig = {
  class: [ ],
  showFormData: true,
  width: 500,
  formControlItems: [
    {
      formControlType: 'input',
      formControlName: 'matchID',
      span: 12,
      default: null,
      preContent: 'Match ID: ',
      nzTip: {
        error: 'Please input matchID!',
      },
      inputType: 'text',
      inputIcon: '',
      placeholder: '',
      validators: [
        Validators.required
      ]
    },
    {
      formControlType: 'input',
      formControlName: 'sportID',
      span: 12,
      default: null,
      preContent: ' Sport ID: ',
      nzTip: {
        error: 'Please input sportID!',
      },
      inputType: 'text',
      inputIcon: '',
      placeholder: '',
      validators: [
        // Validators.required
      ]
    },
    {
      formControlType: 'input',
      formControlName: 'oddUserID',
      span: 12,
      default: null,
      preContent: ' User ID: ',
      nzTip: {
        error: 'Please input oddUserID!',
      },
      inputType: 'text',
      inputIcon: '',
      placeholder: '',
      validators: [
        Validators.required
      ]
    },
    {
      formControlType: 'input',
      formControlName: 'oddPassID',
      span: 12,
      default: null,
      preContent: ' Pass ID: ',
      nzTip: {
        error: 'Please input oddPassID!',
      },
      inputType: 'password',
      inputIcon: '',
      placeholder: '',
      validators: [
        Validators.required
      ]
    },
    {
      formControlType: 'checkbox',
      formControlName: 'inLive',
      span: 24,
      default: false,
      preContent: '',
      nzTip: {},
      content: 'in live',
      validators: []
    }
  ],
  otherItems: [

    {
      extendType: 'button',
      span: 12,
      buttonType: 'primary',
      content: 'search',
      class: [
      ],
      clickFunc: (validateForm: any) => {
        console.log(validateForm.value);
      },
    },
    {
      extendType: 'button',
      span: 12,
      buttonType: 'primary',
      content: 'reset',
      class: [
      ],
      clickFunc: (validateForm: any) => {
        validateForm.reset();
      },
    },
  ]
};