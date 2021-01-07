

  <h1 align="center"> Yubi-angular-admin </h1>
  <h6  align="center"> 这是Angular11的通用后台模版解决方案，开箱即用，结构清晰。
    <code align="center">//后两个仅仅针对本作者而言<code> 
  </h6>

  <h6 align="center">
  由小萌新Yubi开发和维护。 <code>//即，不断写BUG和制造更多的BUG</code>
  </h6>


  <div align="center">
    <span>
      <img src="https://img.shields.io/badge/@angular/cli-11.0.2-green.svg">
    </span>
    <span>
      <img src="https://img.shields.io/badge/typescript-4.0.2-green.svg">
    </span>
    <span>
      <img src="https://img.shields.io/badge/tslint-6.1.0-green.svg">
    </span>
    <span>
      <img src="https://img.shields.io/badge/ng zorro antd-10.2.1-green.svg">
    </span>
  </div>

<div align="left">

---

![image](./docs/main.png)

[在线使用](https://yubi233.gitee.io/yubi-angular-admin)

### 特征
- **TypeScript**
- **合理的目录结构** [->](#目录结构)
- **国际化**
- **快捷键操作**
- **状态管理工具** [->](#状态管理工具)
- **路由守卫**
- **利用请求拦截实现本地数据调试方案**
- **配置化处理**     

<img src="https://img.shields.io/badge/目前进度-文档编写ing-orange.svg"/>


---
## 个人规范建议

- `x.component.ts`文件
  1. 只处理模块或组件所私有的方法
  2. 只拥有模块或组件所私有的属性
  3. 将可做配置化处理的代码抽离到所在模块的`x.config.ts`文件中
  4. 尽量少在该文件中使用常量
  5. 请求数据不保存在此文件，且请求行为通过store文件封装处理。
- 文件目录 
  1. 常用文件夹需要加上别名，减少相对路径的使用 `import { layoutModule } from '@store/layout';`
  2. 非页面的文件命名，前缀带 `_`
  3. 其他页面存放404，login等工具页，每个非`_`前缀的文件夹是且仅是一个页面模块 `pages/pageName`
- 其他规范
  1. 文本常量尽量用多语言工具进行调用：`'login'` → `text.user?.login`
  2. 模块的私有组件放在 `./_component/componentName`
  3. 页面模块懒加载

---

## 目录结构
标亮的是路经别名，为了引入方便。

例如 `import { layoutModule } from '@store/layout';`

- src
  - *_globalStyles* `公共样式`
  - *_interface* `公共接口` ==@interface==
  - *_utils* `工具库`   ==@utils==
    - _lang `多语言文本库` 
    - storage.ts `localstorage封装`
  - **app** `根`
    - *_api* `Ng service` ==@api==
    - *_gurad* `路由守卫` 
    - *_module* `公共模块 module` ==@module==
    - *_store* `状态管理工具` ==@store==
    - **others** `其他页面`
    - **pages** `主页面`
      - *_component* `pages模块的私有组件`
      - pages.config.ts `pages Module的配置文件`
      - pages-routing.module.ts `主页面路由`
    - app-routing.module.ts `根路由`
  - assets `静态文件`
  - environments `环境变量`

> 解决跨域问题 *proxy.conf.json* 代理文件

---

## 状态管理工具

模仿vuex的一个状态管理工具

##### [base.ts](./src/app/_store/base.ts)

UseNgModule利用依赖注入，获取NgModule的服务
```
/**
 * father
 */
export class Module<T> {

  protected state: T;
  private actionFunc: IAction;

  constructor(state: T, action: IAction) {
    this.state = state;
    this.actionFunc = action;
  }
  /**
   * @return The function of Action from the Store Module
   */
  public get action(): IAction {
    return this.actionFunc;
  }
}

@Injectable({
  providedIn: 'root'
})
/**
 * This class is used for importing NgModule.
 */
export class UseNgModule {
  constructor(userService: UserService, router: Router) {
    imports.userService = userService;
    imports.router = router;
    console.log('inject imports!');
  }
}


```

##### [user.ts](./src/app/_store/user.ts)样例
采用单例设计模式，对模块进行封装，通过get&set进行对state属性的调用，action为处理状态的方法。
```
const userState: IUserState = {
  userID: 'test',
  userPwd: '',
  token: '',
  tokenID: 0
};

const userAction: IAction = {
  /**
   * Login func.
   * @param userID userID
   * @param passID PassID
   * @param remember If save userID and tokenID into localstorage.
   */
  login: (userID: string, passID: string, remember: boolean = false): boolean => {
    let success = false;

    tool.userService?.login(userID, passID).subscribe(
      (res: any) => {
        // tslint:disable-next-line: no-conditional-assignment
        if ( success = res.success ) {
          userState.userID = userID;
          userState.token = res.token;
          userState.tokenID = res.tokenID;

          if (remember) {
            setUserID(userID);
            setUserTokenID(res.tokenID);
          }

          tool.router?.navigateByUrl('/');
        }
      }
    );
    return success;
  },
  /**
   * logout
   */
  logout: () => {
    removeUserID();
    removeUserTokenID();
    userState.userID = '';
    userState.tokenID = 0;
    tool.router?.navigateByUrl('/login');
  },
};

class UserModule extends Module<IUserState> {

  constructor() {
    super(userState, userAction);
    userState.userID = getUserID() || '';
    userState.tokenID = getUserTokenID() || 0;
  }
  public get userID(): string {
    return this.state.userID;
  }

  public get userPwd(): string {
    return this.state.userPwd;
  }

  public get tokenID(): number {
    return this.state.tokenID;
  }

  public get token(): string {
    return this.state.token;
  }
}

export const userModule = new UserModule();
```


---