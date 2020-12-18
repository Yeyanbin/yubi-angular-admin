import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IFormConfig } from '@interface/config';
import endOfMonth from 'date-fns/endOfMonth';

// 验证器
const NumberValidator: ValidatorFn = (control: AbstractControl): {[key: string]: any} | null => {
  // const forbidden = nameRe.test(control.value);
  // return forbidden ? {forbiddenName: {value: control.value}} : null;
  return !Number(control.value) ? {forbiddenName: {value: control.value}} : null;
};


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
      label: 'Book ID',
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
      label: ' Sport',
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
      label: ' Author',
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
      label: ' Password',
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


export const PersonFormConfig = {
  class: [],
  showFormData: true,
  width: 600,
  formName: 'Person Form',
  formControlItems: [
    {
      formControlType: 'input',
      formControlName: 'firstName',
      span: 12,
      default: null,
      label: 'First Name',
      nzTip: {
        error: 'Please input your first name!',
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
      formControlName: 'lastName',
      span: 12,
      default: null,
      label: 'Last Name',
      nzTip: {
        error: 'Please input your last name!',
      },
      inputType: 'text',
      inputIcon: '',
      placeholder: '',
      validators: [
        Validators.required
      ]
    },
    {
      formControlType: 'select',
      formControlName: 'lastName',
      span: 12,
      default: null,
      label: 'gender',
      nzTip: {
        // error: 'Please input your last name!',
      },
      selectOptions: [
        { value: 'male', label: 'male' },
        { value: 'female', label: 'female' },
      ],
      // placeholder: '',
      validators: [
      ],
      selectFunc: (validateForm: any, $event: any) => {

      }
    },
    {
      formControlType: 'input',
      formControlName: 'age',
      span: 12,
      default: null,
      label: 'age',
      nzTip: {
        error: 'Please input your age!',
      },
      inputType: 'text',
      inputIcon: '',
      placeholder: '',
      validators: [
        Validators.required,
        NumberValidator,
      ]
    },
    {
      formControlType: 'select',
      formControlName: 'hobby',
      span: 24,
      labelSpan: 4,
      controlSpan: 20,
      default: [],
      label: 'hobby',
      nzTip: {
        // error: 'Please input your last name!',
      },
      mode: 'multiple',
      multipleList: [],
      selectOptions: [
        { value: '足球', label: '足球' },
        { value: '摄影', label: '摄影' },
        { value: '下棋', label: '下棋' },
        { value: '篮球', label: '篮球' },
        { value: '羽毛球', label: '羽毛球' },
        { value: '英雄联盟', label: '英雄联盟' },
        { value: '王者荣耀', label: '王者荣耀' },
        { value: '看小说', label: '看小说' },
        { value: '钓鱼', label: '钓鱼' },
        { value: '唱歌', label: '唱歌' },
      ],
      validators: [
      ],
      selectFunc: (validateForm: any, $event: any) => {
        // console.log(validateForm);
        // console.log($event);
      },
      isNotSelected: (multipleList: string[], value: string): boolean => {
        // console.log(listOfSelectedValue.indexOf(value) === -1);
        return multipleList.indexOf(value) === -1;
      }
    },
    {
      formControlType: 'date-range',
      formControlName: 'date',
      span: 24,
      labelSpan: 4,
      controlSpan: 20,
      class: [
      ],
      style: {
        width: '100%'
      },
      default: [new Date(), new Date()],
      label: 'Date Range',
      nzTip: {
        // error: 'Please input your age!',
      },
      ranges: { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] },
      format: 'yyyy/MM/dd HH:mm:ss',
      onChange: (validateForm: FormGroup, $event: any) => {
        console.log($event);
      },
      validators: [
      ]
    },
  ],
  otherItems: [
    {
      extendType: 'button-group',
      span: 16,
      class: [
      ],
      style: {
        width: '100%'
      },
      childs: [
        {
          extendType: 'button',
          buttonType: 'primary',
          content: 'search',
          leftButtonIcon: 'to-top',
          class: [
          ],
          clickFunc: (validateForm: FormGroup) => {
            console.log(validateForm.value);
          },
        },
        {
          extendType: 'button',
          buttonType: 'dashed',
          content: 'reset',
          leftButtonIcon: 'retweet',
          class: [
          ],

          clickFunc: (validateForm: FormGroup) => {
            validateForm.reset(
              {
                hobby: [],
                date: []
              }
            );
          },
        },
      ]
    },
  ]
};

