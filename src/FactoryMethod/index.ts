// 工厂方法模式: 定义一个用于创建对象的接口, 让子类决定实例化哪一个类. 工厂方法使一个类的实例化延迟到其子类.

export interface IProduct {
  method: () => void
}

export class ProductA implements IProduct {
  method() {
    console.log('productA method')
  }
}

export class ProductB implements IProduct {
  method() {
    console.log('productB method')
  }
}

export class ProductFactory {
  create(type: 'A' | 'B'): IProduct {
    if (type === 'A') {
      return new ProductA()
    } else if (type === 'B') {
      return new ProductB()
    } else {
      throw new Error('type error')
    }
  }
}
