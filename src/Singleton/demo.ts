import {Singleton, ESMSingleton, SingletonByClosure} from "./index";

const obj1 = Singleton.getInstance()
const obj2 = Singleton.getInstance()

console.log(obj1 === obj2) // true

const obj3 = ESMSingleton
const obj4 = ESMSingleton

console.log(obj3 === obj4) // true

const obj5 = SingletonByClosure()
const obj6 = SingletonByClosure()
console.log(obj5 === obj6) // true