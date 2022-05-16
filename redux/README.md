# WheelAwesome

## mini-redux

### 前置概念
#### reducer
- 和Array.prototype.reduce是一样的,所以叫reducer
- 是一个纯函数，参数为state,和action,action就是dispatch的参数
- 执行过程：根据action中的type来执行对应state的处理逻辑，并且返回处理后的state

### 使用方法
  - const store=createStore(reducer,applyMiddleware(middlewares))
  - createStore返回 subscribe,dispatch,getState这三个方法

### 引入middlewares
- 因为redux只能接受plain object的action，对于其他的类型的action，需要通过middlewares转换为plain object
- redux通过applyMiddleware来引入middlewares
- applyMiddleware以函数柯里化方式分别传入middlewares,createStore,reducer，提供给middleware enhance redux，传入的middleware是可以为多个的，以函数组合的方式来执行middlewareChain