<template>
    <div class="auth">
        <AuthForm />
    </div>
</template>

<script>
import AuthForm from '../components/AuthForm.vue';

export default {
    components: { AuthForm },
    layout: 'auth',
    auth: false,
};
</script>

<style lang="scss" scoped>
.auth {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 200px;
}
</style>
