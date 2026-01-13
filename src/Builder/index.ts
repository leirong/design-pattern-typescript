// 建造者模式: 将复杂对象的构建过程抽离并分步骤组织，使对象可以被逐步装配，在不改变构建流程情况下创建不同的表示。

enum RoleEnum {
  /** 管理员 */
  Admin = 'admin',
  /** 用户 */
  User = 'user',
}
enum SexEnum {
  /** 男 */
  Male = 'male',
  /** 女 */
  Female = 'female',
}
class User {
  public name: string
  public age: number
  public sex: string
  public email: string
  public role: RoleEnum
  constructor(name?: string, age?: number, sex?: SexEnum, email?: string, role?: RoleEnum) {
    this.name = name || ''
    this.age = age || 0
    this.sex = sex || SexEnum.Male
    this.email = email || ''
    this.role = role || RoleEnum.User
  }
  setName(name: string) {
    this.name = name
  }
  setAge(age: number) {
    this.age = age
  }
  setSex(sex: SexEnum) {
    this.sex = sex
  }
  setEmail(email: string) {
    this.email = email
  }
  setRole(role: RoleEnum) {
    this.role = role
  }
}

class AdminBuilder {
  private user: User
  constructor() {
    this.user = new User()
  }

  setName(name: string) {
    this.user.setName(name)
    return this
  }
  setAge(age: number) {
    this.user.setAge(age)
    return this
  }
  setSex(sex: SexEnum) {
    this.user.setSex(sex)
    return this
  }
  setEmail(email: string) {
    this.user.setEmail(email)
    return this
  }
  setRole(role: RoleEnum) {
    this.user.setRole(role)
    return this
  }

  build() {
    if (!this.user.name) {
      throw new Error('name is required')
    }

    if (this.user.age < 0 || this.user.age > 150) {
      throw new Error('age error')
    }

    if (!this.user.sex) {
      throw new Error('sex is required')
    }

    if (!this.user.email) {
      throw new Error('email is required')
    }

    if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.user.email)) {
      throw new Error('email format error')
    }

    if (this.user.role !== RoleEnum.Admin) {
      throw new Error('admin role required')
    }
    return this.user
  }
}
