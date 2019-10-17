//可以运行的对象
function LRUCache(capacity){
  this.capacity=capacity;//容量
  this.obj={};//get set 存储数据
  // pushu splice pop unshift
  this.arr=[];//优先级
}
LRUCache.prototype.get=function(key){//定义get方法
  // 没有-1
  // 处理优先级
  var val = this.obj[key];
  if(val){
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);//index 规定删除项目位置 1 规定删除项目数量
    this.arr.unshift(key);
    return val;
  }else{
    return -1;
  }
}
LRUCache.prototype.put=function(key,value){
  if(this.obj[key]){//已存在
    this.obj[key] = value;//更新值
    // 调整优先级 位置 删除
    var index = this.arr.indexOf(key);
    this.arr.splice(index,1);
    this.arr.unshift(key);
    return;
  }
  if(this.capacity==this.arr.length){//放满了
    var k = this.arr.pop();//弹出最后一个数
    this.obj[k] = undefined;
  }
  this.obj[key] = value;
  this.arr.unshift(key);//放到最前面，空间不够 删除最后的数据 最前面最优先 
}
let cache=new LRUCache(2);
// console.log(cache.capacity);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
cache.put(1,3);
console.log(cache.get(1))
cache.put(4,4);
console.log(cache.get(1))
console.log(cache.get(3))
console.log(cache.get(4))
console.log(cache.obj);