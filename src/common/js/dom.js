/**
 * dom操作
 */
import Vue from 'vue'
const isServer = Vue.prototype.$isServer

/**
 * trim 去掉前后空格
 * @param {string} string 字符串
 */
const trim = function (string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * on 绑定事件
 */
export const on = (function () {
    if (!isServer && document.addEventListener) {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()

/**
 * off 解绑事件
 */
export const off = (function () {
    if (!isServer && document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return function (element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()

 /**
 * once
 * @param {element} el
 * @param {event} event 事件名
 * @param {any} fn
 */
export const once = function (el, event, fn) {
    let listener = function () {
        if (fn) {
            fn.apply(this, arguments)
        }
        off(el, event, listener)
    }
    on(el, event, listener)
}

/**
 * hasClass 判断类名是否存在
 * @export
 * @param {element} el 元素
 * @param {string} cls 类名
 * @returns
 */
export function hasClass (el, cls) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
    if (el.classList) {
        return el.classList.contains(cls)
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
}

/**
 * addClass 增加类名
 * @export
 * @param {element} el 元素
 * @param {string} cls 类名
 * @returns
 */
export function addClass (el, cls) {
    if (!el) return false
    let curClass = el.className
    let classes = (cls || '').split(' ')

    for (var i = 0, j = classes.length; i < j; i++) {
        let clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.add(clsName)
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName
            }
        }
    }
    if (!el.classList) {
        el.className = curClass
    }
}

/**
 * removeClass 删除类名
 * @export
 * @param {element} el 元素
 * @param {string} cls 类名
 * @returns
 */
export function removeClass (el, cls) {
    if (!el) return false
    let curClass = el.className
    let classes = (cls || '').split(' ')

    for (var i = 0, j = classes.length; i < j; i++) {
        let clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.remove(clsName)
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ')
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass)
    }
}
