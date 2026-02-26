// 责任链模式: 解决多竞争者处理同一请求的问题，把处理流程从“写死的代码结构”变成“可拔插的链式结构”

abstract class Handler {
  /**
   * 下一个处理者
   */
  protected next: Handler | null = null

  /**
   * 设置下一个处理者
   * @param handler
   * @returns 返回下一个处理者
   */
  setNext(handler: Handler): Handler {
    this.next = handler
    return handler
  }

  /**
   * 处理请求
   * @param ctx 请求上下文
   */
  handle(ctx: string): void {
    if (this.next && this.process(ctx) !== false) {
      this.next.handle(ctx)
    }
  }

  /**
   * 处理请求的抽象方法，子类实现核心逻辑
   * @param context 请求上下文
   * @returns 是否继续处理，如果返回 false，则停止处理，如果返回 true，则继续处理下一个处理者
   */
  abstract process(context: string): boolean
}

export class ConcreteHandler1 extends Handler {
  process(ctx: string) {
    // do something

    return true
  }
}

export class ConcreteHandler2 extends Handler {
  process(ctx: string) {
    // do something

    return true
  }
}

export class ConcreteHandler3 extends Handler {
  process(ctx: string) {
    // do something

    return true
  }
}
