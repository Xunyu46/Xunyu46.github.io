---
title: 前后端分离架构 VS 传统架构，行业最佳实践
date: 2023-10-28
sidebar: 'auto'
categories:
  - applet
tags:
  - applet
publish: true
---

# 前后端分离架构 VS 传统架构，行业最佳实践

在前面的课程中我们学习了如何通过微信小程序的网络请求 API 实现在线接口数据获取和服务端数据交互，这样的请求交互模式就是我们当下被行业应用最多的前后端分离架构。

本节内容我们来了解前后端分离架构的前世今生 ！

- 传统架构到前后端分离架构的演进
- 传统架构 VS 前后端分离架构 优缺点
- 微信小程序阶段性总结

在软件工程这一行里有一个很有意思的现象，就是不存在**完美解决方案**，我们在做应用架构设计的时候也是如此，无论是使用前后端分离还是传统的架构模式，都有各自的优缺点和使用场景。

## 一、传统架构

![image-20230414193127100](https://www.arryblog.com/assets/img/image-20230414193127100.d526ab64.png)

### 1、传统架构中前后端的交互流程

在传统架构中前端通常指的是浏览器

- 通过在浏览器中访问一个网页的 URL 地址 ->
- 在通过互联网发起请求 ->
- 访问到服务器 -> 服务器上会运行应用程序（完成模板渲染） ->
- 服务器响应返回 HTML 文件 ->
- 浏览器接收到文件时，即会展示出来

![image-20230414034601836](https://www.arryblog.com/assets/img/image-20230414034601836.fadeadde.png)

### 2、传统架构的主要特点

- ①、页面渲染内容由服务端完成，直接返回 HTML 文件
- ②、对搜索引擎 SEO 优化**友好**（由于在返回浏览器前，在服务端已经预生成好了 HTML 文件）有利于搜索引起去爬取和缓存
- ③、依赖浏览器（返回 HTML 文本必须要借助浏览器才能渲染和展示）

### 3、传统架构的优点

既然前后端分离架构已经是今天互联网产品应用架构的主流了，那为什么传统架构依然存在呢 ？我们任何一个架构设计都没有完美的解决方案，正所谓 **存在即合理** 。

要了解它们的优缺点就必须从工程实践的角度出发来剖析这两种架构设计模式的优缺点。正在做到知其然，并知其所以然。当我们未来面临这种工程设计上的抉择时，即可心中有数。

### 3.1、对搜索引擎 SEO 优化友好

SEO（Search Engine Optimization）：汉译为搜索引擎优化。利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。目的是让其在行业内占据领先地位，获得品牌收益。很大程度上是网站经营者的一种商业行为，将自己或自己公司的排名前移。

在 PC 网站盛行的年代，我们企业的网站在搜索引擎中的排名结果会很大的影响点击率，而点击率又会影响业务的转化率。所以绝大多数站点，都会在搜索引擎的 SEO 上下功夫，尽可能的让自己的企业网站在搜索结果中排名靠前。具体如何实现 SEO 优化不是我们这篇文章的重点，这里我们只提其中一个很重要的特性，就是`静态的页面更有利于实现 SEO 优化`。

这是为什么呢 ？静态页面，顾名思义的就是内容是静态的，是预先在服务端生成好的页面文件，这样搜索引擎收录了页面数据之后，当有其他用户访问的时候，就更容易被命中，因为内容不会变化。

但是前后端分离架构不同，在前后端分离架构的模式下，前端和后端（即服务端）是通过`JSON`数据来交互，我们的前端页面的内容是通过请求后端，然后根据后端返回的 JSON 数据来渲染，也就是说，这种情况下假设我们搜索引擎对前端页面做爬取，只会收获到一堆标识页面骨架的静态 HTML 标签而已。

这时候，用户在搜索引擎里面尽情搜索的时候，会出现两种情况：

- 1、搜索引擎没有命中内容，搜索不出来
- 2、内容发生了改变，命中率差或者不命中、命中了老旧内容

> 这两种情况都会导致我们的搜索排名非常差（影响排名的因数之一）

所以，当我们采用前后端分离架构的时候，是没办法有效的实现 SEO 优化的。这对于一些企业站点是一个很致命的打击。因此，目前市面上主流的大型企业站点（淘宝、京东之流），均是通过传统架构模板渲染（服务端渲染）来实现。

但是，有一种情况例外，那就是不需要考虑 SEO 的网站，比如`后台管理系统`。这类系统网站通常都是开放给特定人群或者内部使用，不需要考虑搜索引擎排名，不需要做任何 SEO 优化，所以，很多企业会利用前后端分离架构的优点，采用前后端分离架构实现这类系统应用。

### 3.2、架构简单

传统架构的网页都是在服务端就已经生成好的（HTML、JS、CSS），浏览器请求到网页数据之后，只需要把内容做一个渲染即可。

从这点可以看出，主要的实现和工程量都集中在了服务端，这会让应用的架构变得非常纯粹和简单，但这也是一把双刃剑，具体问题在哪我们放到后面的缺点部分来讲述。

### 3.3、更关注浏览器

传统架构的应用主要是面向浏览器的，开发人员只需要关注不同浏览器内核的兼容情况（HTML、JS、CSS），而这个兼容情况通常情况下除了 IE 系列需要特别注意（当然已经逐渐退出历史舞台），其余主流浏览器内核的兼容性有高度的一致性。但是按目前的互联网市场需求来看，在有些情况下，这个优点就成了缺点，具体为什么，我们放到后面的缺点部分来讲述。

### 4、传统架构的缺点

任何一种应用架构的设计模式都会有自己的缺点，我们来看下传统架构的缺点有哪些。

### 4.1、全干工程师

传统架构模式的网页应用，由于网页数据（HTML、CSS、JS）都是在服务端实现并直接将内容返回给前端浏览器展示的，所以我们在实现每一个页面的时候就意味着这个开发者除了需要实现 HTML、CSS、JS 部分的内容外，还需要解决网页数据的来源问题。这个来源指的是通常我们的页面数据要么是通过查询数据库或者通过一系列代码逻辑计算得出的，那这部分实现也是需要这个开发者做的。

可能有些同学会说，我们可不可以让这件事由两个人来做，一个人负责网页展示（HTML、JS、CSS）部分的工作，一个人负责解决数据来源（查询数据库、代码逻辑运算等）的工作 ？答案自然是可以，也是一个很好的解决方案。

但是，传统的应用架构并不能很好的让这个想法落地，这个主要跟具体实现机制有关。我们在实现的过程中，必然会需要有一个数据传递（如：从数据库查出来，然后反应到页面上；页面上的交互需要调用某些业务代码逻辑）的过程，这个过程如果在传统架构这种开发模式下由原来的一个人变成两个人来做，这个沟通成本会很大，页面部分的开发者需要知道业务代码逻辑的开发者提供了什么方法或者入口来响应页面的交互，业务代码逻辑的开发者需要准确的知道页面部分的开发者需要什么内容，这还不如一个人来负责来得直接。

> 所以，通常传统架构的网页应用实现都是由一个人同时负责网页及业务代码实现的。

### 4.2、终端类型单一

过去我们谈论终端应用的时候只有 PC，但是现在的互联网，终端除了 PC，还有手机、平板、自助机、手持终端机、物联网端等等一系列不同物理设备。

传统架构的应用由于直接在服务端生成了网页，这就导致了如果终端设备没有浏览器，就无法展示网页数据，这在当下的环境是让人难以接受的。并且，假设我们的产品同时有多种不同类型的终端，但实现的功能是高度相似，在这个时候我们就不得不针对不同的终端进行定制开发，造成大量的重复实现。

> 虽然现在多数类型终端都有内嵌浏览器可以实现网页渲染，但依然不会采用这种传统架构模式，具体原因前后端分离架构部分的内容。

## 二、前后端分离架构

在过去漫长的时间里（移动互联网之前），这种传统的架构是么有问题的。那时候的我们互联网的应用是比较单一的，但在今天的互联网环境下前端早已不仅仅局限于浏览器了，同时我们要展示的内容也不再是一个网页。

我们现在的前端应用指的是除了浏览器以外、还会有 App、物联网设备 等。这时仅 HTML 就显得有很大的局限性了，因此诞生了前后端分离架构。

![image-20230414194650076](https://www.arryblog.com/assets/img/image-20230414194650076.ebd70969.png)

### 1、前后端分离架构的交互流程

在前后端分离架构中，前端应用除了浏览器、还会有 App 以及其他的物联网终端设备

- 我们通过访问 API 接口地址的形式来请求 ->
- 在通过互联网发起请求 ->
- 这是的服务器就不再负责模板渲染 -> 而是直接响应 JSON 字符串 ->
- 当前端接收到 JSON 字符串时（JSON 本身是没有业务含义的字符串），它会自行处理（会根据自己的业务逻辑来决定渲染哪些内容）

![image-20230414165628128](https://www.arryblog.com/assets/img/image-20230414165628128.469195ff.png)

正是基于这样的特点，服务器只需要按照约定返回对应的 JSON 字符串即可。并不需要关心前端是什么内容。同时我们前端也不需要关心后端是怎么实现的。

我们前端只需要知道我请求了一个 API 接口地址，后端就会返回一个相应的 JSON 字符串给我。这其中就实现了 前端和后端的一个相互隔离和透明，这点就很好的解决了传统架构中终端应用单一性的问题（由原来的固定返回 HTML 文件 改成了 现在的 JSON 字符串）

> 正是因为这一点，我们的前后端分离架构对于搜索引擎 SEO 优化是不友好的。因为我们的前端更多的时候就是一些骨架代码，真正的数据填充是要通过 API 请求去获取的（当然这个问题还是要看你的产品有没有 SEO 优化的需求，如不需要的话，就不必考虑这个问题了）

### 2、前后端分离架构的主要特点

- ①、请求、响应都基于 JSON 数据格式，前端/后端实现分离
- ②、由前端应用本地渲染，不绝对依赖浏览器
- ③、对搜索引擎 SEO 优化**不友好**

> 以上 1、2 两个部分就是传统架构 和 前后端分离架构在通讯方式上的不同，也正是基于这个原因在具体落地的时候，这两种架构呈现出来的优缺点各自非常鲜明了。具体如下

### 3、前后端分离架构的优点

总结扩展前后端分离架构的优点：分而治之，接口复用，灵活、透明，问题定位

### 3.1、分而治之

得益于前后端分离架构这种通过调用接口，发送、接收 JSON 数据的形式，我们能天然的将展示和业务逻辑代码做分离，因为服务端已经不再肩负生成展示内容的责任，变成了一个内容提供者。前端不再只是一个只负责渲染的角色，而是在获取到接口数据之后，自行按照本地的产品需求和逻辑来使用数据。

这种调用形式，让前端和后端实现了相互透明。前端不需要关心后端功能逻辑的实现，后端不需要关心前端具体是什么类型的终端、页面怎么展示。前后端都按照事先约定好的书面标准（接口文档）来开发并最终实现交互通讯。

在职责分离之后，我们就可以顺势的做到岗位划分，这也是前端开发工程师、后端（服务端）开发工程师之分由来。岗位划分之后，各自都可以专注于自己那一部分的实现，除非接口内容本身发生了改变，否则各自的需求变更不会影响到对方，实现并行开发。

### 3.2、接口复用

在前后端分离架构下，后端只提供接口，接口负责接收和响应 JSON 数据，JSON 本身是一种固定格式的字符串，与任何语言、框架、终端无关。这就意味着 JSON 都能够轻易的被解析转换成语言、框架适用的数据结构。只要我们接口内容是能够满足业务需求的，那么我们就可以直接在不同的终端应用上直接复用同一套接口。

在复用接口的情况下，不管是新增了接口还是在原有基础上升级，都会同时作用到所有已经做了对接的前端应用。

> 当然，如果有一天接口挂掉了或者改了接口参数没有通知，所有已对接的前端应用都会受到影响。在这种情况下，服务端开发人员会引入其他解决方案来保障接口的高可用和平滑升级，这部分是属于另一个范畴的内容。

### 3.3、灵活、透明

在前后端分离架构下，后端只提供接口，同时前后端通过约定好的 JSON 字符串来交互，这就打破了传统架构中的终端类型限制，也让后端技术选型更加的自由和灵活，因为 JSON 本身无语言、框架无关。

基于这种交互方式，所谓的“前端”就不再是局限于网页甚至 APP 了，更多的是一种相对的概念，谁提供接口，谁就是后端角色，请求接口的一方相对于后端就是前端。

比如我们有时候会去对接第三方的开放 API 接口，第三方肯定是不知道我们是怎么去对接的，我们即可以直接在网页或者 APP 等其他应用上去发起请求获取数据，也可以在我们的服务端应用上去请求数据，然后做加工，再通过接口的形式提供给网页或者 APP。

### 3.4、问题定位

在前后端分离架构下，当我们的应用出现问题的时候，基本可以瞬间判断问题到底是出在前端部分还是后端部分。

可能有些同学觉得这好像帮助并不大，但其实并不然。我们平时在定位解决问题的时候，解决方向很重要。只有明确了方向，我们才能更好的去调试和排查问题。而且前后端分离的架构本身也容易实现问题的复现。

> 因为前后端之间是通过接口来交互的，假设当一个问题故障点是在后端的时候，诱因肯定是因为某个前端请求参数导致的，这时候我们就能很好的利用一些接口工具来模拟请求复现问题。

### 4、前后端分离架构的缺点

在任何软件工程的架构设计中，没有最好的架构只有最适合的架构。抛开业务需要谈架构，就是耍流氓。任何一种架构的设计都会有自己的优点和缺点，我们来看一下前后端分离架构的缺点。

### 4.1、考验接口设计能力

前后端分离架构的关键点在于接口，所以，接口设计得好不好，很大程度上会影响前端开发人员在对接时的效率。

常见的接口设计问题有请求方式和参数是否合理、响应格式是否合理、响应内容是否满足业务需求、接口粒度粗细是否合理等等。可以说，想要做好接口设计除了掌握一些基本的方法论以外，还需要对业务有一定的理解，以及工程经验，所以接口设计这部分能力，不是看看文章看看视频就能拥有的。

所以我们在现实开发中经常会遇到一些前端抱怨诸如缺字段、多字段、调用链路太长、接口定义不清晰、不统一等问题。当然，有些问题还是要 **具体问题具体分析**，但是我们可以透过这个现象看到一个本质就是 —— **做好接口设计真的不容易**。

> 遇到问题解决问题，团队协作需要更多建设性的建议和意见而不是抱怨。这也是为什么我们要提前了解本质，做到心中有数的重要性。

### 4.2、全干工程师

在前后端分离架构下，依然存在可能会变为全干工程师，不管是自愿还是非自愿。但是相比传统架构，前后端分离架构下一个人负责前端和后端的全部实现是相对更吃力的，不管是精神上还是身体上。

因为在目前前端、后端已经是自成体系的情况下，各种技术栈层出不穷，我们很容易迷失在技术选型里面。即便我们很系统、很科学的去学习前后端，这个时间成本也是相应的增加了的。另外我们的开发模式会从前后端并行开发转为串行开发，至于实际开发工程量，这个是可以很直观的感受到的这里就不再赘述了。

注：

以上讲的是客观事实，不限于很多同学前后端技术栈都学，做全栈开发的。这里最好的建议就是先把一个专业研究的足够深入后，在逐渐进入另一个领域。而不是贪多，最可怕的是什么都知道一点，什么都不精，最后带来的只有痛苦。

### 4.3、对搜索引擎 SEO 优化不友好

这个部分我们在前面介绍传统架构优点的时候已经做了详细的介绍，如果需要考虑网页类应用搜索引擎 SEO 优化的，那么就不能采用前后端分离架构。

### 4.4、团队协作

当团队只有一个人在做的时候，不需要什么规范、制度，但是当团队从一个人，变成两个人，甚至更多人的时候，团队协作导致的问题就会越来越明显。这里我们拿两个比较典型的问题来和大家分享。

**①、接口文档**

作为程序开发者，我们最讨厌别人不写文档，讨厌别人不看文档，讨厌看别人文档，讨厌自己写文档。

> 同时也讨厌看别人的代码不加注释、更讨厌自己写代码加注释 .....

在前后端分离架构下，由于一切都是接口来交互，那么关于接口的描述文档 —— **接口文档** 就显得至关重要。但现实情况是即便是大厂出品的接口文档，质量也难以保证。

> 这里的质量我们先不谈表达能力、文字功底方面的要求，我们暂时只把质量标准简单的定义为`没有错误描述`，即不存在文档内容与实际接口不符这种情况。

就拿我们平时看的博客图文教程来讲，即便很认真的写和检查了也难免会出现这样或那样的 Bug （当也希望大家多多提出、马上优化）

在实际接口文档编写时，都会遇到一些文档内容描述上的错误导致未能达到预期使用效果的情况，主要原因都是因为文档没有同步功能更新，这也就导致了后端开发需要花费额外的时间和精力。这种问题相信很多同学在工作或学习过程中也遇到过，基本上都是因为团队没有一种完整的机制和流程去约束、规范导致的，甚至有些团队本来就不重视文档产出，全靠口口相传。

**②、技术认知、技术视野**

在前后端分离架构下，会有专门的前端岗和后端岗，不同开发岗位的同事有各自的技术栈、认知和视野水平。

因为前/后端开发都有自己本身的技术体系，从个人精力或者工作角度来看，更多人选择的是深度也不是广度，所以就会经常发生在某些功能的最终实现上，前端和后端开发人员会出现很大的分歧，无法互相理解对方的意图。

但多数情况下这种问题，如果大家都对彼此的技术栈有一些了解的话，在沟通和讨论上会更加落到实处，更容易得出解决方案。

> 所以说，前后端分离架构，在一定程度上对于开阔技术视野是造成了一定负面影响的。
>
> 因此，不论前端还是后端开发的同学都需要去了解彼此岗位的相关技术，来扩大自己的认知和技术视野，包括不限于跟我们岗位相关的上下游（如：产品经理、设计师、后端开发、甚至市场、销售等不同岗位之间的协作和工作内容 亦或直接了解一线使用我们软件的客户的反馈等）
>
> 这样才能更好的在职场中游刃有余，从而减少因个人认知和视野的局限性产生的不必要分歧，提升团队协作效率。

### 5、最佳实践

通过以上的内容，我们对两种架构设计又有了进一步的认识和体会。从以上内容不难看出，不同架构在不同的场景下有着各自的优缺点，并没有完美的解决方案，核心关键还是在于`场景`。

那么具体到实际开发中，我们怎么去选择呢 ？其实答案文中的内容已经把问题回答得差不多了，那就是—— **如果不需要考虑 SEO，那么尽量采用前后端分离架构**。 因为相比之下，前后端分离架构更加能满足当前的 Web 应用开发需求，总的来说是利大于弊的。

> 扩展阅读 ：[服务端渲染（SSR）通用技术解决方案(opens new window)](https://mp.weixin.qq.com/s/rmYwOx5HxZVrBZJX3POiGQ)

### 6、知其然、并知其所以然

我们前面学习并阶段性实践了微信小程序的网络数据请求，发现很简单。但我们仅仅会使用还是远远不够的，我们更希望大家知其然、并知其所以然。其必要性如下

- 技术选型：可以是有目的性的，而且是有理有据的，并不是拍脑袋决定的。虽然目前在 WEB 领域前后端分离架构是主流，但传统架构也一样是有一席之地的
- 遇到争议时的底气：在做项目时难免会发生一些争议，特别是在前后端分离架构的模式下。这时，如果我们了解前后端分离架构的模式的来龙去脉、优缺点、以及使用场景。那么，当我们在处理这种争议时就会特别有底气。

### 7、总结：微信小程序的应用架构

微信小程序是**前后端分离架构**下的前端应用。

“前后端分离”架构也是目前主流的 web 应用架构。掌握此架构的基本概念和使用场景是 web 应用开发人员必备的知识点。

> 同时，我们还应该了解 web 应用的`传统架构`概念和使用场景，以及演进到“前端后端分离”架构的需求痛点是什么。

## 三、微信小程序阶段性总结

通过前面章节的学习，我们对小程序开发的基本知识点，无论多么复杂的小程序应用，其实本质上也都是对这些基本知识点的运用而已。

虽然小程序本身的知识体系不如其他类型前端应用那么庞大，但也是自成体系的。麻雀虽小五脏俱全。对于一些刚接触小程序开发的同学，如果盲目的一头扎进去，上来就做项目只会处处碰壁。

所以前面的基础知识的学习主要目的就是为了帮助同学们建立起一个知识图谱的主脉络，同时每个部分都有阶段性的实践和应用，同时学会和习惯利用官方技术文档学习。

### 1、微信小程序发展史、开发环境准备、团队协作上线流程

- 小程序的前世今生
- 小程序开发环境准备和基础信息配置
- 创建第一个微信小程序工程
- 小程序开发协作及上线完整流程
- 小程序开发者平台 - 功能探索

> 详细内容，点击查阅 [博客图文内容 + 钉钉群直播回放视频(opens new window)](https://www.arryblog.com/vip/applet/)

### 2、小程序项目结构、配置层、视图层、逻辑层、宿主环境

- 小程序目录结构、文件类型、代码结构
- 小程序工程文件的分层
- 使用全局配置制作菜单栏
- 视图层的标签和样式、逻辑层交互
- 小程序的宿主环境

> 详细内容，点击查阅 [博客图文内容 + 钉钉群直播回放视频(opens new window)](https://www.arryblog.com/vip/applet/config-view-logic-host-layer.html)

### 3、微信小程序视图层的组件、数据绑定，列表、条件渲染、事件绑定

- 小程序中的常用组件
- 视图层 - 数据绑定
- 视图层 - 列表渲染
- 视图层 - 条件渲染
- 视图层代码拆分和模板语法
- 视图层 - 事件绑定

> 详细内容，点击查阅 [博客图文内容 + 钉钉群直播回放视频(opens new window)](https://www.arryblog.com/vip/applet/view-layer-components.html)

### 4、微信小程序页面导航、传参、事件、API、网络请求、综合实践

- 页面导航
- 导航传参
- 页面事件
- 小程序的 API
- 小程序网络数据请求的限制
- 上拉触底分页数据加载综合实践应用

> 详细内容，点击查阅 [博客图文内容 + 钉钉群直播回放视频(opens new window)](https://www.arryblog.com/vip/applet/navigation-events-api.html)

### 5、微信小程序的生命周期、生命周期函数 与 实践应用

- 生命周期 及 生命周期函数、分类
- 应用的（全局）生命周期函数
- 页面级别的生命周期函数

> 详细内容，点击查阅 [博客图文内容 + 钉钉群直播回放视频(opens new window)](https://www.arryblog.com/vip/applet/life-cycle-function.html)

### 6、微信小程序 - 阶段性综合实践

具体内容：钉钉群直播回放视频

### 7、小程序的三板斧

WXML、WXSS、JavaScript 简称为 微信小程序的三板斧

### 7.1、WXML

> `WXML（WeiXin Markup Language）` 是小程序用于构建页面的标签语言，结合[基础组件 (opens new window)](https://developers.weixin.qq.com/miniprogram/dev/component/)、[事件系统 (opens new window)](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)，可以构建出页面的结构。

`WXML`其使用方法和概念与`HTML`是非常类似的，本身的学习成本非常低，我们只需要通过参照官方的开发文档即可快速上手使用。

前面的章节我们学习小程序的基础组件，通过堆积木式的方法，我们可以的快速构建出页面。在小程序里面，有些基础组件的使用非常简单，可以提供的能力也有限;有些基础组件则可以提供一些非常灵活的能力，但是使用起来会比较难。

我们需要熟悉常用组件的基本使用和进阶使用方法，这通常是通过配置组件的某个属性或者监听组件触发的事件来实现的。所以我们需要经常性的阅读和关注官方开发文档。

**知识要点**

- ①、了解可用的基础组件有什么，并熟练使用（不需要记忆，多看多查）
- ②、基础组件的基本使用方法
- ③、基础组件的必选、可选属性列表，属性对应的能力
- ④、基础组件提供的事件

### 7.2、WXSS

> `WXSS（WeiXin Style Sheets）`是一套样式语言，用于描述 WXML 的组件样式。用来决定 WXML 的组件应该怎么显示。

`WXSS`具有 `CSS` 大部分特性，绝大多数在 CSS 中使用的配置项都能在 WXSS 中使用。样式的书写没有什么特别技巧和捷径，而且本身的配置项非常之多，不同的配置项组合使用能实现一些非常炫酷的效果。具体能实现什么效果，用多少行样式代码实现了效果这个也因人而异。

通常在具体书写样式的时候，推荐大家采用 **先整体划分页面结构，定好页面布局，再具体编写局部区域的样式** 这种思路，这种思路可以让我们在开发过程中对页面更有“空间感”。样式编写很考验熟练度，初级阶段我们实现某个样式可能会需要很多行样式代码，但是随着熟练度的上升，慢慢的就会做到样式代码越来越精简。

**知识要点**

- ①、除非特别需要，否则尺寸单位一律使用 `rpx`，由底层框架实现不同屏幕尺寸大小的兼容处理。
- ②、flex 弹性布局是主流且推荐的页面布局样式解决方案，需要重点了解。
- ③、常备一个 CSS 样式的说明文档，多查多看多调试（经常回顾之前学过的样式，忘记了马上查阅博客图文教程或回看视频）

### 7.3、JavaScript

> JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发 Web 页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，例如 Node.js、 Apache CouchDB 和 Adobe Acrobat。
>
> JavaScript 是一种基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

`JavaScript`（以下简称 JS）作为前端开发语言中的一哥，可以说是最难掌握且必须掌握的知识点。在小程序开发过程中，我们会经常借助小程序提供的 API 来实现一些功能，比如说我们在章节中使用过的`wx.getUserProfile()`、`wx.switchTab`、`wx.navigateTo`、`wx.stopPullDownRefresh`等。

这些 API 实际也是基于 JS 编写的。并且我们在调用的时候，其实也是使用了 JS 的语法。除了调用 API，我们还需要自己编写业务逻辑，这块也是考察 JS 语言功底的时候。

但是 JS 本身的语言体系也是非常庞大的，并且 JS 是一门“历史包袱”比较重的语言，它本身存在一些设计上的缺陷，有些知识点掌握起来并不是那么容易。但是，无论什么语言，它都有一些核心基础的知识点，如`变量声明`、`条件判断`、`循环`、`函数调用`等。我们只要掌握了这部分的内容，我们就已经可以胜任绝大多数工程项目了，更多的还是在于专注编程思维上的提升。

**知识要点**

- ①、变量声明 var、let、const 的区别
- ②、if、for、switch 语法 等
- ③、函数的概念、定义、使用
