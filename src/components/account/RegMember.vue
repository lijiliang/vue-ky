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

    <h2>隐藏 indicators</h2>
        <k-swipe :show-indicators="false">
            <k-swipe-item class="slide1">1</k-swipe-item>
            <k-swipe-item class="slide2">2</k-swipe-item>
            <k-swipe-item class="slide3">3</k-swipe-item>
        </k-swipe>

    <h2>取消自动播放</h2>
        <k-swipe :auto="0">
            <k-swipe-item class="slide1">1</k-swipe-item>
            <k-swipe-item class="slide2">2</k-swipe-item>
            <k-swipe-item class="slide3">3</k-swipe-item>
        </k-swipe>

    <h2>设置默认显示页</h2>
        <k-swipe :auto="0" :defaultIndex="1">
            <k-swipe-item class="slide1">1</k-swipe-item>
            <k-swipe-item class="slide2">2</k-swipe-item>
            <k-swipe-item class="slide3">3</k-swipe-item>
        </k-swipe>

    <h2>单个幻灯片</h2>
        <k-swipe :show-indicators="false">
            <k-swipe-item class="slide1">单个幻灯片</k-swipe-item>
        </k-swipe>
  </div>
</template>

<script>
    import Navbar from 'ux/navbar/navbar'
    import KSwipe from 'ux/swipe/swipe'
    import KSwipeItem from 'ux/swipe/swipe-item'
    export default {
        components: {
            Navbar,
            KSwipe,
            KSwipeItem
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

