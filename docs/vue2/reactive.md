# 数据响应式
问题：

    1.vue是如何做到修改响应式数据属性时，页面会自动更新？
    2.vue中computed时如何知道响应式数据更新了？它如何处理更新、为什么computed有缓存效果。
    3.vue中watch是如何工作的？
## 响应式
1.js中可以通过Object.defineProperty将对象的属性改成get、set的方式，在获取属性值时触发get方法、在设置属性值时触发set方法。
```js
let obj = {name: 'lisi'};

function handleProp(target,key,value){
    Object.defineProperty(target,key,{
        get(){
            console.log('获取属性')
            return value;
        },
        set(newValue){
            if(value !== newValue){
                console.log('设置属性')
                value = newValue
            }
        }
    })
}
Object.keys(obj).forEach(key=> {
    handleProp(obj,key,obj[key])
})
console.log(obj.name);
obj.name = 'zhangsan'

```
