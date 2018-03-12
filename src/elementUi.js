import Vue from 'vue'
import { Button, Input, Message, Menu, Submenu, MenuItem, MenuItemGroup, Row, Col } from 'element-ui';

Vue.use(Button)
Vue.use(Input)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$message = Message;