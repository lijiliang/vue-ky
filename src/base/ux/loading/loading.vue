<template>
    <div class="k-loading">
        <div class="k-loading-content" :class="sizeContentClass">
            <span class="k-loading-spinner"></span>
            <span class="k-loading-title"v-if="title">{{title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: 'small'
        }
    },
    computed: {
        sizeContentClass () {
            return [
                `k-loading-content-${this.size}`
            ]
        }
    }
}
</script>

<style socped lang="less">
    @import '~varless';
    @prefixCls: k-loading;
    .@{prefixCls} {
        &-content{
            display: flex;
            align-items: center;
        }
        &-spinner{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: inline-block;
            text-indent: -9999em;
            border-top: 2px solid #eee;
            border-right: 2px solid #eee;
            border-bottom: 2px solid #eee;
            border-left: 2px solid #108ee9;
            transform: translateZ(0);
            animation: loading 1.1s infinite linear;
        }
        &-title {
            padding-left: 15px;
            font-size: 28px;
        }
        &-content-large{
            .@{prefixCls}-spinner{
                width: 60px;
                height: 60px;
                border-width: 4px;
            }
            .@{prefixCls}-title{
                font-size: 32px;
            }
        }
    }
    @keyframes loading {
        0% {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(1turn)
        }
    }
</style>

