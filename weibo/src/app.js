import Vue from 'vue'
import App from './app.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		goods:['']
	}
})

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from './components/home/home.vue'

const router = new VueRouter({
	mode:'history',
	routes:[
		{path:'/',component:Home}
	]
})

new Vue({
	store,
	router,
	el:"#app",
	render:createElement=>{
		return createElement(App)
	}
})