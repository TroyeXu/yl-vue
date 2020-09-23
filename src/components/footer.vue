<template>
  <div class="main">
    <button @click="sendMsgToFather">click</button>
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: 'lk-npm-test',
  data() {
    return {
      childMsg: 'childMsg',
    }
  },
  props: {
    msg: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    // 向父组件传值
    sendMsgToFather() {
      this.$emit('child-fun', this.childMsg)
    },
  },
}
</script>
<style lang="scss" scope>
.main {
  text-align: center;
}
</style>