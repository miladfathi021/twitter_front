import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import auth from "./modules/auth";
import tweet from "@/store/modules/tweet/tweet";

export default new Vuex.Store({
    modules: {
        auth,
        tweet
    }
})