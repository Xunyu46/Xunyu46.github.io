const l=JSON.parse('{"key":"v-210f478a","path":"/blogs/web/ajax/JSON、Ajax、kuayuqingqiu、XHR duixiang、Axios yu Fetch.html","title":"JSON、Ajax、跨域请求、XHR 对象、Axios 与 Fetch","lang":"en-US","frontmatter":{"title":"JSON、Ajax、跨域请求、XHR 对象、Axios 与 Fetch","date":"2023-10-29T00:00:00.000Z","sidebar":"auto","categories":["ajax"],"tags":["ajax"],"publish":true},"headers":[{"level":2,"title":"一、JSON 数据","slug":"一、json-数据","link":"#一、json-数据","children":[{"level":3,"title":"1、JSON 是什么 ？","slug":"_1、json-是什么","link":"#_1、json-是什么","children":[]},{"level":3,"title":"2、序列化 与 反序列化","slug":"_2、序列化-与-反序列化","link":"#_2、序列化-与-反序列化","children":[]},{"level":3,"title":"3、为什么需要 JSON","slug":"_3、为什么需要-json","link":"#_3、为什么需要-json","children":[]},{"level":3,"title":"4、JSON 的 3 种形式","slug":"_4、json-的-3-种形式","link":"#_4、json-的-3-种形式","children":[]},{"level":3,"title":"4.1、JSON 简单值形式","slug":"_4-1、json-简单值形式","link":"#_4-1、json-简单值形式","children":[]},{"level":3,"title":"4.2、JSON 对象形式","slug":"_4-2、json-对象形式","link":"#_4-2、json-对象形式","children":[]},{"level":3,"title":"4.3、JSON 数组形式","slug":"_4-3、json-数组形式","link":"#_4-3、json-数组形式","children":[]},{"level":3,"title":"4.4、总结：JSON 数据的注意事项","slug":"_4-4、总结-json-数据的注意事项","link":"#_4-4、总结-json-数据的注意事项","children":[]},{"level":3,"title":"5、JSON 的常用方法","slug":"_5、json-的常用方法","link":"#_5、json-的常用方法","children":[]},{"level":3,"title":"5.1、对象与 JSON 字符串之间相互转换","slug":"_5-1、对象与-json-字符串之间相互转换","link":"#_5-1、对象与-json-字符串之间相互转换","children":[]},{"level":3,"title":"5.2、数组与 JSON 字符串之间相互转换","slug":"_5-2、数组与-json-字符串之间相互转换","link":"#_5-2、数组与-json-字符串之间相互转换","children":[]}]},{"level":2,"title":"二、原生 Ajax","slug":"二、原生-ajax","link":"#二、原生-ajax","children":[{"level":3,"title":"1、Ajax 是什么","slug":"_1、ajax-是什么","link":"#_1、ajax-是什么","children":[]},{"level":3,"title":"2、Ajax 主要作用","slug":"_2、ajax-主要作用","link":"#_2、ajax-主要作用","children":[]},{"level":3,"title":"3、搭建 Ajax 开发环境","slug":"_3、搭建-ajax-开发环境","link":"#_3、搭建-ajax-开发环境","children":[]},{"level":3,"title":"3、Ajax 的基本用法","slug":"_3、ajax-的基本用法","link":"#_3、ajax-的基本用法","children":[]},{"level":3,"title":"3.1、XMLHttpRequest","slug":"_3-1、xmlhttprequest","link":"#_3-1、xmlhttprequest","children":[]},{"level":3,"title":"3.2、Ajax 的使用步骤","slug":"_3-2、ajax-的使用步骤","link":"#_3-2、ajax-的使用步骤","children":[]},{"level":3,"title":"3.3、使用 Ajax 完成前后端通信","slug":"_3-3、使用-ajax-完成前后端通信","link":"#_3-3、使用-ajax-完成前后端通信","children":[]},{"level":3,"title":"4、Ajax 发送 GET 请求","slug":"_4、ajax-发送-get-请求","link":"#_4、ajax-发送-get-请求","children":[]},{"level":3,"title":"5、Ajax 发送 POST 请求","slug":"_5、ajax-发送-post-请求","link":"#_5、ajax-发送-post-请求","children":[]},{"level":3,"title":"6、请求数据编码","slug":"_6、请求数据编码","link":"#_6、请求数据编码","children":[]},{"level":3,"title":"7、form 表单 post 请求携带数据","slug":"_7、form-表单-post-请求携带数据","link":"#_7、form-表单-post-请求携带数据","children":[]},{"level":3,"title":"8、FormData 对象","slug":"_8、formdata-对象","link":"#_8、formdata-对象","children":[]},{"level":3,"title":"8.1、FormData 的基本用法","slug":"_8-1、formdata-的基本用法","link":"#_8-1、formdata-的基本用法","children":[]}]},{"level":2,"title":"三、跨域","slug":"三、跨域","link":"#三、跨域","children":[{"level":3,"title":"1、什么是跨域 ？","slug":"_1、什么是跨域","link":"#_1、什么是跨域","children":[]},{"level":3,"title":"2、什么是同域（源），什么是不同域（源）","slug":"_2、什么是同域-源-什么是不同域-源","link":"#_2、什么是同域-源-什么是不同域-源","children":[]},{"level":3,"title":"3、同域请求","slug":"_3、同域请求","link":"#_3、同域请求","children":[]},{"level":3,"title":"4、跨域请求","slug":"_4、跨域请求","link":"#_4、跨域请求","children":[]},{"level":3,"title":"5、跨域请求为什么会被阻止","slug":"_5、跨域请求为什么会被阻止","link":"#_5、跨域请求为什么会被阻止","children":[]},{"level":3,"title":"6、CORS 跨域资源共享","slug":"_6、cors-跨域资源共享","link":"#_6、cors-跨域资源共享","children":[]},{"level":3,"title":"6.1、CORS 是什么","slug":"_6-1、cors-是什么","link":"#_6-1、cors-是什么","children":[]},{"level":3,"title":"6.2、CORS 实现资源共享","slug":"_6-2、cors-实现资源共享","link":"#_6-2、cors-实现资源共享","children":[]},{"level":3,"title":"6.3、使用 CORS 跨域过程","slug":"_6-3、使用-cors-跨域过程","link":"#_6-3、使用-cors-跨域过程","children":[]},{"level":3,"title":"6.4、如何给 CORS 设置多域名","slug":"_6-4、如何给-cors-设置多域名","link":"#_6-4、如何给-cors-设置多域名","children":[]},{"level":3,"title":"7、JSONP 实现跨域","slug":"_7、jsonp-实现跨域","link":"#_7、jsonp-实现跨域","children":[]},{"level":3,"title":"7.1、JSONP 的原理","slug":"_7-1、jsonp-的原理","link":"#_7-1、jsonp-的原理","children":[]},{"level":3,"title":"7.2、 使用 JSONP 实现跨域","slug":"_7-2、-使用-jsonp-实现跨域","link":"#_7-2、-使用-jsonp-实现跨域","children":[]},{"level":3,"title":"8、代理跨域","slug":"_8、代理跨域","link":"#_8、代理跨域","children":[]},{"level":3,"title":"8.1、代理跨域的原理","slug":"_8-1、代理跨域的原理","link":"#_8-1、代理跨域的原理","children":[]},{"level":3,"title":"8.2、模拟代理跨域的实现过程","slug":"_8-2、模拟代理跨域的实现过程","link":"#_8-2、模拟代理跨域的实现过程","children":[]}]},{"level":2,"title":"四、XHR 对象的属性","slug":"四、xhr-对象的属性","link":"#四、xhr-对象的属性","children":[{"level":3,"title":"1、responseType 、esponseText、 response 属性","slug":"_1、responsetype-、esponsetext、-response-属性","link":"#_1、responsetype-、esponsetext、-response-属性","children":[]},{"level":3,"title":"2、timeout 属性","slug":"_2、timeout-属性","link":"#_2、timeout-属性","children":[]},{"level":3,"title":"3、withCredentials 属性","slug":"_3、withcredentials-属性","link":"#_3、withcredentials-属性","children":[]}]},{"level":2,"title":"五、XHR 对象的方法","slug":"五、xhr-对象的方法","link":"#五、xhr-对象的方法","children":[{"level":3,"title":"1、abort() 方法","slug":"_1、abort-方法","link":"#_1、abort-方法","children":[]},{"level":3,"title":"2、setRequestHeader 方法","slug":"_2、setrequestheader-方法","link":"#_2、setrequestheader-方法","children":[]}]},{"level":2,"title":"六、XHR 对象的事件","slug":"六、xhr-对象的事件","link":"#六、xhr-对象的事件","children":[{"level":3,"title":"1、load、loadstart、loadend 事件","slug":"_1、load、loadstart、loadend-事件","link":"#_1、load、loadstart、loadend-事件","children":[]},{"level":3,"title":"2、error 事件","slug":"_2、error-事件","link":"#_2、error-事件","children":[]},{"level":3,"title":"3、abort 事件","slug":"_3、abort-事件","link":"#_3、abort-事件","children":[]},{"level":3,"title":"4、timeout 事件","slug":"_4、timeout-事件","link":"#_4、timeout-事件","children":[]},{"level":3,"title":"5、progress 事件","slug":"_5、progress-事件","link":"#_5、progress-事件","children":[]},{"level":3,"title":"6、显示图片加载进度","slug":"_6、显示图片加载进度","link":"#_6、显示图片加载进度","children":[]}]},{"level":2,"title":"七、Ajax 的简单封装","slug":"七、ajax-的简单封装","link":"#七、ajax-的简单封装","children":[{"level":3,"title":"1、Promise 简单封装 Ajax","slug":"_1、promise-简单封装-ajax","link":"#_1、promise-简单封装-ajax","children":[]},{"level":3,"title":"2、Ajax 并发问题","slug":"_2、ajax-并发问题","link":"#_2、ajax-并发问题","children":[]}]},{"level":2,"title":"八、Ajax 的实践与应用","slug":"八、ajax-的实践与应用","link":"#八、ajax-的实践与应用","children":[{"level":3,"title":"1、搜索自动补全","slug":"_1、搜索自动补全","link":"#_1、搜索自动补全","children":[]},{"level":3,"title":"2、动态加载二级菜单","slug":"_2、动态加载二级菜单","link":"#_2、动态加载二级菜单","children":[]},{"level":3,"title":"3、GET 请求实现搜索课程","slug":"_3、get-请求实现搜索课程","link":"#_3、get-请求实现搜索课程","children":[]}]},{"level":2,"title":"九、Axios","slug":"九、axios","link":"#九、axios","children":[{"level":3,"title":"1、Axios 是什么","slug":"_1、axios-是什么","link":"#_1、axios-是什么","children":[]},{"level":3,"title":"2、axios 的基本用法","slug":"_2、axios-的基本用法","link":"#_2、axios-的基本用法","children":[]},{"level":3,"title":"3、config 请求配置","slug":"_3、config-请求配置","link":"#_3、config-请求配置","children":[]},{"level":3,"title":"4、response 响应对象","slug":"_4、response-响应对象","link":"#_4、response-响应对象","children":[]},{"level":3,"title":"5、使用别名方式请求","slug":"_5、使用别名方式请求","link":"#_5、使用别名方式请求","children":[]}]},{"level":2,"title":"十、Fetch","slug":"十、fetch","link":"#十、fetch","children":[{"level":3,"title":"1、Fetch 是什么","slug":"_1、fetch-是什么","link":"#_1、fetch-是什么","children":[]},{"level":3,"title":"2、Fetch 的基本用法","slug":"_2、fetch-的基本用法","link":"#_2、fetch-的基本用法","children":[]},{"level":3,"title":"3、response 对象","slug":"_3、response-对象","link":"#_3、response-对象","children":[]},{"level":3,"title":"3、Fecth 的参数配置","slug":"_3、fecth-的参数配置","link":"#_3、fecth-的参数配置","children":[]}]},{"level":2,"title":"十一、总结","slug":"十一、总结","link":"#十一、总结","children":[{"level":3,"title":"1、Ajax 的使用步骤","slug":"_1、ajax-的使用步骤","link":"#_1、ajax-的使用步骤","children":[]},{"level":3,"title":"2、GET 和 POST 请求","slug":"_2、get-和-post-请求","link":"#_2、get-和-post-请求","children":[]},{"level":3,"title":"3、JSON 的 3 种形式","slug":"_3、json-的-3-种形式","link":"#_3、json-的-3-种形式","children":[]},{"level":3,"title":"4、JSON 的方法","slug":"_4、json-的方法","link":"#_4、json-的方法","children":[]},{"level":3,"title":"5、跨域","slug":"_5、跨域","link":"#_5、跨域","children":[]},{"level":3,"title":"6、CORS 跨域资源共享","slug":"_6、cors-跨域资源共享-1","link":"#_6、cors-跨域资源共享-1","children":[]},{"level":3,"title":"7、JSONP","slug":"_7、jsonp","link":"#_7、jsonp","children":[]},{"level":3,"title":"8、XHR 的属性","slug":"_8、xhr-的属性","link":"#_8、xhr-的属性","children":[]},{"level":3,"title":"9、XHR 的方法","slug":"_9、xhr-的方法","link":"#_9、xhr-的方法","children":[]},{"level":3,"title":"10、XHR 的事件","slug":"_10、xhr-的事件","link":"#_10、xhr-的事件","children":[]},{"level":3,"title":"11、FormData","slug":"_11、formdata","link":"#_11、formdata","children":[]},{"level":3,"title":"12、axios","slug":"_12、axios","link":"#_12、axios","children":[]},{"level":3,"title":"13、Fetch","slug":"_13、fetch","link":"#_13、fetch","children":[]}]},{"level":2,"title":"十二、测试题","slug":"十二、测试题","link":"#十二、测试题","children":[{"level":3,"title":"1、下列关于 readyState 状态值，描述正确的选项是 ？","slug":"_1、下列关于-readystate-状态值-描述正确的选项是","link":"#_1、下列关于-readystate-状态值-描述正确的选项是","children":[]},{"level":3,"title":"2、下列 JSON 数据，格式书写正确的选项是 ？","slug":"_2、下列-json-数据-格式书写正确的选项是","link":"#_2、下列-json-数据-格式书写正确的选项是","children":[]},{"level":3,"title":"3、下列选项中，描述错误的是 ？","slug":"_3、下列选项中-描述错误的是","link":"#_3、下列选项中-描述错误的是","children":[]},{"level":3,"title":"4、以下地址的页面，向下列选项中哪个地址发送请求时，不属于跨域 ？","slug":"_4、以下地址的页面-向下列选项中哪个地址发送请求时-不属于跨域","link":"#_4、以下地址的页面-向下列选项中哪个地址发送请求时-不属于跨域","children":[]},{"level":3,"title":"5、下列描述正确的选项是 ？","slug":"_5、下列描述正确的选项是","link":"#_5、下列描述正确的选项是","children":[]},{"level":3,"title":"6、下列 setRequestHeader() 和 send() 方法对应正确的是 ？","slug":"_6、下列-setrequestheader-和-send-方法对应正确的是","link":"#_6、下列-setrequestheader-和-send-方法对应正确的是","children":[]}]}],"git":{"createdTime":1698507299000,"updatedTime":1698507299000,"contributors":[{"name":"xunyu","email":"2548126293@qq.com","commits":1}]},"filePathRelative":"blogs/web/ajax/JSON、Ajax、跨域请求、XHR 对象、Axios 与 Fetch.md"}');export{l as data};
