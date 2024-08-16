import{_ as d,r as l,o as r,c,b as n,d as e,e as i,a as s}from"./app-48690364.js";const o={},p=n("p",null,"受限于 Node.js 的单线程架构，原生 Webpack 对所有资源文件做的所有解析、转译、合并操作本质上都是在同一个线程内串行执行，CPU 利用率极低，因此，理所当然地，社区出现了一些以多进程方式运行 Webpack，或 Webpack 构建过程某部分工作的方案(从而提升单位时间利用率)，例如：",-1),u={href:"https://github.com/amireh/happypack",target:"_blank",rel:"noopener noreferrer"},v={href:"https://webpack.js.org/loaders/thread-loader/",target:"_blank",rel:"noopener noreferrer"},t={href:"https://www.npmjs.com/package/parallel-webpack",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.npmjs.com/package/terser-webpack-plugin#terseroptions",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"这些方案的核心设计都很类似：针对某种计算任务创建子进程，之后将运行所需参数通过 IPC 传递到子进程并启动计算操作，计算完毕后子进程再将结果通过 IPC 传递回主进程，寄宿在主进程的组件实例，再将结果提交给 Webpack。",-1),k=n("h2",{id:"使用-happypack",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用-happypack","aria-hidden":"true"},"#"),e(" 使用 HappyPack")],-1),h={href:"https://github.com/amireh/happypack",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"文件加载",-1),y=s(`<ul><li>使用 <code>happypack/loader</code> 代替原本的 Loader 序列；</li><li>使用 <code>HappyPack</code> 插件注入代理执行 Loader 序列的逻辑。</li></ul><p>基本用法：</p><ol><li>安装依赖：</li></ol><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>yarn add -D happypack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>将原有 <code>loader</code> 配置替换为 <code>happypack/loader</code>，如：</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: &quot;happypack/loader&quot;,
        // 原始配置如：
        // use: [
        //  {
        //      loader: &#39;babel-loader&#39;,
        //      options: {
        //          presets: [&#39;@babel/preset-env&#39;]
        //      }
        //  },
        //  &#39;eslint-loader&#39;
        // ]
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>创建 <code>happypack</code> 插件实例，并将原有 loader 配置迁移到插件中，完整配置：</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const HappyPack = require(&quot;happypack&quot;);

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: &quot;happypack/loader&quot;,
        // 原始配置如：
        // use: [
        //  {
        //      loader: &#39;babel-loader&#39;,
        //      options: {
        //          presets: [&#39;@babel/preset-env&#39;]
        //      }
        //  },
        //  &#39;eslint-loader&#39;
        // ]
      },
    ],
  },
  plugins: [
    new HappyPack({
      // 将原本定义在 \`module.rules.use\` 中的 Loader 配置迁移到 HappyPack 实例中
      loaders: [
        {
          loader: &quot;babel-loader&quot;,
          option: {
            presets: [&quot;@babel/preset-env&quot;],
          },
        },
        &quot;eslint-loader&quot;,
      ],
    }),
  ],
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完毕后，再次启动 <code>npx webpack</code> 命令，即可使用 HappyPack 的多进程能力提升构建性能。以 Three.js 为例，该项目包含 362 份 JS 文件，合计约 3w 行代码：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03944215b70543889f573db3c1d0fb33~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>开启 HappyPack 前，构建耗时大约为 11000ms 到 18000ms 之间，开启后耗时降低到 5800ms 到 8000ms 之间，提升约47%。</p><p>上述示例仅演示了使用 HappyPack 加载单一资源类型的场景，实践中我们还可以创建多个 HappyPack 插件实例，来加载多种资源类型 —— 只需要用 <code>id</code> 参数做好 Loader 与 Plugin 实例的关联即可，例如：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const HappyPack = require(&#39;happypack&#39;);

module.exports = {
  // ...
  module: {
    rules: [{
        test: /\\.js?$/,
        // 使用 \`id\` 参数标识该 Loader 对应的 HappyPack 插件示例
        use: &#39;happypack/loader?id=js&#39;
      },
      {
        test: /\\.less$/,
        use: &#39;happypack/loader?id=styles&#39;
      },
    ]
  },
  plugins: [
    new HappyPack({
      // 注意这里要明确提供 id 属性
      id: &#39;js&#39;,
      loaders: [&#39;babel-loader&#39;, &#39;eslint-loader&#39;]
    }),
    new HappyPack({
      id: &#39;styles&#39;,
      loaders: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]
    })
  ]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的重点是：</p><ul><li><code>js</code>、<code>less</code> 资源都使用 <code>happypack/loader</code> 作为唯一加载器，并分别赋予 <code>id = &#39;js&#39; | &#39;styles&#39;</code> 参数；</li><li>创建了两个 <code>HappyPack</code> 插件实例并分别配置 <code>id</code> 属性，以及用于处理 js 与 css 的 <code>loaders</code> 数组；</li><li>启动后，<code>happypack/loader</code> 与 <code>HappyPack</code> 插件实例将通过 <code>id</code> 值产生关联，以此实现对不同资源执行不同 Loader 序列。</li></ul><p>上面这种多实例模式虽然能应对多种类型资源的加载需求，但默认情况下，HappyPack 插件实例 <strong>自行管理</strong> 自身所消费的进程，需要导致频繁创建、销毁进程实例 —— 这是非常昂贵的操作，反而会带来新的性能损耗。</p><p>为此，HappyPack 提供了一套简单易用的共享进程池接口，只需要创建 <code>HappyPack.ThreadPool</code> 对象，并通过 <code>size</code> 参数限定进程总量，之后将该例配置到各个 HappyPack 插件的 <code>threadPool</code> 属性上即可，例如：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const os = require(&#39;os&#39;)
const HappyPack = require(&#39;happypack&#39;);
const happyThreadPool = HappyPack.ThreadPool({
  // 设置进程池大小
  size: os.cpus().length - 1
});

module.exports = {
  // ...
  plugins: [
    new HappyPack({
      id: &#39;js&#39;,
      // 设置共享进程池
      threadPool: happyThreadPool,
      loaders: [&#39;babel-loader&#39;, &#39;eslint-loader&#39;]
    }),
    new HappyPack({
      id: &#39;styles&#39;,
      threadPool: happyThreadPool,
      loaders: [&#39;style-loader&#39;, &#39;css-loader&#39;, &#39;less-loader&#39;]
    })
  ]
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>HappyPack.ThreadPool</code> 接口后，HappyPack 会预先创建好一组工作进程，所有插件实例的资源转译任务会通过内置的 <code>HappyThread</code> 对象转发到空闲进程做处理，避免频繁创建、销毁进程。</p><p>最后，我们再来看看 HappyPack 的执行流程：</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b8c529796f1480f8454cc3ac5f6b2a9~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>核心步骤：</p><ul><li><code>happlypack/loader</code> 接受到转译请求后，从 Webpack 配置中读取出相应 HappyPack 插件实例；</li><li>调用插件实例的 <code>compile</code> 方法，创建 <code>HappyThread</code> 实例（或从 <code>HappyThreadPool</code> 取出空闲实例）；</li><li><code>HappyThread</code> 内部调用 <code>child_process.fork</code> 创建子进程，并执行<code>HappyWorkerChannel</code> 文件；</li><li><code>HappyWorkerChannel</code> 创建 <code>HappyWorker</code> ，开始执行 Loader 转译逻辑；</li></ul><p>中间流程辗转了几层，最终由 <code>HappyWorker</code> 类重新实现了一套与 Webpack Loader 相似的转译逻辑，代码复杂度较高，大家稍作了解即可。</p><p>HappyPack 虽然确实能有效提升 Webpack 的打包构建速度，但它有一些明显的缺点：</p><ul><li>作者已经明确表示不会继续维护，扩展性与稳定性缺乏保障，随着 Webpack 本身的发展迭代，可以预见总有一天 HappyPack 无法完全兼容 Webpack；</li><li>HappyPack 底层以自己的方式重新实现了加载器逻辑，源码与使用方法都不如 Thread-loader 清爽简单，而且会导致一些意想不到的兼容性问题，如 <code>awesome-typescript-loader</code>；</li><li>HappyPack 主要作用于文件加载阶段，并不会影响后续的产物生成、合并、优化等功能，性能收益有限。</li></ul><h2 id="使用-thread-loader" tabindex="-1"><a class="header-anchor" href="#使用-thread-loader" aria-hidden="true">#</a> 使用 Thread-loader</h2>`,27),P={href:"https://webpack.js.org/loaders/thread-loader/",target:"_blank",rel:"noopener noreferrer"},f=s(`<ol><li>Thread-loader 由 Webpack 官方提供，目前还处于持续迭代维护状态，理论上更可靠；</li><li>Thread-loader 只提供了一个 Loader 组件，用法简单很多；</li><li>HappyPack 启动后会创建一套 Mock 上下文环境 —— 包含 <code>emitFile</code> 等接口，并传递给 Loader，因此对大多数 Loader 来说，运行在 HappyPack 与运行在 Webpack 原生环境相比没有太大差异；但 Thread-loader 并不具备这一特性，所以要求 Loader 内不能调用特定上下文接口，兼容性较差。</li></ol><p>说一千道一万，先来看看基本用法：</p><ol><li>安装依赖：</li></ol><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>yarn add -D thread-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>将 Thread-loader 放在 <code>use</code> 数组首位，确保最先运行，如：</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>module.exports = {
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: [&quot;thread-loader&quot;, &quot;babel-loader&quot;, &quot;eslint-loader&quot;],
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动后，Thread-loader 会在加载文件时创建新的进程，在子进程中使用 <code>loader-runner</code> 库运行 <code>thread-loader</code> 之后的 Loader 组件，执行完毕后再将结果回传到 Webpack 主进程，从而实现性能更佳的文件加载转译效果。</p><p>以 Three.js 为例，使用 Thread-loader 前，构建耗时大约为 11000ms 到 18000ms 之间，开启后耗时降低到 8000ms 左右，提升约37%。</p><p>此外，Thread-loader 还提供了一系列用于控制并发逻辑的配置项，包括：</p><ul><li><code>workers</code>：子进程总数，默认值为 <code>require(&#39;os&#39;).cpus() - 1</code>；</li><li><code>workerParallelJobs</code>：单个进程中并发执行的任务数；</li><li><code>poolTimeout</code>：子进程如果一直保持空闲状态，超过这个时间后会被关闭；</li><li><code>poolRespawn</code>：是否允许在子进程关闭后重新创建新的子进程，一般设置为 <code>false</code> 即可；</li><li><code>workerNodeArgs</code>：用于设置启动子进程时，额外附加的参数。</li></ul><p>使用方法跟其它 Loader 一样，都是通过 <code>use.options</code> 属性传递，如：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>module.exports = {
  module: {
    rules: [
      {
        test: /\\.js$/,
        use: [
          {
            loader: &quot;thread-loader&quot;,
            options: {
              workers: 2,
              workerParallelJobs: 50,
              // ...
            },
          },
          &quot;babel-loader&quot;,
          &quot;eslint-loader&quot;,
        ],
      },
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，Thread-loader 也同样面临着频繁的子进程创建、销毁所带来的性能问题，为此，Thread-loader 提供了 <code>warmup</code> 接口用于前置创建若干工作子进程，降低构建时延，用法：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const threadLoader = require(&quot;thread-loader&quot;);

threadLoader.warmup(
  {
    // 可传入上述 thread-loader 参数
    workers: 2,
    workerParallelJobs: 50,
  },
  [
    // 子进程中需要预加载的 node 模块
    &quot;babel-loader&quot;,
    &quot;babel-preset-es2015&quot;,
    &quot;sass-loader&quot;,
  ]
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行效果与 <code>HappyPack.ThreadPool</code> 相似，此处不再赘述。</p><p>与 HappyPack 相比，Thread-loader 有两个突出的优点，一是产自 Webpack 官方团队，后续有长期维护计划，稳定性有保障；二是用法更简单。但它不可避免的也存在一些问题：</p><ul><li>在 Thread-loader 中运行的 Loader 不能调用 <code>emitAsset</code> 等接口，这会导致 <code>style-loader</code> 这一类加载器无法正常工作，解决方案是将这类组件放置在 <code>thread-loader</code> 之前，如 <code>[&#39;style-loader&#39;, &#39;thread-loader&#39;, &#39;css-loader&#39;]</code>；</li><li>Loader 中不能获取 <code>compilation</code>、<code>compiler</code> 等实例对象，也无法获取 Webpack 配置。</li></ul><p>这会导致一些 Loader 无法与 Thread-loader 共同使用，大家需要仔细加以甄别、测试。</p><h2 id="使用-parallel-webpack" tabindex="-1"><a class="header-anchor" href="#使用-parallel-webpack" aria-hidden="true">#</a> 使用 Parallel-Webpack</h2>`,19),_={href:"https://github.com/trivago/parallel-webpack",target:"_blank",rel:"noopener noreferrer"},W=s(`<ol><li>安装依赖：</li></ol><div class="language-Bash line-numbers-mode" data-ext="Bash"><pre class="language-Bash"><code>yarn add -D parallel-webpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在 <code>webpack.config.js</code> 配置文件中导出多个 Webpack 配置对象，如：</li></ol><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>module.exports = [{
    entry: &#39;pageA.js&#39;,
    output: {
        path: &#39;./dist&#39;,
        filename: &#39;pageA.js&#39;
    }
}, {
    entry: &#39;pageB.js&#39;,
    output: {
        path: &#39;./dist&#39;,
        filename: &#39;pageB.js&#39;
    }
}];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>执行 <code>npx parallel-webpack</code> 命令。</li></ol><p>Parallel-Webpack 会为配置文件中导出的每个 Webpack 配置对象启动一个独立的构建进程，从而实现并行编译的效果。底层原理很简单，基本上就是在 Webpack 上套了个壳：</p><ul><li>根据传入的配置项数量，调用 <code>worker-farm</code> 创建复数个工作进程；</li><li>工作进程内调用 Webpack 执行构建；</li><li>工作进程执行完毕后，调用 <code>node-ipc</code> 向主进程发送结束信号。</li></ul><p>这种方式在需要同时执行多份配置的编译时特别有效，但若配置文件本身只是导出了单个配置对象则意义不大。</p><p>为了更好地支持多种配置的编译，Parallel-Webpack 还提供了 <code>createVariants</code> 函数，用于根据给定变量组合，生成多份 Webpack 配置对象，如：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const createVariants = require(&#39;parallel-webpack&#39;).createVariants
const webpack = require(&#39;webpack&#39;)

const baseOptions = {
  entry: &#39;./index.js&#39;
}

// 配置变量组合
// 属性名为 webpack 配置属性；属性值为可选的变量
// 下述变量组合将最终产生 2*2*4 = 16 种形态的配置对象
const variants = {
  minified: [true, false],
  debug: [true, false],
  target: [&#39;commonjs2&#39;, &#39;var&#39;, &#39;umd&#39;, &#39;amd&#39;]
}

function createConfig (options) {
  const plugins = [
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(JSON.parse(options.debug))
    })
  ]
  return {
    output: {
      path: &#39;./dist/&#39;,
      filename: &#39;MyLib.&#39; +
                options.target +
                (options.minified ? &#39;.min&#39; : &#39;&#39;) +
                (options.debug ? &#39;.debug&#39; : &#39;&#39;) +
                &#39;.js&#39;
    },
    plugins: plugins
  }
}

module.exports = createVariants(baseOptions, variants, createConfig)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述示例使用 <code>createVariants</code> 函数，根据 <code>variants</code> 变量搭配出 16 种不同的 <code>minified</code>、<code>debug</code>、<code>target</code> 组合，最终生成如下产物：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Building <span class="token number">16</span> targets <span class="token keyword">in</span> parallel
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.umd.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.umd.min.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.umd.debug.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.umd.min.debug.js

<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.amd.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.amd.min.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.amd.debug.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.amd.min.debug.js

<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.commonjs2.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.commonjs2.min.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.commonjs2.debug.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.commonjs2.min.debug.js

<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.var.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.var.min.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.var.debug.js
<span class="token punctuation">[</span>WEBPACK<span class="token punctuation">]</span> Started building MyLib.var.min.debug.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然，parallel-webpack 相对于 Thread-loader、HappyPack 有更高的并行度，但进程实例之间并没有做任何形式的通讯，这可能导致相同的工作在不同进程 —— 或者说不同 CPU 核上被重复执行。</p><p>例如需要对同一份代码同时打包出压缩和非压缩版本时，在 parallel-webpack 方案下，前置的资源加载、依赖解析、AST 分析等操作会被重复执行，仅仅最终阶段生成代码时有所差异。</p><p>这种技术实现，对单 entry 的项目没有任何收益，只会徒增进程创建成本；但特别适合 MPA 等多 entry 场景，或者需要同时编译出 esm、umd、amd 等多种产物形态的类库场景。</p><h2 id="并行压缩" tabindex="-1"><a class="header-anchor" href="#并行压缩" aria-hidden="true">#</a> 并行压缩</h2>`,16),j={href:"https://www.npmjs.com/package/uglifyjs-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},w={href:"https://webpack.js.org/plugins/terser-webpack-plugin/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://blog.logrocket.com/terser-vs-uglify-vs-babel-minify-comparing-javascript-minifiers/",target:"_blank",rel:"noopener noreferrer"},H=s(`<p>以 Terser 为例，TerserWebpackPlugin 插件默认已开启并行压缩，开发者也可以通过 <code>parallel</code> 参数（默认值为 <code>require(&#39;os&#39;).cpus() - 1</code>）设置具体的并发进程数量，如：</p><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>const TerserPlugin = require(&quot;terser-webpack-plugin&quot;);

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            parallel: 2 // number | boolean
        })],
    },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述配置即可设定最大并行进程数为 2。此外，Webpack4 所使用的 <code>uglifyjs-webpack-plugin</code> 也提供了类似的功能，用法与 Terser 相同，此处不再赘述。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>受限于 JavaScript 的单线程架构，Webpack 构建时并不能充分使用现代计算机的多核 CPU 能力，为此社区提供了若干基于多进程实现的并行构建组件，包括文中介绍的 HappyPack、Thread-loader、Parallel-Webpack、Terser。</p><ul><li>对于 Webpack4 之前的项目，可以使用 HappyPack 实现并行文件加载；</li><li>Webpack4 之后则建议使用 Thread-loader；</li><li>多实例并行构建场景建议使用 Parallel-Webpack 实现并行；</li><li>生产环境下还可配合 <code>terser-webpack-plugin</code> 的并行压缩功能，提升整体效率。</li></ul><p>理论上，并行确实能够提升系统运行效率，但 Node 单线程架构下，所谓的并行计算都只能依托与派生子进程执行，而创建进程这个动作本身就有不小的消耗 —— 大约 600ms，对于小型项目，构建成本可能可能很低，引入多进程技术反而导致整体成本增加，因此建议大家按实际需求斟酌使用上述多进程方案。</p><h2 id="思考题" tabindex="-1"><a class="header-anchor" href="#思考题" aria-hidden="true">#</a> 思考题</h2>`,8),T={href:"https://nodejs.org/api/worker_threads.html",target:"_blank",rel:"noopener noreferrer"};function q(x,L){const a=l("ExternalLinkIcon");return r(),c("div",null,[p,n("ul",null,[n("li",null,[n("a",u,[e("HappyPack"),i(a)]),e("：多进程方式运行资源加载(Loader)逻辑；")]),n("li",null,[n("a",v,[e("Thread-loader"),i(a)]),e("：Webpack 官方出品，同样以多进程方式运行资源加载逻辑；")]),n("li",null,[n("a",t,[e("Parallel-Webpack"),i(a)]),e("：多进程方式运行多个 Webpack 构建实例；")]),n("li",null,[n("a",b,[e("TerserWebpackPlugin"),i(a)]),e("：支持多进程方式执行代码压缩、uglify 功能。")])]),m,k,n("p",null,[n("a",h,[e("HappyPack"),i(a)]),e(" 能够将耗时的"),g,e("（Loader）操作拆散到多个子进程中并发执行，子进程执行完毕后再将结果合并回传到 Webpack 进程，从而提升构建性能。不过，HappyPack 的用法稍微有点难以理解，需要同时：")]),y,n("p",null,[n("a",P,[e("Thread-loader"),i(a)]),e(" 与 HappyPack 功能类似，都是以多进程方式加载文件的 Webpack 组件，两者主要区别：")]),f,n("p",null,[e("Thread-loader、HappyPack 这类组件所提供的并行能力都仅作用于文件加载过程，对后续 AST 解析、依赖收集、打包、优化代码等过程均没有影响，理论收益还是比较有限的。对此，社区还提供了另一种并行度更高，以多个独立进程运行 Webpack 实例的方案 —— "),n("a",_,[e("Parallel-Webpack"),i(a)]),e("，基本用法：")]),W,n("p",null,[e("Webpack4 默认使用 "),n("a",j,[e("Uglify-js"),i(a)]),e(" 实现代码压缩，Webpack5 之后则升级为 "),n("a",w,[e("Terser"),i(a)]),e(" —— 一种"),n("a",S,[e("性能"),i(a)]),e("与兼容性更好的 JavaScript 代码压缩混淆工具，两种组件都原生实现了多进程并行压缩能力。")]),H,n("p",null,[e("有没有可能使用 Node "),n("a",T,[e("Worker"),i(a)]),e(" 实现多线程形式的 Webpack 并行构建？社区是否已经有相关组件？与多进程相比，可能存在怎么样的优缺点？")])])}const B=d(o,[["render",q],["__file","di14zhang—Webpackduyounaxieshixianbingxinggoujiandefangfa.html.vue"]]);export{B as default};
