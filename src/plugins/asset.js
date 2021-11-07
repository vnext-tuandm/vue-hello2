
export default {
  install(Vue) {
    Vue.prototype.$messages = Vue.observable({
        label: 'test' ,
        types: false
    });
  },
};