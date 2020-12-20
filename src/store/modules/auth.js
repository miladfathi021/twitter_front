'use strict';

import AuthService from "../../services/auth/auth.service";
import router from "../../router/router";

const state = {
    user: null,
    apiToken:  null,
    isAuthenticated: !!localStorage.getItem('api_token'),
    inputError: null,
    systemError: null,
}

const getters = {
    user (state) {
        return state.user || JSON.parse(localStorage.getItem('user'))
    },
    apiToken (state) {
        return state.apiToken;
    },
    isAuthenticated (state) {
        return state.isAuthenticated;
    }
}

const mutations = {
    success (state, user) {
        state.user = user;
        state.apiToken = localStorage.getItem('api_token') ?? null;
        state.isAuthenticated = true;
    },
    inputError (state, error) {
        state.inputError = error;
        state.isAuthenticated = false;
    },
    systemError (state, error) {
        state.systemError = error;
        state.isAuthenticated = false;
    },

}

const actions = {
    async login ({ commit }, { data }) {

        let loginData = {
            'username': data.username,
            'password': data.password
        }

        try {
            let user = await AuthService.login(loginData);
            localStorage.setItem('api_token', user.data.data.api_token);
            delete user.data.data.api_token;
            localStorage.setItem('user', JSON.stringify(user.data.data));
            commit('success', user.data.data);
            router.push({ name: 'Home' })
        } catch (e) {
            if (e.response.status === 400) {
                commit('inputError', e.response.data.data);
                localStorage.removeItem('api_token');
                localStorage.removeItem('user');
            } else {
                commit('systemError', e.response.data);
            }
        }
    },

    async signUp ({ commit }, { data }) {

        let signUpData = {
            'name': data.name,
            'email': data.email,
            'password': data.password,
            'password_confirmation': data.passwordConfirmation,
        }

        try {
            let user = await AuthService.signUp(signUpData);
            commit('success', user.data.data);
            localStorage.setItem('api_token', user.data.data.api_token);
            delete user.data.data.api_token;
            router.push({ name: 'Home' })
        } catch (e) {
            if (e.response.status === 400) {
                commit('inputError', e.response.data.data);
            } else {
                commit('systemError', e.response.data);
            }
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