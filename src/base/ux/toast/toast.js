import Vue from 'vue'

const ToastConstructor = Vue.extend(require('./toast.vue'))
let toastPool = []
let instance

let getAnInstance = () => {
    if (toastPool.length > 0) {
        let instance = toastPool[0]
        toastPool.splice(0, 1)
        return instance
    }
    return new ToastConstructor({
        el: document.createElement('div')
    })
}

let returnAnInstance = instance => {
    if (instance) {
        toastPool.push(instance)
    }
}

let removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target)
    }
}

ToastConstructor.prototype.close = function () {
    this.visible = false
    this.$el.addEventListener('transitionend', removeDom)
    this.closed = true
    returnAnInstance(this)
}

// 显示toast
let open = (options = {}) => {
    let duration = (options.duration || 3) * 1000

    instance = getAnInstance()
    instance.closed = false
    clearTimeout(instance.timer)
    instance.message = typeof options === 'string' ? options : options.message
    instance.position = options.position || 'middle'
    instance.className = options.className || ''
    instance.iconClass = options.iconClass || ''
    instance.iconType = options.iconType || ''

    document.body.appendChild(instance.$el)
    Vue.nextTick(function () {
        instance.visible = true
        instance.position = instance.position
        instance.$el.removeEventListener('transitionend', removeDom)
        ~duration && (instance.timer = setTimeout(function () {
            if (instance.closed) return
            instance.close()
        }, duration))
    })
    return instance
}

// 关闭toast
let close = () => {
    if (instance) {
        instance.visible = false
        instance.$el.removeEventListener('transitionend', removeDom)
        instance.close()
    }
}

export default {open, close}
