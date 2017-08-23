# loading 加载中,活动指示器
加载中,活动指示器。 表明某个任务正在进行中

### 规则
- 不要让活动指示器静止，用户会以为该任务停滞了。
- 在某些特定场景下，提供有意义的文案，帮助用户明白哪个任务正在进行中


## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|  size  | 显示大小，可选`large`/`small` | string  | small  |
|  title  | 显示loading的文字 | string  | 无 |



## 示例

```js
import Loading from 'ux/loading/loading'
```
```html
<h2>单独loading效果</h2>
<Loading />
<h2>loading 加文字</h2>
<Loading title="loading..."/>
<h2>loading 加大</h2>
<Loading title="loading..." size="large"/>
```
