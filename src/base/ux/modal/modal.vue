<template>
    <transition name="modal-fade">
        <div class="k-modal" v-show="showFlag" @click.stop>
            <div class="k-modal-wrapper">
                <div class="k-modal-header">
                    <div class="title">{{title}}</div>
                </div>
                <div class="k-modal-content">
                    <div class="message">{{message}}</div>
                </div>
                <div class="k-modal-btns">
                    <button @click="cancel" class="btn btn-cancel">{{cancelButtonText}}</button>
                    <button @click="confirm" class="btn btn-confirm">{{confirmButtonText}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '提示'
        },
        message: {
            type: String,
            default: '确定执行此操作？'
        },
        cancelButtonText: {
            type: String,
            default: '取消'
        },
        confirmButtonText: {
            type: String,
            default: '确定'
        }
    },
    data () {
        return {
            showFlag: false // 默认隐藏
        }
    },
    methods: {
        show () {
            this.showFlag = true
        },
        hide () {
            this.showFlag = false
        },
        cancel () {
            this.hide()
            this.$emit('cancel')
        },
        confirm () {
            this.hide()
            this.$emit('confirm')
        }
    }
}
</script>

<style socped lang="less">
    @import '~varless';
    @prefixCls : k-modal;
    .@{prefixCls} {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 998;
        background: @fill-mask;
        &-wrapper{
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            background-color: #fff;
            width: 85%;
            border-radius: 10px;
            font-size: 26px;
            overflow: hidden;
            backface-visibility: hidden;
            transition: .2s;
        }
        // header
        &-header {
            padding: 25px 0 0;
            .title{
                text-align: center;
                padding-left: 0;
                margin-bottom: 0;
                font-size: 32px;
                font-weight: 700;
                color: #333;
            }
        }
        &-content{
            padding: 38px 20px;
            border-bottom: 1px solid #ddd;
            min-height: 36px;
            position: relative;
            .message{
                color: #999;
                margin: 0;
                text-align: center;
                line-height: 38px;
                font-size: 34px;
            }
        }
        &-btns{
            display: flex;
            height: 80px;
            line-height: 80px;
            .btn{
                flex: 1;
                line-height: 80px;
                display: block;
                box-sizing: border-box;
                background: #fff;
                font-size: 32px;
                &-cancel{
                    border-right: 1px solid #ddd;
                }
                &-confirm{
                    color: @brand-primary;
                }
            }
        }
    }
    .modal-fade-enter {
        opacity: 0;
        transform: translate3d(-50%, -50%, 0) scale(0.7);
    }
    .modal-fade-enter-active {
        // opacity: 0;
        // transform: translate3d(-50%, -50%, 0) scale(0.9);
        animation: confirm-fadein .1s;
        .@{prefixCls}-wrapper {
            opacity: 0;
            transform: translate3d(-50%, -50%, 0) scale(0.9);
        }
    }
    .modal-fade-leave {
        animation: v-modal-out .2s ease forwards;
    }
    .modal-fade-leave-active {
        animation: v-modal-out .5s ease forwards;
    }
    @keyframes confirm-fadein{
        0% {
            opacity: 0
        }
        100%{
            opacity: 1
        }
    }
    @keyframes confirm-zoom{
        0%{
            transform: scale(0)
        }
        50%{
            transform: scale(1.1)
        }
        100%{
            transform: scale(1)
        }
    }

    @keyframes v-modal-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes v-modal-out {
        0% {
        }
        100% {
            opacity: 0;
        }
    }
</style>
