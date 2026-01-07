/**
 * 单例模式：确保一个类只有一个实例，并提供一个全局访问点
 */
class Singleton {
  private static instance: Singleton
  private constructor() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Singleton()
    }
    return this.instance
  }
}

export default Singleton.getInstance()
