import{_ as s}from"./chunks/shouye.38572dcd.js";import{_ as n,o as a,c as l,Q as p}from"./chunks/framework.3ce7f228.js";const h=JSON.parse('{"title":"使用案例","description":"","frontmatter":{},"headers":[],"relativePath":"docs/api/demo.md","filePath":"docs/api/demo.md"}'),e={name:"docs/api/demo.md"},o=p('<h1 id="使用案例" tabindex="-1">使用案例 <a class="header-anchor" href="#使用案例" aria-label="Permalink to &quot;使用案例&quot;">​</a></h1><p>表格查询是系统中常见的开发场景，接下来我们通过示例演示如何将高频代码转换成低代码，并进行联动。</p><img src="'+s+`"><h2 id="表单" tabindex="-1">表单 <a class="header-anchor" href="#表单" aria-label="Permalink to &quot;表单&quot;">​</a></h2><p>首先准备一个表单组件，然后对外暴漏一个获取表单参数的方法</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">const getForm = () =&gt; {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">defineExpose({ getForm })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">const getForm = () =&gt; {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">defineExpose({ getForm })</span></span></code></pre></div><h2 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h2><p>然后准备一个表格组件，同理准备一个获取数据的函数,通过外部注册requestData函数，来获取数据</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">const props = defineProps({config:object})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const requestData = (form, current, size) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  let res = props.config.requestData(form, option.value.current, option.value.size)</span></span>
<span class="line"><span style="color:#E1E4E8;">  option.value.tableData = res.tableData</span></span>
<span class="line"><span style="color:#E1E4E8;">  option.value.total = res.total</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">defineExpose({ requestData })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">const props = defineProps({config:object})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const requestData = (form, current, size) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  let res = props.config.requestData(form, option.value.current, option.value.size)</span></span>
<span class="line"><span style="color:#24292E;">  option.value.tableData = res.tableData</span></span>
<span class="line"><span style="color:#24292E;">  option.value.total = res.total</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">defineExpose({ requestData })</span></span></code></pre></div><p>根据类型向table组件注册requestData函数，此处根据用户的实际需求，调用后端接口，获取数据</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">const config = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: &#39;&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: &#39;table&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">     data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      requestData: (form, current, size) =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">        return {</span></span>
<span class="line"><span style="color:#E1E4E8;">          tableData: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              date: &#39;2016-05-03&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: &#39;Tom&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">              address: &#39;No. 189, Grove St, Los Angeles&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              date: &#39;2016-05-02&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: &#39;Tom&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">              address: &#39;No. 189, Grove St, Los Angeles&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              date: &#39;2016-05-04&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: &#39;Tom&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">              address: &#39;No. 189, Grove St, Los Angeles&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">              date: &#39;2016-05-01&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">              name: &#39;Tom&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">              address: &#39;No. 189, Grove St, Los Angeles&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          total: 100</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">Form</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">config</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">config</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">Form</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">const config = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: &#39;&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    type: &#39;table&#39;,</span></span>
<span class="line"><span style="color:#24292E;">     data: {</span></span>
<span class="line"><span style="color:#24292E;">      requestData: (form, current, size) =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">        return {</span></span>
<span class="line"><span style="color:#24292E;">          tableData: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              date: &#39;2016-05-03&#39;,</span></span>
<span class="line"><span style="color:#24292E;">              name: &#39;Tom&#39;,</span></span>
<span class="line"><span style="color:#24292E;">              address: &#39;No. 189, Grove St, Los Angeles&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              date: &#39;2016-05-02&#39;,</span></span>
<span class="line"><span style="color:#24292E;">              name: &#39;Tom&#39;,</span></span>
<span class="line"><span style="color:#24292E;">              address: &#39;No. 189, Grove St, Los Angeles&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              date: &#39;2016-05-04&#39;,</span></span>
<span class="line"><span style="color:#24292E;">              name: &#39;Tom&#39;,</span></span>
<span class="line"><span style="color:#24292E;">              address: &#39;No. 189, Grove St, Los Angeles&#39;</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">              date: &#39;2016-05-01&#39;,</span></span>
<span class="line"><span style="color:#24292E;">              name: &#39;Tom&#39;,</span></span>
<span class="line"><span style="color:#24292E;">              address: &#39;No. 189, Grove St, Los Angeles&#39;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          ],</span></span>
<span class="line"><span style="color:#24292E;">          total: 100</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">Form</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">config</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">config</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">Form</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="按钮" tabindex="-1">按钮 <a class="header-anchor" href="#按钮" aria-label="Permalink to &quot;按钮&quot;">​</a></h2><p>此时，开发一个按钮组件，将业务串联起来</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">const props = defineProps({getRefByType:Function})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const search = () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 获取表单数据 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  let formEl = props.getRefByType(&#39;form&#39;)[0]?.el</span></span>
<span class="line"><span style="color:#E1E4E8;">  let form = formEl.getForm()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">&lt;!-- 调用表格的requestData函数 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  let tableEl = props.getRefByType(&#39;table&#39;)[0]?.el</span></span>
<span class="line"><span style="color:#E1E4E8;">  tableEl.requestData(form, 1, 10)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">const props = defineProps({getRefByType:Function})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const search = () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 获取表单数据 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  let formEl = props.getRefByType(&#39;form&#39;)[0]?.el</span></span>
<span class="line"><span style="color:#24292E;">  let form = formEl.getForm()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6A737D;">&lt;!-- 调用表格的requestData函数 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  let tableEl = props.getRefByType(&#39;table&#39;)[0]?.el</span></span>
<span class="line"><span style="color:#24292E;">  tableEl.requestData(form, 1, 10)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="结束" tabindex="-1">结束 <a class="header-anchor" href="#结束" aria-label="Permalink to &quot;结束&quot;">​</a></h2><p>至此，表格，表单，按钮即可通过拖动组件的方式来快速实现相关业务，普通开发人员只需要实现requestData中获取数据相关的代码即可，当然，用户也可以通过面板配置接口地址的方式来进一步减少代码开发。</p>`,16),t=[o];function c(r,E,i,y,d,u){return a(),l("div",null,t)}const f=n(e,[["render",c]]);export{h as __pageData,f as default};
