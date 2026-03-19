// 组合模式：将对象组合成树形结构以表示“部分-整体”的层次结构，使得用户对单个对象和组合对象的使用具有一致性

/**
 * 抽象组件，定义了叶子节点和组合节点的公共接口，具体的叶子节点和组合节点需要继承这个类并实现getPrice方法
 */
abstract class Component {
  abstract getPrice(): number
}

/**
 * 叶子节点
 */
export class Leaf extends Component {
  constructor(
    private name: string,
    private price: number,
  ) {
    super()
  }
  getPrice() {
    return this.price
  }
}

/**
 * 抽象组合节点，定义了组合节点的公共接口，具体的组合节点需要继承这个类并实现getPrice方法
 */
abstract class CompositeNode extends Component {
  protected children: Component[] = []

  public add(child: Component) {
    this.children.push(child)
  }
  abstract getPrice(): number
}

/**
 * 组合节点，默认全价计算
 */
export class Composite extends CompositeNode {
  constructor() {
    super()
  }

  getPrice() {
    return this.children.reduce((prev, cur) => prev + cur.getPrice(), 0)
  }
}

/**
 * 第二件半价组合节点
 */
export class HalfPriceComposite extends CompositeNode {
  constructor() {
    super()
  }

  getPrice() {
    if (this.children.length === 0) {
      return 0
    }
    return this.children.reduce((prev, cur, index) => {
      if (index % 2 === 0) {
        return prev + cur.getPrice()
      } else {
        return prev + cur.getPrice() / 2
      }
    }, 0)
  }
}

/**
 * 满减组合节点
 */
export class DiscountPriceComposite extends CompositeNode {
  constructor(
    private threshold: number,
    private discount: number,
  ) {
    super()
  }

  getPrice() {
    if (this.children.length === 0) {
      return 0
    }
    const price = this.children.reduce((prev, cur) => prev + cur.getPrice(), 0)
    if (price >= this.threshold) {
      const discountPrice = Math.floor(price / this.threshold) * this.discount
      return price - discountPrice
    }
    return price
  }
}
