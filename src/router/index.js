import Vue from 'vue';
import Router from 'vue-router';
import AddressAndSupporterInfo from '@/components/AddressAndSupporterInfo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddressAndSupporterInfo',
      component: AddressAndSupporterInfo,
    },
  ],
});
