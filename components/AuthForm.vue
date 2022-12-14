<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>Login</span>
        </div>
        <el-form label-position="left" label-width="300px" :model="login">
            <el-form-item label="Email" label-width="100px">
                <el-input v-model="login.email"></el-input>
            </el-form-item>

            <el-form-item label="Password" label-width="100px">
                <el-input v-model="login.password" type="password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">Login</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            login: {
                email: 'duypm@voyager-hcm.com',
                password: 'Angelmaycry9',
            },
        };
    },
    methods: {
        async onSubmit() {
            try {
                await this.$auth
                    .loginWith('local', { data: { user: this.login } })
                    .then((res) => this.$auth.setUserToken(res.headers.authorization));

                if (this.$auth.loggedIn && this.$auth.user) {
                    this.$router.push('/');
                }
            } catch (err) {
                console.log(err);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.clearfix:before,
.clearfix:after {
    display: table;
    content: '';
}
.clearfix:after {
    clear: both;
}
</style>
