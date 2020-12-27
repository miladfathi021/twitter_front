import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./modules/auth";
import tweet from "@/store/modules/tweet/tweet";
import person from "@/store/modules/person/person";

export default new Vuex.Store({
    modules: {
        auth,
        tweet,
        person
    }
})