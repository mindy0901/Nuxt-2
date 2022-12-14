<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            router
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="info">Info</el-menu-item>
            <el-menu-item index="help">Help Center</el-menu-item>

            <div class="navmenu__auth__container">
                <div v-if="$auth?.user && $auth?.loggedIn" class="auth__buttons__container">
                    <span class="user__name">{{ $auth?.user?.name }}</span>
                </div>

                <div class="auth__buttons__container">
                    <div
                        v-if="$auth.user && $auth.loggedIn"
                        class="auth__button btn-one"
                        @click="handleLogout"
                    >
                        <span>Logout</span>
                    </div>

                    <NuxtLink v-else to="/auth">
                        <div class="auth__button btn-one">
                            <span>Login</span>
                        </div></NuxtLink
                    >
                </div>
            </div>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '/',
        };
    },
    methods: {
        handleLogout() {
            this.$auth.setUser(false);
            this.$auth.setUserToken(undefined);
            localStorage.clear();

            if (!this.$auth.loggedIn && !this.$auth.user) {
                this.$router.push('/auth');
                this.$message({
                    message: 'Logout successfull',
                    type: 'success',
                    duration: 1000,
                });
            }

            console.log(this.$auth.loggedIn);
            console.log(this.$auth.user);
            console.log(this.$auth.strategy.token.get());
        },
    },
};
</script>

<style lang="scss" scoped>
.navmenu__auth__container {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    padding: 0 20px;
    gap: 20px;
}

.auth__buttons__container {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.auth__button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    min-width: 100px;
    span {
        font-size: 14px;
        font-weight: 400;
    }
}

.user__name {
    color: white;
    font-size: 14px;
}
</style>
