// 装饰器模式：动态地给一个对象添加一些额外的职责，就增加功能来说，装饰器模式相比生成子类更为灵活。

interface UserService {
  getUserList(): string[]
}

/**
 * 基础用户服务
 */
export class BaseUserService implements UserService {
  getUserList(): string[] {
    console.log('👉 查询用户列表')
    return ['Alice', 'Bob', 'Charlie']
  }
}

/**
 * 抽象装饰器，用于装饰用户服务
 */
abstract class UserServiceDecorator implements UserService {
  protected service: UserService

  constructor(service: UserService) {
    this.service = service
  }

  abstract getUserList(): string[]
}

/**
 * 日志装饰器，用于记录用户服务的调用
 */
export class LoggingUserServiceDecorator extends UserServiceDecorator {
  getUserList(): string[] {
    console.log('👉 记录日志')
    return this.service.getUserList()
  }
}

/**
 * 权限装饰器，用于检查用户是否有调用用户服务的权限
 */
export class AuthUserServiceDecorator extends UserServiceDecorator {
  getUserList(): string[] {
    console.log('👉 检查权限')
    return this.service.getUserList()
  }
}
