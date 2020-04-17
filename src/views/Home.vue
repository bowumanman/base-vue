<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/image/logo.png" /> -->
    <HelloWorld msg="Welcome to base-vue" />
    <el-button type="primary" @click="login">点击</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Serve from '@/service';
export default {
  name: 'Home',
  mounted: {},
  methods: {
    async login() {
      const params = {
        username: 'zhangsai',
        password: '123123',
        grant_type: 'password'
      };
      const {resCode, data} = await Serve.login(params);
      console.log(resCode, data);
    }
  },
  components: {
    HelloWorld
  }
};
</script>
