---
title: 前端 HTML/HTML5 核心标签和属性
date: 2023-10-28
sidebar: 'auto'
categories:
  - Html
tags:
  - Html
publish: true
---

# 前端 HTML/HTML5 核心标签和属性

Web 前端入门到精通必会的标签属性大全

## 1、文档声明、文档结构、功能标签

注：

HTML/HTML5 骨架相关基础标签

| 分类         | 标签名称                | 描述                                                                                                                                                                                                                                                                                                                                                                        |
| :----------- | :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 文档声明     | **`<!DOCTYPE>`**        | 用于告诉浏览器此文档的类型是什么 处于`<html>`**标签之前。用于告诉浏览器此文档的类型是什么。目前开发中常用的声明是**`<!DOCTYPE html>`，表示声明一个 HTML5 文档。 它不属于 HTML 标签，而是一条指令                                                                                                                                                                            |
| 文档结构标签 | html，head，title，body | （1）html 标签：每创建一个 HTML 文件，都需要创建 html 标签对。除了声明文档类型的代码，其他的所有内容都存放在 html 标签对中； （2） head 标签：定义文档的头部，用来包含网页的配置（例如网页的标题 title，网页的基础配置 meta 都放在 head 中）； （3）title 标签：定义网页的标题，标题内容会显示在浏览器的标签栏上 （4）body 标签：定义网页的主体，例如：网页中的图片、文字等 |
| 功能标签     | meta                    | 元标签，用来表示网页的基础配置                                                                                                                                                                                                                                                                                                                                              |

## 2、块级元素

注：

块级元素可以独占一行，默认自上而下排列，可以设置宽高。

| 标签名称      | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| h1 ~ h6       | 一级标题 ~ 六级标题                                          |
| p             | 段落标签，用来描述网页中的段落内容                           |
| div           | 用于页面区域的划分。它就像一个容器，用来放某一个区域的内容   |
| ul，ol        | 定义无序列表，定义有序列表                                   |
| li            | 定义列表项，与 ul 或者 ol 配合使用                           |
| dt，dd        | 定义列表中的项目， 描述列表中的项目                          |
| figure        | 定义一段独立的内容（不常用，了解即可）                       |
| figcaption    | 定义 figure 元素的标题（不常用，了解即可）                   |
| form          | 表单标签，里面包含很多搜集信息的表单元素，如输入框，复选框等 |
| table，canvas | 定义 HTML 表格，通过脚本（通常是 JavaScript）来绘制图形      |
| pre           | 预格式化的文本                                               |

## 3、区块标签

注：

html5 新增的语义化标签

| 标签名称 | 描述                           |
| :------- | :----------------------------- |
| header   | 定义页头                       |
| nav      | 定义导航                       |
| main     | 定义页面的主体区域             |
| aside    | 可用作文章的侧栏               |
| article  | 可用作文章的内容               |
| section  | 可用作文档的区域块，类似于 div |
| footer   | 定义页脚                       |

## 4、内联元素

注：

内联元素不会自占一行，与其他内联元素在同一行显示，且宽高由内容撑起。

| 标签名称  | 描述                                                                   |
| :-------- | :--------------------------------------------------------------------- |
| a         | 超链接标签，用于从一张页面链接到另一张页面                             |
| span      | 用来组合文档中的行内元素，一般用来包裹文字                             |
| label     | 为 input 元素定义标注（标记）label 可设置 for 属性                     |
| b，u      | 字体加粗标签，下划线文本标签（不常用，了解即可）                       |
| i，strong | 斜体文本标签，用于强调文本的标签字体会加粗（不常用，了解即可）         |
| em        | 用于强调文本的标签，字体变成斜体（不常用，了解即可）                   |
| mark      | 突出显示文本的标签，字体会有背景颜色，默认的是黄色（不常用，了解即可） |
| datalist  | 标签/控件，需要结合 option 标签使用（不常用，了解即可）                |

## 5、特殊内联元素

注：

可以设置宽高，但不独占一行

| 标签名称 | 描述                                                                                         |
| :------- | :------------------------------------------------------------------------------------------- |
| img      | 图片标签，用于在网页中嵌入图片                                                               |
| audio    | 音频标签，用于在页面中引入音频                                                               |
| video    | 视频标签，用于在页面中引入视频                                                               |
| input    | 定义用户可输入数据的输入字段。例如登录页面的用户名和密码框，都是使用 input 标签              |
| select   | 定义下拉列表                                                                                 |
| option   | 定义下拉列表项，需要与 select 配合使用（块元素，写在这里是因为它需要跟 select 标签一起使用） |
| textarea | 定义多行文本框，常用于留言框、备注框等                                                       |

## 6、转义字符

| 标签名  | 描述            |
| :------ | :-------------- |
| **` `** | 表示空格符号    |
| **`<`** | 表示小于号“<”   |
| **`>`** | 表示大于号“>”   |
| **`©`** | 表示版权符号“©” |

## 7、表格标签

| 标签名  | 描述                                     |
| :------ | :--------------------------------------- |
| table   | 表格标签                                 |
| tr      | 表格行                                   |
| td      | 表格列                                   |
| th      | 标签，可替代 td 标签，用来设置表格的标题 |
| thead   | 定义表格头部                             |
| tbody   | 定义表格主体内容                         |
| tfoot   | 定义表格尾部                             |
| caption | 设置表格的标题                           |

## 8、标签中的属性

| 属性名          | 描述                                                                                                                                                                                                                                                                                                                                           |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lang            | html 标签的属性，用来标记网页的语言； 常见属性值有："en"和"zh"；en 代表英语, zh 代表中文                                                                                                                                                                                                                                                       |
| charset         | meta 标签的属性，声明页面文档使用的字符编码类型。 常用的属性值有：UTF-8 和 GB2312                                                                                                                                                                                                                                                              |
| type            | 修改无序列表与有序列表默认的前导样式（已被废弃，了解即可） 1、type 属性写在无序列表中，属性值有： （1）disc：默认值，实心圆样式 （2）circle： 空心圆样式 （3）square：实心方块样式 2、type 属性写在有序列表中，属性值有： （1）1：默认值，数字编号 （2）A：大写英文编号 （3）i：小写罗马数字编号 （4）I：大写罗马数字编号 （5）a：小写英文编号 |
| start           | 有序列表的属性，指定列表编号的起始值，能修改有序列表标签默认的前导样式（不常用，了解即可）                                                                                                                                                                                                                                                     |
| reversed        | 有序列表的属性，指定列表中的条目是否倒序排列的（不常用，了解即可）                                                                                                                                                                                                                                                                             |
| src             | （1）img 标签的属性，指定图片的路径 （2）audio 标签和 video 标签也可以设置 src 属性，指定音频、视频的路径                                                                                                                                                                                                                                      |
| alt             | img 标签的属性，用来对引入的图片进行文本描述                                                                                                                                                                                                                                                                                                   |
| width           | 规定元素的宽度。此属性不常用，了解即可。后续学习 css，会使用 css 样式设置元素宽度                                                                                                                                                                                                                                                              |
| height          | 规定元素的高度。此属性不常用，了解即可。后续学习 css，会使用 css 样式设置元素高度。 注意，height 或者 width 如果省略其中一个属性，则按照图片原始比例缩放图片                                                                                                                                                                                   |
| href            | a 标签属性，规定该链接要跳转到目标页面的地址                                                                                                                                                                                                                                                                                                   |
| title           | a 标签属性，设置鼠标悬停的文本                                                                                                                                                                                                                                                                                                                 |
| target          | a 标签属性，规定在何处打开链接文档； 如果属性值为 blank 或\_blank，会打开新的标签页                                                                                                                                                                                                                                                            |
| controls        | audio/video 的属性，用于显示播放控件                                                                                                                                                                                                                                                                                                           |
| autoplay        | audio/video 的属性，设置音频/视频自动播放                                                                                                                                                                                                                                                                                                      |
| loop            | audio/video 的属性，设置音频/视频可以循环播放                                                                                                                                                                                                                                                                                                  |
| class           | 所有标签都可以使用这个属性，用来定义元素的类名（后续学习 css，会有详细的讲解）                                                                                                                                                                                                                                                                 |
| action          | form 标签的属性，用来设置 form 表单的数据要提交到哪个地址。提交到哪个地址，后端开发会告诉我们（不常用，了解一下。提交数据常用 ajax，后面会学习到的）                                                                                                                                                                                           |
| method          | form 标签的属性，用来设置表单的提交方式，常用的方式有 get 或 post（不常用，了解即可）                                                                                                                                                                                                                                                          |
| rows            | textarea 标签属性，设置多行文本框有多少行                                                                                                                                                                                                                                                                                                      |
| cols            | textarea 标签属性，设置多行文本框有多少列                                                                                                                                                                                                                                                                                                      |
| list            | datalist 控件的属性，二者结合，可以与输入框绑定，为输入框设置备选项（不常用，了解即可）                                                                                                                                                                                                                                                        |
| border          | 边框属性，可为 table 添加边框                                                                                                                                                                                                                                                                                                                  |
| border-collapse | css 样式，通常给表格设置 border-collapse：collapse；让表格边框合并，成为单线表格;                                                                                                                                                                                                                                                              |
| colspan         | 表格标签的属性，实现跨列合并的效果，用来设置 td 或 th 跨列合并                                                                                                                                                                                                                                                                                 |
| rowspan         | 表格标签的属性，实现跨行合并的效果，用来设置 td 或 th 跨行合并                                                                                                                                                                                                                                                                                 |
| cellspacing     | 设置表格单元格内容与边框之间的间隙（不常用，了解即可）                                                                                                                                                                                                                                                                                         |
| cellpadding     | 设置两个单元格之间的间隙（不常用，了解即可）                                                                                                                                                                                                                                                                                                   |

## 9、input 元素中的属性

| 属性名称    | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :---------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type        | 用来定义表单元素的类型。属性值如下： （1）text：单行文本输入框 （2）radio：单选按钮 （3）checkbox：复选框 （4）password：密码框 （5）button：普通按钮，也可以直接写成 button 按钮，例如：`<button>按钮标签</button>` （6）submit：提交按钮 （7）reset：重置按钮 （8）color：颜色控件（不常用，了解即可） （9）date：日期控件 （10）time：时间控件 （11）email：电子邮件输入控件 （12）file：文件选择控件，需要上传本地文件时，可以使用它 （13）number：表示数字输入控件 （14）range：表示拖拽条（不常用，了解即可） （15）search：t 表示搜索框（不常用，了解即可） （16）url：表示网址输入控件 |
| value       | 用于为 input 元素设定值，value 值一般是给后端发送数据时使用，后续学习了相关课程就会了解                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| name        | 规定 input 元素的名称                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| checked     | 用来设置单选按钮、多选按钮的默认选中项                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| placeholder | 表示提示文本，用来设置输入框的提示信息，告诉用户该输入框需要输入什么内容                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| disabled    | 用于禁用 input 元素，表示只读                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| max         | max 表示最大值，表示数字输入控件（即 type="number"的 input 元素）允许输入的最大值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| min         | min 表示最小值，最小值，表示数字输入控件（即 type="number"的 input 元素）允许输入的最小值                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| required    | 表示必填字段，约束某项内容是必填项，比如规定”用户名“项，是必填项                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

## 10、标签嵌套规则

总结

块级元素中，可以放块级元素也可以放内联元素。

> 特殊情况：p 标签 和 h 标签中 只能放内联元素 或 文本内容，不能放其他块级元素

行内元素中，只能放文本内容。

> 特殊情况：a 标签中可以放块级元素
