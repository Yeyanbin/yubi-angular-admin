

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
- **状态管理工具**
- **路由守卫**
- **利用请求拦截实现本地数据调试方案**
- **配置化处理**     

<img src="https://img.shields.io/badge/目前进度-文档编写ing-orange.svg"/>


---
## 规范推荐

- `x.component.ts`文件中：
  1. 只处理模块或组件所私有的方法
  2. 只拥有模块或组件所私有的属性
  3. 将可做配置化处理的代码抽离到所在模块的`x.config.ts`文件中
  4. 尽量少在该文件中使用常量
  5. 请求数据不保存在此文件，且请求行为通过store文件封装处理。
- 

## 目录结构
标亮的是路经别名，为了引入方便。

例如 `import { layoutModule } from '@store/layout';`

- src
  - *_globalStyles* `公共样式`
  - *_interface* `公共接口` ==@interface==
  - *_utils* `工具库`   ==@utils==
    - _lang `多语言` 
    - storage.ts `localstorage封装`
  - **app** `根`
    - *_api* `Ng service` ==@api==
    - *_gurad* `路由守卫` 
    - *_module* `公共模块 module` ==@module==
    - *_store* `状态管理工具` ==@store==
    - **others** `其他页面`
    - **pages** `主页面`
      - *_component* `pages模块的私有组件`
      - page.menu.ts `菜单文件`
      - page-routing.module.ts `主页面路由`
    - app-routing.module.ts `根路由`
  - assets `静态文件`
  - environments `环境变量`

> 解决跨域问题 *proxy.conf.json* 代理文件

---

## 状态管理工具

模仿vuex的一个状态管理工具

