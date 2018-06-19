import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import { CheckboxGroup, TimeSelect, Input, Checkbox, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/checkbox.css';
import 'element-ui/lib/theme-chalk/time-select.css';
import 'element-ui/lib/theme-chalk/input.css';
import 'element-ui/lib/theme-chalk/checkbox-group.css';
import 'element-ui/lib/theme-chalk/button.css';


Vue.use(CheckboxGroup);
Vue.use(TimeSelect);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Button);
// Vue.use(TimeSelect);
new Vue({
  render: h => h(App)
}).$mount('#app')
