// 访问者模式：在不改变已有类的基础上，增加新的操作。适用于对象结构稳定，但需要频繁增加新的操作的场景。

/**
 * 访问者接口，定义了访问不同类型节点的方法
 */
interface Visitor {
  visitImageNode(node: ImageNode): void
  visitSpanNode(node: SpanNode): void
}

abstract class NodeData {
  abstract getInfo(): any
  abstract accept(visitor: Visitor): void
}

export class ImageNode extends NodeData {
  constructor(
    public tag: string,
    public src: string,
  ) {
    super()
  }

  getInfo() {
    return {
      tag: this.tag,
      src: this.src,
    }
  }

  accept(visitor: Visitor) {
    visitor.visitImageNode(this)
  }
}

export class SpanNode extends NodeData {
  constructor(
    public tag: string,
    public text: string,
  ) {
    super()
  }

  getInfo() {
    return {
      tag: this.tag,
      text: this.text,
    }
  }

  accept(visitor: Visitor) {
    visitor.visitSpanNode(this)
  }
}

/**
 * 将节点数据转换成 HTML 字符串的访问者
 */
export class RenderVisitor implements Visitor {
  visitImageNode(ctx: ImageNode) {
    return `<${ctx.tag} src="${ctx.src}" />`
  }
  visitSpanNode(ctx: SpanNode) {
    return `<${ctx.tag}>${ctx.text}</${ctx.tag}>`
  }
}

/**
 * 将节点数据转换成 Markdown 字符串的访问者
 */
export class MarkdownVisitor implements Visitor {
  visitImageNode(ctx: ImageNode) {
    return `![${ctx.tag}](${ctx.src})`
  }
  visitSpanNode(ctx: SpanNode) {
    return `${ctx.text}`
  }
}
