<template>
  <div class="bgd_img">
    <loading v-if="hide"></loading>
    <section v-if="typeof (this.$route.params.uid) == 'string'">
      <h2>
        <span>当前页面：{{ this.$route.params.uid }}</span>
      </h2>
      <h2>
        <span>跳转至</span>
        <span class=" cursor-brown" @click="openNewWindow">{{ this.$route.params.uid + 1 }}</span>
      </h2>
    </section>
    <button class="middle" @click="visit_space">
      访问space
    </button>
  </div>
</template>

<script>

import {
  get_space,
} from "@/api";
export default {
  data() {
    return {
      hide: true,
    };
  },
  methods: {
    async visit_space() {
      let result = await get_space()
      if (result.code == 1) {  //已登录成功
        let toPath = "/space";
        this.$router.push(toPath);
      }
      else { //未登录
        let toPath = "/login"
        this.$router.push(toPath);
        alert(result.msg)
      }
    },
    openNewWindow(e) {
      let uid = e.target.innerText
      let routeUrl = this.$router.resolve({
        path: "/home/" + uid,
      })
      window.open(routeUrl.href, '_blank')
    },
    loadPageData: function () {
      console.log(this.$route.params.uid)
      // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
      this.hide = false
    },
  },
  mounted() {
    const me = this
    me.loadPageData()
  }
};
</script>


<style scoped>
.middle {
  position: absolute;
  top: 50%;
  right: 50%;
  height: 5vh;
  background-color: rgb(212, 27, 27) f;
  box-shadow: 5px 5px 5px rgba(191, 16, 16, 0.1);
}

.bgd_img {
  background: url("./img/ff7.png");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 80%;
}

.cursor-brown {
  cursor: pointer;
  color: brown;
}
</style>


