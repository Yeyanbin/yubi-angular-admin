import { Validators } from '@angular/forms';

export const loginFormConfig = {
  class: [ 'login-form' ],
  showFormData: true,
  width: 300,
  formName: 'Login',
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
  formName: 'Search',
  formControlItems: [
    {
      formControlType: 'input',
      formControlName: 'bookID',
      span: 12,
      default: null,
      preContent: 'Book ID: ',
      nzTip: {
        error: 'Please input bookID!',
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
      formControlName: 'author',
      span: 12,
      default: null,
      preContent: ' Author: ',
      nzTip: {
        error: 'Please input author!',
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
      formControlName: 'PassID',
      span: 12,
      default: null,
      preContent: ' Password: ',
      nzTip: {
        error: 'Please input PassID!',
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