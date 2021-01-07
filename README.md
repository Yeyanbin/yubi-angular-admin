

  <h1 align="center"> Yubi-angular-admin </h1>
  <h6  align="center"> 这是Angular11的通用后台模版解决方案，开箱即用，结构清晰。
    <code align="center">//后两个仅仅针对本作者而言</code> 
  </h6>

  <ul align="center">
  由小萌新Yubi开发和维护。 <code>//即，不断写BUG和制造更多的BUG</code>
  </ul>


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
      <img src="https://img.shields.io/badge/rxjs-6.6.0-green.svg">
    </span>
    <span>
      <img src="https://img.shields.io/badge/ng zorro antd-10.2.1-green.svg">
    </span>
  </div>


---

![image](./docs/main.png)

[在线使用](https://yubi233.gitee.io/yubi-angular-admin)

### 特征
- **TypeScript**
- **合理的目录结构** [->](#目录结构)
- **国际化**
- **快捷键操作**
- **状态管理工具** [->](https://gitee.com/Yubi233/md_note/blob/master/Js&Ts/%E7%AE%80%E6%98%93%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/index.md)
- **路由守卫**
- **利用请求拦截实现本地数据调试方案**
- **配置化处理**     

<img src="https://img.shields.io/badge/目前进度-文档编写ing-orange.svg"/>


---
## 个人规范建议

- `x.component.ts`文件
  1. 只处理模块或组件所私有的方法
  2. 只拥有模块或组件所私有的属性
  3. 将可做配置化处理的代码抽离到所在模块的`x.config.ts`文件中 `// 例如 pages.config.ts`
  4. 尽量少在该文件中使用常量
  5. 请求数据不保存在此文件，且请求行为通过store中对应的module封装处理。
- 文件目录 
  1. 常用文件夹需要加上别名，减少相对路径的使用 `import { layoutModule } from '@store/layout';`
  2. 非页面的文件命名，前缀带 `_`
  3. 其他页面存放404，login等工具页，每个非`_`前缀的文件夹是且仅是一个页面模块 `pages/pageName`
- 其他规范
  1. 文本常量尽量用多语言文本库进行调用：`'login'` → `text.user?.login`
  2. 模块的私有组件放在 `./_component/componentName`
  3. 页面模块懒加载
  4. 初始化操作应该在store中对应的module进行new操作时。`// 参考@store/layout.ts的全局快捷键初始化`

---

## 目录结构
标亮的是路经别名，为了引入方便。

例如 `import { layoutModule } from '@store/layout';`

- src
  - *_globalStyles* `公共样式`
  - *_interface* `公共接口` <mark>@interface</mark>
  - *_utils* `工具库`   <mark>@utils
    - *_lang* `多语言文本库` 
    - storage.ts `localstorage封装`
  - **app** `根`
    - *_api* `Ng service` <mark>@api
    - *_gurad* `路由守卫` 
    - *_module* `公共模块 module` <mark>@module
    - *_store* `状态管理工具` <mark>@store
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