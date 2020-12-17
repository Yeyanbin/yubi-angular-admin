import { ValidatorFn } from '@angular/forms';


export interface IFormConfig {
  class: string[];
  showFormData: boolean;
  width: number;
  formName: string;
  formControlItems: Array<IFormControlItem>;
  otherItems: Array<IOtherItem>;
}

export interface IFormControlItem extends IFunc{
  formControlType: string;
  formControlName: string;
  span: number;
  labelSpan?: number;
  controlSpan?: number;
  default: null | any;
  preContent?: string;
  nzTip: ITip;
  validators: Array<ValidatorFn>;
  class?: string[];
  content?: string;

  // input
  inputType?: string;
  inputIcon?: string;
  placeholder?: string;

  // checkbox

  // select
  selectOptions?: {
    value: string;
    label: string;
  };
  selectMode?: string;

  // func
  clickFunc?: (validateForm: any) => void;
  selectFunc?: (validateForm: any, $event: any) => void;
}

export interface ITip {
  error?: string;
}


export interface IOtherItem extends IFunc{
  extendType: string;
  span: number;
  content: string;
  class: string[];

  // button
  buttonType?: string;
  leftButtonIcon?: string;
  rightButtonIcon?: string;
}

interface IFunc {
  // func
  clickFunc?: (validateForm: any) => void;
  selectFunc?: (validateForm: any, $event: any) => void;
}

