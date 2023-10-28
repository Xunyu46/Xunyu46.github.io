const l=JSON.parse('{"key":"v-70829c56","path":"/blogs/web/es6/shejimoshi - diedaiqimoshihe Iterator bianliqiyu for...of xunhuan.html","title":"设计模式 - 迭代器模式和 Iterator 遍历器与 for...of 循环","lang":"en-US","frontmatter":{"title":"设计模式 - 迭代器模式和 Iterator 遍历器与 for...of 循环","date":"2023-10-30T00:00:00.000Z","sidebar":"auto","categories":["ES6"],"tags":["ES6","设计模式"],"publish":true},"headers":[{"level":2,"title":"一、设计模式：迭代器模式","slug":"一、设计模式-迭代器模式","link":"#一、设计模式-迭代器模式","children":[{"level":3,"title":"1、什么是迭代器模式","slug":"_1、什么是迭代器模式","link":"#_1、什么是迭代器模式","children":[]},{"level":3,"title":"2、区分：迭代器模式和迭代器","slug":"_2、区分-迭代器模式和迭代器","link":"#_2、区分-迭代器模式和迭代器","children":[]},{"level":3,"title":"3、迭代器的分类","slug":"_3、迭代器的分类","link":"#_3、迭代器的分类","children":[]},{"level":3,"title":"4、实现一个内部迭代器","slug":"_4、实现一个内部迭代器","link":"#_4、实现一个内部迭代器","children":[]},{"level":3,"title":"5、实现一个外部迭代器","slug":"_5、实现一个外部迭代器","link":"#_5、实现一个外部迭代器","children":[]},{"level":3,"title":"5.1、优化一：添加 isDone 和改进 next 方法","slug":"_5-1、优化一-添加-isdone-和改进-next-方法","link":"#_5-1、优化一-添加-isdone-和改进-next-方法","children":[]},{"level":3,"title":"5.2、优化二：next() 方法返回值为对象","slug":"_5-2、优化二-next-方法返回值为对象","link":"#_5-2、优化二-next-方法返回值为对象","children":[]},{"level":3,"title":"5.3、优化三：修改 next 方法返回结果","slug":"_5-3、优化三-修改-next-方法返回结果","link":"#_5-3、优化三-修改-next-方法返回结果","children":[]},{"level":3,"title":"6、迭代器实际应用场景","slug":"_6、迭代器实际应用场景","link":"#_6、迭代器实际应用场景","children":[]},{"level":3,"title":"6.1、创建 Stack 类，添加一个外部迭代器","slug":"_6-1、创建-stack-类-添加一个外部迭代器","link":"#_6-1、创建-stack-类-添加一个外部迭代器","children":[]},{"level":3,"title":"6.2、为 Stack 类添加内部迭代器 forEach 方法","slug":"_6-2、为-stack-类添加内部迭代器-foreach-方法","link":"#_6-2、为-stack-类添加内部迭代器-foreach-方法","children":[]},{"level":3,"title":"7、将 class（数据类）与 迭代器类分离","slug":"_7、将-class-数据类-与-迭代器类分离","link":"#_7、将-class-数据类-与-迭代器类分离","children":[]}]},{"level":2,"title":"二、总结：迭代器模式","slug":"二、总结-迭代器模式","link":"#二、总结-迭代器模式","children":[{"level":3,"title":"1、迭代器模式和迭代器","slug":"_1、迭代器模式和迭代器","link":"#_1、迭代器模式和迭代器","children":[]},{"level":3,"title":"2、迭代器分类","slug":"_2、迭代器分类","link":"#_2、迭代器分类","children":[]},{"level":3,"title":"4、手动实现外部迭代器","slug":"_4、手动实现外部迭代器","link":"#_4、手动实现外部迭代器","children":[]},{"level":3,"title":"5、迭代器的应用","slug":"_5、迭代器的应用","link":"#_5、迭代器的应用","children":[]}]},{"level":2,"title":"三、Iterator 是什么 ？","slug":"三、iterator-是什么","link":"#三、iterator-是什么","children":[{"level":3,"title":"1、寻找 Iterator","slug":"_1、寻找-iterator","link":"#_1、寻找-iterator","children":[]},{"level":3,"title":"2、使用 Itertaor","slug":"_2、使用-itertaor","link":"#_2、使用-itertaor","children":[]},{"level":3,"title":"3、Iterator 是什么 ？","slug":"_3、iterator-是什么","link":"#_3、iterator-是什么","children":[]},{"level":3,"title":"4、手动实现数组的Symbol.iterator方法","slug":"_4、手动实现数组的symbol-iterator方法","link":"#_4、手动实现数组的symbol-iterator方法","children":[]}]},{"level":2,"title":"三、for ... of","slug":"三、for-of","link":"#三、for-of","children":[{"level":3,"title":"1、for ... of 用法","slug":"_1、for-of-用法","link":"#_1、for-of-用法","children":[]},{"level":3,"title":"2、for ... of 遍历可迭代对象","slug":"_2、for-of-遍历可迭代对象","link":"#_2、for-of-遍历可迭代对象","children":[]},{"level":3,"title":"3、原生可遍历对象","slug":"_3、原生可遍历对象","link":"#_3、原生可遍历对象","children":[]},{"level":3,"title":"4、可迭代协议和迭代器协议","slug":"_4、可迭代协议和迭代器协议","link":"#_4、可迭代协议和迭代器协议","children":[]},{"level":3,"title":"5、为对象添中迭代器接口","slug":"_5、为对象添中迭代器接口","link":"#_5、为对象添中迭代器接口","children":[]},{"level":3,"title":"6、退出 for ... of 循环","slug":"_6、退出-for-of-循环","link":"#_6、退出-for-of-循环","children":[]}]},{"level":2,"title":"四、有哪些场景使用了 Iterator ？","slug":"四、有哪些场景使用了-iterator","link":"#四、有哪些场景使用了-iterator","children":[{"level":3,"title":"1、验证方案","slug":"_1、验证方案","link":"#_1、验证方案","children":[]},{"level":3,"title":"2、面试题","slug":"_2、面试题","link":"#_2、面试题","children":[]}]},{"level":2,"title":"五、迭代器对象的 return 、throw 方法","slug":"五、迭代器对象的-return-、throw-方法","link":"#五、迭代器对象的-return-、throw-方法","children":[{"level":3,"title":"1、return 方法","slug":"_1、return-方法","link":"#_1、return-方法","children":[]},{"level":3,"title":"2、不能关闭的迭代器","slug":"_2、不能关闭的迭代器","link":"#_2、不能关闭的迭代器","children":[]}]},{"level":2,"title":"六、为什么需要迭代器和 for ... of","slug":"六、为什么需要迭代器和-for-of","link":"#六、为什么需要迭代器和-for-of","children":[{"level":3,"title":"1、对比不同的遍历方式","slug":"_1、对比不同的遍历方式","link":"#_1、对比不同的遍历方式","children":[]},{"level":3,"title":"2、迭代器作用","slug":"_2、迭代器作用","link":"#_2、迭代器作用","children":[]}]},{"level":2,"title":"七、总结","slug":"七、总结","link":"#七、总结","children":[{"level":3,"title":"1、Iterator 遍历器","slug":"_1、iterator-遍历器","link":"#_1、iterator-遍历器","children":[]},{"level":3,"title":"2、for ... of 循环","slug":"_2、for-of-循环","link":"#_2、for-of-循环","children":[]},{"level":3,"title":"3、for ... of 可以循环什么类型的数据","slug":"_3、for-of-可以循环什么类型的数据","link":"#_3、for-of-可以循环什么类型的数据","children":[]},{"level":3,"title":"4、使用了 Iterator 的场景","slug":"_4、使用了-iterator-的场景","link":"#_4、使用了-iterator-的场景","children":[]}]}],"git":{"createdTime":1698508794000,"updatedTime":1698508794000,"contributors":[{"name":"xunyu","email":"2548126293@qq.com","commits":1}]},"filePathRelative":"blogs/web/es6/设计模式 - 迭代器模式和 Iterator 遍历器与 for...of 循环.md"}');export{l as data};
