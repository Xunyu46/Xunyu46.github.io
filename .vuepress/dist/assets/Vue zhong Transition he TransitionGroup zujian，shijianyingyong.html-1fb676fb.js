const l=JSON.parse('{"key":"v-0cd8840c","path":"/blogs/web/vue/Vue zhong Transition he TransitionGroup zujian，shijianyingyong.html","title":"Vue 中 Transition 和 TransitionGroup 组件，实践应用","lang":"en-US","frontmatter":{"title":"Vue 中 Transition 和 TransitionGroup 组件，实践应用","date":"2023-10-24T00:00:00.000Z","sidebar":"auto","categories":["vue"],"tags":["vue"],"publish":true},"headers":[{"level":2,"title":"#一、<Transition>内置组件","slug":"一、-transition-内置组件","link":"#一、-transition-内置组件","children":[{"level":3,"title":"#1、<Transition>组件的基本用法","slug":"_1、-transition-组件的基本用法","link":"#_1、-transition-组件的基本用法","children":[]},{"level":3,"title":"#2、CSS 过渡 Class","slug":"_2、css-过渡-class","link":"#_2、css-过渡-class","children":[]},{"level":3,"title":"#3、元素初次渲染时过渡 （appear 属性）","slug":"_3、元素初次渲染时过渡-appear-属性","link":"#_3、元素初次渲染时过渡-appear-属性","children":[]},{"level":3,"title":"#4、元素间过渡","slug":"_4、元素间过渡","link":"#_4、元素间过渡","children":[]},{"level":3,"title":"#5、过渡模式 mode=\\"out-in\\"","slug":"_5、过渡模式-mode-out-in","link":"#_5、过渡模式-mode-out-in","children":[]},{"level":3,"title":"#6、<component>组件间过渡","slug":"_6、-component-组件间过渡","link":"#_6、-component-组件间过渡","children":[]},{"level":3,"title":"#7、为过渡效果命名","slug":"_7、为过渡效果命名","link":"#_7、为过渡效果命名","children":[]},{"level":3,"title":"#8、深层级过渡与显式指定过渡时长","slug":"_8、深层级过渡与显式指定过渡时长","link":"#_8、深层级过渡与显式指定过渡时长","children":[]},{"level":3,"title":"#8.1、复杂动画应用","slug":"_8-1、复杂动画应用","link":"#_8-1、复杂动画应用","children":[]},{"level":3,"title":"#9、CSS 的 animation 动画","slug":"_9、css-的-animation-动画","link":"#_9、css-的-animation-动画","children":[]},{"level":3,"title":"#10、自定义过渡 class","slug":"_10、自定义过渡-class","link":"#_10、自定义过渡-class","children":[]},{"level":3,"title":"#11、animate.css 与 <Transition>组件结合应用","slug":"_11、animate-css-与-transition-组件结合应用","link":"#_11、animate-css-与-transition-组件结合应用","children":[]},{"level":3,"title":"#11.1、如何使用 Animate 动画库","slug":"_11-1、如何使用-animate-动画库","link":"#_11-1、如何使用-animate-动画库","children":[]},{"level":3,"title":"#11.2、应用：入场出场动画","slug":"_11-2、应用-入场出场动画","link":"#_11-2、应用-入场出场动画","children":[]},{"level":3,"title":"#12、同时使用 transition 和 animation","slug":"_12、同时使用-transition-和-animation","link":"#_12、同时使用-transition-和-animation","children":[]},{"level":3,"title":"#13、动画的 JavaScript 钩子","slug":"_13、动画的-javascript-钩子","link":"#_13、动画的-javascript-钩子","children":[]},{"level":3,"title":"#13.1、测试钩子执行时机","slug":"_13-1、测试钩子执行时机","link":"#_13-1、测试钩子执行时机","children":[]},{"level":3,"title":"#13.2、钩子函数功能","slug":"_13-2、钩子函数功能","link":"#_13-2、钩子函数功能","children":[]},{"level":3,"title":"#13.3、钩子函数的基本使用","slug":"_13-3、钩子函数的基本使用","link":"#_13-3、钩子函数的基本使用","children":[]},{"level":3,"title":"#13.4、案例：弹性动画","slug":"_13-4、案例-弹性动画","link":"#_13-4、案例-弹性动画","children":[]},{"level":3,"title":"#14、封装可复用过渡效果的组件","slug":"_14、封装可复用过渡效果的组件","link":"#_14、封装可复用过渡效果的组件","children":[]},{"level":3,"title":"#14.1、封装动画组件","slug":"_14-1、封装动画组件","link":"#_14-1、封装动画组件","children":[]},{"level":3,"title":"#15、<Transition>总结","slug":"_15、-transition-总结","link":"#_15、-transition-总结","children":[]},{"level":3,"title":"#15.1、<Transition> 的基本用法","slug":"_15-1、-transition-的基本用法","link":"#_15-1、-transition-的基本用法","children":[]},{"level":3,"title":"#15.2、过渡与动画默认 class","slug":"_15-2、过渡与动画默认-class","link":"#_15-2、过渡与动画默认-class","children":[]},{"level":3,"title":"#15.3、<Transition> 组件 props","slug":"_15-3、-transition-组件-props","link":"#_15-3、-transition-组件-props","children":[]},{"level":3,"title":"#15.4、自定义过渡 class","slug":"_15-4、自定义过渡-class","link":"#_15-4、自定义过渡-class","children":[]},{"level":3,"title":"#15.5、动画 Javascript 钩子","slug":"_15-5、动画-javascript-钩子","link":"#_15-5、动画-javascript-钩子","children":[]},{"level":3,"title":"#16、案例：动态选项卡切换效果","slug":"_16、案例-动态选项卡切换效果","link":"#_16、案例-动态选项卡切换效果","children":[]}]},{"level":2,"title":"#二、实战应用：开发 Message 组件","slug":"二、实战应用-开发-message-组件","link":"#二、实战应用-开发-message-组件","children":[{"level":3,"title":"#1、项目介绍","slug":"_1、项目介绍","link":"#_1、项目介绍","children":[]},{"level":3,"title":"#1.1、项目功能","slug":"_1-1、项目功能","link":"#_1-1、项目功能","children":[]},{"level":3,"title":"#1.2、项目涉及核心知识点","slug":"_1-2、项目涉及核心知识点","link":"#_1-2、项目涉及核心知识点","children":[]},{"level":3,"title":"#1.3、学习目标","slug":"_1-3、学习目标","link":"#_1-3、学习目标","children":[]},{"level":3,"title":"#1.4、项目开发思路","slug":"_1-4、项目开发思路","link":"#_1-4、项目开发思路","children":[]},{"level":3,"title":"#2、项目开发流程","slug":"_2、项目开发流程","link":"#_2、项目开发流程","children":[]},{"level":3,"title":"#2.1、分析 UI 图","slug":"_2-1、分析-ui-图","link":"#_2-1、分析-ui-图","children":[]},{"level":3,"title":"#2.2、实现 Message 组件","slug":"_2-2、实现-message-组件","link":"#_2-2、实现-message-组件","children":[]},{"level":3,"title":"#2.2、实现 Message 方法基本框架","slug":"_2-2、实现-message-方法基本框架","link":"#_2-2、实现-message-方法基本框架","children":[]},{"level":3,"title":"#2.3、Message 方法实现组件挂载","slug":"_2-3、message-方法实现组件挂载","link":"#_2-3、message-方法实现组件挂载","children":[]},{"level":3,"title":"#2.4、实现显示组件","slug":"_2-4、实现显示组件","link":"#_2-4、实现显示组件","children":[]},{"level":3,"title":"#2.5、实现卸载组件","slug":"_2-5、实现卸载组件","link":"#_2-5、实现卸载组件","children":[]},{"level":3,"title":"#2.6、计算元素的 Top 值","slug":"_2-6、计算元素的-top-值","link":"#_2-6、计算元素的-top-值","children":[]},{"level":3,"title":"#3、完整版代码","slug":"_3、完整版代码","link":"#_3、完整版代码","children":[]}]},{"level":2,"title":"#三、<TransitionGroup> 内置组件","slug":"三、-transitiongroup-内置组件","link":"#三、-transitiongroup-内置组件","children":[{"level":3,"title":"#1、<TransitionGroup>与<Transition>的不同","slug":"_1、-transitiongroup-与-transition-的不同","link":"#_1、-transitiongroup-与-transition-的不同","children":[]},{"level":3,"title":"#2、实战应用：多元素延迟淡入淡出动画","slug":"_2、实战应用-多元素延迟淡入淡出动画","link":"#_2、实战应用-多元素延迟淡入淡出动画","children":[]},{"level":3,"title":"#2.1、优化版：多元素延迟淡入淡出动画","slug":"_2-1、优化版-多元素延迟淡入淡出动画","link":"#_2-1、优化版-多元素延迟淡入淡出动画","children":[]},{"level":3,"title":"#2.2、最终优化版：多元素延迟淡入淡出动画","slug":"_2-2、最终优化版-多元素延迟淡入淡出动画","link":"#_2-2、最终优化版-多元素延迟淡入淡出动画","children":[]},{"level":3,"title":"#3、实战应用：列表添加、删除、排序元素时动画","slug":"_3、实战应用-列表添加、删除、排序元素时动画","link":"#_3、实战应用-列表添加、删除、排序元素时动画","children":[]},{"level":3,"title":"#3.1、优化版：列表添加、删除、排序元素时动画","slug":"_3-1、优化版-列表添加、删除、排序元素时动画","link":"#_3-1、优化版-列表添加、删除、排序元素时动画","children":[]},{"level":3,"title":"#4、总结","slug":"_4、总结","link":"#_4、总结","children":[]}]},{"level":2,"title":"#四、其它动画","slug":"四、其它动画","link":"#四、其它动画","children":[{"level":3,"title":"#1、基于 css class 的动画","slug":"_1、基于-css-class-的动画","link":"#_1、基于-css-class-的动画","children":[]},{"level":3,"title":"#2、基于侦听器的动画","slug":"_2、基于侦听器的动画","link":"#_2、基于侦听器的动画","children":[]}]}],"git":{"createdTime":1698156484000,"updatedTime":1698156484000,"contributors":[{"name":"xunyu","email":"2548126293@qq.com","commits":1}]},"filePathRelative":"blogs/web/vue/Vue 中 Transition 和 TransitionGroup 组件，实践应用.md"}');export{l as data};
