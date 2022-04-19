import Vue from "vue";


import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import { Image } from 'element-ui'

Vue.use(Image);
Vue.component(CollapseTransition.name, CollapseTransition)
