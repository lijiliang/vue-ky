# Modal 对话框

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。


## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|  title  | 标题 | string  | 提示  |
|  message  | 提示信息 | string  |  确定执行此操作？ |
|  cancelButtonText  | 取消按钮文字 | string  | 取消  |
|  confirmButtonText  | 确定按钮文字 | string  | 确定 |
|  cancel  | 取消事件 | function  | 无 |
|  confirm  | 确定事件 | function  | 无 |



## 示例

```html
<button @click="showConfirm">显示modal</button>
<Modal ref="modal" @confirm="confirmClear" text="提示操作"></Modal>
```

```js
showConfirm () {
    this.$refs.modal.show()
},
confirmClear () {
    console.log('确定按钮的操作sadfasdf')
}
```
