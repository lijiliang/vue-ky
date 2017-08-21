# swipe 轮播图
轮播图，可自定义轮播时间间隔、动画时长等

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|  speed  | 动画持时（毫秒） | Number  | 300 |
|  auto  | 自动播放的时间间隔（毫秒 | Number  |  3000 |
|  continuous  | 是否循环播放 | Boolean  | true  |
|  showIndicators  | 是否显示 indicators | Boolean  | true |
|  prevent  | 	是否在 touchstart 事件触发时阻止事件的默认行为 | Boolean  | false |


## 示例

```html
<h2>基础用法</h2>
        <k-swipe :auto="4000">
            <k-swipe-item class="slide1">1</k-swipe-item>
            <k-swipe-item class="slide2">2</k-swipe-item>
            <k-swipe-item class="slide3">3</k-swipe-item>
        </k-swipe>

    <h2>隐藏 indicators</h2>
        <k-swipe :show-indicators="false">
            <k-swipe-item class="slide1">1</k-swipe-item>
            <k-swipe-item class="slide2">2</k-swipe-item>
            <k-swipe-item class="slide3">3</k-swipe-item>
        </k-swipe>

    <h2>取消自动播放</h2>
        <k-swipe :auto="0">
            <k-swipe-item class="slide1">1</k-swipe-item>
            <k-swipe-item class="slide2">2</k-swipe-item>
            <k-swipe-item class="slide3">3</k-swipe-item>
        </k-swipe>

    <h2>设置默认显示页</h2>
        <k-swipe :auto="0" :defaultIndex="1">
            <k-swipe-item class="slide1">1</k-swipe-item>
            <k-swipe-item class="slide2">2</k-swipe-item>
            <k-swipe-item class="slide3">3</k-swipe-item>
        </k-swipe>

    <h2>单个幻灯片</h2>
        <k-swipe :show-indicators="false">
            <k-swipe-item class="slide1">单个幻灯片</k-swipe-item>
        </k-swipe>
  </div>
```
```css
k-swipe {
        height: 300px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .k-swipe-item {
        line-height: 300px;
      }
```
```js
import KSwipe from 'ux/swipe/swipe'
import KSwipeItem from 'ux/swipe/swipe-item'
Vue.component(KSwipe.name, KSwipe);
Vue.component(KSwipeItem.name, KSwipeItem);
```