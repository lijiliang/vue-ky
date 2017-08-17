# navbar 导航栏
位于APP内容区上方，提供一系列页面中的导航能力。

### 规则
- 可在导航栏中显示当前视图的标题。如果标题非常冗长且无法精简，可以空缺。
- 避免用过多的元素填满导航栏。一般情况下，一个『返回按钮』、一个『标题』、一个『当前视图的控件』就足够了；


## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|  prefixCls  | 类名 | string  | k-navbar  |
|  iconName  | 左侧icon名称 | string  |  无 |
|  mode  | 显示模式，可选`dark`/`light`/`tran`/`success`/`error`/`blue` | string  | 无  |
|  title  | 显示在标题区域 | slot  | 无 |
|  right  | 显示在右侧区域 | slot  | 无 |
|  onleftClick  | 导航左边点击回调 | (e: Object): void  | 无 |



## 示例

```jsx
<navbar iconName="left" leftContent="返回" @onleftClick="onleft" mode="dark">
    <span slot="title">是这一个标题哦，标题啊</span>
    <div slot="right">right</div> 
</navbar>

<navbar mode="blue">
    <span slot="title">是这一个标题哦，标题啊</span>
</navbar>
```
