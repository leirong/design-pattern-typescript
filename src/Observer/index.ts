// 观察者模式: 定义了一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并自动更新。

/**
 * 被观察者
 */
export class Subject {
  private observers: Observer[] = []

  /**
   * 注册观察者
   * @param observer 观察者
   */
  on(observer: Observer) {
    this.observers.push(observer)
  }

  /**
   * 注销观察者
   * @param observer 观察者
   */
  off(observer: Observer) {
    this.observers = this.observers.filter((o) => o !== observer)
  }

  /**
   * 通知所有观察者
   */
  emit() {
    this.observers.forEach((observer) => observer.update())
  }
}

/**
 * 观察者接口
 */
interface Observer {
  update(): void
}

/**
 * 观察者1
 */
export class Observer1 implements Observer {
  update() {
    console.log('👉 观察者1收到通知')
  }
}

/**
 * 观察者2
 */
export class Observer2 implements Observer {
  update() {
    console.log('👉 观察者2收到通知')
  }
}

const subject = new Subject()
const observer1 = new Observer1()
const observer2 = new Observer2()

subject.on(observer1)
subject.on(observer2)
subject.emit()
