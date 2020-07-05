# React
1. 简单
2. 声明式

# 生命周期
react在componentDidMount中获取数据和在componentwillMount获取数据有啥区别？
<!-- 调解阶段  可以被打断-->
  1. componentwillMount
  2. componentWillReceliverProps
  3. shouldComponentUpdate
  4. componentWillUpdate

  5. componentDidMount
  6. componentDidUpdate
  7. componentwillUnmount

# setState
  - setState异步的原因？
    1. setState可能会造成重绘，如果调用一次，如果调用一次马上就去进行重绘，那么调用多次就会造成不必要的性能损失。将多次调用放到一个队列当中进行统一更新。
    
# 性能优化
  - shouldComponentUpdate该钩子函数的执行:
    1. 当前的state和之前的state是否一致(不推荐)(immutable || immer)
    2. 某个值的更新

    - memo PureComponent(进行浅比较，如果是引用类型会有副作用，因为引用类型的数据存储的是地址指针，属性改变并不会改变指针)

# 通信
  1. 父子组件通信
  2. 兄弟组件通信
  3. 跨多层组件通信
  4. 任意组件通信(redux || Event Bus )

  - 父子组件通信：

# HOC(高阶组件)
  - 实现一个函数传入一个组件，然后在函数内部再实现一个函数去扩展传入的组件，最后返回一个新的组件
  (一个组件内部，具备一个可以扩展其他组件的函数，那么这个组件就叫做高阶组件)
  高阶组件作用：更好的复用代码
  <!-- HOC 相比 mixins有什么优点 -->
  - mixins:早期的react中使用mixins,但是mixins有一些缺点：
    1. 隐含一些依赖，假如我在组件中写了某个state并且在mixins中使用了，这样依赖关系就存在了，万一下次别人要移除它，就得去mixins中去查找依赖
    2. 可能存在命名冲突
    3. 滚雪球效应，哪怕你的组件只用一个mixins，但是一个mixins可能被多个组件使用，这样可能会存在需求使得mixins修改原来的函数或者新增更多的函数，增加了维护成本
# 事件机制
  - jsx中循环出来的结构都绑定了事件吗？
    - 当然不是，其实所有的事件都通过事件委托绑定到了document上，这样不仅减少内存消耗，还能在组件挂载和销毁的时候统一订阅和移除事件
  - react有自己的合成事件，所以要阻止react的冒泡要用event.preventDefault,而不能用event.stopProgation

# react路由的两种实现
  1. HashRouter: 利用hash实现路由切换
  2. BrowserRouter: 利用h5 Api实现路由切换

# redux
   - 