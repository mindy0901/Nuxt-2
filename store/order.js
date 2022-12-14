export const state = () => ({
    orderList: [],
});

export const getters = {
    getOrderList(state) {
        return state.orderList;
    },
};

export const mutations = {
    setOrderList(state, orderList) {
        state.orderList = orderList;
    },
};

export const actions = {
    async fetchOrderList({ commit }) {
        try {
            const res = await this.$axios.$get(`${process.env.baseUrl}/orders`);
            console.log(res);
            commit('setOrderList', res);
        } catch (e) {
            console.error(e);
        }
    },
};
