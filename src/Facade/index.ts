// 外观模式: 为复杂子系统提供一个统一、简单的接口，对外屏蔽内部复杂性。

// 子系统类A
class SubsystemA {
  public operationA(): void {
    console.log('SubsystemA: operationA')
  }
}

// 子系统类B
class SubsystemB {
  public operationB(): void {
    console.log('SubsystemB: operationB')
  }
}

// 外观类
export class Facade {
  private subsystemA: SubsystemA
  private subsystemB: SubsystemB

  constructor() {
    this.subsystemA = new SubsystemA()
    this.subsystemB = new SubsystemB()
  }

  // 提供一个简单的接口，封装子系统的复杂性
  public operation(): void {
    console.log('Facade: operation')
    this.subsystemA.operationA()
    this.subsystemB.operationB()
  }
}
