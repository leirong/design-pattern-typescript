# AGENTS.md

本文件为在此仓库中工作的 AI 编码代理提供指导规范。

## 项目概述

本项目是一个使用 TypeScript 实现四人帮（GoF）设计模式的教学项目。每个模式位于
`src/` 下独立的 PascalCase 目录中，包含 `index.ts`（实现）和可选的 `demo.ts`
（用法示例）。注释和文档使用中文，代码标识符和错误信息使用英文。

## 构建 / 检查 / 测试命令

**包管理器：** pnpm

```bash
# 安装依赖
pnpm install

# 对整个项目进行类型检查（未配置构建/输出）
pnpm exec tsc --noEmit

# 对单个文件进行类型检查
pnpm exec tsc --noEmit src/Singleton/index.ts

# 使用 ts-node 或 tsx 运行单个 demo 文件（需已安装）
pnpm exec tsx src/Singleton/demo.ts

# 未配置测试框架，未安装 eslint/prettier。
# `pnpm test` 脚本仅为占位，执行后会报错退出。
```

本项目无构建步骤、无代码检查工具、无测试运行器。唯一的开发依赖是 `typescript`。
验证修改时，请对整个项目或修改的特定文件运行 `pnpm exec tsc --noEmit`。

## TypeScript 配置

- **Target：** `es2015`
- **严格模式：** 关闭（未配置）
- **Module：** 未显式设置（根据 target 使用默认值）
- **Includes：** `src/**/*.ts`
- 未设置 `outDir`、`declaration` 或其他编译选项。本项目仅包含源代码，
  不编译为 JS。

## 项目结构

```
src/
  <PatternName>/          # 每个模式一个 PascalCase 目录
    index.ts              # 所有接口、抽象类、具体类
    demo.ts               # 用法示例（从 ./index 导入）
```

已实现的模式：AbstractFactory、Adapter、Bridge、Builder、
ChainOfResponsibility、Composite、Decorator、Facade、FactoryMethod、
Mediator、Observer、Singleton。

## 代码风格规范

### 文件与目录命名

- 目录名：**PascalCase**，与模式名称一致（`ChainOfResponsibility/`、
  `AbstractFactory/`）。
- 文件：`index.ts` 用于实现，`demo.ts` 用于用法示例。

### 格式化

- **缩进：** 2 个空格。
- **分号：** 省略（语句末尾不加分号）。
- **引号：** 优先使用单引号，但用法不完全统一。编辑现有文件时，
  请与周围代码风格保持一致。
- **行长度：** 无强制限制，但通常保持在约 100 字符以内。

### 导入

- 使用**具名导入**（花括号）：`import { Foo, Bar } from './index'`
- 使用**相对路径**（`./index`，本地导入不使用裸模块名）。
- demo 文件仅从同目录的 `'./index'` 导入。
- 不使用默认导出；始终使用具名导出。

### 命名规范

| 元素             | 规范          | 示例                                        |
|------------------|---------------|---------------------------------------------|
| 类               | PascalCase    | `Singleton`、`AdminBuilder`、`SmsSender`    |
| 抽象类           | PascalCase    | `AbstractFactory`、`BaseUserService`        |
| 接口             | PascalCase    | `Target`、`NoticeSender`、`UserService`     |
| 枚举             | PascalCase    | `RoleEnum`、`SexEnum`                       |
| 枚举成员         | PascalCase    | `Admin`、`User`、`Male`、`Female`           |
| 方法 / 函数      | camelCase     | `setNext`、`createProduct`、`getInstance`   |
| 变量 / 参数      | camelCase     | `mediator`、`adaptee`、`sender`             |
| 常量             | camelCase     | （本项目中未使用 UPPER_SNAKE_CASE）         |

- 接口命名：**不要**使用 `I` 前缀。存在一个历史遗留用法（`IProduct`），
  但主流规范是纯 PascalCase（`Target`、`Observer`、`Mediator`、`UserService`）。
- 具体实现类有时使用 `Concrete` 前缀
  （如 `ConcreteHandler1`、`ConcreteFactory`）。

### 类与访问修饰符

- 使用 `private` 修饰内部状态：`private static instance`、`private children`。
- 使用 `protected` 修饰子类需要访问的字段：`protected sender`、`protected next`。
- `public` 可以显式声明也可以省略；请与周围代码保持一致。
- 适当使用**构造函数参数属性**：
  `constructor(private adaptee: Adaptee) {}`。

### 导出

- 使用 `export class`、`export interface`、`export abstract class`、`export const`。
- 内部辅助类可以不导出。
- 整个代码库中不使用默认导出。

### 错误处理

- 使用 `throw new Error('message')` 抛出异常，错误信息使用简洁的英文。
- 验证逻辑使用顺序 if-throw 检查（参见 Builder 模式的 `build()` 方法）。
- 不使用自定义错误类；统一使用内置的 `Error`。

### 注释与文档

- 每个 `index.ts` 以一行**中文注释**开头，概述该模式：
  `// 单例模式：确保一个类只有一个实例...`
- 使用 `/** */` JSDoc 风格注释描述类和方法。
- 行内注释使用 `//`，以中文书写。

### 代码中的常见写法

- **流式 API：** Builder 方法返回 `this` 以支持链式调用。
- 回调中使用**箭头函数**：`.filter((o) => o !== observer)`。
- 使用**模板字符串**进行字符串插值：`` `Sending SMS to ${to}` ``。
- 方法体简洁（通常 1-5 行）。

## Git 规范

- **分支：** `main`
- **远程仓库：** `https://github.com/leirong/design-pattern-typescript.git`
- **提交信息：** 使用中文描述，搭配约定式提交前缀。
  - `feat:` 或 `feat(PatternName):` 用于新模式或新功能
  - `fix:` 用于缺陷修复
  - `chore:` 用于维护性工作

## 新增设计模式

1. 创建 `src/<PatternName>/` 目录（PascalCase）。
2. 添加 `index.ts`，文件开头写一行中文注释描述该模式。
3. 定义接口、抽象类和具体实现类，使用具名导出公开所有公共 API。
4. 添加 `demo.ts`，从 `'./index'` 导入并通过 `console.log()` 演示用法。
5. 运行 `pnpm exec tsc --noEmit` 验证。
6. 使用 `feat(<PatternName>): <中文描述>` 格式提交。
