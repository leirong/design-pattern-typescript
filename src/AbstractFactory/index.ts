// 抽象工厂模式: 提供一个创建一系列相关或相互依赖对象的接口, 而无需指定它们具体的类，保证产品族的一致性
// 比如在暗黑模式下，我们需要创建暗黑模式下的DarkButton和DarkInput，而在亮色模式下，我们需要创建亮色模式下的LightButton和LightInput，这样就可以确保在不同模式下，使用的是对应的产品族，而不是混合使用不同模式下的产品。

export interface IProductA {
  method: () => void
}

export interface IProductB {
  method: () => void
}

/**
 * 产品A的实现类
 */
class ProductA implements IProductA {
  method() {
    console.log('ProductA method')
  }
}

/**
 * 产品B的实现类
 */
class ProductB implements IProductB {
  method() {
    console.log('ProductB method')
  }
}

export abstract class AbstractFactory {
  createProductA(): IProductA {
    throw new Error('createProductA not implemented')
  }
  createProductB(): IProductB {
    throw new Error('createProductB not implemented')
  }
}

export class ConcreteFactory extends AbstractFactory {
  createProductA(): IProductA {
    return new ProductA()
  }
  createProductB(): IProductB {
    return new ProductB()
  }
}
