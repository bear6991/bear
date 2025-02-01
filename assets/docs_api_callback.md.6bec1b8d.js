import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.3ce7f228.js";const h=JSON.parse('{"title":"配置回调函数和参数","description":"","frontmatter":{},"headers":[],"relativePath":"docs/api/callback.md","filePath":"docs/api/callback.md"}'),p={name:"docs/api/callback.md"},o=l(`<h1 id="配置回调函数和参数" tabindex="-1">配置回调函数和参数 <a class="header-anchor" href="#配置回调函数和参数" aria-label="Permalink to &quot;配置回调函数和参数&quot;">​</a></h1><p>用户可以向指定组件中传入外部参数，同时也可以配置指定组件的回调函数。</p><h2 id="通过组件id注册" tabindex="-1">通过组件id注册 <a class="header-anchor" href="#通过组件id注册" aria-label="Permalink to &quot;通过组件id注册&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;home&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">Form</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:config</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;config&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">Form</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { Form } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../assets/bearForm/bearForm.es.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../assets/bearForm/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#9ECBFF;">&#39;select16951402268975294&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;id&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      num: </span><span style="color:#79B8FF;">666</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">callBack</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;home&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">Form</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:config</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;config&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">Form</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { Form } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../assets/bearForm/bearForm.es.js&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../assets/bearForm/style.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#032F62;">&#39;select16951402268975294&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    data: {</span></span>
<span class="line"><span style="color:#24292E;">      num: </span><span style="color:#005CC5;">666</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">callBack</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="通过组件类型注册" tabindex="-1">通过组件类型注册 <a class="header-anchor" href="#通过组件类型注册" aria-label="Permalink to &quot;通过组件类型注册&quot;">​</a></h2><p>像table，form这种组件，通常一个模版中只有一个，此时为了避免查找组件id，可以通过类型的方式注册外部参数和回调函数</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">const config = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: &#39;&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: &#39;table&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      num: 666</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    callBack: (data) =&gt; {}</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">const config = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    type: &#39;table&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    data: {</span></span>
<span class="line"><span style="color:#24292E;">      num: 666</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    callBack: (data) =&gt; {}</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>id</td><td>组件id</td><td>string</td></tr><tr><td>type</td><td>注册类型</td><td>id ｜ type</td></tr><tr><td>data</td><td>向指定组件传入的数据</td><td>any</td></tr><tr><td>callBack</td><td>回调函数，响应组件内部事件</td><td>function</td></tr></tbody></table>`,9),t=[o];function e(c,r,E,y,i,d){return a(),n("div",null,t)}const g=s(p,[["render",e]]);export{h as __pageData,g as default};
