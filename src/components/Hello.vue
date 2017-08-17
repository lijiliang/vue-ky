<template>
    <div class="aaa">
        {{msg}}
        <div class="ifelse" v-if="ifelse">if</div>
        <div class="ifelse" v-else="!ifelse">else</div>
        <ul>
            <li v-for="(item, index) in arr">
                {{item}}--{{index}}
            </li>
        </ul>
        <a href="www.baidu.com" v-on:prevent>sad</a>
        <!-- <div :prop="something">v-bind</div> -->
        <img :src="url" :style="{width: '100px'}">
        <input type="text" v-model:trim="text">
        {{text}}
        <span v-pre>{{msg}}</span>
        <span v-cloak>{{msg}}</span>
        <span v-once>this will never change: {{msg}}</span>
        <div ref="wrapper">wrrap</div>
        <span v-bind:title="msg" v-on:click="message">sadf</span>
        <p :class="classss">{{reverMessage}}</p>
        <p v-for="item of items">{{item.message}}</p>
        <p v-for="(value, key, index) of objects" :key="index">{{key}} : {{value}}  -- {{index}}</p>
        <p v-for="n in evenNumber">{{n}}</p>
        <button @click="green">button</button>
        <button v-on:keyup.enter="green">keyup</button>
        <button @click="warn('Form cannot be submitted yet', $event)">button</button>
        <div>
            <input type="text" v-model.trim="msg" placeholder="edit me">
            <input type="checkbox" id="checkbox" v-model="checkbox">
            <label for="checkbox">{{checkbox}}</label>
            <label for="jack"><input type="checkbox" id="jack" value="jack" v-model="checkedNames">jack</label>
            <label for="john"><input type="checkbox" id="john" value="john" v-model="checkedNames">john</label>
            <label for="benson"><input type="checkbox" id="benson" value="benson" v-model="checkedNames">benson</label>
        </div>
        <div class="radio">
            <input type="radio" id="one" value="one" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="two" v-model="picked">
            <label for="two">two</label>
        </div>
        <button v-on:click="show = !show">show</button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>
<script>
    var minix = {
        created: function () {
            console.log('混合对象被调用')
        }
    }
    export default {
        mixins: [minix],
        data () {
            return {
                msg: '   abcd  ',
                html: '<div class="htmls">html</div>',
                show: true,
                ifelse: true,
                arr: ['a', 'b', 'c'],
                url: 'https://cn.vuejs.org/images/logo.png',
                text: '',
                classss: 'class1',
                items: [
                    {message: 'Foo'},
                    {message: 'Bar'}
                ],
                objects: {
                    firstName: 'liang',
                    lastName: 'benson',
                    age: 18
                },
                numbers: [1, 2, 3, 4, 5],
                checkbox: false,
                checkedNames: [],
                picked: 'one'
            }
        },
        created: function () {
            console.log(this)
            console.log('组件钩子被调用')
        },
        methods: {
            message: function () {
                this.text = 'asdfsadfsad'
            },
            green: function (event) {
                console.log('hello' + this.msg + '!')
                if (event) {
                    console.log(event)
                }
            },
            warn: function (message, event) {
                console.log(message, event)
            }
        },
        // 计算属性
        computed: {
            reverMessage: function () {
                return this.msg.split('').reverse().join('')
            },
            evenNumber: function () {
                return this.numbers.filter(function (number) {
                    return number % 2 === 0
                })
            }
        }
    }
</script>

<style scoped lang="less">
    #app{
        padding: 20px 50px;
        font-size: 50px;
    }
    .aaa{
        font-size: 30px;
        .cc{
          font-size: 50px;  
        }
    }
    .fade-enter-active, .fate-leave-active {
    transition: opacity .5s
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>
