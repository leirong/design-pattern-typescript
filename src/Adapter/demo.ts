import { Adaptee, Adapter } from './index'

// 将Adaptee类中的run方法适配为Target类中的call方法
const adapter = new Adapter(new Adaptee())
adapter.pay()
