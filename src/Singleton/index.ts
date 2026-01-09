// 单例模式：确保一个类只有一个实例，并提供一个全局访问点

/**
 * 利用class实现单例模式
 */
export class Singleton {
  private static instance: Singleton
  /**
   * 私有化构造函数，防止外部实例化
   */
  private constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton()
    }
    return this.instance
  }
}

/**
 * 利用ES Module天然单例特性
 */
class SingletonByESModule {
  constructor() {}
}
export default new SingletonByESModule()

/**
 * 利用闭包实现单例模式
 */
export const SingletonByClosure = (function () {
  let instance = null
  class SingletonByClosureClass {
    constructor() {}
  }
  return function () {
    if (!instance) {
      instance = new SingletonByClosureClass()
    }
    return instance
  }
})()
