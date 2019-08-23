(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{314:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("安装过程基于你想要使用哪种探针。如果你对此不了解，请首先阅读"),r("router-link",{attrs:{to:"./../concepts-and-designs/"}},[t._v("概念与设计")])],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("ul",[r("li",[t._v("后端和UI、Java agent都是Apache官方发行，你可以在"),r("a",{attrs:{href:"http://skywalking.apache.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache SkyWalking 下载页"),r("OutboundLink")],1),t._v("找到它们。")])]),t._v(" "),t._m(3),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./service-agent/java-agent/"}},[t._v("Java agent")]),t._v("。介绍了如何将java agent安装到你的服务中，不需要修改任何代码。")],1)]),t._v(" "),r("p",[t._v("下面的agent和SDK都与SkyWalking的数据格式、传输协议兼容，但是是由第三方维护。你可以到它们的项目仓库中找到对应的发行版，以及如何使用它们的说明。")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/SkyAPM/SkyAPM-dotnet",target:"_blank",rel:"noopener noreferrer"}},[t._v("SkyAPM .NET Core agent"),r("OutboundLink")],1),t._v("。可以通过 .NET Core agent的项目文档查看到更详细的信息。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/SkyAPM/SkyAPM-nodejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("SkyAPM Node.js agent"),r("OutboundLink")],1),t._v("。可以通过Node.js服务端agent的项目文档查看到更详细的信息。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/SkyAPM/SkyAPM-php-sdk",target:"_blank",rel:"noopener noreferrer"}},[t._v("SkyAPM PHP SDK"),r("OutboundLink")],1),t._v("。可以通过PHP agent项目文档查看到更详细的信息。")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/SkyAPM/go2sky",target:"_blank",rel:"noopener noreferrer"}},[t._v("SkyAPM GO2Sky"),r("OutboundLink")],1),t._v(". 参考 GO2Sky 项目文档获得更多信息.")])]),t._v(" "),t._m(4),t._v(" "),r("ul",[r("li",[t._v("Istio\n"),r("ul",[r("li",[r("router-link",{attrs:{to:"./istio/"}},[t._v("SkyWalking on Istio")]),t._v("。介绍了如何使用Istio Mixer，并通过适配与SkyWalking一起工作。")],1)])]),t._v(" "),r("li",[t._v("Envoy\n"),r("ul",[r("li",[t._v("使用 "),r("a",{attrs:{href:"https://www.envoyproxy.io/docs/envoy/latest/api-v2/service/accesslog/v2/als.proto",target:"_blank",rel:"noopener noreferrer"}},[t._v("ALS(访问日志服务)"),r("OutboundLink")],1),t._v(" 来观测服务网格, 无需使用 Mixer. 按照 "),r("router-link",{attrs:{to:"./envoy/als_setting.html"}},[t._v("文档")]),t._v(" 来开启此功能.")],1)])])]),t._v(" "),t._m(5),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.envoyproxy.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Envoy Proxy"),r("OutboundLink")],1),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./envoy/metrics_service_setting.html"}},[t._v("从 Engoy 向 SkyWalking 发送指标数据")]),t._v("。介绍了如何使用"),r("a",{attrs:{href:"https://www.envoyproxy.io/docs/envoy/latest/api-v2/config/metrics/v2/metrics_service.proto.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Metrics 服务"),r("OutboundLink")],1),t._v(" 将指标项从Envoy发到SkyWalking。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./envoy/metrics_service_setting.html"}},[t._v("从 Envoy 发送指标到 Skywalking")]),t._v(". 介绍了如何使用 "),r("a",{attrs:{href:"https://www.envoyproxy.io/docs/envoy/latest/api-v2/config/metrics/v2/metrics_service.proto.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Metrics service"),r("OutboundLink")],1),t._v(" 向 SkyWalking 发送指标.")],1)])])]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("从 "),r("router-link",{attrs:{to:"./backend/backend-ui-setup.html"}},[t._v("后端和 UI 设置文档")]),t._v("中可以了解到在不同的场景下如何对后端服务进行配置，以及如何开启高级特性。")],1),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("后端、UI和Java agent的更新历史可以在"),r("router-link",{attrs:{to:"./../../../CHANGES.html"}},[t._v("这里")]),t._v("找到。")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("重要：请确保被监控的服务器上的系统时间和OAP服务器上的系统时间是相同的。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"下载官方发行版"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载官方发行版","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载官方发行版")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"各语言agent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#各语言agent","aria-hidden":"true"}},[this._v("#")]),this._v(" 各语言agent")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"service-mesh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service-mesh","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Mesh")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"proxy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proxy","aria-hidden":"true"}},[this._v("#")]),this._v(" Proxy")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装后端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装后端","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装后端")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"更新历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更新历史","aria-hidden":"true"}},[this._v("#")]),this._v(" 更新历史")])}],!1,null,null,null);e.default=n.exports}}]);