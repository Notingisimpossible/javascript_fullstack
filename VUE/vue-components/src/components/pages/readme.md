## provide inject
- 
```
App.vue 页面数据
provide() {
    return {
      app: this
    }
  },
  data() {
    return {
      userInfo: {
        name: 'wd',
        age: 21,
        sex: 'man'
      }
    }
  }

其它页面调用数据
export default {
  inject: ['app'] //app指向App的作用域
}  
```
