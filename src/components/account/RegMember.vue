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

    <button @click="showConfirm">显示modal</button>
    <Modal ref="modal" @confirm="confirmClear" text="提示操作"></Modal>
    <br />
    <div class="loader-circle"></div>
    <h2>单独loading效果</h2>
    <Loading />
    <h2>loading 加文字</h2>
    <Loading title="loading..."/>
    <h2>loading 加大</h2>
    <Loading title="loading..." size="large"/>
  </div>
</template>

<script>
    import Navbar from 'ux/navbar/navbar'
    import KSwipe from 'ux/swipe/swipe'
    import KSwipeItem from 'ux/swipe/swipe-item'
    import Toast from 'ux/toast/toast.js'
    import Modal from 'ux/modal/modal'
    import Loading from 'ux/loading/loading'
    export default {
        components: {
            Navbar,
            KSwipe,
            KSwipeItem,
            Modal,
            Loading
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
            },
            showConfirm () {
                this.$refs.modal.show()
            },
            confirmClear () {
                console.log('确定按钮的操作sadfasdf')
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
      .loader-circle{
         width: 60px;
         height: 60px;
         border-radius: 50%;
         display: inline-block;
         text-indent: -9999em;
         border-top: 4px solid #eee;
         border-right: 4px solid #eee;
         border-bottom: 4px solid #eee;
         border-left: 4px solid #108ee9;
         transform: translateZ(0);
         animation: loading 1.1s infinite linear;
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

