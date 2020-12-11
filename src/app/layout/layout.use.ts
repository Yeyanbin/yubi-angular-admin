import { IMenuItem } from 'src/_interface/layout';
import { menuRoutes } from '../_config/layoutMenu';

export const useRouteMenu = (): IMenuItem[] => {

  const menu: IMenuItem[] = [];

  for (const route of menuRoutes) {
    if ( route.data?.isMenuItem ) {
      menu.push({
        name: route.data?.name,
        // tslint:disable-next-line: no-non-null-assertion
        path: route.path!,
        icon: route.data?.icon
      });
    }
  }

  return menu;
};
