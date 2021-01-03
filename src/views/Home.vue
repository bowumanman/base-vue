<template>
  <div class="home" style="height:3000px">
    <!-- <img alt="Vue logo" src="../assets/image/logo.png" /> -->
    <HelloWorld msg="Welcome to base-vue" />
    <el-button type="primary" @click="login">点击</el-button>
    <el-button type="primary" @click="clear">清除</el-button>
    <el-input v-model="inp" @input="d(onInput, 1000)" />
    <p>{{user}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Serve from '@/service';
// import HelloWorld from '@/components/HelloWorld';
export default {
    name: 'Home',
    data() {
        return {
            data: {},
            inp: '',
            inpPlus: '',
            user: this.$store.state?.user,

        };
    },
    mounted() {},
    methods: {
        async login() {
            const params = {
            loginName: 'admin',
            password: '1234qwer',
            };
            const {resCode, data} = await Serve.login(params);
            if (resCode === '0') {
                this.$store.commit('setUser', {token: '123123'}, data);
            }
        },
        clear() {
            this.$store.commit('clearUser');
        },
        onInput() {
            this.inpPlus = this.inp + '-plus';
        },
        d(fn, time) {
            let timeout = null;
            return function () {
                if (timeout !== null) clearTimeout(timeout);
                timeout = setTimeout(fn, time);
            };
        }
    },
    components: {
        HelloWorld: () => import ('@/components/HelloWorld.vue')
    }
};
</script>
