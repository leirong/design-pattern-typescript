import { ConcreteHandler1, ConcreteHandler2, ConcreteHandler3 } from './index'

const handler1 = new ConcreteHandler1()
const handler2 = new ConcreteHandler2()
const handler3 = new ConcreteHandler3()
handler1.setNext(handler2).setNext(handler3)
handler1.handle('request')
