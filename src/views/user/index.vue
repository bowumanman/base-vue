/*
 * @Author: zhangsai
 * @Date: 2021-01-03 11:37:00
 * @Last Modified by: zhangsai
 * @Last Modified time: 2021-01-03 12:05:37
 * @Description: 详情管理
 */
<template>
    <div>
        <div class="title">详情管理</div>
        <el-form v-model="form" class="m-t-20" label-width="80px">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="名称：">
                        <el-input v-model="form.name" placeholder="请输入名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="名称：">
                        <el-input v-model="form.name" placeholder="请输入名称"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="名称：">
                        <el-input v-model="form.name" placeholder="请输入名称"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                name: ''
            },
            loading: false,
        }
    },
    mounted() {}
}
</script>