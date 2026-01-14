// 组合模式：将对象组合成树形结构以表示“部分-整体”的层次结构，使得用户对单个对象和组合对象的使用具有一致性

abstract class Component {
  abstract getPrice(): number
}

/**
 * 叶子节点
 */
export class Leaf extends Component {
  constructor(private name: string, private price: number) {
    super()
  }
  getPrice() {
    return this.price
  }
}
/**
 * 组合节点
 */
export class Composite extends Component {
  private children: Component[] = []
  constructor() {
    super()
  }

  public add(child: Component) {
    this.children.push(child)
  }

  getPrice() {
    return this.children.reduce((prev, cur) => prev + cur.getPrice(), 0)
  }
}

/**
 * 组合节点, 第二件半价
 */
export class HalfPriceComposite extends Component {
  private children: Component[] = []
  constructor() {
    super()
  }

  public add(child: Component) {
    this.children.push(child)
  }

  getPrice() {
    if (this.children.length === 0) {
      return 0
    }
    return this.children.reduce((prev, cur, index) => {
      if (index % 2 === 0) {
        return prev + cur.getPrice() / 2
      } else {
        return prev + cur.getPrice()
      }
    }, 0)
  }
}

/**
 * 组合节点, 满减
 */

export class DiscountPriceComposite extends Component {
  private children: Component[] = []
  constructor(private threshold: number, private discount: number) {
    super()
  }

  public add(child: Component) {
    this.children.push(child)
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
