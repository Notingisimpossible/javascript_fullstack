// 泛型
//声明泛型变量<T> 它用于捕获开发者传入的参数类型 就可以使用变量T作参数类型和返回值的类型
// function returnItem<T>(para: T) {
//   return para
// }

function swap<T, U>(tuple:[T, U]) {
  return [tuple[0], tuple[1]]
}
swap([7, 'sween'])

// 泛型变量
function getArrayLength<T>(arg:Array<T>) {
  console.log(arg.length)
  return arg
}

// 泛型接口
interface ReturnItem<T> {
  (para: T):T
}

const returnItem: ReturnItem<number> = para => para

// 泛型类
// class Stack<T> {
//   private arr: T[] = []

//   public push(item: T){
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }
// const app = new Stack()
// app.push('2')


// 泛型约束
// type Params = number | string
// class Stack<T extends Params> {
//   private arr: T[] = []

//   public push(item: T){
//     this.arr.push(item)
//   }

//   public pop() {
//     this.arr.pop()
//   }
// }
// const app = new Stack<number>()
// app.push('s')

// 泛型约束与索引类型
function getValue<T extends object, U extends keyof T>(obj: T, key: U) {// U 继承自 T 中的 key
  return obj[key]
}
const a = {
  name: 'wn',
  id: 1
}
getValue(a,'name')


// 使用多重类型进行泛型约束
interface FirstInterface{
  doSomething(): number
}
interface SecondInterface{
  doSomethingElse(): string
}
interface childInterface extends FirstInterface, SecondInterface {

}

class Demo<T extends childInterface> {
  private genericproperty: T 

  useT() {
    this.genericproperty.doSomething()
    this.genericproperty.doSomethingElse()
  }
}

// 泛型与new
// {new (): T} 表示泛型可以被构造
function factory<T>(type: {new (): T}):T {
  return new type()
}