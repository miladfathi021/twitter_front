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
    },
    updateTweet (state, data) {
        state.all.filter(function (tweet) {
            if (tweet.id === data.id) {
                tweet.body = data.body
            }
        });
    },
    deleteTweet () {

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
    },
    async update ({ commit }, { data }) {
        let tweet = await TweetService.update(data);
        commit('updateTweet', tweet.data.data);
    },
    delete ({ commit }, { data }) {
        TweetService.delete(data)
        commit('deleteTweet')
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}