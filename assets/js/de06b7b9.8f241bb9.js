"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[3640],{603905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var l=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},i=Object.keys(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)n=i[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),c=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return l.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?l.createElement(y,a(a({ref:e},p),{},{components:n})):l.createElement(y,a({ref:e},p))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},789370:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var l=n(487462),r=n(263366),i=(n(667294),n(603905)),a=["components"],s={},o="Create a SensorSpec.",c={type:"api",id:"create-a-sensor-spec",unversionedId:"create-a-sensor-spec",title:"Create a SensorSpec.",description:"",slug:"/create-a-sensor-spec",frontMatter:{},api:{operationId:"SensorSpec.create",description:"Create a SensorSpec.",tags:["SensorSpec"],parameters:[],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",description:"The SensorSpec determines the parameters of generated SensorEvents.",properties:{id:{type:"string",description:"The name of the sensor.",example:"lamp.accelerometer"},settings_schema:{allOf:[{type:"object",properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},readOnly:{type:"boolean",default:!1},examples:{type:"array",items:{}},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{type:"integer",minimum:0},minLength:{type:"integer",minimum:0,default:0},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#/components/schemas/JSONSchema"},items:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}}],default:!0},maxItems:{type:"integer",minimum:0},minItems:{type:"integer",minimum:0,default:0},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#/components/schemas/JSONSchema"},maxProperties:{type:"integer",minimum:0},minProperties:{type:"integer",minimum:0,default:0},required:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]},additionalProperties:{$ref:"#/components/schemas/JSONSchema"},definitions:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}]}},propertyNames:{$ref:"#/components/schemas/JSONSchema"},enum:{type:"array",items:{},minItems:1,uniqueItems:!0},type:{anyOf:[{enum:["array","boolean","integer","null","number","object","string"]},{type:"array",items:{enum:["array","boolean","integer","null","number","object","string"]},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#/components/schemas/JSONSchema"},then:{$ref:"#/components/schemas/JSONSchema"},else:{$ref:"#/components/schemas/JSONSchema"},allOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},anyOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},oneOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},not:{$ref:"#/components/schemas/JSONSchema"}},example:{type:"object",additionalProperties:!0}},{description:"The settings definition of a SensorSpec.",example:{type:"object",properties:{frequency:{title:"Sensor Collection Frequency",type:"integer",format:"int32",minimum:0,maximum:10,description:"The sensor collection frequency of the mobile device's accelerometer/device motion sensor.",example:5}}}}]},data_schema:{allOf:[{type:"object",properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},readOnly:{type:"boolean",default:!1},examples:{type:"array",items:{}},multipleOf:{type:"number",minimum:0,exclusiveMinimum:!0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{type:"integer",minimum:0},minLength:{type:"integer",minimum:0,default:0},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#/components/schemas/JSONSchema"},items:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}}],default:!0},maxItems:{type:"integer",minimum:0},minItems:{type:"integer",minimum:0,default:0},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#/components/schemas/JSONSchema"},maxProperties:{type:"integer",minimum:0},minProperties:{type:"integer",minimum:0,default:0},required:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]},additionalProperties:{$ref:"#/components/schemas/JSONSchema"},definitions:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#/components/schemas/JSONSchema"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#/components/schemas/JSONSchema"},{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}]}},propertyNames:{$ref:"#/components/schemas/JSONSchema"},enum:{type:"array",items:{},minItems:1,uniqueItems:!0},type:{anyOf:[{enum:["array","boolean","integer","null","number","object","string"]},{type:"array",items:{enum:["array","boolean","integer","null","number","object","string"]},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#/components/schemas/JSONSchema"},then:{$ref:"#/components/schemas/JSONSchema"},else:{$ref:"#/components/schemas/JSONSchema"},allOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},anyOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},oneOf:{type:"array",minItems:1,items:{$ref:"#/components/schemas/JSONSchema"}},not:{$ref:"#/components/schemas/JSONSchema"}},example:{type:"object",additionalProperties:!0}},{description:"The data definition of a SensorSpec.",example:{type:"object",properties:{x:{title:"X Coordinate",type:"number",format:"double",description:"The x coordinate of the accelerometer reading.",example:1.123},y:{title:"Y Coordinate",type:"number",format:"double",description:"The y coordinate of the accelerometer reading.",example:1.123},z:{title:"Z Coordinate",type:"number",format:"double",description:"The z coordinate of the accelerometer reading.",example:1.123}}}}]}},required:["id"]}}}},responses:{200:{description:"Success",content:{"application/json":{schema:{type:"object",properties:{data:{type:"object"}}}}}},default:{description:"Error",content:{"application/json":{schema:{type:"object",properties:{error:{type:"string",example:"400.bad-request"}}}}}}},security:[{Authorization:[]}],"x-code-samples":[{lang:"js",label:"JavaScript",source:'import LAMP from \'lamp-core\'\nawait LAMP.connect({ serverAddress: "api.lamp.digital", accessKey: "email@address.com", secretKey: "password" })\n// function-specific sample code here\n'},{lang:"python",label:"Python",source:'import LAMP\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'},{lang:"go",label:"R Script",source:'library(LAMP)\nLAMP.connect("api.lamp.digital", "email@address.com", "password")\n# function-specific sample code here\n'}],method:"post",path:"/sensor_spec",servers:[{url:"https://{server_url}",description:"LAMP Platform API Server",variables:{server_url:{default:"api.lamp.digital",description:"A specific API server instance (HTTPS required)."}}}],securitySchemes:{Authorization:{type:"http",scheme:"basic"}},jsonRequestBodyExample:{id:"lamp.accelerometer",settings_schema:{$id:"string",$schema:"string",$ref:"string",$comment:"string",title:"string",description:"string",readOnly:!1,examples:[null],multipleOf:0,maximum:0,exclusiveMaximum:0,minimum:0,exclusiveMinimum:0,maxLength:0,minLength:0,pattern:"string",maxItems:0,minItems:0,uniqueItems:!1,maxProperties:0,minProperties:0,required:["string"],definitions:{},properties:{},patternProperties:{},dependencies:{},enum:[null],format:"string",contentMediaType:"string",contentEncoding:"string",allOf:[null],anyOf:[null],oneOf:[null]},data_schema:{$id:"string",$schema:"string",$ref:"string",$comment:"string",title:"string",description:"string",readOnly:!1,examples:[null],multipleOf:0,maximum:0,exclusiveMaximum:0,minimum:0,exclusiveMinimum:0,maxLength:0,minLength:0,pattern:"string",maxItems:0,minItems:0,uniqueItems:!1,maxProperties:0,minProperties:0,required:["string"],definitions:{},properties:{},patternProperties:{},dependencies:{},enum:[null],format:"string",contentMediaType:"string",contentEncoding:"string",allOf:[null],anyOf:[null],oneOf:[null]}},info:{title:"LAMP Platform",version:"1.0.0",description:"See docs.lamp.digital for more.",contact:{url:"https://digitalpsych.org/",email:"team@digitalpsych.org",name:"Division of Digital Psychiatry at the Beth Israel Deaconess Medical Center."}},postman:{name:"Create a SensorSpec.",description:{content:"Create a SensorSpec.",type:"text/plain"},url:{path:["sensor_spec"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'{\n    "id": "<string>",\n    "settings_schema": null\n}'},auth:{type:"basic",basic:[{type:"any",value:"<Basic Auth Username>",key:"username"},{type:"any",value:"<Basic Auth Password>",key:"password"}]}}},source:"@site/LAMP-protocol/openapi.yml",sourceDirName:".",permalink:"/api/create-a-sensor-spec",previous:{title:"View an ActivitySpec.",permalink:"/api/view-an-activity-spec"},next:{title:"List all SensorSpecs.",permalink:"/api/list-all-sensor-specs"}},p=[],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-sensorspec"},"Create a SensorSpec."),(0,i.kt)("p",null,"Create a SensorSpec."),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Request Body ",(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"The name of the sensor.")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"settings_schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"$id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"$schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uri"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"$ref"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"$comment"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"title"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"description"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"readOnly"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"examples"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"multipleOf"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"maximum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"exclusiveMaximum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minimum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"exclusiveMinimum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"maxLength"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minLength"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"pattern"),(0,i.kt)("span",{style:{opacity:"0.6"}}," regex"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"additionalItems"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"items"),(0,i.kt)("span",{style:{opacity:"0.6"}}," "))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"maxItems"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minItems"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"uniqueItems"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contains"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"maxProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"required"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"additionalProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"definitions"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"patternProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"dependencies"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"propertyNames"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"enum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," "))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"format"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contentMediaType"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contentEncoding"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"if"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"then"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"else"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"allOf"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"anyOf"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"oneOf"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"not"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"data_schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"$id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"$schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uri"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"$ref"),(0,i.kt)("span",{style:{opacity:"0.6"}}," uri-reference"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"$comment"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"title"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"description"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"readOnly"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"examples"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"multipleOf"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"maximum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"exclusiveMaximum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minimum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"exclusiveMinimum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," number"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"maxLength"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minLength"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"pattern"),(0,i.kt)("span",{style:{opacity:"0.6"}}," regex"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"additionalItems"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"items"),(0,i.kt)("span",{style:{opacity:"0.6"}}," "))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"maxItems"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minItems"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"uniqueItems"),(0,i.kt)("span",{style:{opacity:"0.6"}}," boolean"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contains"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"maxProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"minProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," integer"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"required"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"additionalProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"definitions"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"patternProperties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"dependencies"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"propertyNames"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"enum"),(0,i.kt)("span",{style:{opacity:"0.6"}}," undefined[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"type"),(0,i.kt)("span",{style:{opacity:"0.6"}}," "))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"format"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contentMediaType"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"contentEncoding"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"if"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"then"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"else"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"allOf"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"anyOf"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"oneOf"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)[]"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"not"),(0,i.kt)("span",{style:{opacity:"0.6"}},"  (circular)"))))))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Success"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"data"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"default")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Error"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"error"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))))))}m.isMDXComponent=!0}}]);