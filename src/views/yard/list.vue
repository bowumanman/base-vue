/*
 * @Author: zhangsai
 * @Date: 2021-01-03 11:37:00
 * @Last Modified by: zhangsai
 * @Last Modified time: 2021-01-03 12:02:49
 * @Description: 院子列表
 */
<template>
    <div>
        <div class="title">管理1</div>
        <el-form inline v-model="search" class="m-t-20">
            <el-form-item label="名称">
                <el-input v-model.trim="search.name" placeholder="请输入名称..." />
            </el-form-item>
            <el-form-item label="类型">
                <el-input v-model.trim="search.name" placeholder="请输入名称..." />
            </el-form-item>
            <el-button-group>
                <el-button type="primary" @click="search(1)" round>查询</el-button>
                <el-button type="primary" @click="create" round>新建</el-button>
            </el-button-group>
        </el-form>
        <el-table 
            class="m-t-20"
            :data="tableData"
            border
            stripe
        >
            <el-table-column label="ID"></el-table-column>
            <el-table-column label="名称"></el-table-column>
            <el-table-column label="地址"></el-table-column>
            <el-table-column label="时间"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [],
            search: {
                name: ''
            }
        }
    },
    mounted() {},
    methods: {
        create() {
            this.$router.push({name: 'yardDetail', params: {id: '-1'}});
        }
    }
}
</script>