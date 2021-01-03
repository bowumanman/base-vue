<template>
    <div class="container">
        <el-container>
            <el-aside class="left" width="250px">
                <div class="logo">CMS管理系统</div>
                <el-menu
                    @select="selectMenu"
                    :default-active="activeUrl"
                    class="el-menu-vertical-demo"
                    :unique-opened="true"
                    background-color="#464c5b"
                    text-color="#fff"
                    active-text-color="#409eff">
                    <el-menu-item index="homeIndex">
                        <span slot="title">我的首页</span>
                    </el-menu-item>
                    <el-menu-item index="yard">
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="room">
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-menu-item index="user">
                        <span slot="title">用户管理</span>
                    </el-menu-item>
                    <el-submenu  index="1">
                        <template slot="title">
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4">选项1</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="main">
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        activeUrl() {
            return this.$route.meta.activeUrl;
        }
    },
    mounted() {},
    methods: {
        selectMenu(name) {
            this.$router.push({name}).catch(() => {})
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.left{
    height: 100vh;
    overflow-y: auto;
    background: #464c5b;
}
.logo{
    width:100%;
    height: 80px;
    line-height:80px;
    color:#f9f9f9;
    font-size:26px;
    text-align: center;
    border-bottom:1px solid #f9f9f9;
}
</style>
