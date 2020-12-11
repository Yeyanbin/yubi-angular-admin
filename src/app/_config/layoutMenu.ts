
import { Routes } from '@angular/router';

export const menuRoutes: Routes = [
  {
    path: 'dashborad',
    loadChildren: () => import('../layout/page/dashboard/dashboard.module')
      .then(m => m.DashboardModule),
    data: {
      name: 'Dashborad',
      icon: null
    }
  },
  {
    path: 'form',
    loadChildren: () => import('../layout/page/form/form.module')
      .then(m => m.FormModule),
    data: {
      name: 'Form',
      icon: null
    }
  },
  {
    path: 'table',
    loadChildren: () => import('../layout/page/table/table.module')
      .then(m => m.TableModule),
    data: {
      name: 'Table',
      icon: null
    }
  },
  {
    path: 'setting',
    loadChildren: () => import('../layout/page/setting/setting.module')
      .then(m => m.SettingModule),
    data: {
      name: 'Setting',
      icon: null
    }
  },
];
