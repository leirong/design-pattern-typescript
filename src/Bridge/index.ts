// 桥接模式: 将抽象层与实现层解耦, 解决类爆炸问题

// 实现层

export interface NoticeSender {
  send(to: string, message: string): void
}

/** 发送短信 */
export class SmsSender implements NoticeSender {
  send(to: string, message: string): void {
    console.log(`Sending SMS to ${to}: ${message}`)
  }
}

/** 发送彩信 */
export class MmsSender implements NoticeSender {
  send(to: string, message: string): void {
    console.log(`Sending MMS to ${to}: ${message}`)
  }
}

/** 发送邮件 */
export class EmailSender implements NoticeSender {
  send(to: string, message: string): void {
    console.log(`Sending Email to ${to}: ${message}`)
  }
}

// 抽象层

export abstract class Notice {
  constructor(protected sender: NoticeSender) {}

  abstract send(to: string | string[])
}

/** 单用户通知 */
export class SingleNotice extends Notice {
  send(to: string): void {
    this.sender.send(to, '这是一条单用户通知')
  }
}

/** 多用户通知 */
export class MultiNotice extends Notice {
  send(to: string[]): void {
    to.forEach((item) => {
      this.sender.send(item, '这是一条多用户通知')
    })
  }
}

/** 延迟通知 */
export class DelayNotice extends Notice {
  send(to: string): void {
    setTimeout(() => {
      this.sender.send(to, '这是一条延迟通知')
    }, 2000)
  }
}
