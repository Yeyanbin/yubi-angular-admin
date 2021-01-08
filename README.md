
[中文](./README_CN.md)

  <h1 align="center"> Yubi-angular-admin </h1>
  <h6  align="center"> This is Angular's generic background template solution.
    <code align="center">//Just for me.</code> 
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

[Try it!](https://yubi233.gitee.io/yubi-angular-admin)

### Feature
- **TypeScript**
- **Reasonable directory structure** [->](#directory)
- **Internationalization**
- **Support shortcut key**
- **State management pattern by myself** [->](https://gitee.com/Yubi233/md_note/blob/master/Js&Ts/%E7%AE%80%E6%98%93%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/index.md)
- **Router guard**
- **Http-interceptors**
- **Configuration**     

<img src="https://img.shields.io/badge/Current progress-Document writing-orange.svg"/>


---
## Yubi Specification Recommends

- By `x.component.ts` files.
  1. Only have the methods and props that are private to a module or component. 
  2. Extract configurable code into the file `moduleName.config.ts` of the module as far as possible.
     -  `// Such as pages.config.ts`
  3. Reduce the use of constants in those files.
  4. The request and data not in those files, them should be stored in the state management module. 
- File directory 
  1. Commonly used folders need to have aliases to reduce the use of relative paths. 
     - `import { layoutModule } from '@store/layout';`
  2. Files that not a page should have the prefix `_`.
  3. Other pages hold tool pages, such as page of 404 and Login. 
  4. Each folder that is not prefixed by '_' is and is only a page module.
     - Like `pages/pageName`.
- Others
  1. String constants are called from the text library 'lang'.
     - `'login'` → `text.user?.login`
  2. The private components of the module are placed in `./_component/componentName`
  3. You should use the configure `loadChildren` of router to lazy load your modules.

---

## Directory
The road aliases are highlighted, them used for ease of introduction.

For a example, `import { layoutModule } from '@store/layout';`

- src
  - *_globalStyles* `Global Styles`
  - *_interface* `Global Interface` <mark>@interface</mark>
  - *_utils* `Tool library`   <mark>@utils
    - *_lang* `the text library` 
    - storage.ts `use localstorage`
  - **app** `root`
    - *_api* `Ng service` <mark>@api
    - *_gurad* `Router gurad` 
    - *_module* `Global module` <mark>@module
    - *_store* `State management modules` <mark>@store
    - **others** `Other pages`
    - **pages** `Main pages`
      - *_component* `private component of the Module 'pages'.`
      - pages.config.ts `Configuration file of Module 'pages'`
      - pages-routing.module.ts `Router of Module 'pages'`
    - app-routing.module.ts `Root router`
  - assets `static`
  - environments `environments`

> Cross-domain problem *proxy.conf.json* Proxy files

---