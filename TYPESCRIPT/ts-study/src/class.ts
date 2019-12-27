// 抽象类

abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming this earth...')
  }
}
class Cat extends Animal {
  public run() {
    console.log('跑起来。')
  }
  private eat() {
    console.log('吃起来。。。')
  }
  protected sleep() {
    console.log('睡觉吧')
  }
  makeSound() {
    console.log('miao miao miao')
  }
}
class GTR extends Cat{
  init() {
    this.run()
  }
}
const animal = new Cat()

// class可以作为接口
/**
 * name
//  */
// public static defaultProps() {
  
// }