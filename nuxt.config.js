export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    router: {
        middleware: ['auth'],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'element-ui/lib/theme-chalk/index.css',
        // CSS file in the project
        '@/assets/css/main.css',
        // SCSS file in the project
        '@/assets/css/main.scss',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/element-ui'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
    auth: {
        strategies: {
            local: {
                token: {
                    property: 'access_token',
                    maxAge: 3600,
                    global: true,
                },
                user: {
                    property: false,
                    autoFetch: true,
                },
                endpoints: {
                    login: { url: 'http://chill.voyager-hcm.com/login', method: 'post' },
                    logout: false,
                    user: {
                        url: 'http://chill.voyager-hcm.com/api/users',
                        method: 'get',
                    },
                },
                tokenRequired: true,
                watchLoggedIn: true,
                tokenType: 'JWT',
            },
        },
        redirect: {
            login: '/auth',
            logout: false,
            home: '/',
            callback: false,
        },
        resetOnError: true,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },
};
