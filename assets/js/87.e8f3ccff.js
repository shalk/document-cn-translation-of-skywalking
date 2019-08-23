(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{412:function(e,t,n){"use strict";n.r(t);var a=n(0),_=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("SkyWalking backend 发行包包括下面几部分")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("在看这个之前，希望您知道，快速入门只是是运行Skywalking的Backend和UI来进行预览或演示。在这儿，性能和长期运行不是我们的目标。")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("快速入门后，您应该希望在分布式环境中部署后端和UI。\n在那之前， 你需要知道agent/probe, Backend和UI之间是怎么交互的。")]),e._v(" "),n("img",{attrs:{src:"http://skywalking.apache.org/doc-graph/communication-net.png"}}),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("现在，让我们继续来看进行Backend和UI的设置文档。")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"./backend-setup.html"}},[e._v("Backend setup document")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"./ui-setup.html"}},[e._v("UI setup document")])],1)]),e._v(" "),n("p",[e._v("此外，为了方便起见，我们提供了"),n("a",{attrs:{href:"https://github.com/apache/skywalking-kubernetes#deploy-skywalking-backend-to-kubernetes-cluster",target:"_blank",rel:"noopener noreferrer"}},[e._v("k8s settings"),n("OutboundLink")],1),e._v("。")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"backend和ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backend和ui","aria-hidden":"true"}},[this._v("#")]),this._v(" Backend和UI")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[n("strong",[e._v("bin/cmd scripts")]),e._v("，在"),n("code",[e._v("/bin")]),e._v("文件夹下。 包含linux和Windows环境下启动脚本， 来启动Backend的服务器和UI。")]),e._v(" "),n("li",[n("strong",[e._v("Backend config")]),e._v("， 在 "),n("code",[e._v("/config")]),e._v(" 文件夹下。 包含Backend的设置文件,"),n("code",[e._v("application.yml")]),e._v("、\n"),n("code",[e._v("log4j.xml")]),e._v("和"),n("code",[e._v("alarm-settings.yml")]),e._v("。大多数开放的设置都在这些文件里面。")]),e._v(" "),n("li",[n("strong",[e._v("Libraries of backend")]),e._v("， 在 "),n("code",[e._v("/oap-libs")]),e._v("文件夹下。所有Backend的jar包文件都在里面。")]),e._v(" "),n("li",[n("strong",[e._v("Webapp env")]),e._v("， 在 "),n("code",[e._v("webapp")]),e._v(" 文件夹下。 UI 前端的jar包文件和它的"),n("code",[e._v("webapp.yml")]),e._v(" 设置文件在这。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"快速入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速入门","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速入门")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("要求： "),t("strong",[this._v("JDK8")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("想部署到product或test环境？查看"),t("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2Backend%E5%92%8CUI"}},[this._v("部署Backend和UI")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("你可以通过"),t("code",[this._v("bin/startup.sh")]),this._v("(或cmd) 在默认设置下启动Backend和UI,，同时希望你能了解：")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("默认使用H2存储，这样就不需要部署别的了。")]),e._v(" "),n("li",[e._v("Backend的gRPC相关的API可访问"),n("code",[e._v("0.0.0.0/11800")]),e._v("，rest相关的API可访问"),n("code",[e._v("0.0.0.0/12800")]),e._v("。\n在Java，.NetCore，Node.js， Istio agents/probe中，设置gRPC服务地址为"),n("code",[e._v("ip/host:11800")]),e._v("。\n(ip/host填写Backend暴露的)")]),e._v(" "),n("li",[e._v("UI 监听"),n("code",[e._v("8080")]),e._v(" 端口,同时请求"),n("code",[e._v("127.0.0.1/12800")]),e._v("来做GraphQL查询。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"部署backend和ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署backend和ui","aria-hidden":"true"}},[this._v("#")]),this._v(" 部署Backend和UI")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("所有原生的agents和probes，不管基于何种语言或网格探针，都是使用gRPC服务("),n("code",[e._v("core/default/gRPC*")]),e._v(" in "),n("code",[e._v("application.yml")]),e._v(") 上报数据给Backend。另外，json格式支持Jetty服务。")]),e._v(" "),n("li",[e._v("UI 使用GraphQL(HTTP)查询来访问Backend，在Jetty服务中也是("),n("code",[e._v("core/default/rest*")]),e._v(" in "),n("code",[e._v("application.yml")]),e._v(")。")])])}],!1,null,null,null);t.default=_.exports}}]);