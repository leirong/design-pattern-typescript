import { AppMediator, Component1, Component2 } from './index'

const appMediator = new AppMediator()
const component1 = new Component1(appMediator)
const component2 = new Component2(appMediator)

appMediator.setComponent1(component1)
appMediator.setComponent2(component2)

component1.send('Hello, component2!')
component2.send('Hello, component1!')
