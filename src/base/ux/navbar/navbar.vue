<!--
    navbar  导航栏
-->
<template>
    <div :class="classes">
        <div :class="`${prefixCls}-left`" @click="onleftClick">
            <span :class="`${prefixCls}-left-icon`" v-if="iconName">
                <i :class="`icon icon-${iconName}`"></i>
            </span>
            <span :class="`${prefixCls}-left-content`" v-text="leftContent" v-if="leftContent"></span>
        </div>
        <div :class="`${prefixCls}-title`">
            <slot name="title"></slot>
        </div>
        <div :class="`${prefixCls}-right`">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    import { oneOf } from 'common/js/utils'
    const prefixCls = 'k-navbar'

    export default {
        name: 'k-navbar',
        props: {
            prefixCls: {
                type: String,
                default: 'k-navbar'
            },
            iconName: {
                type: String,
                default: ''
            },
            leftContent: {
                type: String,
                default: ''
            },
            mode: {
                validator (value) {
                    return oneOf(value, ['dark', 'light', 'tran', 'success', 'error', 'blue'])
                }
            }
        },
        methods: {
            onleftClick () {
                this.$emit('onleftClick')
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.mode}`]: !!this.mode
                    }
                ]
            }
        }
    }
</script>

<style socped lang="less">
    @import '~varless';
    @prefixCls: k-navbar;
    @link-button-font-size: 30px;
    .@{prefixCls} {
        display: flex;
        align-content: center;
        height: 88px;
        background: @brand-primary;
        color: @fill-base;

        &-left,
        &-title,
        &-right {
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
        }

        &-left{
            padding-left: @h-spacing-md;
            font-size: @link-button-font-size;
            &-icon{
                margin-right: @h-spacing-xs;
                display: inherit;
                .icon{
                    font-size: @icon-size-sm;
                }
            }
        }
        &-title{
            justify-content: center;
            font-size: @link-button-font-size;
            white-space: nowrap;
        }
        &-right{
            justify-content: flex-end;
            font-size: @link-button-font-size;
            margin-right: @h-spacing-md;
        }

        // 透明背景
        &-tran{
            background: transparent;
        }
        // 成功
        &-success{
            background: @brand-success;
        }
        // 失败
        &-error{
            background: @brand-gray-dk;
        }
        &-blue{
            background: @brand-blue;
        }
        &-light {
            background-color: @fill-base;
            color: @color-text-base;
        }
        &-light &-title {
            color: @color-text-base;
        }

    }
</style>

