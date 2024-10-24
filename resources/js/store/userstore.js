import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    header: 'header test',
    body: 'body2',
    footer: 'footer',
    name: "Welcome",
    filename:"mouse"
  }),
  actions:{
  	adme(a){
  	this.header = a;
  	this.filename = a;
  }
  }
});


