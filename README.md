# @yipai-front-end/choose-to-file

## 介绍

 通过函数直接拉起上传文件能力，使用方法与微信小程序的上传图片 API`wx.chooseMedia`类似，更加便捷、解耦合的在 web 端实现上传文件功能。

 TypeScript 编写，并且具有良好的代码提示，支持 web 环境框架（Vue2、Vue3、React）

## 基本用法

### 安装

```bash
npm i @yipai-front-end/choose-to-file
```

### 使用示例

```js
import { chooseToFile } from '@yipai-front-end/choose-to-file'

async function uploadImg() {
  try {
    let res = await chooseToFile()
    console.log('file', res)
  } catch (err) {
    console.log(err)
  }
}
```

## API

| 属性     | 类型    | 默认值 | 说明                                                                  |
| -------- | ------- | ------ | --------------------------------------------------------------------- |
| multiple | boolean | true   | 是否上传多张图片，为 true `resolve(File[])`，为 false `resolve(File)` |
| accept   | string  | \*/*  | 上传文件类型校验，默认不做校验，与 input accept 一致                  |
