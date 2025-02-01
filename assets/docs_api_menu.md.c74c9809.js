import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.3ce7f228.js";const u=JSON.parse('{"title":"配置菜单","description":"","frontmatter":{},"headers":[],"relativePath":"docs/api/menu.md","filePath":"docs/api/menu.md"}'),p={name:"docs/api/menu.md"},o=l(`<h1 id="配置菜单" tabindex="-1">配置菜单 <a class="header-anchor" href="#配置菜单" aria-label="Permalink to &quot;配置菜单&quot;">​</a></h1><p>  根据需求可以自由扩展菜单，也可以根据show属性隐藏不需要的菜单。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;home&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">FormDesign</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:components</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;components&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">FormDesign</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { FormDesign } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../assets/bearForm/bearForm.es.js&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../assets/bearForm/style.css&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> InputPanel </span><span style="color:#9ECBFF;">&#39;./InputPanel&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">import Input </span><span style="color:#9ECBFF;">&#39;./Input&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const components = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: &#39;other&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    label: &#39;扩展组件&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    show: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: &#39;输入框&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: &#39;extendInput&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        componentType: 2,</span></span>
<span class="line"><span style="color:#E1E4E8;">        component: Input,</span></span>
<span class="line"><span style="color:#E1E4E8;">        panel: InputPanel,</span></span>
<span class="line"><span style="color:#E1E4E8;">        valueType: &#39;string&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: true</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: &#39;layout&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    show: true,</span></span>
<span class="line"><span style="color:#E1E4E8;">    children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: &#39;card&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: false</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;home&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">FormDesign</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:components</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;components&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">FormDesign</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { FormDesign } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../assets/bearForm/bearForm.es.js&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../assets/bearForm/style.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> InputPanel </span><span style="color:#032F62;">&#39;./InputPanel&#39;</span></span>
<span class="line"><span style="color:#24292E;">import Input </span><span style="color:#032F62;">&#39;./Input&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const components = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: &#39;other&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    label: &#39;扩展组件&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    show: true,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        label: &#39;输入框&#39;,</span></span>
<span class="line"><span style="color:#24292E;">        type: &#39;extendInput&#39;,</span></span>
<span class="line"><span style="color:#24292E;">        componentType: 2,</span></span>
<span class="line"><span style="color:#24292E;">        component: Input,</span></span>
<span class="line"><span style="color:#24292E;">        panel: InputPanel,</span></span>
<span class="line"><span style="color:#24292E;">        valueType: &#39;string&#39;,</span></span>
<span class="line"><span style="color:#24292E;">        show: true</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type: &#39;layout&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    show: true,</span></span>
<span class="line"><span style="color:#24292E;">    children: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        type: &#39;card&#39;,</span></span>
<span class="line"><span style="color:#24292E;">        show: false</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;style scoped&gt;&lt;/style&gt;</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>type</td><td>属性</td><td>string</td></tr><tr><td>label</td><td>展示名称</td><td>string</td></tr><tr><td>show</td><td>是否在左侧菜单显示</td><td>boolean</td></tr><tr><td>componentType</td><td>组件类型，0:容器，1:表单组件， 2: 其他组件</td><td>number</td></tr><tr><td>valueType</td><td>组件数值类型</td><td>boolean｜number｜string｜object｜array</td></tr><tr><td>component</td><td>组件</td><td>—</td></tr><tr><td>panel</td><td>组件配置面板</td><td>—</td></tr></tbody></table>`,5),t=[o];function e(c,r,E,y,i,d){return n(),a("div",null,t)}const h=s(p,[["render",e]]);export{u as __pageData,h as default};
