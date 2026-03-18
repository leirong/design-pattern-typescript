/**
 * 等待指定时间
 * @param ms 等待的毫秒数
 * @returns 一个Promise对象，等待指定时间后resolve
 */
export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
