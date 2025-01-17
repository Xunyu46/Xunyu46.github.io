---
title: 前后端数据交互 与 HTTP 协议
date: 2023-10-29
sidebar: 'auto'
categories:
  - ajax
tags:
  - ajax
publish: true
---

# 前后端数据交互 与 HTTP 协议

本节内容我们开始学习 前后端数据交互、通讯方式、HTTP 协议、HTTP 报文、HTTP 方法及对比、HTTP 状态码等在实际开发中的应用和常见问题。

学习到目前为止，我们只接触到了前端的内容，前端本质上是浏览器端，我们写的所有程序都需要在浏览器上运行。仅仅只有前端是不够的，我们还需要后端。只有前端，数据都是静态的（写死的不能动态变化的）

如果我们需要前端的数据是动态变化的，就需要从后端来获取这些数据，我们从本章开始要学习的前后端通讯，就是需要在前后端之间进行数据通讯的过程。因此，HTTP 协议就是前后端通讯时，需要遵循的一个协议规范。

**前后端通信**

- 前后端通信具体指什么
- 前后端通信的过程与概念
- 前后端的通信方式

**HTTP 协议**

- 认识 HTTP
- HTTP 报文（重点，HTTP 报文的格式）
- HTTP 方法
- 对比 GET 和 POST 方法
- HTTP 状态码

本章内容主要以相关概念的介绍 和 实际案例演示为主，代码层面的内容很少。这些内容更多都是偏向后端的，我们前端之所以要学习还是为了更方便和后端开发交流沟通。避免我们在与后端交流过程中不知道后端在说什么，这样就没办法团队协作开发了 。

## 一、前后端通信

深入浅出前后端通信是什么 ，后端向前端发送数据，前端向后端发送数据 等相关内容。

### 1、前后端通信是什么 ？

前后端通信指：前端和后端数据交互的过程。即 浏览器和服务器之间数据交互的过程。

**为什么需要前后端通信**

因为，不论前端还是后端，它们彼此都离不开对方。有时前端需要后端发送过来的数据，有时后端也需要前端发送来的数据。所以，前后端通信就是前端和后端各取所需的一个过程。

### 2、后端向前端发送数据

如：访问一个网页

- 打开任意在线网页后，如：[https://www.icodingedu.com/(opens new window)](https://www.icodingedu.com/)
- 在浏览器中按 "F12" 或 右键 检查元素，打开浏览器的开发者工具
- 将面板切换至 “Network” -> 刷新网页，注意观察发生了什么

![image-20221128152100485](https://www.arryblog.com/assets/img/image-20221128152100485.a19b1284.png)

注：

在刷新网页的过程中，浏览器和服务器之间就完成了一次通信，也就是完成一次数据之间的交互。

- 这里主要是后端向前端发送的数据，包括：HTML 文件、CSS、JS、图片 等，我们只要能够看到的都是后端发送过来的。因为浏览器要想展示一个网页给到用户查看，就需要当前网页相关的文件，而这些文件本身就保存在服务器中的。
- 当我们通过网址访问网页的时，这时浏览器和服务器就会展开通信，浏览器向服务器请求网页相关文件，服务器就会将浏览器请求的东西发送给它，然后就会通过这些文件进行渲染和展示网页了。

> 这就是典型的 后端向前端发送数据 的应用

### 3、前端向后端发送数据

典型应用场景，用户登录注册、站内搜索、表单提交等

![image-20221128161056427](https://www.arryblog.com/assets/img/image-20221128161056427.bfb91c61.png)

用户登录，前端向后端发送数据

- 用户输入用户名、密码，点击 “登录” 后，数据就会被发送到后端；
- 后端收到数据后，就会判断用户名、密码是否正确，然后将判断结果告诉前端；
- 前端拿到返回的结果后，就可以进一步操作了，比如：跳转到登录前的页面。

### 4、前后端通信的过程

首先我们需要明白，地球不是围绕着某一个人转的。同理 服务器也不是围绕着某一个浏览器来转的，它可以服务相当多的浏览器。

也就是说浏览器和服务器通信时，一般情况下都是浏览器主动联系服务器。如：一般都是你主动打电话给 110 报警，没见过 110 主动打电话给你来接警的，是一个道理。

> 所以，在服务器和浏览器之前通信的时候，是有一个主动和被动的关系。如下图所示

- 需要通信时，浏览器就会主动发送一个请求给到服务器，如果有数据也会在请求中把数据携带上
- 服务器在接收到请求后，会按照请求给出响应（即：回应浏览器的请求），如果服务端有数据也会在随着响应一起发送到浏览器端

![image-20221128171336282](https://www.arryblog.com/assets/img/image-20221128171336282.5dabfd89.png)

前后端通信是在 “请求 - 响应” 中完成的

### 5、基础概念的理解

- 前端：浏览器端
- 客户端：只要能和服务器通信的就叫客户端

> 如：命令行工具（客户端），输入 `curl https://www.icodingedu.com/`
>
> 包括我们日常，安装的很多 桌面端软件，基本都属于 客户端

- 后端：服务器端

## 二、前后端的通信方式

深入浅出前后端不同的通信方式

### 1、使用浏览器访问网页

在浏览器地址栏输入网址，按下回车

在打开网页的过程中，浏览器和服务器之间就完成了一次通信

![image-20221128230400746](https://www.arryblog.com/assets/img/image-20221128230400746.4b59dbf9.png)

### 2、解析 HTML 标签

浏览器在解析 HTML 标签的时候，遇到一些特殊的标签，会再次向服务器发送请求。

> 如下标签：

- `<link>` 标签
- `<img>` 标签
- `<script> </script>` 标签 ，如 ：使用 JSONP 跨域，就会用到 `script` 标签
- `<iframe>` 标签

> 还有一些标签，浏览器解析的时候，不会向服务器发送请求，但用户可以使用它们向服务器发送请求。如下

- `<a href="https://www.icodingedu.com/"></a>` 标签，点击 a 标签时，就会向 艾编程的服务器发送请求
- `<form>` 标签，form 表单提交时，就会向服务器发送请求

### 3、Ajax 和 Fetch

这个我们在后边的课程中会详细讲解，它们也是前后端的通信方式之一，先做了解即可。

- 与 Ajax 类似，Fetch 也是前后端通信的一种方式。Fetch 要比 Ajax 年轻一些
- Fetch 是 Ajax（XMLHttpRequest）的一种替代方案，它是基于 Promise 的

**Fetch 缺点**

- Fetch 的兼容性没有 Ajax 好
- Fetch 原生没有提供 abort 终止请求方式、timeout 请求超时方式，如果需要用到这些时，需要自己来实现。

> 目前我们先做了解即可 ！

## 三、HTTP 协议

深入浅出 HTTP 协议、HTTP 报文、HTTP 方法、GET 和 POST 方法的对比、HTTP 的状态码 等

### 1、HTTP 是什么 ？

HTTP 全称：Hyper Text Transfer Protocol **超文本传输协议**（HTTP 是这几个英文单词的首字母）

> 我们之前有学习过的 HTML 是 **超文本标记语言**

- **超文本：** 原先一个个单一的文本，通过超链接将其联系起来。由原先的单一的文本变成了可无限延伸、扩展的超级文本，立体文本。
- **传输协议：** 传输，如将请求传输过去、响应传输回来 等。协议即在传输的过程中需要遵守的规范

> 我们网页中的 HTML、JS、CSS、图片、字体、音频、视频 等等文件，都是通过 HTTP （超文本传输协议）在服务器和浏览器之间传输

- 每一次前后端通信，前端需要主动向后端发出请求，后端接收到前端的请求后，可以给出响应
- 因此，HTTP 是一个 请求、响应协议

### 2、HTTP 请求响应的过程

在浏览器的地址栏中输入网址，回车一下后，发生了什么 ？

![image-20221129173631665](https://www.arryblog.com/assets/img/image-20221129173631665.885cb358.png)

HTTP 请求响应的简单过程

> 同时，也可以打开浏览器的控制台 “Network” 也可实时查看到整个过程。

概括说：

浏览器向服务器发送了 HTTP 请求，服务器端又向浏览器发送了 HTTP 响应，总体就这一个过程。详细描述如下：

- 当我们在浏览器中访问网页时，浏览器先到自己的缓存中查询，如有缓存就不必向服务器发送请求，直接从缓存中读取。
- 但，有时候即便浏览器找到了缓存，它还需要考虑是否过期，这时就需要向服务器发送一个请求来询问缓存是否过期，服务器发送响应是否能用。这个过程就会涉及到浏览器和服务器之间的通信。具体是如何通讯的呢 ？
- 在浏览器地址栏 输入网址 `https://www.arryblog.com/` 是无法直接找到 服务器在哪里的。因为服务器是有一个位置信息（即：IP 地址）浏览器会先在内部通过网址查询对应的 IP，找到了 IP ，直接使用 IP（类似于门牌号） 和服务器建立链接 ，这个链接叫 **TCP 连接**
- HTTP 是建立在 TCP 连接基础之上的，连接建立之后，就相当于 浏览器和服务器之间就开通了一条通路（下图 色部分），浏览器的请求和服务器的响应都在这个通路中完成。

> 如果在浏览器中能查到网址对应的 IP，说明之前有访问过，浏览器内部会保存一份。

- 如之前没有访问过，浏览器也就没有记录过，本地就查不到，这时就需要到 DNS 域名解析服务器中去查询 IP （这个远程服务器会比较慢），查到之后会先在浏览器中存储一份，下次再访问时，就会在浏览器中查到对应的 IP 了，这样速度就会非常快。
- 这也是为什么，第一次打开一个网站时，会非常慢。第二次打开时就会快很多。
- 其中原因之一，就是我们再次访问网站时，就不用再次去 DNS 域名解析服务器中去查询 IP 了。而是直接用本地浏览器中的

### 3、HTTP 报文

**HTTP 报文是什么 ？**

- 浏览器向服务器发送请求时，请求本身就是信息，叫 **请求报文**
- 服务器向浏览器发送响应时，传输的信息，叫 **响应报文**

> 因此，我们讲的 HTTP 报文就是：请求报文 和 响应报文

![image-20221129215053891](https://www.arryblog.com/assets/img/image-20221129215053891.734f5f42.png)

HTTP 报文格式

- 请求：请求头（起始行 + 首部），请求体
- 响应：响应头（起始行 + 首部），响应体

注：

- GET 请求，没有请求体，数据通过请求头携带
- POST 请求，有请求体，数据通过请求体携带

> 在浏览器中访问网页，点开 ”Network“ 查看

![image-20221129220745081](https://www.arryblog.com/assets/img/image-20221129220745081.09c7d272.png)

## 四、HTTP 方法

深入浅出 HTTP 方法，语义，RESTful 接口设计 等。也可[查阅官方文档了解详情(opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods)

### 1、常用的 HTTP 方法

浏览器发送请求时采用的方法 和 响应无关

常见的方法有：GET、POST、PUT、DELETE，用来定义对于资源采取什么样的操作的，有各自的语义

### 2、HTTP 方法的语义

常用的这 4 种方法，行业中一般称之为 ”CRUD“ 增删改查，我们在实际开发中要清楚后端在说什么 ！

| HTTP 方法 | 描述                                                |
| :-------- | :-------------------------------------------------- |
| GET       | 获取数据：获取资源（文件），多用于获取或查询数据 等 |
| POST      | 创建数据：多用于增加数据、注册 等                   |
| PUT       | 更新数据：多用于 修改信息，修改密码 等              |
| DELETE    | 删除数据：多用于删除数据，删除商品信息 ... 等       |

注：

这些方法虽然有各自的语义，但并不是强制性的。

### 3、RESTful 接口设计

RESTful 是一种接口设计风格，充分利用 HTTP 方法的语义

> 如：我们需要对用户信息，进行增删改查，如何设计接口

- 常规方式

| 需求                 | HTTP 方法 | 接口地址                             |
| :------------------- | :-------- | :----------------------------------- |
| 根据 ID 获取个人信息 | GET       | https://icoding.com/api/getUser?id=1 |
| 注册新用户           | POST      | https://icoding.com/api/addUser      |
| 修改用户信息         | POST      | https://icoding.com/api/modifyUser   |
| 删除一个用户信息     | POST      | https://icoding.com/api/deleteUser   |

注：

以上方式正常使用没有问题，但会显得非常麻烦，需要通过名称来进行区分具体的功能

- 使用 RESTful 接口设计风格

> 充分利用 HTTP 方法的语义。如下

| 需求                 | HTTP 方法 | RESTful 风格接口地址              |
| :------------------- | :-------- | :-------------------------------- |
| 根据 ID 获取个人信息 | GET       | https://icoding.com/api/user?id=1 |
| 注册新用户           | POST      | https://icoding.com/api/user      |
| 修改用户信息         | PUT       | https://icoding.com/api/user      |
| 删除一个用户信息     | DELETE    | https://icoding.com/api/user      |

注：

我们在实际开发中 RESTful 接口设计风格会非常常见，大部分时间是由后端开发人员主导，前端开发会参与，讨论，必要时会提出意见和建议。

### 4、GET 和 POST 方法的对比

- 语义不同

| HTTP 方法 | 描述     |
| :-------- | :------- |
| GET       | 获取数据 |
| POST      | 创建数据 |

- 发送数据不同

| HTTP 方法 | 描述                                                                                                                |
| :-------- | :------------------------------------------------------------------------------------------------------------------ |
| GET       | 通过地址在请求头中携带数据 能携带的数据量和地址的长度有关系，一般最多就 几 K                                        |
| POST      | 既可以通过地址在请求头中携带数据（一般实际开发中不会这么做），也可以通过请求体携带数据 能携带的数据量理论上是无限的 |
| 结论      | 携带少量数据，可以使用 GET 请求，大量的数据可以使用 POST 请求                                                       |

- 缓存不同

| HTTP 方法 | 描述                                                                                                                           |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------- |
| GET       | 可以被缓存 因为，GET 请求连同它请求的数据都会被浏览器缓存 如：我们访问过的网站，就会被浏览器记住（输入前几个字母就会自动补全） |
| POST      | 不会被缓存 因为 POST 请求的数据一般不通过地址来发送请求，而是通过请求体来发送，所以不会被缓存                                  |

- 安全性

GET 和 POST 本质上都不安全，但为什么很多人说 POST 会比 GET 更安全呢 ？

因为 GET 是在浏览器的地址栏中明文显示传输的（也可以在历史记录找到对应的信息，如果是密码的话），而 POST 是通过请求体发送的，我们看不到。

注：

发送密码或其他敏感信息时不要使用 GET，主要是避免直接被他人窥屏或通过历史记录找到你的密码，从这个点来说 POST 确实会比 GET 安全一点。

### 5、HTTP 状态码

完整 HTTP 响应状态码，详细可[查看官方文档解读(opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

**HTTP 状态码是什么 ？**

- HTTP 状态码是定义服务器对请求的处理结果，是服务器返回的。
- HTTP 状态码的语义（常见状态码）

### 5.1、100 ~ 199 状态码

表示消息：代表请求已被接受，需要继续处理。

- 如：使用 websocket 会经常看到
- 我们经常使用的 `Live Server` 插件保存代码会自动刷新页面，就是使用 websocket 来实现的

![image-20221130001751022](https://www.arryblog.com/assets/img/image-20221130001751022.ea880a68.png)

### 5.2、200 ~ 299 状态码

表示成功响应

![image-20221130002116693](https://www.arryblog.com/assets/img/image-20221130002116693.db6f5a62.png)

### 5.3、300 ~ 399 状态码

表示重定向

- 如：输入 `https://arryblog.com` 跳转至 `https://www.arryblog.com` 发生了 301 永久重定向
- 重定向的位置一般都会被浏览器缓存，下次输入会自动跳转，除非我们手动把浏览器缓存清空，否则会默认跳转过去。

![image-20221130003436764](https://www.arryblog.com/assets/img/image-20221130003436764.24dd0d67.png)

我们常见的企业级 301 跳转解决方案

- http：no-www 跳转到 www
- http：www 跳转到 no-www
- https：no-www 跳转到 www
- https：www 跳转到 no-www

包括一些废弃的网址或更新后的地址，防止用户访问和搜索引擎爬虫爬取时，会报错。造成不好的用户体验 和 不利于 SEO 搜索引擎优化等，我们就会经常使用 301 永久重定向来处理。

注：

301 是永久重定向，需要谨慎使用，一旦设置 301 跳转的地址，就会被用户端的浏览器缓存了，我们是没有办法控制用户的浏览器来清空他的浏览器缓存，如果一旦服务端发生了新的修改，可能会跳转错误。

> 除非，我们本身就需要强制跳转的，如上边提到的 企业级 301 跳转解决方案，其他的慎用。

- 302 临时性的缓存，每一次都会向服务器发送一次请求，确认下会往哪里跳转。
- 304 表示没有修改，如：我们本地浏览器中有一份缓存，但还不敢用，怕它过期了，因此浏览器就会向服务器发送一次请求，确认是否过期。如果服务器返回的是 304 表示没有过期，即可直接使用，就不用再发送新的响应。表示还是使用本地的缓存，没有被修改。

### 5.4、400 ~ 499 状态码

表示客户端错误响应，一般会发生在前端

> 常见的 `404 Not Found` 找不到请求的资源

### 5.5、500 ~ 599 状态码

表示服务端错误响应

调用接口时，经常会遇到的错误 `500 Internal Server Error` 服务器遇到了不知道如何处理的情况。当我们看到 500 ~ 599 之间状态码 一般都是服务端的错误，这是就需要跟后端的同时沟通下，找到具体的问题所在。

## 五、总结

总结本章重难点知识，理清思路，把握重难点。并能轻松回答以下问题，说明自己就真正的掌握了。

用于故而知新，快速复习。

### 1、前后端通信

![image-20221128171336282](https://www.arryblog.com/assets/img/image-20221128171336282.5dabfd89.png)

前后端通信是在 “请求 - 响应” 中完成的

前后端通信的过程，即：

- 浏览器主动发出请求，有数据也可以一起携带上
- 服务器在接收到前端的请求后，可以给出自己的响应，如有数据需要携带，也可一起带上，这样浏览器就可以接收到服务器的响应
- 前后端通信就是这样一个过程

### 2、前后端的通信方式

- 使用浏览器访问网页
- link、img、script、a、form 等 HTML 的标签
- Ajax 和 Fetch

### 3、HTTP 协议

- HTML、JS、CSS、图片等文件，都是通过 HTTP 在服务器和浏览器之间传输
- HTTP 是一个请求 - 响应协议

### 4、HTTP 请求响应的过程

![image-20221129173631665](https://www.arryblog.com/assets/img/image-20221129173631665.885cb358.png)

HTTP 请求响应的过程

整个过程在以上图中我们可以看到

- 在浏览器和服务器之间建立一个 TCP 连接，HTTP 是建立在 TCP 连接之上的，有了 TCP 连接，就相当于在浏览器和服务器之间开通了一个通道。在这个通道中浏览器即可发送请求，服务器就可以给出响应。
- 建立 TCP 连接，首先需要去 DNS 域名解析服务器中去查询 IP，查询到后就会现在浏览器中缓存一份。下一次再查询时，就先到浏览器中缓存中去查，查到后，就没必要再去 DNS 域名解析服务器中去查了（也会比较耗时）。
- 关于缓存，有的缓存就没必要向服务器发请求了，直接从缓存中获取。还有的缓存需要从服务器确认下，有没有过期或是否发生修改。这是就需要浏览器再向服务器额外的发一次请求，服务器端给出确认（如：304 状态码，就是确认的结果，服务器明确告诉你这个文件没有发生修改，用自己的缓存就好，不必来服务器查找）

### 5、HTTP 报文

- 浏览器向服务器发送请求时，请求本身就是信息，叫 **请求报文**
- 服务器向浏览器发送响应时，传输的信息，叫 **响应报文**

> 因此，我们讲的 HTTP 报文就是：请求报文 和 响应报文

![image-20221129215053891](https://www.arryblog.com/assets/img/image-20221129215053891.734f5f42.png)

**HTTP 报文格式**

- 请求：请求头（起始行 + 首部），请求体
- 响应：响应头（起始行 + 首部），响应体

### 6、HTTP 方法

- GET 获取数据
- PUT 更新数据
- POST 创建数据
- DELETE 删除数据

> 先重点了解这 4 种方法，行业通称 "增删改查"

### 7、GET 和 POST 方法的对比

- GET 表示获取数据，POST 表示创建数据
- GET 通过地址在请求头中携带数据
- POST 既可以通过地址在请求头中携带数据，也可以通过请求体携带数据
- GET 可以被缓存，POST 不会被缓存
- 发送密码或其他敏感信息时不要使用 GET

### 8、HTTP 状态码

- 100 ~ 199 消息 ：代表请求已被接受，需要继续处理
- 200 ~ 299 成功
- 300 ~ 399 重定向
- 400 ~ 499 请求错误
- 500 ~ 599 服务器错误

> 以上状态码，无须每一个都记住，只需要知道区间的状态码是什么意思，包括常见的 状态码即可，必要时在[官方文档中 (opens new window)](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)及时查阅即可。

## 六、测试题

自我测试：在不看答案的前提下，看看自己是否真正掌握了本节所学内容。

### 1、以下关于前后端通信的概念，说法不正确的是 ？

> 单选

- A、前后端通信指的是前端和后端数据交互的过程
- B、能和服务器通信的就叫客户端
- C、浏览器和服务器之间的数据交互过程属于前后端通信
- D、常见的前后端通信的过程是：服务器向浏览器请求数据，浏览器向服务器响应数据

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124);">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7;">正确答案：D</p><p style="line-height: 1.7;">答案解析：该题考察 前后端通信的基础概念</p><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">常见的前后端通信的过程是：浏览器向服务器请求数据，服务器向浏览器响应数据。所以 D 选项说法是错误的。</p></details>

### 2、浏览器在解析以下哪个标签时，会向服务器发送请求 ？

> 多选

- A、`<img>` 标签
- B、`<script>` 标签
- C、`<iframe></iframe>` 标签
- D、`<a></a>` 标签
- E、`<form></form>` 标签

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124);">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7;">正确答案：A B C</p><p style="line-height: 1.7;">答案解析：该题目考查特殊标签的使用</p><ul style="padding-left: 1.2em; line-height: 1.7;"><li>浏览器在解析 HTML 标签的时候，遇到 link、img、script、iframe 标签，会再次向服务器发送请求。</li><li>而 a、form 标签在浏览器解析的时候，不会向服务器发送请求，但是用户可以使用它们向服务器发送请求。例如，可以在 form 标签中填写数据，点击提交按钮，从而向服务器发起请求。</li></ul></details>

### 3、以下关于 HTTP 相关概念，说法正确的是 ？

> 多选

- A、HTML、JS、CSS 等文件，都是通过 HTTP 在服务器和浏览器之间传输
- B、浏览器和服务器之间，通过 TCP 连接
- C、HTTP 是超文本传输协议
- D、 浏览器在请求某一个地址时，会直接向服务器发起 HTTP 请求

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124);">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7;">正确答案：A B C</p><p style="line-height: 1.7;">答案解析：该题考察 HTTP 相关概念</p><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">浏览器在请求某一个地址时，会先在缓存中查找是否访问过此地址。如果访问过，则不会像服务器发送 HTTP 请求了。所以 D 选项说法是错误的。</p></details>

### 4、以下关于 HTTP 报文，说法正确的是 ？

> 多选

- A、GET 和 POST 请求都有请求头、请求体
- B、通过 GET 方法，发送的数据会在网址栏中体现出来
- C、HTTP 报文分为请求报文和响应报文
- D、请求报文分为请求头、请求体，请求头又分为起始行和首部

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124);">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7;">正确答案：B C D</p><p style="line-height: 1.7;">答案解析：该题考察 HTTP 报文相关概念</p><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">GET 请求，没有请求体，所以 A 选项错误</p></details>

### 5、以下关于 HTTP 方法的语义，描述错误的是 ？

> 多选

- A、POST 方法一般表示更新数据，例如：修改个人信息
- B、DELETE 方法一般表示删除数据，例如：删除留言
- C、PUT 方法一般表示添加数据，例如：注册时添加数据
- D、GET 方法一般表示获取数据，例如：获取图片资源

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124);">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7;">正确答案：A C</p><p style="line-height: 1.7;">答案解析：该题考察 HTTP 的几个常用方法的应用</p><ul style="padding-left: 1.2em; line-height: 1.7;"><li>POST 方法一般表示创建数据，A 选项描述错误</li><li>DELETE 方法表示删除数据，D 选项描述正确</li><li>PUT 方法表示更新数据，C 选项描述错误</li><li>GET 方法表示获取数据，D 选项描述正确</li></ul></details>

### 6、关于 GET 请求 和 POST 请求，描述正确的是 ？

> 多选

- A、POST 请求主要通过请求体携带数据，不能通过请求头携带
- B、GET 请求，可以在通过代码 `xhr.send('sex=female')`，成功的发送数据
- C、POST 请求可以通过`xhr.send(username=${encodeURIComponent('icoding)});`的形式发送数据。
- D、GET 请求不能通过请求体携带数据，但是可以通过请求头携带数据

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124);">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7;">正确答案：C D</p><p style="line-height: 1.7;">答案解析：该题考察 GET 请求与 POST 请求的区别</p><p style="line-height: 1.7;">POST 请求</p><ul style="padding-left: 1.2em; line-height: 1.7;"><li>POST 请求，既可以通过请求体携带数据、又可以通过请求头携带数据，A 说法错误。</li><li>POST 请求可以通过<code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">xhr.send(username=${encodeURIComponent('icoding')});</code>的形式发送数据，C 说法正确。</li></ul><p style="line-height: 1.7;">GET 请求</p><ul style="padding-left: 1.2em; line-height: 1.7;"><li>GET 请求不能通过请求体携带数据，但是可以通过请求头携带数据，D 选项描述正确。</li><li>send 方法发送的数据，是通过请求体携带的，因此在 get 请求中，书写<code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">xhr.send('sex=female')</code>这句代码，无法成功发送数据，B 说法错误。</li></ul></details>

### 7、常见 HTTP 状态码，描述错误的选项是 ？

> 多选

- A、状态码为 404，表示找不到页面
- B、状态码为 500，表示浏览器中的代码存在错误
- C、状态码为 302，表示永久重定向，重新跳转到其它网址
- D、状态码为 200，表示请求成功

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238);"><summary style="outline: none; cursor: pointer; color: rgb(62, 175, 124);">自己先分析，再点击查看正确答案</summary><p style="line-height: 1.7;">正确答案：B C</p><p style="line-height: 1.7;">答案解析：该题考察常见的 HTTP 状态码的含义</p><ul style="padding-left: 1.2em; line-height: 1.7;"><li>状态码为 200，表示请求成功</li><li>状态码为 301，表示永久重定向，302 表示临时重定向</li><li>状态码为 404，表示页面找不到</li><li>状态码为 500，表示服务器端存在未知错误，与浏览器的代码没有任何关系</li></ul></details>
