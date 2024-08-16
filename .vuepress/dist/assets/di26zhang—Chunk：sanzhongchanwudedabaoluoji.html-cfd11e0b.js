import{_ as o,r as t,o as c,c as i,b as n,d as s,e,a as p}from"./app-48690364.js";const u={},l={href:"https://juejin.cn/book/7115598540721618944/section/7119035705153552419",target:"_blank",rel:"noopener noreferrer"},r=n("p",null,"主流程之外，我们还会详细讲解几个比较模糊的概念：",-1),d=n("ul",null,[n("li",null,"Chunk、ChunkGroup、ChunGraph 对象分别是什么？互相之间存在怎样的交互关系？"),n("li",null,"Webpack 默认分包规则，以及规则中存在的问题。")],-1),k=n("h2",{id:"chunkgraph-构建过程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#chunkgraph-构建过程","aria-hidden":"true"},"#"),s(" ChunkGraph 构建过程")],-1),h={href:"https://juejin.cn/book/7115598540721618944/section/7119035873802813475",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"初始化、构建、封装",-1),b=n("p",null,[n("img",{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d54599450fe94d0a988ec70214e4ead8~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})],-1),g=n("strong",null,"构建",-1),v={href:"https://webpack.js.org/concepts/dependency-graph/#root",target:"_blank",rel:"noopener noreferrer"},_=n("strong",null,"封装",-1),f=n("p",null,"「封装」阶段最重要的目标就是根据「构建」阶段收集到的 ModuleGraph 关系图构建 ChunkGraph 关系图，这个过程的逻辑比较复杂：",-1),y=n("p",null,[n("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/92e472f300934c009836445743dd6996~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})],-1),C=n("p",null,"我们简单分析一下这里面几个重要步骤的实现逻辑。",-1),j=n("strong",null,"第一步非常关键：",-1),w=n("code",null,"seal()",-1),G=n("code",null,"entry",-1),x=n("code",null,"Chunk",-1),q={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/Entrypoint.js",target:"_blank",rel:"noopener noreferrer"},E=n("code",null,"ChunkGroup",-1),M=n("code",null,"ChunkGraph",-1),W=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Compilation</span> <span class="token punctuation">{</span>
  <span class="token function">seal</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">const</span> chunkGraphInit <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历入口模块列表</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> <span class="token punctuation">{</span> dependencies<span class="token punctuation">,</span> includeDependencies<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token keyword">of</span> <span class="token keyword">this</span>
      <span class="token punctuation">.</span>entries<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 为每一个 entry 创建对应的 Chunk 对象</span>
      <span class="token keyword">const</span> chunk <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addChunk</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 为每一个 entry 创建对应的 ChunkGroup 对象</span>
      <span class="token keyword">const</span> entrypoint <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entrypoint</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 关联 Chunk 与 ChunkGroup</span>
      <span class="token function">connectChunkGroupAndChunk</span><span class="token punctuation">(</span>entrypoint<span class="token punctuation">,</span> chunk<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 遍历 entry Dependency 列表</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> dep <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>globalEntry<span class="token punctuation">.</span>dependencies<span class="token punctuation">,</span> <span class="token operator">...</span>dependencies<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 为每一个 EntryPoint 关联入口依赖对象，以便下一步从入口依赖开始遍历其它模块</span>
        entrypoint<span class="token punctuation">.</span><span class="token function">addOrigin</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> */</span> <span class="token punctuation">(</span>dep<span class="token punctuation">)</span><span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> module <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>moduleGraph<span class="token punctuation">.</span><span class="token function">getModule</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 在 ChunkGraph 中记录入口模块与 Chunk 关系</span>
          chunkGraph<span class="token punctuation">.</span><span class="token function">connectChunkAndEntryModule</span><span class="token punctuation">(</span>chunk<span class="token punctuation">,</span> module<span class="token punctuation">,</span> entrypoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// ...</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 调用 buildChunkGraph 方法，开始构建 ChunkGraph</span>
    <span class="token function">buildChunkGraph</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> chunkGraphInit<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 触发各种优化钩子</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完成后，形成如下数据结构：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39e2b041b1994fa2b9c4cb92046f1b90~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>`,3),L=n("code",null,"entry.runtime",-1),A={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/Compilation.js#L2933-L2934",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/Compilation.js#L2937-L2938",target:"_blank",rel:"noopener noreferrer"},P=n("code",null,"entry",-1),H=n("code",null,"ChunkGroup",-1),R={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/buildChunkGraph.js#L1347-L1348",target:"_blank",rel:"noopener noreferrer"},I=n("strong",null,"第二步：",-1),z=n("code",null,"buildChunkGraph",-1),N={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/buildChunkGraph.js#L1367-L1368",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"visitModules",-1),V=n("code",null,"Chunk",-1),B={href:"https://webpack.js.org/blog/2020-10-10-webpack-5-release/#async-modules",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/buildChunkGraph.js#L740-L742",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"ChunkGroup",-1),T=n("code",null,"Chunk",-1),U=n("p",null,[n("img",{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f065f4c71784477abff7b113eb6dd2bf~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})],-1),J=n("strong",null,"第三步：",-1),K=n("code",null,"buildChunkGraph",-1),Q={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/buildChunkGraph.js#L1381-L1382",target:"_blank",rel:"noopener noreferrer"},X=n("code",null,"connectChunkGroups",-1),Y=n("code",null,"ChunkGroup",-1),Z=n("code",null,"Chunk",-1),$=n("code",null,"ChunkGraph",-1),nn=n("p",null,[n("img",{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd08a1a0b94b4f2d804399c77e916862~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"})],-1),sn=n("strong",null,"第四步：",-1),an=n("code",null,"buildChunkGraph",-1),en={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/buildChunkGraph.js#L1397-L1398",target:"_blank",rel:"noopener noreferrer"},pn=n("code",null,"cleanupUnconnectedGroups",-1),on=n("code",null,"ChunkGroup",-1),tn=p(`<p>自上而下经过这四个步骤后，<code>ModuleGraph</code> 中存储的模块将根据模块本身的性质，被分配到 Entry、Async、Runtime 三种不同的 Chunk 对象，并将 Chunk 之间的依赖关系存储到 ChunkGraph 与 ChunkGroup 集合中，后续可在这些对象基础上继续修改分包策略（例如 <code>SplitChunksPlugin</code>），通过重新组织、分配 Module 与 Chunk 对象的归属实现分包优化。</p><h2 id="chunk-vs-chunkgroup-vs-chunkgraph" tabindex="-1"><a class="header-anchor" href="#chunk-vs-chunkgroup-vs-chunkgraph" aria-hidden="true">#</a> Chunk vs ChunkGroup vs ChunkGraph</h2><p>上述构建过程涉及 Chunk、ChunkGroup、ChunkGraph 三种关键对象，我们先总结它们的概念与作用，加深理解：</p><ul><li><code>Chunk</code>：Module 用于读入模块内容，记录模块间依赖等；而 Chunk 则根据模块依赖关系合并多个 Module，输出成资产文件（合并、输出产物的逻辑，我们放到下一章讲解）：</li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2bac3fb532bc406fb16331555c309f9b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li><code>ChunkGroup</code>：一个 <code>ChunkGroup</code> 内包含一个或多个 <code>Chunk</code> 对象；<code>ChunkGroup</code> 与 <code>ChunkGroup</code> 之间形成父子依赖关系：</li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/219d44ad9b4e4d2e9847761f83774d89~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li><code>ChunkGraph</code>：最后，Webpack 会将 Chunk 之间、ChunkGroup 之间的依赖关系存储到 <code>compilation.chunkGraph</code> 对象中，形成如下类型关系：</li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/424fe595633d41649a616f2f5076adb4~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="默认分包规则" tabindex="-1"><a class="header-anchor" href="#默认分包规则" aria-hidden="true">#</a> 默认分包规则</h2><p>综合上述 <code>ChunkGraph</code> 构建流程最终会将 Module 组织成三种不同类型的 Chunk：</p><ul><li>Entry Chunk：同一个 <code>entry</code> 下触达到的模块组织成一个 Chunk；</li><li>Async Chunk：异步模块单独组织为一个 Chunk；</li><li>Runtime Chunk：<code>entry.runtime</code> 不为空时，会将运行时模块单独组织成一个 Chunk。</li></ul><p>这是 Webpack 内置的，在不使用 <code>splitChunks</code> 或其它插件的情况下，模块输入映射到输出的默认规则，是 Webpack 底层关键原理之一，因此有必要展开介绍每一种 Chunk 的具体规则。</p><blockquote><p><strong>Entry Chunk:</strong></p></blockquote><p>先从 Entry Chunk 开始，Webpack 首先会为每一个 <code>entry</code> 创建 <code>Chunk</code> 对象，例如对于如下配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&quot;./src/main&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token string">&quot;./src/home&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遍历 <code>entry</code> 对象属性并创建出 <code>chunk[main]</code> 、<code>chunk[home]</code> 两个对象，此时两个 Chunk 分别包含 <code>main</code> 、<code>home</code> 模块：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1a40257760914ba08783bf2d6a3c1bef~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p>`,18),cn=n("code",null,"ModuleGraph",-1),un=n("code",null,"entry",-1),ln={href:"https://github1s.com/webpack/webpack/blob/HEAD/lib/buildChunkGraph.js#L187-L188",target:"_blank",rel:"noopener noreferrer"},rn=p(`<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9d7fbfc917b1416cb1ee86216c3131a0~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p><code>main.js</code> 以同步方式直接或间接引用了 a/b/c/d 四个文件，Webpack 会首先为 <code>main.js</code> 模块创建 Chunk 与 EntryPoint 对象，之后将 a/b/c/d 模块逐步添加到 <code>chunk[main]</code> 中，最终形成：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83a4ebfe25b940d5adfb9d04a7507646~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><blockquote><p><strong>Async Chunk:</strong></p></blockquote><p>其次，Webpack 会将每一个异步导入语句（<code>import(xxx)</code> 及 <code>require.ensure</code>）处理为一个单独的 Chunk 对象，并将其子模块都加入这个 Chunk 中 —— 我们称之为 Async Chunk。例如对于下面的例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token string">&#39;./sync-a.js&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;./sync-b.js&#39;</span>

<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./async-a.js&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// async-a.js</span>
<span class="token keyword">import</span> <span class="token string">&#39;./sync-c.js&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在入口模块 <code>index.js</code> 中，以同步方式引入 sync-a、sync-b；以异步方式引入 async-a 模块；同时，在 async-a 中以同步方式引入 <code>sync-c</code> 模块，形成如下模块依赖关系图：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/716dba615b424147ad4076ce0a735eb5~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>此时，Webpack 会为入口 <code>index.js</code>、异步模块 <code>async-a.js</code> 分别创建分包，形成如下 Chunk 结构：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/892f542a06ae4d31a18130e93b07648a~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>并且 <code>chunk[index]</code> 与 <code>chunk[async-a]</code> 之间形成了单向依赖关系，Webpack 会将这种依赖关系保存在 <code>ChunkGroup._parents</code> 、<code>ChunkGroup._children</code> 属性中。</p><blockquote><p><strong>Runtime Chunk:</strong></p></blockquote><p>最后，除了 <code>entry</code>、异步模块外，Webpack5 还支持将 Runtime 代码单独抽取为 Chunk。这里说的 Runtime 代码是指一些为了确保打包产物能正常运行，而由 Webpack 注入的一系列基础框架代码，举个例子，常见的 Webpack 打包产物结构如：</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/de9a9cbc02a9452baa1feddcd7c5ef71~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>上图红框圈出来的一大段代码就是 Webpack 动态生成的运行时代码，编译时，Webpack 会根据业务代码，决定输出哪些支撑特性的运行时代码（基于 <code>Dependency</code> 子类），例如：</p><ul><li>需要 <code>__webpack_require__.f</code>、<code>__webpack_require__.r</code> 等功能实现最起码的模块化支持；</li><li>如果用到动态加载特性，则需要写入 <code>__webpack_require__.e</code> 函数；</li><li>如果用到 Module Federation 特性，则需要写入 <code>__webpack_require__.o</code> 函数；</li><li>等等。</li></ul><p>虽然每段运行时代码可能都很小，但随着特性的增加，最终结果会越来越大，特别对于多 entry 应用，在每个入口都重复打包一份相似的运行时显得有点浪费，为此 Webpack5 提供了 <code>entry.runtime</code> 配置项用于声明如何打包运行时代码。用法上只需在 <code>entry</code> 项中增加字符串形式的 <code>runtime</code> 值，例如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&quot;./src/index&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token string">&quot;solid-runtime&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>compilation.seal</code> 函数中，Webpack 首先为 <code>entry</code> 创建 <code>EntryPoint</code>，之后判断 <code>entry</code> 配置中是否带有 <code>runtime</code> 属性，有则创建以 <code>runtime</code> 值为名的 Chunk，因此，上例配置将生成两个 Chunk：<code>chunk[index.js]</code> 、<code>chunk[solid-runtime]</code>，并据此最终产出两个文件：</p><ul><li>入口 index 对应的 <code>index.js</code> 文件；</li><li>运行时配置对应的 <code>solid-runtime.js</code> 文件。</li></ul><p>在多 <code>entry</code> 场景中，只要为每个 <code>entry</code> 都设定相同的 <code>runtime</code> 值，Webpack 运行时代码就会合并写入到同一个 Runtime Chunk 中，最终达成产物性能优化效果。例如对于如下配置：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&quot;./src/index&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token string">&quot;solid-runtime&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&quot;./src/home&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token string">&quot;solid-runtime&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>入口 <code>index</code>、<code>home</code> 共享相同的 <code>runtime</code> 值，最终生成三个 Chunk，分别为：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dcbe4fdd5f2d41d0af0b7fcf990a9bb7~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>此时入口 <code>chunk[index]</code>、<code>chunk[home]</code> 与运行时 <code>chunk[solid-runtime]</code> 也会形成父子依赖关系。</p><h2 id="分包规则的问题" tabindex="-1"><a class="header-anchor" href="#分包规则的问题" aria-hidden="true">#</a> 分包规则的问题</h2><p>默认分包规则最大的问题是无法解决模块重复，如果多个 Chunk 同时包含同一个 Module，那么这个 Module 会被不受限制地重复打包进这些 Chunk。比如假设我们有两个入口 main/index 同时依赖了同一个模块：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b483355b9b3e4acfb022a2e3aa54d226~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>默认情况下，Webpack 不会对此做额外处理，只是单纯地将 c 模块同时打包进 main/index 两个 Chunk，最终形成：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/452ebaf82f7c4df88ae7b5334ff17cba~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>可以看到 <code>chunk</code> 间互相孤立，模块 c 被重复打包，对最终产物可能造成不必要的性能损耗！</p><p>为了解决这个问题，Webpack 3 引入 <code>CommonChunkPlugin</code> 插件试图将 entry 之间的公共依赖提取成单独的 <code>chunk</code>，但 <code>CommonChunkPlugin</code> 本质上还是基于 Chunk 之间简单的父子关系链实现的，很难推断出提取出的第三个包应该作为 <code>entry</code> 的父 <code>chunk</code> 还是子 <code>chunk</code>，<code>CommonChunkPlugin</code> 统一处理为父 <code>chunk</code>，某些情况下反而对性能造成了不小的负面影响。</p><p>为此，在 Webpack4 之后才专门引入了更复杂的数据结构 —— <code>ChunkGroup</code> 专门实现关系链管理，配合 <code>SplitChunksPlugin</code> 能够更高效、智能地实现<strong>启发式分包。</strong></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>综上，「构建」阶段负责根据模块的引用关系构建 ModuleGraph；「封装」阶段则负责根据 ModuleGraph 构建一系列 Chunk 对象，并将 Chunk 之间的依赖关系（异步引用、Runtime）组织为 ChunkGraph —— Chunk 依赖关系图对象。与 ModuleGraph 类似，ChunkGraph 结构的引入也能解耦 Chunk 之间依赖关系的管理逻辑，整体架构逻辑更合理更容易扩展。</p><p>不过，虽然看着很复杂，但「封装」阶段最重要的目标还是在于：确定有多少个 Chunk，以及每一个 Chunk 中包含哪些 Module —— 这些才是真正影响最终打包结果的关键因素。</p>`,36),dn={href:"https://webpack.js.org/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"},kn=n("code",null,"buildChunkGraph",-1),hn=n("h2",{id:"思考题",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#思考题","aria-hidden":"true"},"#"),s(" 思考题")],-1),mn=n("p",null,[n("code",null,"Chunk"),s(" 一定会且只会生产出一个产物文件吗？为什么？"),n("code",null,"mini-css-extract-plugin"),s("、"),n("code",null,"file-loader"),s(" 这一类能写出额外文件的组件，底层是怎么实现的？")],-1);function bn(gn,vn){const a=t("ExternalLinkIcon");return c(),i("div",null,[n("p",null,[s("在上一篇文章《"),n("a",l,[s("Dependency Graph：如何管理模块间依赖？"),e(a)]),s("》中，我们已经详细讲解了「构建」阶段如何从 Entry 开始逐步递归读入、解析模块内容，并最终构建出模块依赖关系图 —— ModuleGraph 对象。本文我们继续往下，讲解在接下来的「封装」阶段，如何根据 ModuleGraph 内容组织 Chunk，并进一步构建出 ChunkGroup、ChunkGraph 依赖关系对象的主流程。")]),r,d,k,n("p",null,[s("在 《"),n("a",h,[s("Init、Make、Seal：真正读懂 Webpack 核心流程"),e(a)]),s("》中，我们已经介绍了 Webpack 底层构建逻辑大体上可以划分为：「"),m,s("」三个阶段：")]),b,n("p",null,[s("其中，「"),g,s("」阶段负责分析模块间的依赖关系，建立起模块之间的 "),n("a",v,[s("依赖关系图"),e(a)]),s("（ModuleGraph）；紧接着，在「"),_,s("」阶段根据依赖关系图，将模块分开封装进若干 Chunk 对象中，并将 Chunk 之间的父子依赖关系梳理成 ChunkGraph 与若干 ChunkGroup 对象。")]),f,y,C,n("p",null,[j,s(" 调用 "),w,s(" 函数后，遍历 "),G,s(" 配置，为每个入口创建一个空的 "),x,s(" 与 "),n("a",q,[s("EntryPoint"),e(a)]),s(" 对象（一种特殊的 "),E,s("），并初步设置好基本的 "),M,s(" 结构关系，为下一步骤做好准备，关键代码：")]),W,n("p",null,[s("其次，若此时配置了 "),L,s("，Webpack 还会在这个阶段为运行时代码 "),n("a",A,[s("创建"),e(a)]),s(" 相应的 Chunk 并直接 "),n("a",D,[s("分配"),e(a)]),s(" 给 "),P,s(" 对应的 "),H,s("对象。一切准备就绪后调用 "),n("a",R,[s("buildChunkGraph"),e(a)]),s(" 函数，进入下一步骤。")]),n("p",null,[I,s(" 在 "),z,s(" 函数内 "),n("a",N,[s("调用"),e(a)]),s(),S,s(" 函数，遍历 ModuleGraph，将所有 Module 按照依赖关系分配给不同 "),V,s(" 对象；这个过程中若遇到 "),n("a",B,[s("异步模块"),e(a)]),s("，则为该模块 "),n("a",F,[s("创建"),e(a)]),s("新的 "),O,s(" 与 "),T,s(" 对象，最终形成如下数据结构：")]),U,n("p",null,[J,s(" 在 "),K,s(" 函数中"),n("a",Q,[s("调用"),e(a)]),s(),X,s(" 方法，建立 "),Y,s(" 之间、"),Z,s(" 之间的依赖关系，生成完整的 "),$,s(" 对象，最终形成如下数据结构：")]),nn,n("p",null,[sn,s(" 在 "),an,s(" 函数中"),n("a",en,[s("调用"),e(a)]),s(),pn,s(" 方法，清理无效 "),on,s("，主要起到性能优化作用。")]),tn,n("p",null,[s("初始化完毕后，Webpack 会根据 "),cn,s(" 的依赖关系数据，将 "),un,s(" 下所触及的所有 Module 塞入 Chunk （发生在 "),n("a",ln,[s("visitModules"),e(a)]),s(" 方法），比如对于如下文件依赖：")]),rn,n("p",null,[s("针对这一点，我们需要理解 Webpack5 内置的三种分包规则：Entry Chunk、Async Chunk 与 Runtime Chunk，这些是最最原始的分包逻辑，其它插件（例如 "),n("a",dn,[s("splitChunksPlugin"),e(a)]),s("）都是在此基础，借助 "),kn,s(" 后触发的各种钩子进一步拆分、合并、优化 Chunk 结构，实现扩展分包效果。")]),hn,mn])}const fn=o(u,[["render",bn],["__file","di26zhang—Chunk：sanzhongchanwudedabaoluoji.html.vue"]]);export{fn as default};
