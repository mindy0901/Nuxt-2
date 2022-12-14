<template>
    <el-card class="box-card">
        <el-table
            :data="
                $store.getters['order/getOrderList'].filter(
                    (data) => !search || data.name.toLowerCase().includes(search.toLowerCase())
                )
            "
        >
            <el-table-column label="Id" prop="id" width="100" align="center"></el-table-column>
            <el-table-column label="Name" prop="name" width="300"></el-table-column>
            <el-table-column
                label="Status"
                prop="status"
                width="150"
                align="left"
            ></el-table-column>
            <el-table-column label="Description" prop="description"></el-table-column>
            <el-table-column align="right">
                <template slot="header">
                    <input v-model="search" placeholder="Input to search" class="table__input" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                        Edit
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >
                        Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            search: '',
        };
    },

    async fetch() {
        await this.$store.dispatch('order/fetchOrderList');
    },

    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
    },
};
</script>

<style lang="scss" scoped>
.box-card {
    width: 100%;
}

.table__input {
    outline: none;
    height: 32px;
    width: 100%;
    padding: 0 12px;
    border: 0.5px solid lightgray;
    border-radius: 3px;
    font-size: 14px;
}
</style>
