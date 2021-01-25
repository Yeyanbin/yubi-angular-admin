import { FormGroup, ValidatorFn } from '@angular/forms';

export interface IFormConfig<T> {
  class: string[];
  showFormData: boolean;
  width: number;
  formName: string;
  formControlItems: Array<formItemType<T>>;
  otherItems: Array<IOtherItem>;
}

export interface IFormControlItem extends IFunc{
  formControlType: string;
  formControlName: string;
  validators: Array<ValidatorFn>;

  span?: number;
  labelSpan?: number;
  label?: string;
  controlSpan?: number;
  default: any;
  preContent?: string;
  nzTip: ITip;
  content?: string;
}

export type formItemType<T> = IInput | ISelect<T> | IDateRanges;

export interface ILayout {
  controlSpan: number;
  labelSpan: number;
  offset: number;
  class?: string[];
  style?: {
    [key: string]: string;
  };
}

export interface IInput extends IFormControlItem {
  inputType?: string;
  inputIcon?: string;
  placeholder?: string;
  clickFunc: (validateForm: any) => void;
}

export interface ISelect<T> extends IFormControlItem {
  selectOptions: {
    value: T;
    label: string;
  }[];
  mode: selectModeType;
  multipleList?: T[];

}

type selectModeType = 'single' | 'multiple';

export interface IDateRanges extends IFormControlItem {
  ranges: any;
  format: any;
}

export interface ITip {
  error?: string;
}


export interface IOtherItem extends IFunc{
  extendType: string;
  span: number;
  content?: string;
  class?: string[];

  // button
  buttonType?: string;
  leftButtonIcon?: string;
  rightButtonIcon?: string;

  style?: any;

  // select
  childs?: any[];
}

interface IFunc {
  // func
  clickFunc?: (validateForm: FormGroup) => void;
  selectFunc?: (validateForm: FormGroup, $event: any) => void;
  onChange?: (validateForm: FormGroup, $event: any) => void;

}

