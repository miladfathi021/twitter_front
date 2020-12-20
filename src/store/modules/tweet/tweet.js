'use strict';

import TweetService from "@/services/tweet/tweet.service";

const state = {
    all: [],
    pagination: []
};

const getters = {
    all (state) {
        return state.all;
    },
    pagination (state) {
        return state.pagination;
    }
};

const mutations = {
    setData (state, data) {
        state.all = data;
    },
    setPagination (state, data) {
        state.pagination = data;
    },
    addData (state, data) {
        state.all.unshift(data);
    },
    addNewData () {
        //
    }
}

const actions = {
    async getAll ({ commit }) {
        let tweets = await TweetService.tweets();
        commit('setData', tweets.data.data.list);
        commit('setPagination', tweets.data.data.pagination);
    },
    async getAllNextPage ({ commit }, url) {
        let tweets = await TweetService.tweetsNextPage(url);
        commit('addNewData');
        return tweets.data;
    },
    async create ({ commit }, { data }) {
        let tweet = await TweetService.create(data);
        commit('addData', tweet.data.data);
        return tweet.data.data;
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}