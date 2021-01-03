/*
 * @Author: zhangsai
 * @Date: 2021-01-03 09:52:10
 * @Last Modified by: zhangsai
 * @Last Modified time: 2021-01-03 11:41:32
 * @Description: 登录
 */
<template>
  <div class="bge">
    <div class="login" v-loading="loading">
        <el-form :model="form" size="small" ref="form" :rules="rules"  @keyup.enter ="onSubmit">
            <h3 class="align-center h3">CMS管理系统</h3>
            <el-form-item label="用户名：" prop="loginName">
                <el-input v-model.trim="form.loginName" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input type="password" v-model.trim="form.password" placeholder="请输入密码" @keyup.enter.native="onSubmit"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">登 录</el-button>
            </el-form-item>
        </el-form>
    </div>
  </div>
</template>
<script>
import CommonService from '@/service/common';
export default {
    data() {
        return {
            form: {
                loginName: '',
                password: ''
            },
            rules: {
                loginName: [{required: true, message: '用户名不能为空', trigger: 'change'}],
                password: [{required: true, message: '密码不能为空', trigger: 'change'}],
            },
            loading: false,
        }
    },
    mounted() {},
    methods: {
        onSubmit() {
            this.$refs.form.validate( async valid => {
                if (valid) {
                    this.loading = true;
                    const {resCode, data} = await CommonService.login(this.form);
                    this.loading = false;
                    if (resCode === '0') {
                        this.$store.commit('setUser', data);
                        this.$router.push({name: 'homeIndex'});
                    }
                }
            })
        },

    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.login {
    padding:20px;
    border-radius: 3px;
    width:500px;
    margin:10% auto;
    border:1px solid #eee;
    box-shadow: 0 1px 2px #eee;
}
.h3{
    font-size:24px;
    color:#666;
    padding:10px;
}
</style>
