# toast 轻提示
种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|  message  | 文本内容 | String  |  |
|  duration  | 持续时间（秒） | Number  |  3 |
|  className  | Toast 的类名。可以为其添加样式 | String	  |   |
|  iconClass  | icon 图标的类名 | String  |  |
|  iconType  | 	数据交互场景type,有 `success`、`fail`、`offline`、`loading` | String  |  |
|  position  | 	Toast 的位置`top`、`bottom`、`middle` | String  | `middle` |

## 说明
- 当需要显示轻提示时，调用 `open`方法
- 调用 `close` 方法将其关闭

## 示例

```html
    <button @click="openToast">点击弹出 Toast</button>
    <button @click="openToastWithIcon">点击弹出带有 icon 的 Toast</button>
    <button @click="openLoadingToast">点击弹出加载中...</button>
    <button @click="openBottomToast">自定义 Toast 位置</button>
```

```js
import Toast from 'ux/toast/toast.js'
export default {
    components: {

    },
    methods: {
        openToast () {
            Toast.open('提示信息')
        },
        openToastWithIcon () {
            Toast.open({
                message: '点击弹出带有 icon 的 Toast',
                iconClass: 'icon icon-Kyani',
                duration: 10
            })
        },
        openLoadingToast () {
            Toast.open({
                iconType: 'loading',
                message: '加载中....',
                duration: 2
            })
        },
        openBottomToast () {
            Toast.open({
                iconType: 'fail',
                message: '失败啦',
                position: 'bottom',
                duration: 20
            })
            setTimeout(() => {
                Toast.close()
            }, 2000)
        }
    }
}
```