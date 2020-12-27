'use strict';

import PersonService from "@/services/person/person.service";

const state = {
    person: null
}

const getters = {
    getPerson (state) {
        return state.person
    }
}

const mutations = {
    SetPerson (state, data) {
        state.person = data;
    }
}

const actions = {
    get ({ commit }, data) {
        let person = PersonService.get(data)
        commit('SetPerson', person);
        return person
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}