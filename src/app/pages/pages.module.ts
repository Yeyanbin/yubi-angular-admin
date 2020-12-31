import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';



import { WelcomeModule } from './welcome/welcome.module';
import { SidebarComponent } from './_component/sidebar/sidebar.component';
import { YubiFormModule } from '../_module/yubi-form/yubi-form.module';

registerLocaleData(en);

@NgModule({
  declarations: [PagesComponent, SidebarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    YubiFormModule,
    NzDropDownModule,
    NzButtonModule,
    NzDividerModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],

})
export class PagesModule { }
