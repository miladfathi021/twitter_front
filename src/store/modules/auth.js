'use strict';

import AuthService from "../../services/auth/auth.service";

const state = {
    user: null,
    error: null,
}

const getters = {
    user (state) {
        return state.user
    },
    token (state) {
        return state.token
    }
}

const mutations = {
    success (state, { user }) {
        state.user = user;
    },
    fail (state, { error }) {
        state.error = error;
    }
}

const actions = {
    async login ({ commit }, { username, password }) {
        try {
            let user = await AuthService.login(username, password);
            console.log(user);
            console.log('user.data')
            commit('success', 'ddd');
            // commit('success', user.data.);
        } catch (e) {
            console.log(e.response.data.data);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}