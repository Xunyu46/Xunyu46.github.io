import{_ as p,r as e,o,c,a as s,b as n,e as l,d as a}from"./app-7ac1ad86.js";const i={},u=a(`<h1 id="js-面向对象、分层设计、动态数据遍历最佳实践与应用" tabindex="-1"><a class="header-anchor" href="#js-面向对象、分层设计、动态数据遍历最佳实践与应用" aria-hidden="true">#</a> JS 面向对象、分层设计、动态数据遍历最佳实践与应用</h1><p>TIP</p><p>本节内容开始使用上一节学到的 async/await 机制来实现同步代码的编写风格，调用异步请求的代码可以很好为我们整个项目的网络请求提供很好的支持。</p><p>接下来我们就开始应用这些知识来实现动态接口请求数据的方式，完成真实项目开发中 JS 面向对象、分层设计、动态数据遍历的最佳实践与应用。</p><ul><li>分类列表选项的动态化</li><li>课程预览组件封装 与 课程列表展示</li><li>上拉触底、下拉刷新，加载更多数据</li><li>内容标签页、分类切换数据联动</li></ul><h2 id="一、分类列表选项的动态化" tabindex="-1"><a class="header-anchor" href="#一、分类列表选项的动态化" aria-hidden="true">#</a> 一、分类列表选项的动态化</h2><p>TIP</p><p>运用封装好的 <code>request</code> 网络请求库、async/await 机制、分层设计实现分类列表数据的动态化。</p><h3 id="_1、创建课程分类列表接口-mock-数据" tabindex="-1"><a class="header-anchor" href="#_1、创建课程分类列表接口-mock-数据" aria-hidden="true">#</a> 1、创建课程分类列表接口 Mock 数据</h3><p>TIP</p><p>在 fastmock 中创建课程分类列表数据接口 <code>/api/course/category</code> 请求方式为 GET</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Web 前端&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java 架构&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Python 实战&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Node 后端&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GO 语言&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;云原生&quot;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;成功&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、定义分类-category-模型类" tabindex="-1"><a class="header-anchor" href="#_2、定义分类-category-模型类" aria-hidden="true">#</a> 2、定义分类 Category 模型类</h3><p>在 <code>model</code> 中新建文件 <code>category.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Http <span class="token keyword">from</span> <span class="token string">&quot;../utils/http&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> arry老师
 * <span class="token keyword">@description</span> 课程分类信息
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Category</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 获取课程分类列表数据
   */</span>
  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发起网络请求</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> Http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/api/course/category&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Category<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在页面 <code>/pages/index/index.js</code> 页面逻辑中调用模型类中的方法，实现数据绑定和页面数据渲染</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index/index.js</span>

<span class="token comment">// 导入 Category 类</span>
<span class="token keyword">import</span> Category <span class="token keyword">from</span> <span class="token string">&quot;../../model/category&quot;</span><span class="token punctuation">;</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 页面的初始数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 省略部分 ......</span>

    <span class="token comment">// 分类数据</span>
    <span class="token literal-property property">categoryList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 省略部分 ......</span>

  <span class="token comment">// 生命周期函数--监听页面加载</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 省略部分 ....</span>

    <span class="token comment">// 获取分类列表</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取分类列表数据</span>
  <span class="token keyword">async</span> <span class="token function">_getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      categoryList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据请求成功后，页面显示的效果</p><p><img src="https://www.arryblog.com/assets/img/image-20230426144439939.7b460b27.png" alt="image-20230426144439939"></p><p>注：</p><p>我们会发现默认情况下，页面中显示的应该是全部分类数据的，但我们发现接口返回的数据中是没有全部这个选项的。</p><p>如果接口直接默认返回<strong>全部</strong>的选项，就会降低接口的通用性。因为，有些接口是不需要全部这个选项的，比如：发布信息的部分就不用全部这个选项。</p><blockquote><p>最佳实践是：接口返回时不用全部选项，只需要我们前端做一下处理即可</p></blockquote><h3 id="_3、插入默认全部选项" tabindex="-1"><a class="header-anchor" href="#_3、插入默认全部选项" aria-hidden="true">#</a> 3、插入默认全部选项</h3><p>TIP</p><p>定义全部选项的方式有几种</p><ul><li>①、在页面逻辑中将返回的数据，使用 JavaScript 原生数组的方法手动插入全部选项</li><li>②、在模型层中插入（推荐方式）</li></ul><p>在模型类 <code>model/category.js</code> 中定义插入全部选项的方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Http <span class="token keyword">from</span> <span class="token string">&quot;../utils/http&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> arry老师
 * <span class="token keyword">@description</span> 课程分类信息
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Category</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 获取课程分类列表数据
   */</span>
  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 发起网络请求</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> Http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/api/course/category&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 在课程分类列表数据前插入 全部选项
   */</span>
  <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getCategoryListWithAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 在返回结果前插入 全部选项</span>
    <span class="token comment">// unshift() 方法： 可向数组的开头添加一个或更多元素，并返回新的长度</span>
    categoryList<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;全部&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> categoryList<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Category<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改页面 <code>/pages/index/index.js</code> 中调用获取分类列表数据方法中的 调用方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index/index.js</span>

<span class="token comment">// 导入 Category 类</span>
<span class="token keyword">import</span> Category <span class="token keyword">from</span> <span class="token string">&quot;../../model/category&quot;</span><span class="token punctuation">;</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 页面的初始数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 省略部分 ......</span>

    <span class="token comment">// 分类数据</span>
    <span class="token literal-property property">categoryList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 省略部分 ......</span>

  <span class="token comment">// 生命周期函数--监听页面加载</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 省略部分 ....</span>

    <span class="token comment">// 获取分类列表</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取分类列表数据</span>
  <span class="token keyword">async</span> <span class="token function">_getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">getCategoryListWithAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      categoryList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结</p><p>我们发现刚刚在模型层中，重新定义一个插入全部选项的方法后，就可以起到很灵活的方法复用了。</p><p>我们是在定义的 <code>getCategoryListWithAll()</code> 方法中调用了原来的 <code>getCategoryList()</code> 获取分类数据列表的方法来实现数据定制，在页面逻辑中只需要修改调用的方法即可实现数据的切换。</p><blockquote><p>这就是我们前面说到的：分离调用 与 内部实现，实现功能解耦的具体实现了。</p></blockquote><h2 id="二、课程预览组件封装-与-课程列表展示" tabindex="-1"><a class="header-anchor" href="#二、课程预览组件封装-与-课程列表展示" aria-hidden="true">#</a> 二、课程预览组件封装 与 课程列表展示</h2><p>TIP</p>`,37),r={href:"http://localhost:8888/vip/applet/custom-component-practice.html#%E5%85%AD%E3%80%81%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85-%E6%9C%80%E4%BD%B3%E5%AE%9E%E8%B7%B5%E6%80%BB%E7%BB%93",target:"_blank",rel:"noopener noreferrer"},k=a(`<blockquote><p>具体步骤如下</p></blockquote><h3 id="_1、创建课程列表接口-mock-数据" tabindex="-1"><a class="header-anchor" href="#_1、创建课程列表接口-mock-数据" aria-hidden="true">#</a> 1、创建课程列表接口 Mock 数据</h3><p>TIP</p><p>在 fastmock 中创建课程列表数据接口 <code>/api/course/list</code> 请求方式为 GET</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;pageNo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@integer(1, 100)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;totalRecord&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@integer(100, 1000)&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pageSize&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list|10&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type|1-2&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(5,20)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@csentence(20,50)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@float(10, 10000, 2, 2)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@datetime()&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;salesVolume|1-100&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;score|1-5&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2)&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;coverImage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@image(&#39;180x190&#39;, &#39;#ffcc33&#39;, &#39;#FFF&#39;, &#39;png&#39;, &#39;icoding&#39;)&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;publisher&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2,4)&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@image(&#39;81x81&#39;, &#39;#7bd802&#39;, &#39;#FFF&#39;, &#39;png&#39;, &#39;avatar&#39;)&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;realname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2,4)&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;gender|0-2&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;成功&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、课程列表数据绑定" tabindex="-1"><a class="header-anchor" href="#_2、课程列表数据绑定" aria-hidden="true">#</a> 2、课程列表数据绑定</h3><p>在 <code>pages/index/index.js</code> 页面逻辑中，实现课程列表的数据绑定</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index/index.js</span>

<span class="token comment">// 导入 Course 类</span>
<span class="token keyword">import</span> Category <span class="token keyword">from</span> <span class="token string">&quot;../../model/category&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Course <span class="token keyword">from</span> <span class="token string">&quot;../../model/course&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 实例化 Course</span>
<span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 页面的初始数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tabs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;全部课程&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;正在学&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;基础入门&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;架构&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">categoryList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">coursetList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 省略部分 ......</span>

  <span class="token doc-comment comment">/**
   * 生命周期函数--监听页面加载
   */</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化课程列表的数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 初始化课程分类 swiper 数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取课程列表数据 （以 _ 开头，表示页面的私有函数）</span>
  <span class="token keyword">async</span> <span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用模型层中的方法</span>
    <span class="token keyword">const</span> coursetList <span class="token operator">=</span> <span class="token keyword">await</span> course<span class="token punctuation">.</span><span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(coursetList.list)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">coursetList</span><span class="token operator">:</span> coursetList<span class="token punctuation">.</span>list<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取分类列表数据</span>
  <span class="token keyword">async</span> <span class="token function">_getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">getCategoryListWithAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      categoryList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、课程预览组件封装-ui-结构" tabindex="-1"><a class="header-anchor" href="#_3、课程预览组件封装-ui-结构" aria-hidden="true">#</a> 3、课程预览组件封装 - UI 结构</h3><p>TIP</p><p>在项目根目录 <code>components</code> 文件夹中新建 <code>course-preview</code> 课程预览组件</p><p>在 <code>/components/course-preview/course-preview.wxml</code> 组件 UI 结构中</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--components/course-preview/course-preview.wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>course-cover<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>course-cover-img<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ course.coverImage.path }}<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>type-tag<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>{{ course.type === 1 ? &quot;正在学&quot; : &quot;可选课程&quot; }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span>
    <span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>course-info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>course-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ course.title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>course-category<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Tag<span class="token punctuation">&quot;</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#7bd802<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i-icon</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>course-categroy-name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ course.category.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>publisher<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>avatar-img<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ course.publisher.avatar }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>publisher-nickname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ course.publisher.nickname }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>score<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>☆ {{ course.score }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>create-time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ course.createTime }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>row row-last<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>price<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>label<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>￥<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">&gt;</span></span> {{ course.price }}
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>sales-volume<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>已售 {{ course.salesVolume }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、课程预览组件封装-css-样式" tabindex="-1"><a class="header-anchor" href="#_4、课程预览组件封装-css-样式" aria-hidden="true">#</a> 4、课程预览组件封装 - CSS 样式</h3><p>在<code>/components/course-preview/course-preview.wxss</code> 样式文件中</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* components/course-preview/course-preview.wxss */</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20rpx 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.course-cover</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.course-cover-img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 180rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 190rpx<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.type-tag</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0.7<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> max-content<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16rpx<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>
  <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.course-info</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 30rpx<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.row</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.course-title</span> <span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 100rpx<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 340rpx<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token comment">/* 溢出一行隐藏，超出的部分添加 省略号 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.course-category</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.course-categroy-name</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.publisher</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.avatar-img</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40rpx<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.publisher-nickname</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 10rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.score</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 30rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.create-time,
.sales-volume</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.price</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> tomato<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.label</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 22rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.row-last</span> <span class="token punctuation">{</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、课程预览组件-引入-icon-自定义组件" tabindex="-1"><a class="header-anchor" href="#_5、课程预览组件-引入-icon-自定义组件" aria-hidden="true">#</a> 5、课程预览组件 - 引入 icon 自定义组件</h3><p>在<code>/components/course-preview/course-preview.json</code> 中</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;component&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;i-icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../components/icon/icon&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、在页面配置中引入-course-preview-自定义组件" tabindex="-1"><a class="header-anchor" href="#_6、在页面配置中引入-course-preview-自定义组件" aria-hidden="true">#</a> 6、在页面配置中引入 course-preview 自定义组件</h3><p>在 <code>/pages/index/index.json</code> 中</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;usingComponents&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;i-tabs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../components/tabs/tabs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;i-icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../components/icon/icon&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;i-course-preview&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../components/course-preview/course-preview&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7、在页面结构中使用-course-preview-自定义组件" tabindex="-1"><a class="header-anchor" href="#_7、在页面结构中使用-course-preview-自定义组件" aria-hidden="true">#</a> 7、在页面结构中使用 course-preview 自定义组件</h3><p>在<code>/pages/index/index.wxml</code> 页面结构中，循环遍历 <code>coursetList</code> ，并通过自定义属性传值</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--pages/index/index.wxml--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 使用 tabs 自定义组件 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i-tabs</span> <span class="token attr-name">tabs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ tabs }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">bind:</span>change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- 省略部分 .... --&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>panel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- 循环遍历 coursetList --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name"><span class="token namespace">wx:</span>for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ coursetList }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">wx:</span>key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i-course-preview</span> <span class="token attr-name">course</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ item }}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i-tabs</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8、在自定义组件-course-preview-逻辑中-接收属性传值" tabindex="-1"><a class="header-anchor" href="#_8、在自定义组件-course-preview-逻辑中-接收属性传值" aria-hidden="true">#</a> 8、在自定义组件 course-preview 逻辑中，接收属性传值</h3><p>在 <code>/components/course-preview/course-preview.js</code> 中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// components/course-preview/course-preview.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 组件的属性列表</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 接收页面传值</span>
    <span class="token literal-property property">course</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 组件的初始数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 组件的方法列表</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现效果</p><p><img src="https://www.arryblog.com/assets/img/image-20230427024936814.827f2ffe.png" alt="image-20230427024936814"></p><h2 id="三、上拉触底、下拉刷新-加载更多数据" tabindex="-1"><a class="header-anchor" href="#三、上拉触底、下拉刷新-加载更多数据" aria-hidden="true">#</a> 三、上拉触底、下拉刷新，加载更多数据</h2><p>TIP</p><p>上拉触底 和 下拉刷新加载更多数据在移动端 和 小程序项目开发中是非常常见的功能需求，也是必备技能。同时，深入 JavaScript 面向对象的原理和机制在项目工程中的实践。</p><h3 id="_1、在页面配置文件中开启下拉刷新" tabindex="-1"><a class="header-anchor" href="#_1、在页面配置文件中开启下拉刷新" aria-hidden="true">#</a> 1、在页面配置文件中开启下拉刷新</h3><p>在 <code>/pages/index/index.json</code> 配置文件中，开启下拉刷新并配置样式</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;enablePullDownRefresh&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;backgroundTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dark&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、在页面逻辑中使用页面生命周期函数" tabindex="-1"><a class="header-anchor" href="#_2、在页面逻辑中使用页面生命周期函数" aria-hidden="true">#</a> 2、在页面逻辑中使用页面生命周期函数</h3><p>在 <code>pages/index/index.js</code> 页面逻辑中监听上拉触底、下拉刷新的生命周期函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index/index.js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 页面的初始数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 省略部分 ......</span>

  <span class="token comment">// 页面相关事件处理函数--监听用户下拉动作</span>
  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;下拉刷新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 页面上拉触底，加载更多</span>
  <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;上拉触底&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、重构课程列表接口-mock-数据" tabindex="-1"><a class="header-anchor" href="#_3、重构课程列表接口-mock-数据" aria-hidden="true">#</a> 3、重构课程列表接口 Mock 数据</h3><p>TIP</p><p>在 fastmock 中重构课程列表数据接口 <code>/api/course/list</code> ，新增接收当前页码 和 每页数量参数，并判断最终返回数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> function(<span class="token punctuation">{</span>_req<span class="token punctuation">,</span> Mock<span class="token punctuation">}</span>)<span class="token punctuation">{</span>
      if(_req.query.page === &#39;<span class="token number">1</span>&#39; &amp;&amp; _req.query.count === &#39;<span class="token number">5</span>&#39;)<span class="token punctuation">{</span>
        return Mock.mock(<span class="token punctuation">{</span>
        <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> function(<span class="token punctuation">{</span>_req<span class="token punctuation">,</span> Mock<span class="token punctuation">}</span>)<span class="token punctuation">{</span>
            return _req.query.page
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> function(<span class="token punctuation">{</span>_req<span class="token punctuation">,</span> Mock<span class="token punctuation">}</span>)<span class="token punctuation">{</span>
            return _req.query.count
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;totalRecord&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;list|5&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type|1-2&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(5,20)&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@csentence(20,50)&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@float(10, 10000, 2, 2)&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@datetime()&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;salesVolume|1-100&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;score|1-5&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2)&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;coverImage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@image(&#39;180x190&#39;, &#39;#ffcc33&#39;, &#39;#FFF&#39;, &#39;png&#39;, &#39;icoding&#39;)&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;publisher&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2,4)&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@image(&#39;81x81&#39;, &#39;#7bd802&#39;, &#39;#FFF&#39;, &#39;png&#39;, &#39;avatar&#39;)&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;realname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2,4)&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;gender|0-2&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>)
      <span class="token punctuation">}</span>else if(_req.query.page === &#39;<span class="token number">2</span>&#39; &amp;&amp; _req.query.count === &#39;<span class="token number">5</span>&#39;)<span class="token punctuation">{</span>
        return Mock.mock(<span class="token punctuation">{</span>
        <span class="token property">&quot;page&quot;</span><span class="token operator">:</span> function(<span class="token punctuation">{</span>_req<span class="token punctuation">,</span> Mock<span class="token punctuation">}</span>)<span class="token punctuation">{</span>
            return _req.query.page
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;count&quot;</span><span class="token operator">:</span> function(<span class="token punctuation">{</span>_req<span class="token punctuation">,</span> Mock<span class="token punctuation">}</span>)<span class="token punctuation">{</span>
            return _req.query.count
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;totalRecord&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token property">&quot;list|5&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type|1-2&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(5,20)&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@csentence(20,50)&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@float(10, 10000, 2, 2)&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@datetime()&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;salesVolume|1-100&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;score|1-5&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2)&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;coverImage&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@image(&#39;180x190&#39;, &#39;#ffcc33&#39;, &#39;#FFF&#39;, &#39;png&#39;, &#39;icoding&#39;)&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;publisher&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;id|+1&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token property">&quot;nickname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2,4)&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;avatar&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@image(&#39;81x81&#39;, &#39;#7bd802&#39;, &#39;#FFF&#39;, &#39;png&#39;, &#39;avatar&#39;)&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;realname&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@cword(2,4)&quot;</span><span class="token punctuation">,</span>
              <span class="token property">&quot;gender|0-2&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>)
      <span class="token punctuation">}</span> else <span class="token punctuation">{</span>
        return <span class="token punctuation">{</span>
            <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;没有更多商品了哦  ！&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;成功&quot;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、上拉触底加载下一页的数据" tabindex="-1"><a class="header-anchor" href="#_4、上拉触底加载下一页的数据" aria-hidden="true">#</a> 4、上拉触底加载下一页的数据</h3><p>TIP</p><p>实现原理：每一次下拉触底都需要获取下一页的数据并且与当前页的数据合并</p><p><strong>实现思路</strong></p><ul><li>①、直接调用模型类中获取课程列表的方法 <code>getCourseList(page,count)</code> 每次下拉刷新改变参数 page 当前页 和 count 每页数量 即可，通过这种方式可以实现，但不优雅 ！</li></ul><blockquote><p>我们之前学过代码的分层设计目的就是：分离调用 与 内部实现，实现功能解耦。</p><p>我们要讲究一个单一原则，当前课程模型它的功能就是为我们提供数据的，页面去调用这个模型时它不应该还需要去维护类似这种 page 和 count 的数据。都应该是模型内在去维护和管理的，它可以暴露一些方法让我们去定制化、去修改它。正常情况下在调用时不应该由页面去关心这些东西。</p><p>否则，每一个使用到课程列表的页面都要去维护一份 page 和 count 包括处理它的数据合并。其实，都应该是模型帮我们做的事情才对。</p></blockquote><ul><li>②、在模型中实现获取下一页的数据并且与当前页的数据合并</li></ul><h3 id="_4-1、改造课程模型类-实现上拉触底逻辑" tabindex="-1"><a class="header-anchor" href="#_4-1、改造课程模型类-实现上拉触底逻辑" aria-hidden="true">#</a> 4.1、改造课程模型类 - 实现上拉触底逻辑</h3><p>TIP</p><p>模型方法 <code>getCourseList(page,count,categoryId=null,type=null)</code> 中默认会接收 4 个参数，其中 categoryId 和 type 不是模型应该关心的部分，将 page 和 count 去掉，交给模型来维护（在模型类 Course 中定义 page 和 count 属性）</p><ul><li>将 <code>getCourseList</code> 方法中的 page 和 count 参数以类属性的方式进行初始化声明</li><li>将网络请求返回的结果 与 上一次的结果做数据合并</li><li>判断边界，如果当前页码 等于 最大页码（总记录数/每页数量），已经没有数据了，即不再发起数据请求</li><li>当前页码 等于 最大页码，即还有数据。当前页码就 +1 ，当下一次发起请求时 page 就会等于 2</li><li>最后，将最终获取到的数据返回到页面中即可</li></ul><p>在 <code>/model/course.js</code> 中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Http <span class="token keyword">from</span> <span class="token string">&quot;../utils/http&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> arry老师
 * <span class="token keyword">@description</span> 课程相关
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前页码</span>
  count <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 每页数量</span>
  data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 保存上一次返回的结果</span>
  hasMoreData <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 是否有更多的数据（默认为 true）</span>

  <span class="token doc-comment comment">/**
   * 分页获取课程列表
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">categoryId</span> 分类 ID（可空）
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">type</span> 课程类型（可空）
   */</span>
  <span class="token keyword">async</span> <span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token parameter">categoryId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;获取课程列表&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 发起网络请求，获取数据</span>
    <span class="token keyword">const</span> courseList <span class="token operator">=</span> <span class="token keyword">await</span> Http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/api/course/list&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将网络请求返回的结果 与 上一次的结果做数据合并</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>courseList<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 需要控制每一次请求的页码，这样才能实现加载下一页的效果（page 默认为 1，如果做修改，永远都是 1，就无法实现加载下一页的效果）</span>
    <span class="token comment">// page 页码需要增加，条件是：当前已经请求的页码不是最后一页，才有必要 +1 ，如已是最后一页就不必再 +1 请求最后一页的数据</span>

    <span class="token comment">// 判断当前页码是否等于 最大页码（总记录数/每页数量），如果相等说明已经没有数据了，就不需要再起发起网络请求了</span>
    <span class="token comment">// ! 取反，表示还有更多数据</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hasMoreData <span class="token operator">=</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">===</span> courseList<span class="token punctuation">.</span>totalRecord <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果还有数据 当前页码就 +1 ，当下一次发起请求时 page 就会等于 2</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token comment">// 将最终获取到的数据返回到页面中</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Course<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、在页面逻辑中-调用模型方法实现上拉触底" tabindex="-1"><a class="header-anchor" href="#_4-2、在页面逻辑中-调用模型方法实现上拉触底" aria-hidden="true">#</a> 4.2、在页面逻辑中，调用模型方法实现上拉触底</h3><p>在 <code>pages/index/index.js</code> 中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index/index.js</span>

<span class="token comment">// 导入 Course 类</span>
<span class="token keyword">import</span> Category <span class="token keyword">from</span> <span class="token string">&quot;../../model/category&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Course <span class="token keyword">from</span> <span class="token string">&quot;../../model/course&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 实例化 Course</span>
<span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 页面的初始数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tabs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;全部课程&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;正在学&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;基础入门&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;架构&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 分类数据</span>
    <span class="token literal-property property">categoryList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 课程列表数据</span>
    <span class="token literal-property property">courseList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 省略部分 ......</span>

  <span class="token comment">// 生命周期函数--监听页面加载</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化课程列表</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取课程列表（以 _ 开头，表示页面私有函数）</span>
  <span class="token keyword">async</span> <span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化数据时，不用在传递参数（模型类中已经初始化了）</span>
    <span class="token keyword">const</span> courseList <span class="token operator">=</span> <span class="token keyword">await</span> course<span class="token punctuation">.</span><span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 打印验证</span>
    <span class="token comment">// console.log(courseList)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// courseList.list 去掉 .list ，数据已经在模型类中重新组装了</span>
      <span class="token literal-property property">courseList</span><span class="token operator">:</span> courseList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 页面相关事件处理函数--监听用户下拉动作</span>
  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;下拉刷新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 页面上拉触底，加载更多</span>
  <span class="token keyword">async</span> <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;上拉触底&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 优化不必要的网络请求（可在控制台 network 中查看）</span>

    <span class="token comment">// 如果没有更多数据，直接 return，不再发起网络请求了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>course<span class="token punctuation">.</span>hasMoreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;没有更多课程了 ...&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取下一页的数据 并且 和当前页的数据合并</span>
    <span class="token keyword">const</span> courseList <span class="token operator">=</span> <span class="token keyword">await</span> course<span class="token punctuation">.</span><span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      courseList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>控制台 network 中查看网络请求</p><p><img src="https://www.arryblog.com/assets/img/image-20230428035458680.92cf2aa6.png" alt="image-20230428035458680"></p><p>同时，在<code>/model/course.js</code>模型方法中做一个防御性判断，如果没有更多数据时，直接返回已有的数据</p><p>这样同时可以避免，我们在直接调用 <code>getCourseList()</code> 模型方法时，依然会产生 page 无效自增的问题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Http <span class="token keyword">from</span> <span class="token string">&quot;../utils/http&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  <span class="token comment">// 省略部分 ....</span>

  <span class="token keyword">async</span> <span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token parameter">categoryId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;获取课程列表&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 防御性判断，如果没有更多数据时，直接返回已有的数据</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>hasMoreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> courseList <span class="token operator">=</span> <span class="token keyword">await</span> Http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/api/course/list&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>courseList<span class="token punctuation">.</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hasMoreData <span class="token operator">=</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">===</span> courseList<span class="token punctuation">.</span>totalRecord <span class="token operator">/</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 做防御性判断，可避免直接调用该模型方法时，依然会产生 page 无效自增的问题</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Course<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现效果</p><p><img src="https://www.arryblog.com/assets/img/GIF-2023-4-28-3-29-51.47e01247.gif" alt="GIF-2023-4-28-3-29-51"></p><p>注：</p><p>上拉触底的功能已经实现了，但如果接下来我们在实现下拉刷新时，就会发现问题。思路分析如下</p><ul><li>在页面生命周期函数下拉刷新 <code>onPullDownRefresh()</code> 中实现数据加载，本质上与页面初始化数据类似，直接调用 <code>this._getCourseList()</code> 私有方法（本质上是调用模型方法），但直接刷新时加载的数据是不正常的。</li><li>因为我们当我们上拉触底时，每次加载数据时，模型类中的 page 属性是会变化的，如果我上拉触底 page 增加到了 2，这时候在下拉刷新直接请求模型方法 <code>getCourseList()</code> 直接请求的就是第 2 页的数据 + 前两页的数据；</li><li>但我们下拉刷新的目的是为了显示最新的数据，而不是包含之前请求过的数据</li></ul><p>我们可能会想到再重新定义一个模型方法来单独实现下拉刷新，可以但不够优雅。之所以会导致这样问题，是因为在页面逻辑中 无论是下拉刷新 还是 上拉触底都是在使用 <strong>同一个对象</strong> 。注意是 <strong>同一个对象</strong> ，这个对象 course 是在页面中通过 new Course 模型类出来的实例对象，在 Course 模型类中是有 属性的。</p><p>Course 模型类的属性会随着我们的加载而改变，它是有状态的。正因为如此，如果在下拉刷新前做过上拉触底的操作时，这些属性状态改变了，但到了下拉刷新时这些属性并没有做重新的初始化，就会导致这个数据问题。</p><blockquote><p>本质上这个问题由于面向对象的机制引起的：实例对象是有状态的，在不合适的时机里做了一次共享导致的。是否可以通过面向对象的风格来解决这个问题呢 ？答案是肯定的。</p></blockquote><h3 id="_5、下拉刷新功能实现思路分析" tabindex="-1"><a class="header-anchor" href="#_5、下拉刷新功能实现思路分析" aria-hidden="true">#</a> 5、下拉刷新功能实现思路分析</h3><p>TIP</p><p>解决以上的所说的问题，代码实现很简单，但背后涉及到的理论知识会非常多，这是重点。</p><p>在模型类 <code>Course</code> 中有一个 <code>getCourseList()</code> 方法，我们称这个方法为 <strong>实例方法</strong> 。还记我们之前定义 <code>Category</code> 分类模型类时，其中定义的都是 static 静态方法，但我们在 Course 类中的方法并没有使用 static 静态方法 而是 实例方法，就是为了后面实现分页加载。</p><p>因为分页加载需要将当前请求的数据与上一次请求的数据做一个合并，这时我们就需要将上一次加载的数据保存下来，上面实现中我们是在 当前 Course 类中定义 <code>data</code> 属性用来存放每一次请求的结果，并合并再重新赋值。同时，这个类中还有其他的属性 <code>page</code>、<code>count</code> 、<code>hasMoreData</code> 共 4 个，从语法上说我们叫它们是 类的属性，也称之为 <strong>类的实例属性</strong> 。但业务层面来说也称它们为 <strong>模型实例的状态</strong>，当每次加载时 <code>page++</code> 页码+1 ，这就是状态的改变，之所以把 <code>getCourseList()</code> 定义成一个实例方法，就是因为我们需要有一个 <strong>状态管理</strong></p><p>但，在面向对象的机制中，当我们一个类被实例化后（即：new），其中属性的状态就会被重新初始化，如果类的方法中改变了属性的状态，且对象的实例没有被销毁 或 重新实例化。那么这个对象的状态就永远是改变后的样子，保持不变。如：我们执行几次上拉触底操作时 page 的值变成了 3 ，在这个实例被初始化或销毁之前 page 永远都等于 3，因此这就导致了后续做下拉刷新时不能直接复用 <code>getCourseList()</code> 方法。这就是导致上面所说问题的本质原因。</p><p>这时，我们肯定会想到，只需要在做下拉刷新之前，将该对象重新初始化，属性的状态就会变为初始化的状态，请求就不会出现问题了。同时还可以复用 <code>getCourseList()</code> 方法。思路没有，具体的实现方式就有很多种了 ！</p><h3 id="_5-1、解决下拉刷新-无法加载最新数据的问题" tabindex="-1"><a class="header-anchor" href="#_5-1、解决下拉刷新-无法加载最新数据的问题" aria-hidden="true">#</a> 5.1、解决下拉刷新 - 无法加载最新数据的问题</h3><p>TIP</p><p>最简单的方式之一：在页面下拉刷新生命周期函数 <code>onPullDownRefresh(){}</code> 中直接先实例化一次 Course 模型类，再次调用模型的方法。</p><p>在页面 <code>pages/index/index.js</code> 逻辑下拉刷新生命周期函数中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 省略部分 .....</span>

  <span class="token comment">// 页面相关事件处理函数--监听用户下拉动作 - 下拉刷新</span>
  <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 实例化模型类，会重新初始实例属性的状态</span>
    <span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 调用模型类，获取课程列表数据的方法</span>
    course<span class="token punctuation">.</span><span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TIP</p><p>以上方式的请求结果，肯定不会受到上拉触底加载更多影响的，通常情况下这种方式是可以实现的。但这种方式可以实现是建立在当前的业务场景下的，如果 Course 类中有很多属性，我只想初始化其中几个属性的状态值，不是所有的属性都全部初始化。</p><p>因此直接简单粗暴的直接 <code>new</code> 一个新的对象，就不一定适用了。因此我们会采用符合面向对象风格的方式来实现。</p><blockquote><p>如下</p></blockquote><p>在 <code>/model/course.js</code> 模型类中重新定义一个方法，专门用来做重置当前属性状态的工作</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Http <span class="token keyword">from</span> <span class="token string">&quot;../utils/http&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> arry老师
 * <span class="token keyword">@description</span> 课程相关
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前页码</span>
  count <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// 每页数量</span>
  data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 保存上一次返回的结果</span>
  hasMoreData <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 是否有更多的数据（默认为 true）</span>

  <span class="token doc-comment comment">/**
   * 分页获取课程列表
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">categoryId</span> 分类 ID（可空）
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">type</span> 课程类型（可空）
   */</span>
  <span class="token keyword">async</span> <span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token parameter">categoryId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 省略部分 ......</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 重置当前类属性的状态，在页面做下拉刷新时，每次发起请求前，都先执行下该方法</span>
  <span class="token comment">// 通过模型方法改变当前状态的好处：方法中还可以写其他的业务逻辑，可以定制化它；后期维护效率更高、同时方便复用</span>
  <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>page <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hasMoreData <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token comment">// 小技巧：本质上这种重置状态的方法是不需要返回值的</span>
    <span class="token comment">// return 的好处是：在调用时代码更简洁，直接可以采用链式掉的方式实现（非常爽）</span>
    <span class="token comment">// 返回当前对象的实例</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Course<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2、实现下拉刷新" tabindex="-1"><a class="header-anchor" href="#_5-2、实现下拉刷新" aria-hidden="true">#</a> 5.2、实现下拉刷新</h3><p>TIP</p><p>直接调用原来实例化的对象，不需要再重新 new ，直接调用模型类中定义的 <code>reset()</code> 方法即可</p><p>在页面 <code>pages/index/index.js</code> 逻辑下拉刷新生命周期函数中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 省略部分 .....</span>

  <span class="token comment">// 页面相关事件处理函数--监听用户下拉动作 - 下拉刷新</span>
  <span class="token keyword">async</span> <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;下拉刷新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// const course = new Course()</span>
    <span class="token comment">// course.getCourseList()</span>

    <span class="token comment">// 使用链式调用的方式，获取新的课程列表数据</span>
    <span class="token keyword">const</span> courseList <span class="token operator">=</span> <span class="token keyword">await</span> course<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 数据绑定</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      courseList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 手动关闭下拉刷新状态条（真机上不会自动关闭）</span>
    wx<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在控制台 network 中查看上拉触底、下拉刷新前后的参数变化，观察是否有初始化，同时观察页面数据是否有变化。</p><p><img src="https://www.arryblog.com/assets/img/image-20230428054351779.0cb9b921.png" alt="image-20230428054351779"></p><h3 id="_6、总结-面向对象在项目工程中的最佳实践" tabindex="-1"><a class="header-anchor" href="#_6、总结-面向对象在项目工程中的最佳实践" aria-hidden="true">#</a> 6、总结：面向对象在项目工程中的最佳实践</h3><p>TIP</p><p>什么时候定义实例方法（使用时需要 new），什么时候定义静态方法</p><ul><li>实例方法：当方法中需要使用到类的属性，并需要维护它们的状态时，就需要使用实例方法（实例对象，是有状态的）</li><li>静态方法：当方法的本身实现是不依赖类的属性（维护状态）时，就是用静态方法（在静态方法中，无法获取实例属性的值，这是静态方法的语法定义）</li></ul><p>如果我们做过后端开发就会知道，绝大多数的后端工具类库全部都是静态方法。都是纯粹的实现，不依赖任何状态，因此都是静态方法。</p><p>这种设计也很正常，通常情况下一个类中会存在状态（属性），多数情况会出现在业务模型或业务操作中，而作为第三方的公共工具类库是不可能跟具体的业务耦合的。</p><h3 id="_6-1、调用静态方法-和-实例化方法的本质总结" tabindex="-1"><a class="header-anchor" href="#_6-1、调用静态方法-和-实例化方法的本质总结" aria-hidden="true">#</a> 6.1、调用静态方法 和 实例化方法的本质总结</h3><p>TIP</p><ul><li>调用静态方法本质上就是 <strong>调用类方法</strong></li><li>实例化调用，本质上是在 <strong>调用对象的方法</strong></li></ul><blockquote><p>调用类方法 和 调用对象的方法 区别</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 实例化 Course 类</span>
<span class="token keyword">const</span> course1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码中</p><p><code>course1</code> <code>course2</code> 两个对象区别</p><ul><li>共同点：它们都是从 Course 类实例化而来，都是 Course 类的具体实例。</li><li>不同点：它们之间是不会互相干扰的，因为它们每一次实例化后都会产生不同的对象。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 实例化 Course 类</span>
<span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> course2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 给第一个 course 对象中的 hasMoreData 属性重新赋值</span>
course<span class="token punctuation">.</span>hasMoreData <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">// 输出第二个 course2 对象中的 hasMoreData 属性的值并没有改变，course 不会影响 course 2</span>
<span class="token comment">// 虽说 course，course2 都是 Course 类的实例对象，但每次实例化后都会产生不同的实例对象</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>course2<span class="token punctuation">.</span>hasMoreData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这也是为什么 实例化调用，本质上是在 <strong>调用对象的方法</strong> 而不是 类方法</p></blockquote><h3 id="_6-2、静态属性" tabindex="-1"><a class="header-anchor" href="#_6-2、静态属性" aria-hidden="true">#</a> 6.2、静态属性</h3><p>TIP</p><p>我们知道 类里面除了有静态方法外，还有静态属性。通过之前的学习知道在静态方法中是无法访问到类里面定义的属性的。</p><blockquote><p>但，在静态方法中是可以访问静态属性的</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  <span class="token comment">// 静态属性</span>
  <span class="token keyword">static</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token comment">// 静态方法</span>
  <span class="token keyword">static</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 给静态属性重新赋值</span>
    Course<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Course<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用静态方法</span>
Course<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：</p><p>既然在静态方法中也是有办法访问到类的属性的，为什么还要来区分静态方法 和 实例方法 ？ 那我们把之前的代码中全部改成静态属性和静态方法的形式来实现可以吗 ？</p><blockquote><p>确实可以 ！但在真实的项目中不会有人这样做。</p></blockquote><p>因为，我们调用静态方法本质上就是 <strong>调用类方法</strong>，如果在页面上 给类的静态属性赋值 <code>Course.a</code> 其实是在操作 <strong>类的属性</strong> 而不是 对象的属性。这就会导致如果你在 5 个页面中使用了这个属性，但在其中一个页面对 a 属性的值做了修改，其余的 4 个页面都会跟着改变。相当于我们在操作一个全局共享的变量，这就是静态属性最大的问题。</p><p>原因是我们操作的是类本身，而不是一个具体的对象。如果操作的是具体的对象，在多个页面中使用了，每次用之前都 new 一次，你在任意页面中属性值的更改是不会影响其他页面的。除非说我本身就需要共享变量，但这样同样会出现一些莫名其妙的问题。</p><p>最佳实践：</p><p>在真实的项目中，这种会被全局共享的状态或属性是一定要慎用的，后期难以维护。因此在项目中不建议使用全局共享变量的。</p><ul><li>项目中必须要用到全局共享变量才能解决的，一般会用 <strong>全局状态管理</strong> 来替代</li><li>在使用面向对象的机制过程中，不要让静态属性同时在多个地方被使用（实际开发中很少会定义静态属性，但静态方法会经常使用）</li></ul><blockquote><p>如果大家对面向对象的思想不能完全理解 或 不深入，我们可以先用起来，在慢慢熟悉</p></blockquote><h2 id="四、内容标签页、分类切换数据联动" tabindex="-1"><a class="header-anchor" href="#四、内容标签页、分类切换数据联动" aria-hidden="true">#</a> 四、内容标签页、分类切换数据联动</h2><p>TIP</p><p>在事件处理函数中调用对应模型类中获取课程列表的方法，同时需要在内容标签切换 和 点击课程分类选项时传递对应的参数，实现数据联动。</p><h3 id="_1、在模型方法中接收参数" tabindex="-1"><a class="header-anchor" href="#_1、在模型方法中接收参数" aria-hidden="true">#</a> 1、在模型方法中接收参数</h3><p>在 <code>/model/course.js</code> 中接收课程分类 ID 和 课程类型索引</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> Http <span class="token keyword">from</span> <span class="token string">&quot;../utils/http&quot;</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> arry老师
 * <span class="token keyword">@description</span> 课程相关
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Course</span> <span class="token punctuation">{</span>
  <span class="token comment">// 省略部分 ....</span>

  <span class="token doc-comment comment">/**
   * 分页获取课程列表
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">categoryId</span> 分类 ID（可空）
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">type</span> 课程类型（可空）
   */</span>
  <span class="token keyword">async</span> <span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token parameter">categoryId <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;获取课程列表&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 省略部分 .....</span>

    <span class="token comment">// 发起网络请求，获取数据</span>
    <span class="token keyword">const</span> courseList <span class="token operator">=</span> <span class="token keyword">await</span> Http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;/api/course/list&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>count<span class="token punctuation">,</span>
        <span class="token comment">// 增加 分类ID</span>
        <span class="token literal-property property">categoryId</span><span class="token operator">:</span> categoryId <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 增加 课程类型</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> type <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 省略部分 ....</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 省略部分 ....</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Course<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、实现事件函数逻辑" tabindex="-1"><a class="header-anchor" href="#_2、实现事件函数逻辑" aria-hidden="true">#</a> 2、实现事件函数逻辑</h3><p>TIP</p><ul><li>实现 tab 标签页切换事件<code>handleChange()</code> 函数逻辑</li><li>实现点击课程分类选项事件<code>handleCategoryChange()</code>函数逻辑</li><li>在调用<code>getCourseList()</code>模型方法中传递参数：分类 ID 和 课程类型索引，同时每次调用模型方法前，先重置实例属性状态，即调用 <code>reset()</code> 方法</li></ul><p>在 <code>pages/index/index.js</code> 页面逻辑中</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// pages/index/index.js</span>

<span class="token comment">// 导入 Course 类</span>
<span class="token keyword">import</span> Category <span class="token keyword">from</span> <span class="token string">&quot;../../model/category&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Course <span class="token keyword">from</span> <span class="token string">&quot;../../model/course&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 实例化 Course 类</span>
<span class="token keyword">const</span> course <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Course</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 页面的初始数据</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">tabs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;全部课程&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;正在学&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;基础入门&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;架构&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 分类数据</span>
    <span class="token literal-property property">categoryList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 课程列表数据</span>
    <span class="token literal-property property">courseList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">tabIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 生命周期函数--监听页面加载</span>
  <span class="token function-variable function">onLoad</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 初始化课程列表</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取分类列表</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 自定义事件 - tab 切换</span>
  <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>index<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 直接在data中挂载属性，只是内部使用的属性，可以这样的方式绑定</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>tabIndex <span class="token operator">=</span> index<span class="token punctuation">;</span>
    <span class="token comment">// 点击/滑动 tab标签页时，调用获取课程列的方法</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 点击 swiper-item 的事件处理函数 - 课程分类</span>
  <span class="token function">handleCategoryChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>categoryId <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token comment">// 点击课程分类时，调用获取课程列的方法</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取课程列表（以 _ 开头，表示页面私有函数）</span>
  <span class="token keyword">async</span> <span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>categoryId<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>tabIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// -------------</span>
    <span class="token comment">// 传递参数：分类ID 和 课程类型索引，同时每次调用模型方法前，先重置实例属性状态</span>
    <span class="token keyword">const</span> courseList <span class="token operator">=</span> <span class="token keyword">await</span> course
      <span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">getCourseList</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>categoryId<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>tabIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">courseList</span><span class="token operator">:</span> courseList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 获取分类列表数据</span>
  <span class="token keyword">async</span> <span class="token function">_getCategoryList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> categoryList <span class="token operator">=</span> <span class="token keyword">await</span> Category<span class="token punctuation">.</span><span class="token function">getCategoryListWithAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      categoryList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 页面相关事件处理函数--监听用户下拉动作 - 下拉刷新</span>
  <span class="token keyword">async</span> <span class="token function">onPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;下拉刷新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 手动关闭下拉刷新状态条（真机上不会自动关闭）</span>
    wx<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// 页面上拉触底，加载更多</span>
  <span class="token keyword">async</span> <span class="token function">onReachBottom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;上拉触底&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果没有更多数据，直接 return ，不再发起网络请求了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>course<span class="token punctuation">.</span>hasMoreData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;没有更多课程了 ...&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 获取下一页的数据 并且 和当前页的数据合并</span>
    <span class="token keyword">const</span> courseList <span class="token operator">=</span> <span class="token keyword">await</span> course<span class="token punctuation">.</span><span class="token function">getCourseList</span><span class="token punctuation">(</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>categoryId<span class="token punctuation">,</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>tabIndex
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// console.log(courseList)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      courseList<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、优化重复点击课程分类选项性能" tabindex="-1"><a class="header-anchor" href="#_3、优化重复点击课程分类选项性能" aria-hidden="true">#</a> 3、优化重复点击课程分类选项性能</h3><p>TIP</p><p>当重复点击课程分类选项时，每次都会向服务端发送网路请求，需要优化</p><p>在 <code>pages/index/index.js</code> 页面逻辑 <code>handleCategoryChange()</code> 事件处理函数中，添加判断</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 点击 swiper-item 的事件处理函数 - 课程分类</span>
<span class="token function">handleCategoryChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> id <span class="token operator">=</span> e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>id
    <span class="token comment">// 判断如果分类ID === 传递过来的ID 说明已经点击过了，就直接 return ，后边的代码就不执行了</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>categoryId <span class="token operator">===</span> id<span class="token punctuation">)</span> <span class="token keyword">return</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>categoryId <span class="token operator">=</span> id
    <span class="token comment">// 点击课程分类时，调用获取课程列的方法</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getCourseList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、发现问题" tabindex="-1"><a class="header-anchor" href="#_4、发现问题" aria-hidden="true">#</a> 4、发现问题</h3><p>TIP</p><p>当我们在 tab 标签页之间频繁的切换，它的数据渲染就会出错，同时还会产生很多不必要的网络请求。</p><p>会出现我们可能已经切换到了“基础入门”，可能数据停留在 “正在学” 的数据。同样课程分类也一样。虽说这样无聊的用户会比较少一些，不停在两个标签之间来回频繁的切换。</p><blockquote><p>但类似这样问题在我们实际开发中经常会遇到，因此解决这个问题对我们来说非常有意义。</p></blockquote>`,148);function d(v,m){const t=e("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[n("是否需要将课程列表信息封装为自定义组件，可根据 "),s("a",r,[n("自定义组件封装 - 最佳实践总结 (opens new window)"),l(t)]),n("中讲到《自定义组件封装的本质》满足条件即可对 课程列表部分进行封装。")]),k])}const g=p(i,[["render",d],["__file","JS mianxiangduixiang、fencengsheji、dongtaishujubianlizuijiashijianyuyingyong.html.vue"]]);export{g as default};
