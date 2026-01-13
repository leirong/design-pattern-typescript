import { AbstractFactory, ConcreteFactory } from './index'

class Client {
  private factory: AbstractFactory
  constructor(factory: AbstractFactory) {
    this.factory = factory
  }
  useProductA() {
    const productA = this.factory.createProductA()
    productA.method()
  }
  useProductB() {
    const productB = this.factory.createProductB()
    productB.method()
  }
}

const client = new Client(new ConcreteFactory())
client.useProductA()
client.useProductB()
