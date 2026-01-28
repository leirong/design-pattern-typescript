import { BaseUserService, AuthUserServiceDecorator, LoggingUserServiceDecorator } from './index'

const baseUserService = new BaseUserService()
const authUserService = new AuthUserServiceDecorator(baseUserService)
const loggingUserService = new LoggingUserServiceDecorator(authUserService)

console.log(loggingUserService.getUserList())
