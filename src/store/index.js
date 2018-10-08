import firebase from 'firebase';
import Vuex from 'vuex';
import Vue from 'vue';

import { firebaseMutations } from 'vuexfire';

Vue.use(Vuex);
const config = {
	apiKey: 'AIzaSyBmnxjCkg91-KSpoBl1rrQwlmk14pSV_BY',
	authDomain: 'vue-todo-app-4493a.firebaseapp.com',
	databaseURL: 'https://vue-todo-app-4493a.firebaseio.com',
	projectId: 'vue-todo-app-4493a',
	storageBucket: 'vue-todo-app-4493a.appspot.com',
	messagingSenderId: '139831974030'
};
firebase.initializeApp(config);
const store = new Vuex.Store({
	state: {
		todos: []
	},
	mutations: {
		...firebaseMutations
	}
});
export default store;
