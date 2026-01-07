/**
 * 单例模式：确保一个类只有一个实例，并提供一个全局访问点
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
