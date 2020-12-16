import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-yubi-form',
  templateUrl: './yubi-form.component.html',
  styleUrls: ['./yubi-form.component.scss']
})
export class YubiFormComponent implements OnInit {

  @Input()
  FormConfig: any;

  validateForm!: FormGroup; // FormGroup is a group of FormControl, The FormGroup instance created for this form.

  runFunc(func: (arg0: any) => void): void {
    // tslint:disable-next-line: forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty(); // 设置为脏控件
      this.validateForm.controls[i].updateValueAndValidity(); // 重新计算控件的值和校验状态。
    }
    console.log(this.validateForm);
    func(this.validateForm);
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    const formGroupData: { [key: string]: any } = {};
    const formControlItems = this.FormConfig.formControlItems;

    formControlItems.forEach((element: any) => {
      formGroupData[element.formControlName] = [
        element.default,
        element.validators
      ];
    });

    // this code use for create FormGroup, and setup validators
    this.validateForm = this.fb.group(formGroupData);
  }
}
