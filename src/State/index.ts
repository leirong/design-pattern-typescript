// 状态模式: 允许一个对象在其内部状态改变时改变它的行为, 解耦状态和行为, 使得状态的改变不会影响到使用状态的对象

import { sleep } from '../utils/index'

/**
 * 灯的状态接口
 */
export interface LightState {
  handle(context: LightContext): Promise<void>
}

/**
 * 灯的上下文类，维护一个灯的状态对象，并暴露一个request方法调用状态对象的handle方法
 */
export class LightContext {
  private state: LightState
  constructor(initialState: LightState) {
    this.state = initialState
  }
  setState(state: LightState) {
    this.state = state
  }
  async request() {
    await this.state.handle(this)
  }
}

/**
 * 绿灯状态类
 */
export class GreenLightState implements LightState {
  async handle(context: LightContext) {
    console.log('🟢 绿灯亮了，走吧！')
    await sleep(1000 * 10) // 模拟绿灯持续10秒
    context.setState(new YellowLightState())
  }
}

/**
 * 黄灯状态类
 */
export class YellowLightState implements LightState {
  async handle(context: LightContext) {
    console.log('🟡 黄灯亮了，准备停下！')
    await sleep(1000 * 3) // 模拟黄灯持续3秒
    context.setState(new RedLightState())
  }
}

/**
 * 红灯状态类
 */
export class RedLightState implements LightState {
  async handle(context: LightContext) {
    console.log('🔴 红灯亮了，停下！')
    await sleep(1000 * 10) // 模拟红灯持续10秒
    context.setState(new GreenLightState())
  }
}
