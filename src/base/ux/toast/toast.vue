<template>
    <transition name="k-toast-pop">
        <div class="k-toast k-toast-mask" v-show="visible" :class="customClass">
            <span>
                <div class="k-toast-notice">
                    <div class="k-toast-notice-content">
                        <div class="k-toast-text" role="alert">
                            <div class="k-toast-text-icon" :class="iconClass" v-if="iconClass !== ''"></div>
                            <img :src="iconTypeUrl" :class="iconTypeClass" v-if="iconType !== ''" :style="{ 'margin-bottom': message ? '10px' : ''}">
                            <div class="k-toast-text-info">{{message}}</div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    </transition>
</template>
<style socped lang="less">
@import '~varless';
@prefixCls: k-toast;
@toast-fill: rgba(58, 58, 58, 0.9);// 浮层背景 - 反色，用于 toast
.@{prefixCls} {
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: @toast-zindex;
    font-size: @font-size-base;
    text-align: center;
    transition: opacity .3s linear;
    span{
        margin: 0 10%;
    }
    &&-mask {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
    }

    // 显示位置，还不能使用，待完善
    &.is-placebottom {
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0)
    }
    &.is-placemiddle{
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
    }
    &.is-placetop{
        top: 50px;
        left: 50%;
        transform: translate(-50%, 0)
    }

    &-notice {
        width: auto;
        vertical-align: middle;
        position: relative;
        left: 50%;
        // left: 50%;
    }

    &-notice-content {
        position: relative;
        right: 50%;
        display: block;

        .@{prefixCls}-text {
            min-width: 150px;
            border-radius: @radius-sm;
            color: @color-text-base-inverse;
            background-color: @toast-fill;
            line-height: @line-height-paragraph;
            padding: @v-spacing-md @h-spacing-lg;
            font-size: 32px;
            .@{prefixCls}-text-icon {
                border-radius: @radius-md;
                padding: @v-spacing-lg @h-spacing-lg;

                .@{prefixCls}-text-info{
                    margin-top: @v-spacing-sm;
                }
            }
        }
    }

    &-img{
        width: 65px;
        height: 65px;
        display: block;
        margin: 0 auto;
    }

    &-loading {
      animation: cirle-anim 1s linear infinite;
    }

    @keyframes cirle-anim {
      100% {
        transform: rotate(360deg);
      }
    }
    &-pop-enter, &-pop-leave-active {
        opacity: 0
    }
}

</style>

<script>
import Success from 'common/svg/success.svg'
import Fail from 'common/svg/fail.svg'
import Offline from 'common/svg/offline.svg'
import Loading from 'common/svg/loading.svg'

const prefixCls = 'k-toast'

export default {
    props: {
        message: String,
        className: {
            type: String,
            default: ''
        },
        position: {
            type: String,
            default: 'middle'
        },
        iconClass: {
            type: String,
            default: ''
        },
        iconType: {
            type: String,
            default: ''
        }
    },

    data () {
        return {
            visible: false
        }
    },

    computed: {
        customClass () {
            var classes = []
            switch (this.position) {
            case 'top':
                classes.push('is-placetop')
                break
            case 'bottom':
                classes.push('is-placebottom')
                break
            default:
                classes.push('is-placemiddle')
            }
            classes.push(this.className)

            return classes.join(' ')
        },
        // iconUrl
        iconTypeUrl () {
            var iconUrl = ''
            console.log(this.iconType)
            switch (this.iconType) {
            case 'success':
                iconUrl = Success
                break
            case 'fail':
                iconUrl = Fail
                break
            case 'offline':
                iconUrl = Offline
                break
            case 'loading':
                iconUrl = Loading
                break
            default:
                iconUrl = ''
            }
            return iconUrl
        },
        iconTypeClass () {
            return [
                `${prefixCls}-img`,
                {
                    [`${prefixCls}-${this.iconType}`]: !!this.iconType
                }
            ]
        }
    }
}
</script>
