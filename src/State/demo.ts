import { GreenLightState, LightContext } from './index'

const light = new LightContext(new GreenLightState())
// 模拟交通灯循环
setInterval(() => {
  light.request()
}, 1000 * 13) // 每13秒请求一次状态改变，绿灯10秒，黄灯3秒，红灯10秒，总共13秒一个循环
