<template>
    <div class="table__container">
        <DataTable v-if="$auth.loggedIn && $auth.user" />
        <el-empty v-else description="No Data"></el-empty>
    </div>
</template>

<script>
import DataTable from '../components/DataTable.vue';

export default {
    components: { DataTable },
    auth: false,
};
</script>

<style lang="scss" scoped>
.table__container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
