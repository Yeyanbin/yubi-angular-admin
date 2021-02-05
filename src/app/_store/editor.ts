import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, YubiModule } from './base';

// tslint:disable:no-conditional-assignment

interface IEditorState {
  mdValue: string;
}

@Injectable({
  providedIn: 'root'
})
@YubiModule({
  name: 'editor'
})
export class EditorModule {

  constructor(private router: Router) {}

  state: IEditorState = {
    mdValue: `
# 标题1

## 标题2

### 标题3

#### 标题4
 
###### 标题5

无序列表

- 任务1
- 任务2
- 任务3

有序列表

1. 任务1
2. 任务2
3. 任务3

| **姓名** | **年龄** | **性别** \`**是加粗**\` |
| --- | --- | --- |
|   张三 |  18 |  男 |
|  李四 |  20 | ~~男~~ \`删除线测试\` |

---

图片引用
![Vue测试](https://vue3js.cn/docs/logo.png)
  `};


}
