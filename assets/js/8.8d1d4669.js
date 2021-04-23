(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),e("p",[t._v("Plugins are functions that are used to configure the app instance and are used via the "),e("code",[t._v("app.configure(app => {})")]),t._v(" method.")]),t._v(" "),e("h2",{attrs:{id:"strictrestquery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strictrestquery"}},[t._v("#")]),t._v(" strictRestQuery")]),t._v(" "),e("p",[t._v("Configure the Express query parser to parse string numbers/booleans to proper types as well as handle "),e("code",[t._v("null")]),t._v(". When using sockets, the query is parsed via "),e("code",[t._v("JSON.parse")]),t._v(" which means that the query maintains its types for things like numbers, booleans, null, etc. But when using REST, Express.js uses "),e("code",[t._v("qs")]),t._v(" to parse query strings and this means that numbers/booleans must be converted to strings and null/empty string are treated the same. This plugin manually sets the underlying "),e("code",[t._v("qs")]),t._v(" instance to parse query strings more like "),e("code",[t._v("JSON.parse")]),t._v(" so that queries are parsed more similarly coming from internal, sockets, or rest.")]),t._v(" "),e("p",[t._v("By default, Express.js only allows you to minimally configure how queries are parsed via the")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Setting { extended: true } signals to express to use the `qs`")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// library under the hood, but it does not allow you to pass")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options to the `qs.parse()` function. This means that all numbers")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and booleans will be treated as strings and `null` and empty")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string will both be treated as an empty string")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlencoded")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" extended"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This will result in a query like")]),t._v("\nquery "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boolean'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emptyString'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Use the "),e("code",[t._v("strictRestQuery")]),t._v(" plugin to manually set the query parser to be more consistent across transports.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" strictRestQuery "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'feathers-fletching'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("configure")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("strictRestQuery")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This will result in a query like")]),t._v("\nquery "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'boolean'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'null'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'emptyString'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Note this plugin MUST be configured early in the Express chain and before any other middleware. See "),e("a",{attrs:{href:"https://github.com/expressjs/express/issues/3454",target:"_blank",rel:"noopener noreferrer"}},[t._v("this issue"),e("OutboundLink")],1),t._v(" for more details")])]),t._v(" "),e("blockquote",[e("p",[t._v("See the "),e("a",{attrs:{href:"https://docs.feathersjs.com/api/client/rest.html#extending-rest-clients",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rest Client Docs"),e("OutboundLink")],1),t._v(" for information about how to extend a Feathers Rest Client to handle "),e("code",[t._v("null")]),t._v(". See also this "),e("a",{attrs:{href:"https://mattchaffe.uk/posts/feathersjs-rest-queries-with-null",target:"_blank",rel:"noopener noreferrer"}},[t._v("great article"),e("OutboundLink")],1),t._v(" for more information about how this works.")])]),t._v(" "),e("p",[e("strong",[t._v("Arguments")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Argument")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("options")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Object")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"https://github.com/daddywarbucks/feathers-fletching/blob/master/src/plugins/strictRestQuery.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("View Code"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("false")]),t._v(" "),e("td",[e("code",[t._v("qs")]),t._v(" options, See "),e("a",{attrs:{href:"https://github.com/ljharb/qs#parsing-objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("qs options"),e("OutboundLink")],1)])])])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v(" defaultOptions "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  arrayLimit"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  parameterLimit"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  strictNullHandling"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  decoder "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See source code")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);