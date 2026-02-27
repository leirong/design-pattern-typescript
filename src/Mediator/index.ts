// 中介者模式: 用一个中介者对象来封装一系列的对象交互，使对象不需要显式地相互引用，从而使其耦合松散。

interface Mediator {
  send(sender: Object, message: string): void
}

export class AppMediator implements Mediator {
  private component1: Component1
  private component2: Component2
  constructor() {}

  setComponent1(componentA: Component1) {
    this.component1 = componentA
  }
  setComponent2(componentB: Component2) {
    this.component2 = componentB
  }

  send(sender: Object, message: string): void {
    if (sender === this.component1) {
      this.component2.receive(message)
    } else if (sender === this.component2) {
      this.component1.receive(message)
    }
  }
}

export class Component1 {
  constructor(private mediator: Mediator) {}

  send(message: string) {
    this.mediator.send(this, message)
  }

  receive(message: string) {
    console.log(`UserA received message: ${message}`)
  }
}

export class Component2 {
  constructor(private mediator: Mediator) {}

  send(message: string) {
    this.mediator.send(this, message)
  }

  receive(message: string) {
    console.log(`UserA received message: ${message}`)
  }
}
