import { Observer1, Observer2, Subject } from "./index"


const subject = new Subject()
const observer1 = new Observer1()
const observer2 = new Observer2()

subject.on(observer1)
subject.on(observer2)
subject.emit()