import { DelayNotice, EmailSender, MmsSender, MultiNotice, SingleNotice, SmsSender } from './index'

/** 单用户短信通知 */
const singleNotice = new SingleNotice(new SmsSender())
singleNotice.send('13312341234')

/** 单用户彩信通知 */
const singleMmsNotice = new SingleNotice(new MmsSender())
singleMmsNotice.send('13312341234')

/** 单用户邮件通知 */
const singleEmailNotice = new SingleNotice(new EmailSender())
singleEmailNotice.send('13312341234@163.com')

/** 多用户短信通知 */
const multiNotice = new MultiNotice(new SmsSender())
multiNotice.send(['13312341234', '13312341235'])

/** 多用户彩信通知 */
const multiMmsNotice = new MultiNotice(new MmsSender())
multiMmsNotice.send(['13312341234', '13312341235'])

/** 多用户邮件通知 */
const multiEmailNotice = new MultiNotice(new EmailSender())
multiEmailNotice.send(['13312341234@163.com', '13312341235@163.com'])

/** 延迟短信通知 */
const delaySmsNotice = new DelayNotice(new SmsSender())
delaySmsNotice.send('13312341234')

/** 延迟彩信通知 */
const delayMmsNotice = new DelayNotice(new MmsSender())
delayMmsNotice.send('13312341234')

/** 延迟邮件通知 */
const delayEmailNotice = new DelayNotice(new EmailSender())
delayEmailNotice.send('13312341234@163.com')
