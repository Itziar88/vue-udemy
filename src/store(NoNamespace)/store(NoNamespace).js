import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules(NoNamespace)/counter(NoNamespace).js';

import actions from './actions(NoNamespace)';
import getters from './getters(NoNamespace)';
import mutations from './mutations(NoNamespace).js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0,
    },
    getters,
    mutations,
    actions,
    modules: {
        counter,
    }
});