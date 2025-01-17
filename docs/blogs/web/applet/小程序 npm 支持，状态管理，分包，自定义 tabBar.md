---
title: 小程序 npm 支持，状态管理，分包，自定义 tabBar
date: 2023-10-28
sidebar: 'auto'
categories:
  - applet
tags:
  - applet
publish: true
---

# 小程序 npm 支持，状态管理，分包，自定义 tabBar

从本节内容开始我们学习微信小程序对 npm 的支持，全局数据共享，即状态管理，小程序项目的分包，实践自定义 tabBar 的具体实践。

- 小程序对 npm 的支持与限制
- 小程序常用的 npm 包 - UI 组件库
- 定制主题样式
- 全局数据共享 - 状态管理
- 小程序的分包加载
- 小程序的独立分包
- 小程序的分包预下载
- 自定义 tabBar

## 一、小程序对 npm 的支持与限制

深入浅出小程序如何使用 npm 第三方包，以及注意事项和最佳实践

目前，从小程序基础库版本 2.2.1 或 以上、及开发者工具 1.02.1808300 或以上开始，小程序支持使用 npm 安装第三方包。从而来提高小程序的开发效率，但在小程序中使用 npm 包有如下 3 个限制。

- 不支持依赖于 Node.js 内置库的包，如 依赖 node 中的核心模块的包（fs、path）类似这些包是无法在小程序中使用的，因为在小程序中没有提供 Node.js 的运行环境。因此依赖于 Node 内置库的包无法在小程序的项目中来使用。
- 不支持依赖于浏览器内置对象的包，如 jQuery 它本身依赖于浏览器的 DOM (文档对象模型) 和 JavaScript 引擎来操作网页元素和执行 JavaScript 代码，但小程序并没有提供浏览器的内置对象。因此依赖于浏览器内置对象的包也无法在小程序正常的运行。
- 不支持依赖于 C++ 插件的包，如在 npm 上负责加密的包会依赖于 C++ 的插件来提高加密的性能，但小程序中并没有提供 C++ 的运行环境。因此在小程序中也不支持那些依赖于 C++ 的插件的包。

总结：npm 上的无数的包，但能供小程序使用的包是非常有限的。在未来需要用到 npm 包时，按照以上三点来判断一下即可知道该包能否使用即可。

> 详细介绍，点击查看官方文档：[小程序开发辅助 - npm 支持(opens new window)](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

## 二、小程序常用的 npm 包 - UI 组件库

国内小程序项目开发常用的 UI 组件库有

| UI 组件库名称                                                                | 特点                                                         | 简介                                                                                                                       |
| :--------------------------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [WeUI(opens new window)](https://weui.io/)                                   | 简洁、易用、美观                                             | WeUI 是微信官方推荐的一个 UI 组件库，具有简洁、易用、美观的特点，适用于快速搭建企业微信小程序。                            |
| [Vant Weapp(opens new window)](https://vant-contrib.gitee.io/vant-weapp/)    | 丰富的组件和功能、支持按需引入                               | Vant Weapp 是有赞开源的一款企业级移动端组件库，包含丰富的组件和功能，支持按需引入，可以满足各种复杂的业务需求。            |
| [Taro UI(opens new window)](https://taro-ui.jd.com/)                         | 基于 Taro 开发框架、提供常用组件和布局、支持自定义主题和样式 | Taro UI 是由 京东 Taro 团队推出的一款基于 Taro 开发框架的组件库，提供一系列常用组件和布局，支持自定义主题和样式。          |
| [ColorUI(opens new window)](https://www.color-ui.com/)                       | 拥有丰富的样式库和组件、简单、易用、高效的设计风格           | ColorUI 是一款拥有丰富的样式库和组件的开源 UI 框架，采用了简单、易用、高效的设计风格，可以快速构建出高质量的企业微信小程序 |
| [Wux Weapp(opens new window)](https://wux-weapp.github.io/wux-weapp-docs/#/) | 基于 WeUI 开发、支持按需引入和自定义主题                     | Wux Weapp 是一款基于 WeUI 开发的高品质小程序 UI 组件库，支持按需引入和自定义主题，使用方便，适合企业级项目的快速开发。     |

注：

以上 UI 组件库中都使用 MIT 开源许可协议（除 ColorUI 使用了 Apache License 2.0 开源许可协议外）适合个人和商业开发者使用。

> 我们接下来以 [Vant Weapp (opens new window)](https://vant-contrib.gitee.io/vant-weapp/)为例，来研究在小程序中如何使用第三方的 UI 组件库来开发项目

### 1、Vant Weapp UI 组件库

官方文档：[https://vant-contrib.gitee.io/vant-weapp/(opens new window)](https://vant-contrib.gitee.io/vant-weapp/)

![image-20230327213314736](https://www.arryblog.com/assets/img/image-20230327213314736.f600800f.png)

### 2、安装 Vant 组件库

在小程序开发中，安装 Vant 组件库主要分为 3 步

- ①、通过 npm 安装
- ②、修改 `app.json`
- ③、构建 npm 包

> 详细的步骤，[查看 Vant 官方文档，快速上手(opens new window)](https://vant-contrib.gitee.io/vant-weapp/#/quickstart)

### 2.1、步骤 1：通过 npm 安装

```shell
# 通过 npm 安装
npm i @vant/weapp -S --production

# 指定版本号
npm i @vant/weapp@版本号 -S --production
```

初始化 npm 包管理配置文件

```shell
# 初始化 npm 包管理配置文件
npm init -y
```

![image-20230327234956086](https://www.arryblog.com/assets/img/image-20230327234956086.9fa6406f.png)

初始化成功后

![image-20230327235404670](https://www.arryblog.com/assets/img/image-20230327235404670.4ec429de.png)

安装 @vant/weapp UI 组件库

```shell
# 通过 npm 安装
npm i @vant/weapp -S --production
```

![image-20230328000129869](https://www.arryblog.com/assets/img/image-20230328000129869.f508fbbf.png)

### 2.2、步骤 2：构建 npm 包

打开微信开发者工具，点击 **工具 -> 构建 npm**，构建完成后，即可引入组件。

![image-20230328001349218](https://www.arryblog.com/assets/img/image-20230328001349218.aa015814.png)

构建完成后，即可引入组件，进行使用

![image-20230328001555799](https://www.arryblog.com/assets/img/image-20230328001555799.8b2dafdd.png)

构建完成后，项目目录中即会增加 `miniprogram_npm` 文件目录

![image-20230328001824358](https://www.arryblog.com/assets/img/image-20230328001824358.9c94d3a6.png)

注：

每次安装完新的包，再次构建 npm 包时，都需要先删除掉之前 `miniprogram_npm` 文件夹，然后再次构建 npm 包，否则会出现不可预见的错误。

### 2.3、步骤 3：修改 app.json

将 `app.json` 中的 `"style": "v2"` 去除，小程序的[新版基础组件 (opens new window)](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。

![image-20230328010626865](https://www.arryblog.com/assets/img/image-20230328010626865.0ad80aca.png)

### 3、引入组件

以 Button 组件为例，只需要在`app.json` 或 `index.json`中配置 Button 对应的路径即可。

> 详细查看 [button 按钮组件文档(opens new window)](https://vant-contrib.gitee.io/vant-weapp/#/button)

在 `app.json` 中引入 vant UI 组件库中的 button 组件

```json
// 通过 npm 安装
// app.json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```

注：

- 整个项目通用或高频使用的组件，就在全局配置文件 `app.json` 中引入
- 只有当前页面使用到的组件，就在当前页面的配置文件 `.json` 中引入

### 4、使用组件

引入组件后，可以在 `pages/index/index` 中直接使用组件

```html
<!--pages/index/index-->
<view class="container">
  <!-- 使用组件 -->
  <van-button type="default" class="btn">默认按钮</van-button>
  <van-button type="primary" class="btn">主要按钮</van-button>
  <van-button type="info" class="btn">信息按钮</van-button>
  <van-button type="warning" class="btn">警告按钮</van-button>
  <van-button type="danger" class="btn">危险按钮</van-button>
</view>
```

效果如下

![image-20230328013904256](https://www.arryblog.com/assets/img/image-20230328013904256.a2e501d0.png)

## 三、定制主题样式

深入浅出 Vant Weapp 实现定制主题

### 1、使用 CSS 变量实现定制主题

Vant Weapp 使用 CSS 变量实现定制主题，关于 CSS 变量的基本用法，参考 [使用 CSS 自定义属性（变量）MDN 官方文档 (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)即可

- **自定义属性**（也被称作**CSS 变量**）：是由 CSS 作者定义的，它包含的值可以在整个文档中重复使用
- **CSS 变量的作用**：同样一个颜色值可能在成千上百个地方被使用到，如果这个值发生了变化，需要全局搜索并且一个一个替换（很麻烦哎～）。因此，自定义属性在某个地方存储一个值，然后在其他许多地方引用它。另一个好处是语义化的标识。

> 基本用法查看 [使用 CSS 自定义属性（变量）MDN 官方文档 (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)即可

声明一个自定义属性，属性名需要以两个减号（`--`）开始，属性值则可以是任何有效的 CSS 值

```css
element {
  --main-bg-color: #000;
}
```

使用一个局部变量时用 [`var()` (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var)函数包裹以表示一个合法的属性值

```css
element {
  background-color: var(--main-bg-color);
}
```

### 2、Vant 样式变量实现定制主题

定制使用的 CSS 变量 与 Less 变量 同名，下面是一些基本的样式变量，所有可用的变量请参考 [配置文件 (opens new window)](https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less)。

> 如下

![image-20230328021650744](https://www.arryblog.com/assets/img/image-20230328021650744.30e61050.png)

所有定制主题的样式名称，在以上文档中查找即可

### 2.1、定制单个组件的主题样式

在 `pages/index/index.wxml` 中写结构

```html
<!--pages/index/index.wxml-->
<view class="container">
  <!-- 定制 button 按钮组件的主题样式 -->
  <van-button class="con-btn">默认按钮</van-button>
</view>
```

在 `pages/index/index.css` 中写样式（能定义的样式名称都在 [配置文件 (opens new window)](https://github.com/youzan/vant-weapp/blob/dev/packages/common/style/var.less)中查找）

```css
.con-btn {
  --button-default-background-color: #07c160;
  --button-default-color: #fff;
  --button-normal-font-size: 38rpx;
  --button-border-radius: 10rpx;
}
```

效果如下

![image-20230328210317976](https://www.arryblog.com/assets/img/image-20230328210317976.f46b378c.png)

### 2.2、定制全局主题样式

在 `app.wxss` 中，写入 CSS 变量，即可对全局生效

```css
page {
  --button-default-background-color: #07c160;
  --button-default-color: #fff;
  --button-normal-font-size: 38rpx;
  --button-border-radius: 10rpx;
}
<!-- 全局定制 button 按钮组件的主题样式 -->
<van-button>默认按钮</van-button>
```

## 四、全局数据共享 - 状态管理

深入浅出状态管理 及 小程序中的状态管理。

全局数据共享 也叫作 “状态管理” ，是为了解决组件之间的数据共享的问题。

### 1、状态管理

小程序中组件间传值的 3 个方式：数据绑定、事件绑定以及获取组件实例。在中小型项目中，使用这 3 种传值方式已经能够满足我们项目的需求。

但是，随着项目的越来越大，组件越来越多，业务逻辑越来越复杂，在组件中频繁的使用这 3 种方式进行传递参数，管理和维护将存在很大的问题。为了解决这些问题

- Vue 中提供了 [Vuex (opens new window)](https://vuex.vuejs.org/zh/)、以及全新的 [Pinia (opens new window)](https://pinia.vuejs.org/zh/)。
- 在 React 中也可以使用 [Redux (opens new window)](https://redux.js.org/)（中文版 [Redux (opens new window)](https://cn.redux.js.org/)）、[MobX (opens new window)](https://mobx.js.org/)（中文版 [MobX (opens new window)](https://cn.mobx.js.org/)） 等类库。

像 Vuex、Pinia、Redux 和 Mobx，都是我们在日常开发中经常使用的全局状态管理工具。**主要用于全局的数据共享，解决组件间状态共享的问题。** 这些工具均采用集中式的方式，存储和管理应用中所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

> 在小程序中，小程序官方也给提供了一个拓展的辅助工具库：[mobx-miniprogram(opens new window)](https://github.com/wechat-miniprogram/mobx)

![image-20230506115404646](https://www.arryblog.com/assets/img/image-20230506115404646.26d502ab.png)

注：

- 图 ① 中，不使用全局状态管理时，在复杂项目中组件和页面之间需要共享数据会很麻烦。如要从最下面的子组件中将数据共享到最上边的组件中，就需要进行数据传递，从最下边的子组件传递给它的父组件再到最上边层层传递非常麻烦
- 图 ② 中，使用全局状态管理（数据共享）后，用一个 store 存储所有共享的数据，项目中任意组件或页面中需要用到数据时，直接在页面取 store 中的数据即可。如果需要向其他页面共享数据，直接在页面或组件中往 store 中挂载数据即可，就不再需要在页面和组件之间进行传递值了，就非常的高效且便捷。

### 2、小程序中的状态管理（全局数据共享方案）

在小程序中，官方推荐一个辅助工具库 [mobx-miniprogram (opens new window)](https://github.com/wechat-miniprogram/mobx)配合 [mobx-miniprogram-bindings (opens new window)](https://github.com/wechat-miniprogram/mobx-miniprogram-bindings)实现全局数据共享，来解决项目中组件间数据共享的问题。

mobx-miniprogram 基于 MobX 4（因为 iOS 9 不支持 MobX 5）实现，因此我们在使用这个类库的时候，可以参考 MobX 的文档，或者查阅小程序给提供的文档：[mobx-miniprogram(opens new window)](https://github.com/wechat-miniprogram/mobx)

使用 mobx-miniprogram 需要安装两个包，分别是 mobx-miniprogram 和 mobx-miniprogram-bindings ，其中：

- mobx-miniprogram 的作用是用来创建 Store 实例对象
- mobx-miniprogram-bindings 的作用是用来把 Store 中的共享数据或者方法，绑定到组件或者页面中使用

> 简单说，mobx-miniprogram 就是是用来创建存储数据的仓库，mobx-miniprogram-bindings 则类似于是一个桥梁、调度者，将数据映射到页面或者组件中进行使用。如下图所示

![image-20230506124113315](https://www.arryblog.com/assets/img/image-20230506124113315.15b25370.png)

注：

上图中，在默认情况下是没有 store ，只有页面和组件。接下来我们创建一个全局数据共享池叫 store 来存储需要全局共享的数据，这个 store 的创建就是由 `mobx-miniprogram` 这个包来实现的，用来存储全局共享的数据。同时还可以定义方法来修改 store 中的数据，但这是 store 与 组件和页面之间是没有任何联系的（即在组件中是没有办法访问 store 中的数据 或 修改数据的方法的）

此时，就需要用到 `mobx-miniprogram-bindings` 这个包，通过这个包就可以将 store 中的数据绑定到组件或者页面中使用，也可以通过这个包将 store 中提供的方法映射到页面或者组件中进行使用。它就相当于一个桥梁、调度者，连接了 store 和 每一个组件之间的关系。

### 3、安装 MobX 相关包 并 构建

如果要在在项目中使用 mobx-miniprogram ，首先需要安装这个两个包。

> 在项目中运行如下命令

```shell
# 通过 npm 安装（项目开发中都需要指定版本号）
npm install --save mobx-miniprogram mobx-miniprogram-bindings
```

注：

在两个包，安装好以后，需要点击 构建 npm，将两个包构建成 npm 的包

如之前有构建过其他 npm 包，需要在 安装完 MobX 的相关包之后，删除 `miniprogram_npm` 目录后，重新构建 npm。如果不重新构建是无法访问到这两个包的。

### 3.1、步骤 1：初始化 npm 包管理配置文件

```shell
# 初始化 npm 包管理配置文件
npm init -y
```

![image-20230506132635133](https://www.arryblog.com/assets/img/image-20230506132635133.159673dd.png)

### 3.2、步骤 2：MobX 相关包的安装

安装 `mobx-miniprogram` 和 `mobx-miniprogram-bindings` 包

```shell
npm i --save mobx-miniprogram mobx-miniprogram-bindings
```

![image-20230506135914625](https://www.arryblog.com/assets/img/image-20230506135914625.6126687d.png)

### 3.3、步骤 3：构建 npm 包

打开微信开发者工具，点击 **工具 -> 构建 npm**，构建完成后，即可使用。

注：如之前有构建过其他 npm 包，需要在 安装完 MobX 的相关包之后，删除 `miniprogram_npm` 目录后，重新构建 npm。如果不重新构建是无法访问到这两个包的。

![image-20230506140955992](https://www.arryblog.com/assets/img/image-20230506140955992.99082740.png)

等待构建中，完成后点击确定即可

![image-20230506141251320](https://www.arryblog.com/assets/img/image-20230506141251320.073447d4.png)

### 4、创建 MobX 的 Store 实例对象

具体的创建及使用方法，详细见官方文档 - [小程序的 MobX 绑定辅助库(opens new window)](https://github.com/wechat-miniprogram/mobx-miniprogram-bindings)

在项目根目录中创建 `store` 文件夹在其中创建 `store.js` ，在文件 `store/store.js` 中

```js
// store/store.js

// 按需导入 mobx-miniprogram 中的 observable 方法
import { observable } from 'mobx-miniprogram'

// 创建一个共享的 Store 实例对象
// 并通过 export 导出，外界就可以导入 store 实例对象，并使用其中数据或方法
export const store = observable({
  // 挂载共享数据字段 numA ，numB
  numA: 1,
  numB: 2,

  // 计算属性，必须添加一个修饰符 get 表示只读，计算属性不能被赋值
  // 因为计算属性的值是不需要被赋值，它的值是依赖于数据字段的变化来自动进行计算的
  get sum() {
    // return 计算属性的值
    return this.numA + this.numB
  },
})
```

### 5、修改 Store 中的数据

定义 action 来修改 Store 中的数据

注：只允许外界调用 Store 中提供的方法来修改 Store 中的数据，不能让外界直接修改 Store 中的数据，直接修改太危险。因此，需要定义 action 方法来修改 Store 中的数据

- ①、从 `mobx-miniprogram` 包中按需导出 `action` 方法
- ②、声明 `action` 的方法，如下

```js
// 按需导入 mobx-miniprogram 中的 action 方法
import { action, observable } from 'mobx-miniprogram'

export const store = observable({
  // 挂载共享数据字段 numA ，numB
  numA: 1,
  numB: 2,
  // 计算属性
  get sum() {
    return this.numA + this.numB
  },

  // actions 方法，用来修改 store 中的数据
  // step 形参，用于接收外界传递的值
  updateNumA: action(function (step) {
    this.numA += step
  }),
  updateNumB: action(function (step) {
    this.numB += step
  }),
})
```

注：

外界使用：只需要导入 store ，调用 updateNumA、updateNumB 这两个方法并传参，就可以修改 numA 和 numB 的值了。

### 6、将 Store 绑定到页面上

①、在页面逻辑头部导入需要的成员

从 mobx-miniprogram-bindings 库中导入 createStoreBindings 方法

- createStoreBindings 方法能够将 store 中的数据映射到当前页面，供页面使用
- 同时会返回一个清理函数的对象，用于取消绑定
- 导入创建的 store 数据仓库

②、在 onLoad 生命周期函数中绑定 Store 的成员 至 当前页面的实例上

createStoreBindings 方法接收两个参数

- 第一个参数：一般为 this，代表需要将数据挂载到当前的 Page 构造器
- 第二个参数：绑定配置项，注意：无论使用哪种绑定方式，都必须提供一个绑定配置对象。

> 详细参数如下表：

| 字段名  | 类型                 | 含义                         |
| :------ | :------------------- | :--------------------------- |
| store   | 一个 MobX observable | 默认的 MobX store            |
| fields  | 数组或者对象         | 用于指定需要绑定的 data 字段 |
| actions | 数组或者对象         | 用于指定需要映射的 actions   |

③、在 onUnload 生命周期函数中清理掉成员

在 `pages/index/index.js` 页面逻辑中

```js
// pages/index/index.js

import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Page({
  // 页面的初始数据
  data: {},

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
    // 在 createStoreBindings() 函数中：this 表示当前页面的实例，{} 配置对象，其中有三个属性
    // this.storeBindings 返回值，将返回值挂载到了自定义属性 storeBindings 上（用于在页面卸载时，用于清理函数对象，取消绑定）
    this.storeBindings = createStoreBindings(this, {
      // 数据源，将 store 中对应的属性或方法绑定到页面的实例上
      store,
      // 将对应的字段绑定到当前的页面进行使用
      fields: ['numA', 'numB', 'sum'],
      // 将对应的方法绑定到当前页面上进行使用
      actions: ['updateNumA', 'updateNumB'],
    })
  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {
    // 清理函数的对象，用于取消绑定
    this.storeBindings.destroyStoreBindings()
  },
})
```

### 7、在页面中使用 Store 中映射过来的数据

在 `pages/index/index.wxml` 中使用 Store

```html
<!--pages/index/index.wxml-->
<view class="container">
  <view>{{ numA }} + {{ numB }} = {{ sum }}</view>

  <button type="primary" bind:tap="handlerBtn" data-step="{{ 2 }}">numA + 2</button>

  <button type="primary" bind:tap="handlerBtn" data-step="{{ -1 }}">numA - 1</button>
</view>
```

在 `pages/index/index.js` 中定义事件处理函数

```js
Page({
  // 点击按钮，事件处理函数
  handlerBtn(e) {
    this.updateNumA(e.currentTarget.dataset.step)
  },
})
```

### 8、将 Store 中绑定到组件上

①、从 mobx-miniprogram-bindings 库中按需导入 storeBindingsBehavior 方法

- storeBindingsBehavior 方法能够将 store 中的数据映射到当前组件，供组件使用
- storeBindingsBehavior 需要和 behaviors 结合使用

②、导入创建的 store 数据仓库

③、创建 storeBindings 定义字段

在项目根目录中创建 `components` 并创建 count 自定义组件

```markdown
icoding-npm
├─ components
│ ├─ count
│ │ ├─ count.js
│ │ ├─ count.json
│ │ ├─ count.wxml
│ │ └─ count.wxss
```

在 `components/count/count.js` 自定义组件逻辑中

```js
// components/count/count.js

// 导入对应成员
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Component({
  // 通过 behaviors 使用 storeBindingsBehavior
  behaviors: [storeBindingsBehavior],
  // 创建 storeBindings 定义字段
  storeBindings: {
    // 数据源
    store,
    // 将对应的字段绑定到当前的组件中进行使用（将计算属性或数据字段进行映射）
    fields: {
      numA: () => store.numA, // 映射数据字段的第一个方式
      numB: (store) => store.numB, // 映射数据字段的第二个方式
      sum: 'sum', // 映射数据字段的第三个方式
    },
    actions: {
      updateNumB: 'updateNumB',
    },
  },

  // 组件的属性列表
  properties: {},

  // 组件的初始数据
  data: {},

  // 组件的方法列表
  methods: {},
})
```

### 9、在组件上使用 Store 中映射过来的数据

在 `components/count/count.wxml` 组件中使用 Store

```html
<!--components/count/count.wxml-->
<text>components/count/count.wxml</text>

<view>{{ numA }} + {{ numB }} = {{ sum }}</view>

<button type="warn" bind:tap="handlerBtnB" data-step="{{ 2 }}">numB + 2</button>

<button type="warn" bind:tap="handlerBtnB" data-step="{{ -1 }}">numB - 1</button>
```

在 `components/count/count.js` 组件逻辑中定义事件处理函数

```js
// components/count/count.js

Component({
  // 组件的方法列表
  methods: {
    // 按钮事件处理函数
    handlerBtnB(e) {
      console.log(e)
      this.updateNumB(e.target.dataset.step)
    },
  },
})
```

注：

运行结果发现，当我们点击自定义组件中的按钮更新数据时，页面中的数据也同步发生了变化。这就是 全局数据共享，即全局状态管理的所呈现的结果了。

## 五、小程序的分包加载

深入浅出微信小程序项目分包加载相关构成、规则、限制、原则等具体实践。

### 1、什么是小程序的分包

分包指：某些情况下，开发者需要将**完整的小程序项目**按需求**划分成不同的子包**，在构建时打包成不同的分包，用户在使用时**按需进行加载**。

### 2、分包的好处

对小程序进行分包，可以优化小程序首次启动的下载时间，以及在多团队共同开发时可以更好的解耦协作。

### 3、分包前项目的构成

在分包前，小程序项目中**所有的页面** 和 **资源**都被打包到了一起，导致整个**项目体积过大**，影响小程序**首次启动的下载时间**。

![image-20230508185718205](https://www.arryblog.com/assets/img/image-20230508185718205.4cf32b4e.png)

### 4、分包后的项目构成

分包后，小程序项目由 **1 个主包 + 多个分包** 组成：

- 主包：一般只包含项目的**启动页面 或 tabBar 页面**、以及所有分包都需要用到的一些**公共资源 / JS 脚本**
- 分包：只包含与当前分包有关的 页面 和 私有资源

![image-20230508190514039](https://www.arryblog.com/assets/img/image-20230508190514039.3b6d6694.png)

### 5、分包的加载规则

- ①、在小程序启动时，默认会**下载主包** 并 **启动主包内页面**。即：tabBar 页面需要放到主包中
- ②、当用户进入分包内某个页面时，**客户端才会把对应分包下载下来**，下载完成后再进行展示

非 tabBar 页面可以按照功能的不同，划分为不同的分包之后，进行按需下载。从而来优化小程序的启动时间。

### 6、分包的体积限制

目前小程序分包大小有以下限制：

- 整个小程序所有分包大小不超过 20M，即：主包 + 所有分包的体积
- 单个分包/主包大小不能超过 2M

> 注：超过对应的体积是无法发布的

### 7、使用分包 - 配置方法

使用分包的小程序项目目录结构

```markdown
icoding-package
├─ .eslintrc.js
├─ app.js
├─ app.json
├─ app.wxss
├─ icon
├─ packageA // 第一个分包
│ └─ pages // 第一个分包的所有页面
│ ├─ cat
│ └─ dog
├─ packageB // 第二个分包
│ └─ pages // 第二个分包的所有页面
│ ├─ apple
│ └─ banana
├─ pages // 主包的所有页面
│ ├─ cart
│ ├─ index
│ ├─ me
│ ├─ menu
│ └─ order
├─ project.config.json
├─ project.private.config.json
├─ sitemap.json
└─ utils
└─ util.js
```

开发者通过在 `app.json` 中新增 `subpackages` 字段声明项目分包结构：

> 当我们写好对应的配置项后，`Ctrl + S` 保存后，微信开发者工具会帮我们自动生成对应的分包结构，无需手动创建。

```json
{
  "pages": [
    // 主包的所有页面
    "pages/index/index",
    "pages/menu/menu",
    "pages/order/order",
    "pages/cart/cart",
    "pages/me/me"
  ],
  "subpackages": [
    // 通过 subpackages 节点声明分包的结构
    {
      "root": "packageA", // 第一个分包的根目录
      "name": "pack1", // 分包的别名
      "pages": [
        // 当前分包下，所有页面的相对存放路径
        "pages/cat/cat",
        "pages/dog/dog"
      ]
    },
    {
      "root": "packageB", // 第二个分包的根目录
      "name": "pack2", // 分包的别名
      "pages": [
        // 当前分包下，所有页面的相对存放路径
        "pages/apple/apple",
        "pages/banana/banana"
      ]
    }
  ]
}
```

注：

通过以上配置文件可以看出

- 最外边的 `pages` 中存放的页面路径为 tabBar 页面，是项目的主包
- `subpackages` 节点中有两个对象（有几个对象就有几个分包），则有两个分包，其中 `pages` 中存放的分包页面路径，相对于分包根目录，为 非 tabBar 页面
- `root` 节点为分包根目录
- `name` 节点为分包别名，分包预下载时可以使用

`subpackages` 中，每个分包的配置有以下几项

| 字段        | 类型        | 说明                                                                                                                                     |
| :---------- | :---------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| root        | String      | 分包根目录                                                                                                                               |
| name        | String      | 分包别名，[分包预下载 (opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/preload.html)时可以使用 |
| pages       | StringArray | 分包页面路径，相对于分包根目录                                                                                                           |
| independent | Boolean     | 分包是否是[独立分包(opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/subpackages/independent.html)          |

### 8、查看分包的体积

在微信开发者工具中，工具栏 -> 详情 -> 基本信息 -> 本地代码 中点击可查看

![image-20230507173032631](https://www.arryblog.com/assets/img/image-20230507173032631.a5e1802c.png)

注：

可查看项目的总体积，主包、分包的体积

### 9、分包的打包原则

- 声明 `subpackages` 后，将按 `subpackages` 配置路径进行打包，`subpackages` 配置路径外的目录将被打包到主包中
- 主包也可以有自己的 pages，即最外层的 pages 字段。
- `subpackage` 的根目录不能是另外一个 `subpackage` 内的子目录，即：分包之间不能互相嵌套
- `tabBar` 页面必须在主包内

### 10、分包的引用原则

- 主包无法引用分包内的私有资源
- 分包之间不能互相引用私有资源
- 分包可以引用主包内的公共资源

## 六、小程序的独立分包

深入浅出微信小程序项目中的独立分包 与 普通分包的区别，应用场景、引用原则、最佳实践等

### 1、什么是独立分包

独立分包是小程序中一种特殊类型的分包，可以独立于主包和其他分包运行。

从独立分包中页面进入小程序时，不需要下载主包。当用户进入普通分包或主包内页面时，主包才会被下载。

![image-20230508191832169](https://www.arryblog.com/assets/img/image-20230508191832169.e3a581a8.png)

注：

- 图 ① 中，当用户打开一个小程序时，默认只能先进入一个主包中，通过主包来启动该小程序，当启动成功后即可从主包进入到其他的分包对应的页面中。默认情况下用户是无法直接通过分包来打开小程序的。
- 但有时候，我们的项目是有需求通过分包也能够直接打开小程序，此时就需要用到独立分包。
- 图 ② 中，小程序可以直接进入到独立分包中，从而来启动小程序，这样用户在不打开主包的前提下就可以通过独立分包启动该小程序。

> 因此，独立分包和普通分包就有区别了 ！

### 2、独立分包 和 普通分包的区别

核心区别在于：是否依赖于主包才能运行

- 普通分包必须依赖于主包才能运行
- 独立分包可以在不下载主包（即：不依赖主包）的情况下，独立运行

### 3、独立分包的应用场景

开发者可以按需将某些具有一定功能独立性的页面配置到独立分包中。

- 当小程序从普通的分包页面启动时，需要首先下载主包；
- 而独立分包不依赖主包即可运行，可以很大程度上提升分包页面的启动速度。
- 注：一个小程序中可以有多个独立分包

> 如：一些活动页面、具体时效性相对独立的页面等

### 4、独立分包 - 配置方法

开发者通过在`app.json`的`subpackages`字段中对应的分包配置项中定义`independent`字段声明对应分包为独立分包。

```json
{
  "pages": [
    // 主包的所有页面
    "pages/index/index",
    "pages/menu/menu",
    "pages/order/order",
    "pages/cart/cart",
    "pages/me/me"
  ],
  "subpackages": [
    // 通过 subpackages 节点声明分包的结构
    {
      "root": "packageA", // packageA 为普通分包
      "name": "pack1",
      "pages": ["pages/cat/cat", "pages/dog/dog"]
    },
    {
      "root": "packageB",
      "name": "pack2",
      "pages": ["pages/apple/apple", "pages/banana/banana"],
      "independent": true // 通过此节点，声明当前 packageB 分包为：独立分包
    }
  ]
}
```

注：

在普通分包的配置对象中增加 `independent` 字段声明，即可将该普通分包 变为 独立分包。可实现在不依赖于主包和其他分包的情况下独立运行

### 5、独立分包的引用原则

独立分包 和 普通分包 以及 主包之间，**是相互隔离的，不能互相引用彼此的资源**

- 主包无法引用独立分包内的私有资源
- 独立分包之间，不能互相引用私有资源
- 独立分包 和 普通分包之间，不能互相引用私有资源

> **注：独立分包中不能引用主包内的公共资源** ，而 普通分包是可以引用主包内的公共资源的

## 七、小程序的分包预下载

深入浅出微信小程项目中分包预下载相关 配置、限制、具体实践等

### 1、什么是分包预下载

在进入小程序某个页面时，由框架自动预下载可能需要的分包，提升进入后续分包页面时的启动速度。

### 2、分包预下载 - 配置

预下载分包行为在进入某个页面时触发，通过在 `app.json` 增加 `preloadRule` 配置来控制。

```json
{
  "pages": [
    "pages/index/index",
    "pages/menu/menu",
    "pages/order/order",
    "pages/cart/cart",
    "pages/me/me"
  ],
  "preloadRule": {
    // 声明分包预下载规则
    "pages/menu/menu": {
      // 触发分包预下载的页面路径
      // packages 表示进入页面后，预下载哪些分包
      // 可通过 root 或 name 指定预下载哪些分包
      "packages": ["packageA"],
      // network 表示在指定的网络模式下进行预下载
      // 可选值为：all（不限网络），wifi（仅 wifi 模式下进行预下载）默认值为：wifi
      "network": "wifi"
    }
  }
}
```

`preloadRule` 中，`key` 是页面路径，`value` 是进入此页面的预下载配置，每个配置有以下几项：

| 字段     | 类型        | 必填 | 默认值 | 说明                                                                      |
| :------- | :---------- | :--- | :----- | :------------------------------------------------------------------------ |
| packages | StringArray | 是   | 无     | 进入页面后预下载分包的 `root` 或 `name`。`__APP__` 表示主包。             |
| network  | String      | 否   | wifi   | 在指定网络下预下载，可选值为： `all`：不限网络， `wifi`：仅 wifi 下预下载 |

### 3、测试分包预下载效果

配置完成后，重新编译，切换至对应的页面即可在控制台中看到对应的打印信息

![image-20230507190948504](https://www.arryblog.com/assets/img/image-20230507190948504.95818030.png)

切换不同的网络模式下，分包预下载效果

![image-20230507191441955](https://www.arryblog.com/assets/img/image-20230507191441955.452bcf94.png)

### 4、分包预下载的限制

同一个分包中的页面**享有共同的预下载大小限额 2M**，限额会在工具中打包时校验。

如，页面 A 和 B 都在同一个分包中，A 中预下载总大小 0.5M 的分包，B 中最多只能预下载总大小 1.5M 的分包。

## 八、自定义 tabBar

自定义 tabBar 可以让开发者更加灵活地设置 tabBar 样式，以满足更多个性化的场景。

> 详细查阅，[微信小程序官方文档 - 自定义 tabBar (opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)，会用到如下相关知识点

- 微信小程序的自定义组件
- Vant UI 组件库
- 自定义组件样式隔离
- Vant UI 样式覆盖
- 自定义组件数据监听器 observers
- 自定义组件 - behaviors
- 全局状态管理（数据共享）Mobx 工具库解决方案

### 1、自定义 tabBar - 实现步骤

自定义 tabBar 步骤：具体步骤见 [微信小程序官方文档 - 自定义 tabBar(opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html)

- 配置信息
- 添加 tabBar 代码文件
- 编写 tabBar 代码

### 2、配置信息

- 在 `app.json` 中的 `tabBar` 项指定 `custom` 字段，同时其余 `tabBar` 相关配置也补充完整。
- 所有 tab 页的 json 里需声明 `usingComponents` 项，也可以在 `app.json` 全局开启。

```json
{
  "pages": [
    "pages/index/index",
    "pages/menu/menu",
    "pages/order/order",
    "pages/cart/cart",
    "pages/me/me"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "艾编程",
    "navigationBarTextStyle": "black"
  },
  "tabBar": {
    "custom": true, // 新增 custom 字段，开启自定义 tabBar 配置
    "color": "#A0A0A0",
    "selectedColor": "#FF5762",
    "borderStyle": "white",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "./icon/index.png",
        "selectedIconPath": "./icon/selected-index.png"
      },
      {
        "pagePath": "pages/menu/menu",
        "text": "菜单",
        "iconPath": "./icon/menu.png",
        "selectedIconPath": "./icon/selected-menu.png"
      },
      {
        "pagePath": "pages/order/order",
        "text": "订单",
        "iconPath": "./icon/order.png",
        "selectedIconPath": "./icon/selected-order.png"
      },
      {
        "pagePath": "pages/cart/cart",
        "text": "购物车",
        "iconPath": "./icon/cart.png",
        "selectedIconPath": "./icon/selected-cart.png"
      },
      {
        "pagePath": "pages/me/me",
        "text": "我",
        "iconPath": "./icon/me.png",
        "selectedIconPath": "./icon/selected-me.png"
      }
    ]
  },
  "sitemapLocation": "sitemap.json",
  "usingComponents": {
    "van-button": "@vant/weapp/button/index"
  }
}
```

注：

既然已经自定义 tabBar 了，原来的 tabBar 配置 `list` 相关信息还需要配置吗 ？

答案是需要，为了保证低版本兼容以及区分哪些页面是 tab 页，tabBar 的相关配置项需完整声明，但这些字段不会作用于自定义 tabBar 的渲染。

### 3、添加 tabBar 代码文件

在项目的根目录中新建 `custom-tab-bar` 文件夹，并创建名为 `index` 的自定义组件

```markdown
icoding-cou-npm
├─ custom-tab-bar
│ ├─ index.js
│ ├─ index.json
│ ├─ index.wxml
│ └─ index.wxss
```

注：

该自定义 tabBar 自定义组件的文件夹名称必须为 `custom-tab-bar` ，文件名也必须为 `index` 才能识别

> 当创建好对应的 tabBar 自定义组件后，页面底部会自动引入自定义 tabBar 组件

### 4、编写 tabBar 代码

用自定义组件的方式编写即可，该自定义组件完全接管 tabBar 的渲染。

另外，自定义组件新增 `getTabBar` 接口，可获取当前页面下的自定义 tabBar 组件实例。

### 4.1、使用 Vant UI 组件的 tabBar 实现

具体使用方法，详细查阅 [Vant UI 组件库 - TabBar 标签栏(opens new window)](https://vant-contrib.gitee.io/vant-weapp/#/tabbar)

在 `app.json` 中引入 tabBar 组件

```json
"usingComponents": {
  "van-tabbar": "@vant/weapp/tabbar/index",
  "van-tabbar-item": "@vant/weapp/tabbar-item/index"
}
```

在 `custom-tab-bar/index.wxml` 组件页面结构中

```html
<!-- custom-tab-bar/index.wxml -->
<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
```

在`custom-tab-bar/index.js` 组件逻辑中

```js
// custom-tab-bar/index.js
Component({
  // 组件的属性列表
  properties: {},

  // 组件的初始数据
  data: {
    active: 0,
  },

  // 组件的方法列表
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail })
    },
  },
})
```

> 此时，页面中就渲染出了 自定义 tabBar 的效果了 ！

### 4.2、改造符合项目需求的自定义 tabBar

详细查阅 [Vant UI 官方文档 - 自定义图标 (opens new window)](https://vant-contrib.gitee.io/vant-weapp/#/tabbar#zi-ding-yi-tu-biao)根据官方示例改造自定义 tabBar

可以通过 slot 自定义图标，其中 icon slot 代表未选中状态下的图标，icon-active slot 代表选中状态下的图标。

```html
<!--custom-tab-bar/index.wxml-->
<van-tabbar active="{{ active }}" bind:change="onChange">
  <van-tabbar-item info="3">
    <!-- icon slot 代表未选中状态下的图标 -->
    <image slot="icon" src="/icon/index.png" mode="aspectFit" style="width: 30px; height: 18px;" />
    <!-- icon-active slot 代表选中状态下的图标 -->
    <image
      slot="icon-active"
      src="/icon/selected-index.png"
      mode="aspectFit"
      style="width: 30px; height: 18px;"
    />
    首页
  </van-tabbar-item>

  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
```

### 4.3、动态循环渲染 自定义 tabBar

将 `app.json` 的 tabBar 节点中的 `list` 节点内容复制到 tabBar 自定义组件的 `data` 节点中

在 `custom-tab-bar/index.js` 的`data`节点中添加 `list` 数组

```js
// custom-tab-bar/index.js
Component({
  // 组件的属性列表
  properties: {},

  // 组件的初始数据
  data: {
    active: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        iconPath: '/icon/index.png',
        selectedIconPath: '/icon/selected-index.png',
      },
      {
        pagePath: '/pages/menu/menu',
        text: '菜单',
        iconPath: '/icon/menu.png',
        selectedIconPath: '/icon/selected-menu.png',
      },
      {
        pagePath: '/pages/order/order',
        text: '订单',
        iconPath: '/icon/order.png',
        selectedIconPath: '/icon/selected-order.png',
      },
      {
        pagePath: '/pages/cart/cart',
        text: '购物车',
        iconPath: '/icon/cart.png',
        selectedIconPath: '/icon/selected-cart.png',
      },
      {
        pagePath: '/pages/me/me',
        text: '我',
        iconPath: '/icon/me.png',
        selectedIconPath: '/icon/selected-me.png',
      },
    ],
  },

  // 组件的方法列表
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail })
    },
  },
})
```

在 `custom-tab-bar/index.wxml` 中动态渲染 tabBar ，tabBar 选中、未选中的颜色值定义

```html
<!--custom-tab-bar/index.wxml-->
<van-tabbar
  active="{{ active }}"
  bind:change="onChange"
  border="{{ false }}"
  inactive-color="#A0A0A0"
  active-color="#FF5762"
>
  <van-tabbar-item wx:for="{{ list }}" wx:key="index">
    <!-- icon slot 代表未选中状态下的图标 -->
    <image
      slot="icon"
      src="{{ item.iconPath }}"
      mode="aspectFit"
      style="width: 30px; height: 18px;"
    />
    <!-- icon-active slot 代表选中状态下的图标 -->
    <image
      slot="icon-active"
      src="{{ item.selectedIconPath }}"
      mode="aspectFit"
      style="width: 30px; height: 18px;"
    />
    {{ item.text }}
  </van-tabbar-item>
</van-tabbar>
```

### 5、渲染自定义 tabBar 的数字徽标

数字徽标渲染，只需要在 `van-tabbar-item` 选项标签上加上 `info` 属性即可

```html
<van-tabbar-item wx:for="{{ list }}" wx:key="index" info="3">
  <!-- 省略部分 ... -->
</van-tabbar-item>
```

优化图标和文字间距的样式，在控制台中检查元素，可查看对应的 CSS 样式

![image-20230508161928553](data:image/png;base64,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)

在 `custom-tab-bar/index.wxss` 中将图标的 `margin-bottom` 重置为 0

```css
/* custom-tab-bar/index.wxss */
.van-tabbar-item {
  --tabbar-item-margin-bottom: 0;
}
```

此时，发现并未生效，原因是存在样式隔离问题，在在自定义组件中使用 Vant Weapp 组件时，解除样式隔离问题

> 详细查阅 [Vant UI 官方文档 - 解除样式隔离(opens new window)](https://vant-contrib.gitee.io/vant-weapp/#/custom-style#jie-chu-yang-shi-ge-chi)

在 `custom-tab-bar/index.js` 中开启 `styleIsolation: 'shared'` 选项

```js
Component({
  options: {
    styleIsolation: 'shared',
  },
})
```

### 6、按需渲染数字徽标 - 仅购物车显示

在 `custom-tab-bar/index.js` 中 `list` 节点里，需要渲染数字徽标的对象中添加 `info` 字段即可

```js
// 组件的初始数据
data: {
  active: 0,
  "list": [
    {
      "pagePath": "/pages/cart/cart",
      "text": "购物车",
      "iconPath": "/icon/cart.png",
      "selectedIconPath": "/icon/selected-cart.png",
      info: 3 // 添加 info 节点，用于按需渲染数字徽标
    },
  ]
},
```

在 `custom-tab-bar/index.wxml` 中判断什么时候显示徽标

```html
<van-tabbar-item wx:for="{{ list }}" wx:key="index" info="{{ item.info ? item.info : '' }}">
  <!-- 省略部分 ... -->
</van-tabbar-item>
```

### 7、购物车数字徽标 - 动态更新

我们将使用上次课中全局状态管理 - 计算属性 sum 的值作为购物车中动态数字的效果来展示，模拟购物车中数量的增加或减少。

> 将 store 中的数据绑定到自定义组件中使用，查阅 [官方文档 - 小程序的 MobX 绑定辅助库 - 在 Component 构造器中使用(opens new window)](https://github.com/wechat-miniprogram/mobx-miniprogram-bindings)

在 `custom-tab-bar/index.js` 中做 store 数据绑定

```js
// custom-tab-bar/index.js

import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'

Component({
  behaviors: [storeBindingsBehavior],
  // 将对应的字段绑定到当前的组件中进行使用（将计算属性进行映射）
  storeBindings: {
    store,
    fields: {
      sum: 'sum',
    },
  },

  // 以上已将 store 中的数据映射到了当前的组件中
  // 如何将 sum 绑定到当前组件中作为一个数字徽标，需要将 sum 的值转存到 data 中 list 的 info 上
  // 可通过数据监听器，来监听 sum 值的变化，一旦 sum 的值发生了变化，就为 info 赋值即可
  observers: {
    sum: function (sum) {
      // console.log(sum)
      this.setData({
        'list[3].info': sum,
      })
    },
  },

  // 省略部分 ...
})
```

### 8、实现自定义 tabBar 页面的切换

在 `custom-tab-bar/index.js` 中实现点击切换 tabBar 页面切换事件处理函数

```js
// custom-tab-bar/index.js

Component({
  // 组件的方法列表
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail })

      // 页面切换
      wx.switchTab({
        // 根据当前页面的索引 找到 对应的页面路径即可
        url: this.data.list[event.detail].pagePath,
      })
    },
  },
})
```

注：

虽然实现了页面的切换，但 tabBar 选中项错乱了 ！

### 9、优化 tabBar 页面切换，选中项错乱问题

我们可以将当前组件 data 节点中 `active: 0,` 选中项索引删除掉，同时将选中项索 `active` 引定义在 store 中，作一个全局数据共享。

在组件中使用选中项索引时，直接使用 store 中定义 active 选中项索引即可。

在 `store/store.js` 中，挂载 `activeIndex` 数据字段，作为 tabBar 选中项的索引。同时添加一个 修改选中项的索引值方法

```js
// store/store.js

import { action, observable } from 'mobx-miniprogram'

export const store = observable({
  // 挂载共享数据字段 numA，numB
  numA: 1,
  numB: 2,

  // tabBar 选中项的索引
  activeIndex: 0,

  // 省略部分 ...

  // 定义修改选中项的索引值 方法
  // index 形参，为外界传递过来新的 index 值
  updateActiveIndex: action(function (index) {
    this.activeIndex = index
  }),
})
```

在 `custom-tab-bar/index.js` 中将 store 中 选中项的索引和修改索引的方法 映射到组件中

```js
// custom-tab-bar/index.js

import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../store/store'

Component({
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      sum: 'sum',
      // 将 store 中 选中项的索引 映射到组件中
      active: 'activeIndex',
    },
    // 映射 store 中 tabBar 选中项的索引的方法
    actions: {
      updateActive: 'updateActiveIndex',
    },
  },

  // 省略部分 ...

  // 组件的初始数据
  data: {
    // active: 0,
    list: [
      // 省略部分 ...
    ],
  },

  // 组件的方法列表
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      // this.setData({ active: event.detail });

      // 调用 store 中修改选中项索引的方法
      this.updateActive(event.detail)

      // 省略部分 ...
    },
  },
})
```
