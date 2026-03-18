import { PayContext } from './index'

const payContext = new PayContext()
payContext.executeStrategy('alipay', 100)
payContext.executeStrategy('wechatpay', 200)
payContext.executeStrategy('unionpay', 300)
payContext.executeStrategy('unknown', 400)
