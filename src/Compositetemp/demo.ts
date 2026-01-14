import { Composite, DiscountPriceComposite, HalfPriceComposite, Leaf } from './index'

const root = new Composite()

const branch1 = new HalfPriceComposite()
branch1.add(new Leaf('牛奶', 10))
branch1.add(new Leaf('牛奶', 10))

const branch2 = new DiscountPriceComposite(100, 10)
branch2.add(new Leaf('苹果', 30))
branch2.add(new Leaf('橙子', 40))
branch2.add(new Leaf('香蕉', 20))
branch2.add(new Leaf('榴莲', 100))

const branch3 = new Composite()
branch1.add(new Leaf('面包', 20))

root.add(branch1)
root.add(branch2)
root.add(branch3)

console.log(root.getPrice())
