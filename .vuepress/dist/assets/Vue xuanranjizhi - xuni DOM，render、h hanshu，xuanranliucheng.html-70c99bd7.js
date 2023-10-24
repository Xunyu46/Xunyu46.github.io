const l=JSON.parse('{"key":"v-851b586e","path":"/blogs/web/vue/Vue xuanranjizhi - xuni DOM，render、h hanshu，xuanranliucheng.html","title":"Vue 渲染机制 - 虚拟 DOM，render、h 函数，渲染流程","lang":"en-US","frontmatter":{"title":"Vue 渲染机制 - 虚拟 DOM，render、h 函数，渲染流程","date":"2023-10-24T00:00:00.000Z","sidebar":"auto","categories":["vue"],"tags":["vue"],"publish":true},"headers":[{"level":2,"title":"#一、Vue 描述 UI 的 2 种方式","slug":"一、vue-描述-ui-的-2-种方式","link":"#一、vue-描述-ui-的-2-种方式","children":[]},{"level":2,"title":"#二、虚拟 DOM","slug":"二、虚拟-dom","link":"#二、虚拟-dom","children":[{"level":3,"title":"#1、虚拟 DOM 定义","slug":"_1、虚拟-dom-定义","link":"#_1、虚拟-dom-定义","children":[]},{"level":3,"title":"#2、手动创建虚拟 DOM","slug":"_2、手动创建虚拟-dom","link":"#_2、手动创建虚拟-dom","children":[]},{"level":3,"title":"#3、自动创建虚拟 DOM","slug":"_3、自动创建虚拟-dom","link":"#_3、自动创建虚拟-dom","children":[]}]},{"level":2,"title":"#三、Vue 渲染函数","slug":"三、vue-渲染函数","link":"#三、vue-渲染函数","children":[{"level":3,"title":"#1、h() 函数的语法","slug":"_1、h-函数的语法","link":"#_1、h-函数的语法","children":[]},{"level":3,"title":"#2、h 函数的基本用法","slug":"_2、h-函数的基本用法","link":"#_2、h-函数的基本用法","children":[]},{"level":3,"title":"#2.1、创建 HTML 元素的 vnode","slug":"_2-1、创建-html-元素的-vnode","link":"#_2-1、创建-html-元素的-vnode","children":[]},{"level":3,"title":"#2.2、创建组件的 vnode","slug":"_2-2、创建组件的-vnode","link":"#_2-2、创建组件的-vnode","children":[]},{"level":3,"title":"#3、渲染函数的基本用法","slug":"_3、渲染函数的基本用法","link":"#_3、渲染函数的基本用法","children":[]},{"level":3,"title":"#3.1、选项式 API","slug":"_3-1、选项式-api","link":"#_3-1、选项式-api","children":[]},{"level":3,"title":"#3.2、setup() 函数中","slug":"_3-2、setup-函数中","link":"#_3-2、setup-函数中","children":[]},{"level":3,"title":"#3.3、在 <script setup> 中使用","slug":"_3-3、在-script-setup-中使用","link":"#_3-3、在-script-setup-中使用","children":[]},{"level":3,"title":"#4、根渲染函数","slug":"_4、根渲染函数","link":"#_4、根渲染函数","children":[]},{"level":3,"title":"#5、渲染函数 与 template 模板","slug":"_5、渲染函数-与-template-模板","link":"#_5、渲染函数-与-template-模板","children":[]},{"level":3,"title":"#6、模板 VS 渲染函数","slug":"_6、模板-vs-渲染函数","link":"#_6、模板-vs-渲染函数","children":[]},{"level":3,"title":"#7、实战应用：动态生成带锚点标题","slug":"_7、实战应用-动态生成带锚点标题","link":"#_7、实战应用-动态生成带锚点标题","children":[]}]},{"level":2,"title":"#四、Vue 渲染机制","slug":"四、vue-渲染机制","link":"#四、vue-渲染机制","children":[{"level":3,"title":"#1、编译器","slug":"_1、编译器","link":"#_1、编译器","children":[]},{"level":3,"title":"#2、渲染器","slug":"_2、渲染器","link":"#_2、渲染器","children":[]},{"level":3,"title":"#3、渲染器渲染组件","slug":"_3、渲染器渲染组件","link":"#_3、渲染器渲染组件","children":[]},{"level":3,"title":"#4、Vue 渲染流程","slug":"_4、vue-渲染流程","link":"#_4、vue-渲染流程","children":[]}]},{"level":2,"title":"#五、深入 h 函数","slug":"五、深入-h-函数","link":"#五、深入-h-函数","children":[{"level":3,"title":"#1、vnodes 必须唯一","slug":"_1、vnodes-必须唯一","link":"#_1、vnodes-必须唯一","children":[]}]},{"level":2,"title":"#六、渲染函数案例","slug":"六、渲染函数案例","link":"#六、渲染函数案例","children":[{"level":3,"title":"#1、v-on 事件","slug":"_1、v-on-事件","link":"#_1、v-on-事件","children":[]},{"level":3,"title":"#2、v-if 指令","slug":"_2、v-if-指令","link":"#_2、v-if-指令","children":[]},{"level":3,"title":"#3、v-for","slug":"_3、v-for","link":"#_3、v-for","children":[]},{"level":3,"title":"#4、事件修饰符","slug":"_4、事件修饰符","link":"#_4、事件修饰符","children":[]},{"level":3,"title":"#5、组件","slug":"_5、组件","link":"#_5、组件","children":[]},{"level":3,"title":"#6、内置组件","slug":"_6、内置组件","link":"#_6、内置组件","children":[]},{"level":3,"title":"#7、渲染插槽","slug":"_7、渲染插槽","link":"#_7、渲染插槽","children":[]},{"level":3,"title":"#8、传递插槽内容","slug":"_8、传递插槽内容","link":"#_8、传递插槽内容","children":[]},{"level":3,"title":"#9、组件 v-model","slug":"_9、组件-v-model","link":"#_9、组件-v-model","children":[]},{"level":3,"title":"#10、自定义指令","slug":"_10、自定义指令","link":"#_10、自定义指令","children":[]},{"level":3,"title":"#11、模板引用","slug":"_11、模板引用","link":"#_11、模板引用","children":[]}]},{"level":2,"title":"#七、函数式组件","slug":"七、函数式组件","link":"#七、函数式组件","children":[{"level":3,"title":"#1、函数式组件的基本用法","slug":"_1、函数式组件的基本用法","link":"#_1、函数式组件的基本用法","children":[]},{"level":3,"title":"#2、函数式组件复杂应用","slug":"_2、函数式组件复杂应用","link":"#_2、函数式组件复杂应用","children":[]}]},{"level":2,"title":"#八、实战应用：无限下拉菜单","slug":"八、实战应用-无限下拉菜单","link":"#八、实战应用-无限下拉菜单","children":[{"level":3,"title":"#1、项目介绍","slug":"_1、项目介绍","link":"#_1、项目介绍","children":[]},{"level":3,"title":"#1.1、项目功能","slug":"_1-1、项目功能","link":"#_1-1、项目功能","children":[]},{"level":3,"title":"#1.2、项目涉及核心知识点","slug":"_1-2、项目涉及核心知识点","link":"#_1-2、项目涉及核心知识点","children":[]},{"level":3,"title":"#1.3、学习目标","slug":"_1-3、学习目标","link":"#_1-3、学习目标","children":[]},{"level":3,"title":"#2、项目开发流程","slug":"_2、项目开发流程","link":"#_2、项目开发流程","children":[]},{"level":3,"title":"#2.1、分析 UI 图","slug":"_2-1、分析-ui-图","link":"#_2-1、分析-ui-图","children":[]},{"level":3,"title":"#2.2、实现 UI 静态布局","slug":"_2-2、实现-ui-静态布局","link":"#_2-2、实现-ui-静态布局","children":[]},{"level":3,"title":"#2.3、拆分组件","slug":"_2-3、拆分组件","link":"#_2-3、拆分组件","children":[]},{"level":3,"title":"#2.4、确定数据源","slug":"_2-4、确定数据源","link":"#_2-4、确定数据源","children":[]},{"level":3,"title":"#2.5、渲染一级与二级菜单","slug":"_2-5、渲染一级与二级菜单","link":"#_2-5、渲染一级与二级菜单","children":[]},{"level":3,"title":"#2.6、渲染无限级菜单","slug":"_2-6、渲染无限级菜单","link":"#_2-6、渲染无限级菜单","children":[]},{"level":3,"title":"#3、完整版代码","slug":"_3、完整版代码","link":"#_3、完整版代码","children":[]}]}],"git":{"createdTime":1698156484000,"updatedTime":1698156484000,"contributors":[{"name":"xunyu","email":"2548126293@qq.com","commits":1}]},"filePathRelative":"blogs/web/vue/Vue 渲染机制 - 虚拟 DOM，render、h 函数，渲染流程.md"}');export{l as data};
