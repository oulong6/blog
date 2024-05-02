# 初始化流程
介绍从 new Vue(),到页面展示组件的大致流程。

## 1.调用new Vue()之前到都做了哪些事
1.定义vue构造函数,并通过函数的原型（prototype）绑定一些方法，组件实列可以调这些方法进行对应的流程处理。
```javascript
function Vue (options) {
  this._init(options)
}
initMixin(Vue) // _init 组件初始化，数据响应式处理，调下面4个绑定实列方法。
stateMixin(Vue) // 添加$set、$del、$watch方法。
eventsMixin(Vue) // 添加 $on、$once、$off、$emit
lifecycleMixin(Vue) // _update $forceUpdate $destroy
renderMixin(Vue) // _render调组件的render方法、$nextTick
```
2.添加Vue函数的静态方法 initGlobalAPI

    1. Vue.set Vue.del Vue.observable
    2. Vue.component Vue.filter Vue.directive
    3. Vue.nextTick
    4. Vue.use Vue.extends 等
## 2.使用 new Vue(选项)时执行的大致过程。

1.调initMixin绑定_init方法。主要的功能有：
    1. 初始化组件的一些属性如：

        ```
            vm.$parent = options.parent;
            vm.$children = [];
            vm.$refs = {};
            vm._watcher = null;
        ```
    2. 注册父组件监听的事件。
    3. 为render相关的函数绑定组件this。如_c,解析插槽。
    4. 处理inject.
    5. 处理state，响应式处理。
    6. 挂载组件调$mount()
