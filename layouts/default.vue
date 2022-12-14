<template>
    <el-container id="app">
        <el-header id="header">
            <NavMenu />
        </el-header>
        <el-main id="main">
            <Nuxt />
        </el-main>
        <el-footer id="footer">
            <div class="fake"></div>
        </el-footer>
    </el-container>
</template>

<script>
import NavMenu from '../components/NavMenu.vue';

export default { components: { NavMenu } };
</script>

<style lang="scss" scoped></style>
