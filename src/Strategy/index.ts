// 策略模式: 处理一个问题的多种解决方案，客户端可以根据需要选择不同的解决方案

/**
 * 策略接口
 */
export interface Strategy {
  execute(...args: any[]): void
}

/**
 * 策略上下文类，维护一个策略对象，并暴露一个executeStrategy方法调用策略对象的execute方法
 */
export class PayContext {
  private strategyMap: Record<string, Strategy>
  constructor() {
    this.strategyMap = {
      alipay: new AlipayStrategy(),
      wechatpay: new WeChatPayStrategy(),
      unionpay: new UnionPayStrategy(),
    }
  }
  /**
   * 执行指定策略
   * @param strategyName 策略名称
   * @param args 策略参数
   */
  executeStrategy(strategyName: string, ...args: any[]) {
    const strategy = this.strategyMap[strategyName]
    if (strategy) {
      strategy.execute(...args)
    } else {
      console.log('策略不存在')
    }
  }
}

/**
 * 支付宝支付
 */
export class AlipayStrategy implements Strategy {
  execute(...args: any[]) {
    console.log('使用支付宝支付', ...args)
  }
}

/**
 * 微信支付
 */
export class WeChatPayStrategy implements Strategy {
  execute(...args: any[]) {
    console.log('使用微信支付', ...args)
  }
}

/**
 * 银联支付
 */
export class UnionPayStrategy implements Strategy {
  execute(...args: any[]) {
    console.log('使用银联支付', ...args)
  }
}
