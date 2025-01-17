---
title: ECMAScript、ES6 简史，let、const、var 区别和应用
date: 2023-10-30
sidebar: 'auto'
categories:
  - ES6
tags:
  - ES6
publish: true
---

# ECMAScript、ES6 简史，let、const、var 区别和应用

很开心当我们已经把 JavaScript 核心基础到高级进阶部分的内容已全部学完，从本节开始我们将进入到 ES6~最新版本的学习，这也将是我们未来项目开发每天都会用到的。

**之前有同学经常问到的一些疑问：**

- 我是一名前端小白，刚接触前端不久，学习了一些 JavaScript 语法，但发现在网上看一些技术文章或一些开源项目的时候，很多语法根本就看不懂。
- 我是一名求职者，正打算成为一名前端工程师，但面试过程中每次都会被问到一个问题，你对前端基础了解多少呢 ？你对 ES 新特性掌握了多少呢 ？每次遇到这些问题总是有些力不从心。
- 我是一名初入职场的菜鸟，已经掌握了一些前端开发的技能，正打算在公司大展拳脚，确发现公司里边大牛写的一些语法根本看不懂，甚至都有些怀疑我之前学习的是假的 JavaScript 吗 ？
- 我是一名技能党，喜欢最求最新的语法，最炫酷的技术，时刻走在技术的最前沿励志做一名技术的弄潮儿，想了解 ES 又出现了哪些新特性以及如何使用这些新特性在我的项目中编写出最炫酷的代码，希望知道 ES 又有哪些新特性呢 ？

其实产生的这些情况的产生都是因为对`ES`的新特性使用方式不熟悉而产生的一些尴尬情况。

> 那么到底什么是`ES` ？`ES`和`JS`又有什么关系呢 ？

## 一、什么是 ES

我们首先来看 ECMA 是什么

ECMA，读音类似“埃科妈”，是欧洲计算机制造商协会（European Computer Manufacturers Association）的简称，是一家国际性会员制度的信息和电信标准组织。1994 年之后，由于组织的标准牵涉到很多其他国家，为了体现其国际性，更名为 Ecma 国际（Ecma International），因此 Ecma 就不再是首字母缩略字了。

了解了这段历史，为了技术书写的专业性，如果文章中提到 Ecma 的时候，**可以写成 `Ecma` 或者 `ecma`，不要写成全大写的 `ECMA`**，除非是 ECMAScript 或 `ECMA-XXX` 这类专有名词。

![image-20221004231157607](data:image/png;base64,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)

**什么是 Javascript?**

1995 年，著名的网景公司（Netscape）的 Brendan Eich 开发了一种脚本语言，最初命名为 Mocha，后来改名为 LiveScript，最后为了蹭当时火热的 Java 热度重命名为了 JavaScript。

**什么是 ECMAScript?**

了解了 Ecma 国际和 JavaScript，就方便了解 ECMAScript 了，ECMAScript 是一种由 Ecma 国际在标准 ECMA-262 中定义的 脚本语言 规范。这种语言往往被称为 JavaScript 或 JScript ，但实际上 JavaScript 和 JScript 是 ECMA-262 标准的实现和扩展。

一句话总结 ES

ES 是指 ECMAScript，Ecma 是一个专门为技术制定标准的组织。ECMAScript 是由 Ecma 国际通过 `ECMA-262` 标准化的脚本程序设计语言。

- ECMAScript 是一种标准或者说叫做一种规范
- JavaScript 是 ECMAScript 的一种实现，也就是说 JavaScript 是一门遵循了 ECMAScript 语言规范而设计的编程语言

![image-20221003161351578](data:image/png;base64,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)

### 1、什么是神秘的 ECMA-262

Ecma 国际的标准都会以 `Ecma-Number` 命名，ECMA-262 就是 ECMA 262 号标准，具体就是**指 ECMAScript 遵照的标准**。1996 年 11 月，网景公司将 JavaScript 提交给 Ecma 国际进行标准化。ECMA-262 的第一个版本于 1997 年 6 月被 Ecma 国际采纳。

Ecma 国际制定了许多标准，而 ECMA-262 只是其中的一个，所有标准列表查看

[https://www.ecma-international.org/publications-and-standards/standards/(opens new window)](https://www.ecma-international.org/publications-and-standards/standards/)

**截止 2022 年 12 月，最新的 Ecma 标准已经更新到了 ECMA-422**

![image-20221229160838283](https://www.arryblog.com/assets/img/image-20221229160838283.a353a07e.png)

Ecma 标准涉及的类别非常多，官网提供了按照类别和最新修改排序的列表，我们来看看 [ECMA-262 (opens new window)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)属于哪个类别：

![image-20221004232231312](https://www.arryblog.com/assets/img/image-20221004232231312.3365d3b3.png)

**ECMA-262**属于**“软件工程与接口”**类别，该类别截止目前一共有 13 个标准

### 2、语法提案的批准流程

任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。

一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。

- Stage 0 - Strawman（展示阶段）
- Stage 1 - Proposal（征求意见阶段）
- Stage 2 - Draft（草案阶段）
- Stage 3 - Candidate（候选人阶段）
- Stage 4 - Finished（定案阶段）

一个提案只要能进入 Stage 2，就差不多肯定会包括在以后的正式标准里面。ECMAScript 当前的所有提案，可以在 TC39 的官方网站[GitHub.com/tc39/ecma262 (opens new window)](https://github.com/tc39/ecma262)查看。

### 3、探秘 TC39 神秘组织

TC39 是 Technical Committee 39 的简称（[点击查看，该组织官方介绍 (opens new window)](https://www.ecma-international.org/technical-committees/tc39/)），是**制定 ECMAScript 标准的委员会**。

TC39（Technical Committee 39）是推进 ECMAScript 发展的委员会。其会员都是公司。TC39 定期召开会议，会议由会员公司的代表与特邀专家出席。

由各个主流浏览器厂商的代表构成，主席团三人分别来自 Bloomberg、Igalia 和 Microsoft，下设三个工作组（task group） [TC39-TG1（通用语言） (opens new window)](https://www.ecma-international.org/task-groups/tc39-tg1/)、 [TC39-TG2（国际化 API 规范） (opens new window)](https://www.ecma-international.org/task-groups/tc39-tg2/)、[TC39-TG3（安全） (opens new window)](https://www.ecma-international.org/task-groups/tc39-tg3/)。

- TC39-TG1 工作组主要工作是通用、跨平台、供应商中立的编程语言 ECMAScript*®* （JavaScriptTM>） 的标准化。这包括语言语法、语义以及支持该语言的库和补充技术。
- TC39-TG2 工作组 ECMAScript® 国际化 API 标准。支持需要适应不同人类语言和国家/地区使用的语言和文化约定的程序。
- TC39-TG3 工作组 ECMAScript*®* （TM） 安全模型对当前和未来不断变化的威胁形势有效。

我们经常会看到类似的新闻：XX 公司成为 Ecma TC39 成员。想要加入 TC39 会议，必须先成为 Ecma 会员， [点击查看，目前已经加入 Ecma 的成员 (ecma-international.org)(opens new window)](https://www.ecma-international.org/about-ecma/members/)

![image-20221005002910480](https://www.arryblog.com/assets/img/image-20221005002910480.b8dfa133.png)

以上企业为**普通会员**：在大会上有表决权，行使附则和规则中规定的其他专有权

![image-20221005003624245](https://www.arryblog.com/assets/img/image-20221005003624245.0b7f38ac.png)

![image-20221005003714156](https://www.arryblog.com/assets/img/image-20221005003714156.b63e80ba.png)

以上企业为**准会员**：在大会上没有表决权

### 4、如何加入 Ecma 组织成员

应 Ecma 秘书长的邀请，来自非成员公司的专家可以参加 Ecma 小组，例如熟悉工作方式。要定期参加，组织必须加入 Ecma 作为成员。[点击查看官方加入方式(opens new window)](https://www.ecma-international.org/about-ecma/join-ecma/)

![image-20221005004959828](https://www.arryblog.com/assets/img/image-20221005004959828.50d5443a.png)

| 会员类别                                       | 年费（CHF）瑞士法郎 | 约合人民币（CNY） | 会员数量 | 权限                                              |
| :--------------------------------------------- | :------------------ | :---------------- | :------- | :------------------------------------------------ |
| 普通会员                                       | 70’000.-            | 508086.25         | 9        | 在大会上有表决权 行使附则和规则中规定的其他专有权 |
| 准会员                                         | 35’000.-            | 254043.13         | 14       | 在大会上没有表决权                                |
| 中小企业成员                                   | 17’500.-            | 127021.56         | 6        | /                                                 |
| SPC 成员（小型私营公司或其他合法的营利性组织） | 3’500.-             | 25404.31          | 10       | /                                                 |
| 非营利组织（NFP）                              | 0.-                 | 0                 | 42       | /                                                 |

> 详细规则和细节，[查看官方即可(opens new window)](https://www.ecma-international.org/about-ecma/join-ecma/)

### 5、ECMAScript 版本

ECMAScript = 由 ECMA 这个标准化组织制定的一个语言标准

语言标准就是：语法 和 API

- 语法：如，规定了如何声明变量、如何声明常量、如何声明函数还规定了我们有哪些数据类型（基本数据类型，应用数据类型等 ... 还有其他很多东西）
- API：如，方法和函数（如数组的方法，对象，全局的 ...）

从 2015 年开始 ECMA 组织决定每一年都会发布一个新的版本，这个新的版本就会包括：ES 新特性，用于语法的升级或弥补之前一些语法的缺陷。

从命名上看，ES6 被命名为 ECMAScript2015，通过命名可以体现出当前这个版本所对应的年份。所以我们经常说的 ES6 和 ES2015 就指的是同一个版本，以后每一年发布的版本我们都会使用年份去命名。

- 按 ES 的命名方式：ES6 -> ES7 -> ES8 -> ES9 -> ... = 这些都可以统称为 ES6+
- 按年份的命名方式：ES2015 -> ES2016 -> ES2017 -> ES2018 -> ...

![image-20221003182026633](https://www.arryblog.com/assets/img/image-20221003182026633.c8398b60.png)

不论使用哪一种命名方式都是可以的，都不重要，只要我们清楚他们对应的方式就 OK 的

- 比如 6 对应的 2015 ，7 对应的 2016 即可
- 当我们看到对应的文章或描述的时候能对应上，知道别人在讲什么就好
- 同时也需要知道 ES6 才是 ES6+的基础，如：ES7、ES8、ES9 本质都是在 ES6 的基础上扩展的语法或 API（升级或弥补之前一些语法的缺陷）

> 我们学习的重心还是要放在 ES6 上，不要本末倒置就好

每年的 ES 新版本都会引入很多新特性，如下：

| 版本           | 发布时间 | 主要更新内容                                                                                                                                                                                                                                                                                                                                                       |
| :------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ES6（ES2015）  | 2015 年  | 改动最多，具有里程碑意义 新增变量 let 和 const，箭头函数 新增数组方法，如：map、filter 等 解构赋值，快速复制数组和对象，模板字符串 模块化，面向对象，Promise 等                                                                                                                                                                                                    |
| ES7（ES2016）  | 2016 年  | 数组扩展：`Array.prototype.includes()` ，幂运算符                                                                                                                                                                                                                                                                                                                  |
| ES8（ES2017）  | 2017 年  | 异步编程解决方案 新增 async、await 对象扩展：`Object.values()` ，`Object.entries()` 对象属性描述：`Object.getOwnPropertyDescriptors()` 字符串扩展：`String.prototype.padStart()`，`String.prototype.padEnd()` 尾逗号 Trailing commas                                                                                                                               |
| ES9（ES2018）  | 2018 年  | 异步迭代：`for await of` ，`Symbol.asyncIterator` 正则表达式扩展：dotAll，具名组匹配，后行断言 对象扩展：Rest & Spread Promise 扩展：`Promise.prototype.finally()` 字符串扩展：放松模板字符串文字限制                                                                                                                                                              |
| ES10（ES2019） | 2019 年  | 对象扩展：`Object.fromEntries()` 字符串扩展：`String.prototype.trimStart()` ，`String.prototype.trimEnd()` 数组扩展：`Array.prototype.flat()`，`Array.prototype.flatMap()` 修订 `Function.prototype.toString()` 可选的 Catch Binding：省略 catch 绑定的参数和括号 JSON 扩展：JSON superset，`JSON.stringify()`增强能力 Symbol 扩展：`Symbol.prototype.description` |
| ES11（ES2020） | 2020 年  | 全局模式捕获：`String.prototype.matchAll()` 动态/按需导入：`Dynamic import()` 新的原始数据类型：BigInt Promise 扩展：`Promise.allSettled()` ，`allSettled() vS all()` 全局对象：globalThis 可选链：Optional chaining 空值合并运算符：Nullish coalescing Operator                                                                                                   |
| ES12（ES2021） | 2021 年  | `String.prototype.replaceAll`：替换字符不用写正则了 Promise.any() WeakRefs：使用弱引用对象 逻辑运算符和赋值表达式：`                                                                                                                                                                                                                                               |     | =` ，`&&=` ，`??=` 数字分隔符：在数字之间创建可视化分隔符，通过`\_`下划线来分割数字 `Intl.ListFormat`：用来处理和多语言相关的对象格式化操作 `Intl.DateTimeFormat` API 中的 dateStyle 和 timeStyle 的配置项：用来处理多语言下的时间日期格式化的函数 |
| ES13（ES2022） | 2022 年  | Top-level Await（顶级 await） Object.hasOwn() at() error.cause 正则表达式匹配索引 类 class：公共实例字段，私有实例字段，私有方法 静态公共字段、静态私有字段、静态私有方法，类静态块                                                                                                                                                                                |

### 6、ES6 之前的历史版本

之前的版本中有 `ES1 ~ ES3`， `ES5 ~ ES6` 唯独跳过了 ES4，因为

- ES4 被废弃了 ，因为 ES4 是一次非常大胆的改革。但是因为太激进了，导致了 ES4 和 ES3 像两门截然不同的语言，跨度太大以至于被废弃了。
- 它的一些不太激进的部分被吸收进了 ES5
- 激进一些的被吸收进了 ES6
- 更激进一些就在后边的版本，接着吸收

ES1 和 ES2 都是比较原始的版本，都还不太成熟，真正成熟的是 ES3，我们现在用的最多其实就是 ES3，可能你以为我们用的 ES5 比较多，但在 ES6 之前你用的最多的还是 ES3 里边的内容

比如：我们现在用的最多的 ES3 中的内容

- do while
- switch
- 正则表达式
- 等等 ... 一系列我们用得到的语法和 API

而我们感觉用的比较多的 ES5 如下方法反而用的不多，可能都没有用到过，当然这个跟我们关系不大，因为这是跟兼容性有关的，因为之前的 ES3 兼容性是非常好的，因此用的更多。

- forEach
- map
- filter
- Object.create
- Object.defineProperty
- 等 ...

| 版本 | 发布时间 | 主要内容                                                       |
| :--- | :------- | :------------------------------------------------------------- |
| ES1  | 1997 年  | 制定了语言的基本语法                                           |
| ES2  | 1998 年  | 较小的改动，只改变编辑方式                                     |
| ES3  | 1999 年  | 引入正则表达式、异常处理`try/catch`、格式化输出等，IE 开始支持 |
| ES4  | 2007 年  | 过于激进，未发布                                               |
| ES5  | 2009 年  | 引入严格模式、JSON，扩展对象、数组、原型、字符串、日期方法等   |

> 如今，已经进入了 ES6 了 ...
>
> ECMA-262（ECMAScript）历史版本查看网址：[https://www.ecma-international.org/publications-and-standards/standards/ecma-262/(opens new window)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

### 7、ES、ES6 与 JavaScript 的关系

- JavaScript（浏览器端）= ECMAScript（语法+API）+ DOM（文档对象模型） + BOM（浏览器对象模型）
- ES 等同于 ECMAScript ，是语言的标准，6 是版本号，即 ES6 = ECMAScript 这门语言的第 6 代标准

### 8、ES6 的兼容性

- 主流浏览器的最新版几乎全部支持 ES6
- IE 老版本等不支持的浏览器，可以用 [Babel 转码(opens new window)](https://babeljs.io/)
- 因此，放心大胆的使用 ES6 即可

> 兼容性检测查询地址：[http://kangax.github.io/compat-table/es6/(opens new window)](http://kangax.github.io/compat-table/es6/)

![image-20221005160502430](https://www.arryblog.com/assets/img/image-20221005160502430.ec4ee74c.png)

### 9、ES6 环境搭建

目前各大浏览器基本上都支持 ES6 的新特性，其中 Chrome 和 Firefox 浏览器对 ES6 新特性最友好，IE7~11 不支持 ES6

> 支持 ES6 的浏览器，相应的**开始时间及版本**

| 浏览器  | 版本 | 日期         |
| :------ | :--- | :----------- |
| Chrome  | 58   | 2017 年 4 月 |
| Firefox | 54   | 2017 年 6 月 |
| Edge    | 14   | 2016 年 8 月 |
| Safari  | 10   | 2016 年 9 月 |
| Opera   | 55   | 2017 年 8 月 |

如果浏览器不支持 ES 新的语法时，怎么办

从 ES6、ES7、ES8、ES9、ES10、ES11、ES12、ES13 ... 到未来更多新的语法

ES 每一年都会不断的更新，我们的目的是希望这些语法都能被浏览器所识别，但问题是这些新的语法并不能被所有的浏览器非常好的识别。

因为，我们的浏览器也是用代码写的，ES 这些新的语法之所以能被浏览器识别是因为浏览器的代码能够识别 ES 新的方法、函数、API 等。但并不是每一个浏览器厂商都会随着 ES 的更新而同步升级的。

- 其中做的最好的是 Google 浏览器，因此强烈建议大家在进行前端开发的时候，首选 Google 浏览器，并进行调试。同时 Google 浏览器的调试功能也非常强大，我们可以很方便的定位问题或分析网页的性能等问题。
- 当 ES 新的语法不能被浏览器识别时，我们就会配置相应的工具来将 ES 新的语法转换成浏览器能够识别的代码。
- 我们都知道 ES5 是可以很好的被浏览器识别的，我们通过 [Babel (opens new window)](https://babeljs.io/)将 ES6 及最新版本的语法转换成 ES5 就能够被浏览器识别了。
- 一般 Babel 都会配合 Webpack 来一起使用。因此，我们先专注学完 ES6+相关语法后，再来学习 Webpack 和 Babel

![image-20221005184219400](https://www.arryblog.com/assets/img/image-20221005184219400.87785f0b.png)

> 此次课程学习我们先使用 Google 浏览器来运行和学习 ES6+ 最新的语法，学完后再配置 Webpack 和 Babel，目前先了解整个过程。

### 10、为什么要学习 ES6~ES13 呢

有些同学会认为我们现在前端开发不都在使用框架吗 ？那 ES 还重要吗 ？

是的没错，目前项目基本都是基于框架来开发的。很多同学会误以为学会了框架就等于掌握了前端

![image-20221003161434647](data:image/png;base64,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)

但是，不管你使用前端的主流框架 Vue、React、微信小程序生态、node.js 开发服务端也好，其实都像是一个盖房子的过程。

也就是说我们可以采用 Vue 的方式去盖房子，也可以采用 React 的方式去盖房子，但不管采用哪种方式去盖房子都少不了盖房子的一个基本要素，也就是砖头。而 ES 语法就像是一个个的砖头一样，不管我们选择什么样的框架开发什么样的需求都要使用 ES 这个砖头来完成。

> 所以说，只要是你开发的是前端项目或者说是 Node.js 的项目 ES 一定是你逃不掉的一项必备技能。

![image-20221003162940227](data:image/png;base64,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)

注：

其实市面上大部分的资料要么总结的不够全面，要么只是语法如何使用，但在实际项目中我们遇到实际问题的时候却总是想不起来去用我们学过的这些新特性，其实总有一种纸上得来终觉浅的感觉。

本质上是，我们没有真的理解如下内容

- ES 新特性优势
- 每一个新特性的应用场景

这样就会导致，我们在项目中虽然好像学过很多语法，但遇到实际情况的时候，我们根本就想不到这样的语法可以解决实际场景的问题，而本次的学习就是为了弥补这种遗憾的

## 二、let 和 const

ES6（ES2015）新增加了两个重要的 JavaScript 关键字: **let** 和 **const**。

### 1、什么是 let 和 const ？

let 和 const 是用来声明变量或声明常量的，在 ES6 之前我们声明变量都是使用 var，在 ES6 中

- let 替代 var，声明变量
- const 声明常量，constant 的缩写

### 2、let 和 const 的用法

let 和 const 的用法与 var 一样

```js
var username = '清心老师'
let age = 18
const sex = 'female'
console.log(username, age, sex) // 清心老师 18 female
```

### 3、什么是变量，什么是常量 ？

- var、let 声明的就是变量，变量一旦初始化之后，还可以重新赋值
- const 声明的就是常量，常量一旦初始化，就不能重新赋值了，否则就会报错

```js
var username = '清心老师'
let age = 18
const sex = 'female'
console.log(username, age, sex) // 清心老师 18 female

// 什么是变量，什么是常量
username = 'arry老师'
age = 20
console.log(username, age) // arry老师 20 ，我们可以看到变量是可以重新赋值的

sex = 'male' // 控制台报错 Uncaught TypeError: Assignment to constant variable. 错误意思：给常量赋值了
```

### 4、为什么需要 const ？

思考：

- 我们为什么需要常量，难道不够用吗 ？
- 如果够用的话谁还用 const 呢 ？

```js
// 假如只有let的情况，我们期望声明的 sex 值一旦声明后就是不变的。
// 当然性别一般情况下就是不变的，也符合常识
let sex = 'male'
// ... 经历很多程序之后，如果不小心修改了 sex 的值，浏览器也不会报错
sex = 'semale'
console.log(sex) // semale

// 我们可以看到 sex 的值被修改了，其实它按我们的期望来讲就是隐形一个错误
// 也就是说这样的错误很可能发生，并没有任何提示，但它确实是一个错误，会造成我们的程序出现问题，类似这样的问题在过去么有什么很好的办法解决，只能通过开发者自己小心来定义
```

但，const 的出现就不会有以上的问题了

```js
// 我们现在使用 const 将 sex 声明为常量
const sex = 'male'
// ... 如果不小心完成了以下赋值操作，就报错了
sex = 'semale' // Uncaught TypeError: Assignment to constant variable.
console.log(sex)
```

注：

运行以上代码就直接报错了，使用 const 就直接从语法层面杜绝了类似错误的发生，我们在实际开发中也不需要为这些问题而小心翼翼了，这就是我们为什么需要 const 的原因。

**const 的设计初衷**

const 就是为了那些一旦初始化就不希望重新赋值的情况而设计的

### 5、const 的注意事项

- 使用 const 声明常量，一旦声明，就必须立即初始化，不能留到以后赋值

```js
// 以下错误演示
const sex; // Uncaught SyntaxError: Missing initializer in const declaration 未捕获语法错误：const声明中缺少初始值设定项
sex = 'male';

// 正确的做法是：声明+初始化应该一气呵成
const sex = 'male';
```

- const 声明的常量，允许在**不重新赋值**的情况下修改它的值

> 情况一：const 声明的基本数据类型

```js
// 基本数据类型
const sex = 'male'
sex = 'female' // Uncaught TypeError: Assignment to constant variable.

// 我们看到报错了，也就是说：对于基本数据类型来说，我们是没有办法在不重新赋值的情况下修改它的值
// 因此，对于const声明的常量是基本数据类型来说就没有办法修改它的值
```

> 情况二：const 声明的引用数据类型

```js
// 引用数据类型
const person = { username: '清心' }
// 对person重新赋值，通过前边的学习，我们知道对于const声明的常量来说是不被允许的
// person = {}; // 报错了 Uncaught TypeError: Assignment to constant variable.

// 但，引用数据类型不一定要通过重新赋值的方式来修改值
// 可以直接找到对应的属性，对它完成修改
person.username = 'arry'
console.log(person) // 正确输出修改后的对象 {username: 'arry'}
```

总结

const 声明的常量，其实在某些情况下是可以修改它的值得，但一定要保证**不重新赋值** ，这一点主要针对**引用数据类型**

这就是说：const 声明常量为引用类型，不可以重新赋值，但可以修改里面的值。

### 6、什么时候用 const ，什么时候用 let

什么时候用 const 声明常量，什么时候用 let 声明变量，这个在实际开发中经常会困扰大家。之前我们只有一个 var 没得选，好处就是用就完了。

> 那么，现在有得选了，到底使用 const 好呢 ？还是用 let 好呢 ？

- 对于一些比较简单情况我们一眼能够看出进来的，就直接使用就好，没必要考虑什么 。如下下代码， 就直接用 let 就好

```js
for (let i = 0; i < 5; i++) {}
```

- 对于一些在刚开始写代码的时候，我们也不清楚到底是用 let 还是 const

```js
// 比如，我们定义一个 username 来保存用户名
// 但我们在写代码的时候，还不清楚后边会不会希望修改这个用户，我们这时的需求还没有确定，到底用 let 还是 const 好呢 ？ 就很难抉择
username = 'arry'
```

实际开发中的经验总结

- 当你不知道用什么的时候，我们可以先用 const 来声明，即使不修改也不会报错，如果后边发生了修改。这时，也不用担心 ！因为程序会报错，再修改成 let 也是来得及的。
- 只要错误不被淹没都可以随时修改。这样的好处就是，即使发生了错误也不会漏掉。
- 如果一开始就用 let ，不小心值就发生了改变，但这并不是我们希望发生的。
- 因此，推荐大家在实际开发中不知如何抉择时，可以使用这个的方式。

> 以后再也不必纠结到底使用哪个了 ！这也是开发中的一些经验总结

## 三、let、const 和 var 的区别

let、const 和 var 的区别总共有 5 点：

- 不允许重复声明
- 不存在变量提升
- 暂时性死区
- window 对象的属性和方法（全局作用域中）
- 块级作用域

其中 块级作用域是 let、const 和 var 之间最重要的一个区别了。这也是我们面试真题中高频面试题了，能否真正给出有竞争力的回答，就看我们是否有真正的理解到位了。

### 1、不允许重复声明

- 重复声明：是指在同—作用域下已经存在的变量或常量，又声明了—遍
- **同一作用域下**，var 允许重复声明，let、const 不允许

```js
// 如：使用var重复声明变量
var i = 1
// ... 在写了很多行代码之后，突然忘记了之前有声明过a变量，又声明了一次
var i = 2
console.log(i) // 2 ，这里最可气的是 控制台居然没有报错，还给我们修改了值

// 如：使用 let 或 const 重复声明变量
let n = 1
// ...
let n = 2 // Uncaught SyntaxError: Identifier 'n' has already been declared 已声明标识符 "n"
console.log(n)

// 使用 const 声明与 let 类似
```

另一种重复声明的场景也会报错

```js
// 声明一个函数（以函数参数的形式声明的变量）
function foo(i) {
  let i = 2 // Uncaught SyntaxError: Identifier 'i' has already been declared 已声明标识符 "i"
}
foo()
```

注：

以上 let 或 const 重复声明变量时，直接报错，会明确的告诉我们该变量已被声明了，不能再重复声明一遍。这样，就从语法层面直接杜绝了错误的发生。

我们可以看到，使用 let 和 const 声明都是类似的。因此在学习后边的区别学习中，就不单独把 const 拿出来讲了，let 已经可以代表了。

> 也就是说 let 和 const 的表现是一致的。

### 2、不存在变量提升

`var`命令会发生“变量提升”现象，即变量可以在声明之前使用，值为`undefined`。这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

为了纠正这种现象，`let`命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

- var 会提升变量的声明到当前作用域的顶部

```js
// 不声明变量，直接使用
console.log(a) // Uncaught ReferenceError: a is not defined
```

先输出，后声明，分析变量提升的过程

```js
console.log(a) // undefined
var a = 1
// 没有报错，输出了 undefined ，这就涉及到了变量提升

// 以上代码通过变量提升后，实际的相当于如下步骤
var a
console.log(a) // undefined
a = 1
console.log(a) // 1

// 其实变量提升带给我们更多的是困惑，因为它会和我们的想法和逻辑是不相符的，这也是我们学习JS需要记住的点
```

通过 浏览器 REPL 执行环境进行调试可以看到变量提升的过程

![var-variable-promotion](https://www.arryblog.com/assets/img/var-variable-promotion.b03fbb3d.gif)

- let、const 不存在变量提升

```js
console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization 初始化之前无法访问 “a”
let a = 1

// 之所以报错，是因为 let 或 const 不存在变量提升
```

总结

let 和 const 之所以不存在变量提升，还是为了让我们养成良好的编程习惯。

> 对于所有的变量或常量，我们一定要做到 **先声明，后使用**

### 3、暂时性死区

- 只要作用域内存在 let、const ，它们所声明的变量或常量就自动 “绑定” 这个区域，不再受到外部作用域的影响
- let、const 存在暂时性死区，var 不存在

```js
let a = 1
function foo() {
  console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization 初始化之前无法访问“a”
  let a = 2
}
foo()

// 以上代码存在全局变量 a ，但函数作用域内 let 又声明了一个局部变量 a ，导致后者绑定这个函数作用域
// 所以在 let 声明变量前，输出 a 会报错
```

ES6 明确规定

如果区块中存在 let 和 const 命令，则这个区块对这些命令声明的变量从一开始就形成封闭作用域。只要在声明之前就使用这些变量，就会报错。

总之，在代码块内，使用 let 命令声明变量之前，该变量都是不可用的。这在语法上称为 “暂时性死区” （temporal dead zone ，简称 TDZ）

```js
if (true) {
  // TDZ开始
  tmp = 'abc' // ReferenceError
  console.log(tmp) // ReferenceError

  let tmp // TDZ结束
  console.log(tmp) // undefined

  tmp = 123
  console.log(tmp) // 123
}

// 上面代码中，在let命令声明变量tmp之前，都属于变量tmp的 “死区”
```

有些“死区”比较隐蔽，不太容易发现

```js
function bar(x = y, y = 2) {
  return [x, y]
}

bar() // 报错
bar(2, 3) // 不报错

// 上面代码中，调用bar函数之所以报错，是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于“死区”。
// 如果y的默认值是x，就不会报错，因为此时x已经声明了。

function bar(x = 2, y = x) {
  return [x, y]
}
bar() // [2, 2]
```

另外，下面的代码也会报错，与`var`的行为不同。

```js
// 不报错
var x = x

// 报错
let x = x
// ReferenceError: x is not defined

// 上面代码报错，也是因为暂时性死区。使用let声明变量时，只要变量在还没有声明完成前使用，就会报错。
// 上面这行就属于这个情况，在变量x的声明语句还没有执行完成前，就去取x的值，导致报错”x 未定义“。
```

注：

ES6 规定暂时性死区和`let`、`const`语句不出现变量提升，主要是为了减少运行时错误，防止在变量声明前就使用这个变量，从而导致意料之外的行为。这样的错误在 ES5 是很常见的，现在有了这种规定，避免此类错误就很容易了。

总之，let、const 存在暂时性死区，**暂时性死区的本质**是：在当前作用域，所要使用的变量已经存在，不会再访问该作用域以外的同名变量，并且只有在声明变量之后，才可以获取和使用该变量，否则就会报错。

> 同样，只要养成良好的编程习惯，对于所有的变量或常量，做到**先声明，后使用**就没有问题。

### 4、window 对象的属性和方法

全局作用域中，var 声明的变量，通过 function 声明的函数，**会自动变成**window 对象的属性或方法

```js
// 全局作用域中，var声明的变量，通过function声明的函数，会自动变成window对象的属性或方法
var age = 20
function add() {}
console.log(window.age)
console.log(window.add === add)
```

![var-window](https://www.arryblog.com/assets/img/var-window.8042d5e9.gif)

> 通过调试，可看到使用 var，function 声明，会自动变成 window 对象的属性或方法

全局作用域中，let、const 声明的变量 或 function 声明的函数，**不会自动变成**window 对象的属性或方法

```js
// 全局作用域中，let、const 声明的变量 或 function声明的函数，不会自动变成window对象的属性或方法
let age = 20
const add = function () {}
console.log(window.age) // undefined
console.log(window.add === add) // false
```

![let-const-window](https://www.arryblog.com/assets/img/let-const-window.5bebc07f.gif)

> 通过调试，可看到使用 let，const 声明，不会自动变成 window 对象的属性或方法

### 5、块级作用域

let、const 和 var 最重要的区别即：是否拥有块级作用域。

在深入了解它们的区别前，我们需要了解一下，在 JavaScript 中有哪些作用域：

- 全局作用域
- 函数作用域/局部作用域
- 块级作用域（ES6 新增）

> 上面是 JavaScript 中的三种作用域，那什么是作用域呢 ？

首先要明白的是：几乎所有的编程语言都存在在变量中储值的能力，存储完就需要使用这些值。所以，**作用域就是一套规则，按照这套规则可以方便地去存储和访问变量。**

> 在 ES5 中的作用域有全局作用域和函数作用域，而块级作用域是 ES6 的概念。

### 5.1、全局作用域

全局作用域顾名思义，就是在任何地方都能访问到它，在浏览器中能通过 window 对象拿到的变量就是全局作用域下声明的变量。

```js
var username = 'icoding'
console.log(window.username) // icoding

// 使用 var 定义的变量，可以在 window 对象上拿到此变量
// 这里的 name 就是全局作用域下的变量
```

### 5.2、函数作用域

- 函数作用域，也称为**局部作用域**，所有写在函数内部的代码，就是在函数作用域中
- 声明在函数作用域中的变量为**局部变量**，从外层是无法直接访问函数内部的变量

```js
function foo() {
  var username = 'icoding'
}
console.log(username) // Uncaught ReferenceError: username is not defined
```

> 在函数内部定义的 username 变量，在函数外部是访问不了的。要想在函数外部访问函数内部的变量可以通过 return 的方式返回出来。

```js
function foo(value) {
  var username = ' arry'
  return value + username
}
console.log(foo('hello')) // hello arry
```

> 借助 return 执行函数 foo 可以取到函数内部的变量 username 的值进行使用。

### 5.3、块级作用域（ES6 新增）

块级作用域是 ES6 的概念，它的产生是要有一定的条件的，在花括号`{}`中，使用 `let` 或 `const` 声明的变量，才会产生块级作用域。

**这里需要注意的是**

- 块级作用域的产生是 `let` 或 `const` 带来的，而不是花括号，花括号的作用是限制 `let` 或 `const` 的作用域范围。
- 当不在大括号中声明时， `let` 或 `const` 的作用域范围是全局，但是不在 window 对象身上

```js
let age = 18
console.log(window.age) // undefined
```

> 上面的代码可以看到，使用 let 方式声明的变量在 window 下是取不到的。

```js
// var声明的变量，不会产生块级作用域
var age = 18
{
  var age = 20
  console.log(age) // 20
}
console.log(age) // 20
```

> 在使用 var 声明的情况下，可以看出，外层的 age 会被 `{}` 中的 age 覆盖，所以没有块级作用域的概念，下面看下使用 let 方式声明：

```js
let age = 18
{
  console.log(age) // Uncaught ReferenceError: Cannot access 'age' before initialization
  let age = 20
  console.log(age) // 20
}
console.log(age) // 18
```

> 这里可以看出 `{}` 内外是互不干涉和影响的，如果在声明 age 的前面进行打印的话，还会报错，这个时候，age 处于暂存死区，是不能被使用的，下面我们会具体说明。

在低版本浏览器中不支持 ES6 语法，通常需要把 ES6 语法转换成 ES5，使用 babel 把上面的代码转换后得到如下结果：

```js
var age = 18
{
  console.log(_age) // undefined
  var _age = 20
  console.log(_age) // 20
}
console.log(age) // 18
```

> 从上面的代码中可以看出，虽然在 ES6 语法使用的是相同的变量名字，但是底层 JS 进行编译时会认为他们是不同的变量。也就是说即使花括号中声明的变量和外面的变量是相同的名字，但是在编译过程它们是没有关系的。

**ES6 允许块级作用域的任意嵌套**

```js
{
  {
    {
      {
        {
          let username = 'icoding'
        }
        console.log(username) // Uncaught ReferenceError: username is not defined
      }
    }
  }
}
```

> 上面代码使用了一个五层的块级作用域，每一层都是一个单独的作用域。第四层作用域无法读取第五层作用域的内部变量。

内层作用域可以定义外层作用域的同名变量。

```js
{
  {
    {
      {
        let username = 'icoding'
        {
          let username = 'icoding'
        }
      }
    }
  }
}
```

块级作用域的出现，实际上使得获得广泛应用的匿名立即执行函数表达式（匿名 IIFE）不再必要了。以前我们想要将某个全局变量变成私有的，我们会用 IIFE 来实现，现在有了块级作用域，我们只需要用块级作用域来解决就好。

```js
// IIFE 写法
(function () {
  var age = ...;
  ...
}());

// 块级作用域写法
{
  let age = ...;
  ...
}
```

### 5.4、为什么需要块级作用域 ？

我们通过之前的学习知道，ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。所以在 ES6 中新增了块级作用域。

- **第一种不合理场景：** 内层变量可能会覆盖外层变量

```js
var atmp = 2

function foo() {
  console.log(atmp)
  if (false) {
    var atmp = 'hello world'
  }
}

foo() // undefined

// 上面代码的原意是，if代码块的外部使用外层的atmp变量，内部使用内层的atmp变量。
// 但是，函数foo执行后，输出结果为undefined，原因在于变量提升，导致内层的atmp变量覆盖了外层的atmp变量。
```

![var-has-no-block-level-scope1](https://www.arryblog.com/assets/img/var-has-no-block-level-scope1.001ecccd.gif)

let 和 const 有块级作用域，就可以必免这种问题产生

```js
let atmp = 2
function foo() {
  console.log(atmp)
  if (false) {
    let atmp = 'hello world'
  }
}
foo() // 2
```

- **第二种不合理场景：** 用来计数的循环变量泄露为全局变量

```js
for (var i = 0; i < 2; i++) {
  console.log('循环内：' + i)
}
console.log('循环外：' + i) // 2

// 上面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。
```

let 和 const 有块级作用域，就可以必免这种问题产生

```js
for (let i = 0; i < 2; i++) {
  console.log('循环内：' + i)
}
console.log('循环外：' + i) // Uncaught ReferenceError: i is not defined

// 之所以会报错，是因为使用 let 或 const 声明的变量是有块级作用域的
// let声明的 i 和 for(){} 共同构成了块级作用域，因此在块级作用域内定义的变量 i 只能在for的{}内可访问
// 执行完for循环后，该作用域就销毁了，我们在全局作用域中就找不到i，就报错了
```

### 5.6、深入理解块级作用域

很多人对于`for(let i=0; i<5; i++){ }` 这里不理解，不理解为什么外面就访问不到 i 了。我们说这是 es6 的语法规定的，let 可以形成块级作用域。

那如果没有 es6，那我们要实现相同的功能，用 es5 如何模拟呢 ？

> 我们来看下 babel 是如何将这段代码转换成 es5 版本的。[点击，查看 babel 官网(opens new window)](https://babeljs.io/)

```js
// es6版本
for (let i = 0; i < 5; i++) {
  console.log(i)
}
console.log(i)

// babel转换成对应的es5版本
;('use strict')

for (var _i = 0; _i < 5; _i++) {
  console.log(_i)
}
console.log(i)
```

很多人对于`for(let i=0; i<5; i++){ }`每次迭代都会创建一个新的块级作用域不太理解，这里我们将 es6 的语法代码用 babel 转换成 es5 的语法来看下

```js
// es6版本 for 循环一共创建了5个块级作用域
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
console.log(i)

// babel转换成对应的es5版本
;('use strict')

var _loop = function _loop(i) {
  setTimeout(function () {
    console.log(i)
  }, 1000)
}
for (var _i = 0; _i < 5; _i++) {
  _loop(_i)
}
console.log(i)
```

### 5.7、作用域链的复习

关于变量的查找会涉及到作用域链，我们再次来复习一下

```js
function foo() {
  // 函数作用域
  for (let i = 0; i < 2; i++) {
    console.log(i) // 0 1
    // 块级作用域
  }
  console.log(i) // Uncaught ReferenceError: i is not defined
}

// 全局作用域

foo()
console.log(i) // Uncaught ReferenceError: i is not defined
```

画图分析以上代码是如何执行的以及它的作用域链

![image-20221007231003236](https://www.arryblog.com/assets/img/image-20221007231003236.96be9e39.png)

代码解读

- 首先最外层会有一个**全局作用域**
- 当函数 `foo()` 被调用时，会形成一个**函数作用域**，注：只有当函数被调用时，才会形成函数作用域，函数调用结束函数作用域就销毁
- 继续执行 for 循环，`for(){}` 和 let 共同构成了一个**块级作用域**
- 这时，我们就有了一个嵌套的三层的作用域，最内层是块级作用域，外层是函数作用域，最外层是全局作用域
- 当在 for 循环中打印输出 `i` ，首先会在当前的块级作用域中去查找是否存在 `i` 如果找到了就输出，如果查找一个不存在的 `i` 那就往上一层作用域中查找或向外层作用域中查找（即 foo 函数构成的函数作用域中查找），如果还没有，就继续往外层查找（到全局作用域中查找 `i`）如果还是找不到就报错了，这时就终止了
- 这样的过程就构成了一个链条的形式，由内层 -> 到外层 -> 一直到最外层，这些作用域的节点和节点之间就构成了一个链条，这就是变量或常量的查找的一个链条。
- 首先在当前作用域中找，找到了就不会再找了，就跟外层作用域没关系了，如果找不到就会往外找，一直找到最外层，找到全局作用域中才截止。
- 因此，for 循环中找到了块级作用域中 `i` 就输出 `0 1` 就不会往外层查找了
- 在函数作用域中打印输出 `i` 依次往外层查找，发现没有找到 `i` 就报错了，这时程序就终止了
- 如果，前边都没有报错，当 `foo()` 函数执行完毕后，最后在全局作用域中打印输出 `i` 同样也会报错
- 要注意：变量的查找只能有内往外，不能由外往内查找

**总结**

作用域链的流程：内层（块级）作用域 -> 外层（函数）作用域 -> ... -> 全局作用域

> 我们是以这样的顺序去查找变量或常量的，当然也不会一直查下去，一但找到就终止了

### 5.8、ES6 中有哪些块级作用域

大部分具有花括号`{}`的结构，都可以构成块级作用域

```js
// 只要一个花括号 {} 就可以构成块级作用域
{
  let age = 20
  console.log(age) // 20
}
console.log(age) // Uncaught ReferenceError: age is not defined
```

> 报错原因：`{}` 花括号就是一个块级作用域， 它执行完毕之后就会被销毁

- 还具有`{}`块级作用域的结构，如：`{}`、`for(){}`、`while(){}`、`do{}while()`、`if(){}`、`switch(){}`
- 其中 `function(){}` 也有`{}` 但属于函数作用域，不属于块级作用域
- 另外，还有对象也有 `{}` 如：`const person = {}` 注：对象是不构成任何作用域的，我们知道 JavaScript 的作用域就 3 个，块级作用域、函数作用域、全局作用域

> 注：以上这些结构只有和 let、const 配合使用才会有块级作用域，var 是没有块级作用域的。

总结：

块级作用域是 ES6 中新增的一个作用域，指在花括号`{}`里面使用 let 或 const 关键字声明变量或常量，就会形成一个块级作用域。

但有两个需要特殊记忆，函数和对象的花括号`{}`不属于块级作用域。

## 四、let、const 在实际开发中的应用

应用实现需求：

有 3 个按钮，点击 0 号按钮打印索引值为 0，点击 1 号按钮打印索引值为 1，点击 2 号按钮打印索引值为 2

### 1、实现方式一：在 ES6 之前使用 var 如何实现

```html
<head>
  <style>
    body {
      padding: 100px 0 0 200px;
    }
    .btn {
      width: 50px;
      height: 50px;
      font-size: 30px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button class="btn">0</button>
  <button class="btn">1</button>
  <button class="btn">2</button>

  <script>
    // 1、在ES6之前，使用var实现
    var btns = document.querySelectorAll('.btn')
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener(
        'click',
        function () {
          console.log(i)
        },
        false,
      )
    }
  </script>
</body>
```

![image-20221008144915035](https://www.arryblog.com/assets/img/image-20221008144915035.32d672b2.png)

> 运行以上程序，分别点击 0，1，2 三个按钮都会输出 3 ，而不是按我们想象的 `0，1，2` 来输出，我们通过画图来分析作用域来看下为什么 ？

![image-20221008143415045](https://www.arryblog.com/assets/img/image-20221008143415045.c6b34fbf.png)

### 2、在 ES6 之前，我们该如何解决这个问题 ？

```html
<head>
  <style>
    body {
      padding: 100px 0 0 200px;
    }
    .btn {
      width: 50px;
      height: 50px;
      font-size: 30px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button class="btn">0</button>
  <button class="btn">1</button>
  <button class="btn">2</button>

  <script>
    // 2、在ES6之前，使用闭包来解决此类问题
    var btns = document.querySelectorAll('.btn')
    for (var i = 0; i < btns.length; i++) {
      // 在for循环中，不直接给每个按钮绑定事件处理函数，先声明一个立即执行的匿名函数
      ;(function (index) {
        btns[index].addEventListener(
          'click',
          function () {
            console.log(index)
          },
          false,
        )
      })(i)
    }
  </script>
</body>
```

![image-20221008184951273](https://www.arryblog.com/assets/img/image-20221008184951273.c8da8161.png)

> 运行以上代码，分别点击 0，1，2 三个按钮会正确输出 `0，1，2`

我们通过画图分析的方式来解释一下

- 首先我们可以看到声明的立即执行函数会在 for 循环中循环执行 3 次
- for 循环中的 var 声明的变量 `i` 是全局变量，当循环 3 次后 `i` 在全局作用域中 依然还是 `i = 3`
- 当 for 循环 3 次，其中的立即执行的匿名函数`(function(index){ ... })(i);` 就调用了 3 遍，调用函数就会创建函数作用域，这样就会创建 3 个函数作用域。并且每一个函数作用域中就会有一个 `index`
- 当点击 `0，1，2` 三个按钮时，就会调用事件处理函数对应的内部 `function(){console.log(index);}` 函数，这时就会形成自己的函数作用域
- 开始打印输出 `console.log(index);` 这是就会一层层的往外找，找到立即执行匿名函数作用域中的`index` 找到了，就打印输出 `0，1，2` ，这时候就不会再到外层全局作用域中去找 `i = 3`了

> 这时候，你会发现这里的实现方式和第一种方式都是通过作用域链的查找机制来查找变量，但唯一的区别在于，这里通过 IIFE 立即执行函数形成了闭包，将全局变量转换为了局部变量来实现。

### 3、实现方式二：使用 ES6 中的 let、const 完成此需求

```html
<head>
  <style>
    body {
      padding: 100px 0 0 200px;
    }
    .btn {
      width: 50px;
      height: 50px;
      font-size: 30px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button class="btn">0</button>
  <button class="btn">1</button>
  <button class="btn">2</button>

  <script>
    // 3、使用ES6中的 let、const 完成此需求，本质和第一种方式代码一样，唯一不同的是将var改成let或const了
    // 主要就是用到了 let 或 const 能形成块级作用域的特性
    const btns = document.querySelectorAll('.btn')
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener(
        'click',
        function () {
          console.log(i)
        },
        false,
      )
    }
  </script>
</body>
```

代码解读

同样，通过画图分析来解读程序的执行过程。直接使用 ES6 中的 let 或 const 就不用再使用闭包来实现了。

- 首先，for 循环 3 次，在这个过程中作用域是什么情况呢
- 最外层是有一个全局作用域的，可以看到 let 和 for 循环形成了块级作用域 和 之前的 var 不同，这时 `i` 就是块级作用域中的一个变量（是局部的），在全局作用域中就没有 `i` 了
- for 循环，循环了 3 次，就创建了 3 个块级作用域，每循环一次就创建一个块级作用域，用 3 个`□`来表示
- `i = 0` 创建第一个块级作用域，`i = 1` 创建第二个块级作用域，`i = 2` 创建第三个块级作用域
- 当点击 `0，1，2` 三个按钮时，就会调用事件处理函数对应的内部 `function(){console.log(i);}` 函数，这时就会形成自己的函数作用域
- 开始打印输出 `console.log(index);` 这是就会一层层的往外找，在当前函数作用域中查找，没有 `i` 继续往外找，找到块级作用域中的局部变量 `i` ，因此就正确输出了 `0，1，2`

![image-20221008222618556](https://www.arryblog.com/assets/img/image-20221008222618556.abbfaaf9.png)

> 只要我们分析清楚作用域之间的嵌套关系，再加上我们对作用域链查找机制的理解，最后沿着链条往外找就 OK 了

## 五、总结

总结本章重难点知识，理清思路，把握重难点。并能轻松回答以下问题，说明自己就真正的掌握了。

用于故而知新，快速复习。

### 1、ES 标准相关，ES6 简介及相关历史

这个部分作为了解和开阔视野，深入了解我们日常开发中遵循的标准都是怎么来的。

### 2、let 和 const 是什么 ？

- `let` 声明变量的一个关键字

- ```
  const
  ```

  声明常量的一个关键字

  - const 声明的是常量
  - const 的设计初衷就是：为了那些一旦初始化就不希望重新赋值的情况而设计的
  - const 声明后必须立即初始化，常量的声明和初始化是一气呵成的
  - const 声明的常量可以修改，但不能重新赋值。比如：引用数据类型就可以做到，基本数据类型无法做到

- 尽量使用 `let` 去代替 `var` 来声明变量。

### 3、let、const 与 var 的区别 ？

- 重复声明：let、const 不允许重复声明，var 允许重复声明
- 变量提升：let、const 不允许变量提升，var 允许变量提升
- 暂时性死区：let、const 拥有暂时性死区，var 没有
- window 对象的属性和方法（全局作用域中）：
  - var 声明的变量 或 function 声明的函数，**会自动变成** window 对象的属性或方法。
  - let、const 声明的变量 或 function 声明的函数，**不会自动变成** window 对象的属性或方法
- 块级作用域：let、const 可以形成块级作用域，var 没有块级作用域。**（这点最重要）**

> 学会分析程序中有哪些作用域，作用域之间的关系是怎样的，我们查找变量和常量的时候，作用域、作用域链的机制什么时候起作用，理解了这些才算真正理解了块级作用域

- 有哪些块级作用域：`{}`、`for(){}`、`while(){}`、`do{}while()`、`if(){}`、`switch(){}`

![image-20221007231003236](https://www.arryblog.com/assets/img/image-20221007231003236-16726515168006.96be9e39.png)

自己能画出作用域嵌套的关系图，作用域链的方向

## 六、测试题

自我测试：在不看答案的前提下，看看自己是否真正掌握了本节所学内容。

### 1、关于以下描述正确的选项是 ？

- A、let 是替代 var 用来声明变量的关键字
- B、const 是替代 var 用来声明常量的关键字
- C、变量声明之后，可以重新赋值
- D、常量声明之后，不可以被重新赋值

::: details 自己先分析，再点击查看正确答案

正确答案：A C D

答案解析：本题主要是考查常量和变量的概念。ES6 中新增的 const 关键字是用来声明常量，并不是用来替代 var 的，B 选项描述是错的。

:::

### 2、以下代码中，可以正常输出结果的是 ？

A、

```js
const age;
age = 18;
console.log(age);
```

B、

```js
const age = 18
age = 20
console.log(age)
```

C、

```js
const obj = {
  age: 18,
}
obj.age = 20
console.log(obj)
```

D、

```js
const obj = {
  age: 18,
}
obj = {}
conosle.log(obj)
```

::: details 自己先分析，再点击查看正确答案

正确答案：C

答案解析：本题主要考查 const 的使用方式

- const 声明常量初始化时必须赋值，否则会报错，A 选项错误。

- const 声明常量初始化后，不可以再重新赋值，B、D 选项错误。

- const 声明常量为引用数据类型，不可以重新赋值，但可以修改里面的值。C 选项正确。

:::

### 3、以下代码运行的结果是 ？

```js
let i = 2
{
  console.log(i)
  let i = 3
}
```

- A、2
- B、3
- C、undefined
- D、报错

::: details 自己先分析，再点击查看正确答案

正确答案：D

答案解析：本题主要考查暂时性死区 let 声明的变量存在暂时性死区，暂时性死区的本质就是：在当前作用域，所要使用的变量已经存在，不会再访问该作用域以外的同名变量，并且只有在声明变量之后，才可以获取和使用该变量，否则就会报错。本题中：在块级作用域中使用 let 声明变量 i ，形成了暂时性死区，导致无法访问全局作用域中的同名变量 i ，且输出语句是在声明变量的前面，会出现报错。

:::

### 4、以下代码中，在 ES6 中属于块级作用域的是 ？

A、

```js
{
  let i = 1
}
```

B、

```js
let foo = function () {}
```

C、

```js
const obj = {
    age = 18
}
```

D、

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

::: details 自己先分析，再点击查看正确答案

正确答案：A D

答案解析：本题考查 es6 块级作用域的基本概念

块级作用域是 ES6 中新增的一个作用域，指在大括号{}里面使用 let 或 const 关键字声明变量或常量，就会形成一个块级作用域。但有两个需要特殊记忆，函数和对象的大括号{}不属于块级作用域。

B 选项中，是表达式声明了一个函数，C 选项中是声明了一个对象，都不属于块级作用域。

:::

### 5、以下代码中，访问常量 m 时存在的作用域链，描述正确的是（单选） ？

> 选择一项

```js
const m = 88
function func() {
  for (let i = 0; i < 5; i++) {
    if (i == 3) {
      let b = 6
      bar(m)
    }
  }
}
function bar(tmp) {
  console.log(tmp)
}
func()
```

- A、函数作用域 -> 块级作用域 –> 函数作用域 –> 全局作用域
- B、块级作用域 –> 函数作用域 –> 全局作用域
- C、函数作用域 -> 块级作用域 –> 块级作用域 –> 函数作用域 –> 全局作用域
- D、块级作用域 –> 块级作用域 –> 函数作用域 –> 全局作用域

::: details 自己先分析，再点击查看正确答案

正确答案：D

答案解析：本题主要考查作用域和作用域链的知识

- 作用域就是代码的执行环境，如：全局执行环境就是全局作用域

- 访问一个变量/常量的值，若在当前作用域中没有查到，就会向上级作用域中查找，一直查找到全局作用域，这么一个查找过程形成的链条就叫做作用域链。

在本题中，当执行到 bar(m)时，会先对 m 右查询，找到 m 对应的值。在找 m 值时，先到 if 块级作用域中找，然后再到 for 块级作用域中查找，最后在 func 函数作用域中找，都没找到，最后找到全局作用域中的 m

在这个过程中形成的作用域链是： if 块级作用域 –> for 块级作用域 –> func 函数作用域 –> window 全局作用域

:::
