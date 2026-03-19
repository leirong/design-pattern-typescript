// 模版方法模式：将抽象方法（不确定的行为）和实体方法（确定的行为）和模版方法（确定的行为）组合在抽象类中，抽象方法延迟到子类中实现，即保证了稳定性又保证了灵活性

/**
 * 模版抽象类，可定义模版方法、抽象方法、实体方法
 */
export abstract class AbstractButton {
  protected text: string
  protected color: string
  protected iconPlacement: 'left' | 'right' = 'left'

  constructor(props: { text: string; color: string; iconPlacement?: 'left' | 'right' }) {
    this.text = props.text
    this.color = props.color
    if (props.iconPlacement) {
      this.iconPlacement = props.iconPlacement
    }
  }

  /**
   * 抽象方法，延迟到子类中实现
   */
  abstract onClick(): void

  /**
   * 抽象方法，延迟到子类中实现
   */
  abstract icon(): string | undefined

  /**
   * 模版方法，定义了模版方法的算法骨架，调用抽象方法
   */
  render() {
    const icon = this.icon()
    const content = this.iconPlacement === 'left' ? `${icon || ''}${this.text}` : `${this.text}${icon || ''}`
    return `<button style="color: ${this.color}" onclick="${this.onClick}">${content}</button>`
  }

  /**
   * 实体方法，提供默认实现，子类可选择性重写
   */
  getProps() {
    return {
      text: this.text,
      color: this.color,
      iconPlacement: this.iconPlacement,
    }
  }
}

/**
 * AddButton 继承了 AbstractButton，重写了 onClick 和 icon 方法，实现了自己的行为，同时复用了 AbstractButton 中的 render 和 getProps 方法
 */
export class AddButton extends AbstractButton {
  constructor() {
    super({ text: '新增', color: 'default', iconPlacement: 'left' })
  }
  onClick() {
    console.log('AddButton clicked', this.text, this.color)
  }
  icon() {
    return '<img src="add-icon.png" />'
  }
}

/**
 * DeleteButton 继承了 AbstractButton，重写了 onClick 和 icon 方法，实现了自己的行为，同时复用了 AbstractButton 中的 render 和 getProps 方法
 */
export class DeleteButton extends AbstractButton {
  constructor() {
    super({ text: '删除', color: 'danger', iconPlacement: 'left' })
  }
  onClick() {
    console.log('DeleteButton clicked', this.text, this.color)
  }
  icon() {
    return '<img src="delete-icon.png" />'
  }
}
