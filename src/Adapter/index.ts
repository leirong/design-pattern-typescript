// 适配器模式: 把“不兼容的接口”转成“业务期望的接口”

/**
 * 已存在但不兼容的类
 */
export class Adaptee {
  public payment(): void {
    console.log('Adaptee payment')
  }
}

/**
 * 业务期望的统一接口
 */
export interface Target {
  pay(): void
}

/**
 * 适配器类，把 Adaptee 适配成 Target
 */
export class Adapter implements Target {
  constructor(private adaptee: Adaptee) {}
  pay() {
    this.adaptee.payment()
  }
}
