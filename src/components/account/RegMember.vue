<template>
  <div class="regmember">
      <navbar iconName="left" @onleftClick="onleft" mode="dark">
        <span slot="title">是这一个标题哦，标题啊</span>
        <div slot="right">right</div> 
      </navbar>
        <br>
      <navbar iconName="left" leftContent="返回" @onleftClick="onleft" mode="dark">
        <span slot="title">是这一个标题哦，标题啊</span>
        <div slot="right">right</div> 
      </navbar>
      <br>
      <navbar mode="blue">
          <span slot="title">是这一个标题哦，标题啊</span>
      </navbar>
     <br>
     <h2>基础用法</h2>
    <k-swipe :auto="4000">
        <k-swipe-item class="slide1">1</k-swipe-item>
        <k-swipe-item class="slide2">2</k-swipe-item>
        <k-swipe-item class="slide3">3</k-swipe-item>
    </k-swipe>

    <button @click="openToast">点击弹出 Toast</button>
    <button @click="openToastWithIcon">点击弹出带有 icon 的 Toast</button>
    <button @click="openLoadingToast">点击弹出加载中...</button>
    <button @click="openBottomToast">自定义 Toast 位置</button>
  </div>
</template>

<script>
    import Navbar from 'ux/navbar/navbar'
    import KSwipe from 'ux/swipe/swipe'
    import KSwipeItem from 'ux/swipe/swipe-item'
    import Toast from 'ux/toast/toast.js'
    export default {
        components: {
            Navbar,
            KSwipe,
            KSwipeItem
        },
        methods: {
            onleft () {
                console.log('sadf')
            },
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
</script>

<style scoped lang="less">
    @import '~varless';
    .k-swipe {
        height: 300px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .k-swipe-item {
        line-height: 300px;
      }

      .slide1 {
        background-color: #0089dc;
        color: #fff;
      }

      .slide2 {
        background-color: #ffd705;
        color: #000;
      }

      .slide3 {
        background-color: #ff2d4b;
        color: #fff;
      }
</style>

