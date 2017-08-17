<template>
  <div class="regmember">
      <navbar iconName="left" leftContent="返回" @onleftClick="onleft" mode="dark">
        <span slot="title">是这一个标题哦，标题啊</span>
        <div slot="right">right</div> 
      </navbar>
      <br>
      <navbar mode="blue">
          <span slot="title">是这一个标题哦，标题啊</span>
      </navbar>
  </div>
</template>

<script>
    import Navbar from 'ux/navbar/navbar'
    export default {
        components: {
            Navbar
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
    .regmember {
    }
</style>

