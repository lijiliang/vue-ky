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
      <mt-swipe :auto="4000">
        <mt-swipe-item class="slide1">1</mt-swipe-item>
        <mt-swipe-item class="slide2">2</mt-swipe-item>
        <mt-swipe-item class="slide3">3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    import Navbar from 'ux/navbar/navbar'
    import MtSwipe from 'ux/swipe/swipe'
    import MtSwipeItem from 'ux/swipe/swipe-item'
    export default {
        components: {
            Navbar,
            MtSwipe,
            MtSwipeItem
        },
        methods: {
            onleft () {
                console.log('sadf')
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~varless';
    .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
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

