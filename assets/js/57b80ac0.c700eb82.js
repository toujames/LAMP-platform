"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[1739],{603905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},255867:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var a=n(487462),r=n(263366),i=(n(667294),n(603905)),o=["components"],p={},c="Working with the App Gateway",s={unversionedId:"develop/app_gateway",id:"develop/app_gateway",title:"Working with the App Gateway",description:"The app gateway requires an API Key to make requests and supports apns (Apple device push notification service), gcm (Google device push notification service), mailto (standard mail address via AWS SES), sms (standard phone number SMS via AWS SNS), and slack (a Slack channel API hook) recipients.",source:"@site/docs/08-develop/07-app_gateway.md",sourceDirName:"08-develop",slug:"/develop/app_gateway",permalink:"/develop/app_gateway",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/08-develop/07-app_gateway.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1649875546,formattedLastUpdatedAt:"4/13/2022",sidebarPosition:7,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Just-In-Time Adaptive Interventions",permalink:"/develop/adaptive_interventions"},next:{title:"Introduction",permalink:"/data_science/intro"}},l=[{value:"Push Notifications",id:"push-notifications",children:[],level:2}],u={toc:l};function d(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-the-app-gateway"},"Working with the App Gateway"),(0,i.kt)("p",null,"The app gateway requires an API Key to make requests and supports ",(0,i.kt)("inlineCode",{parentName:"p"},"apns")," (Apple device push notification service), ",(0,i.kt)("inlineCode",{parentName:"p"},"gcm")," (Google device push notification service), ",(0,i.kt)("inlineCode",{parentName:"p"},"mailto")," (standard mail address via AWS SES), ",(0,i.kt)("inlineCode",{parentName:"p"},"sms")," (standard phone number SMS via AWS SNS), and ",(0,i.kt)("inlineCode",{parentName:"p"},"slack")," (a Slack channel API hook) recipients. "),(0,i.kt)("p",null,"Example API call:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "https://app-gateway.lamp.digital/push" \\\n -H \'Content-Type: application/json\' \\\n --data-binary @- <<\'EOF\'\n{\n   "api_key": "YOUR_API_TOKEN_HERE",\n   "device_token": "apns:YOUR_APNS_DEVICE_TOKEN_HERE",\n   "payload": {\n      "aps": {\n         "alert": "Hello world!",\n         "badge": 0,\n         "sound": "default",\n         "mutable-content": 1,\n         "content-available": 1\n      },\n      "notificationId": "test123",\n      "expiry": 84600000,\n      "actions": []\n   }\n}\nEOF\n')),(0,i.kt)("p",null,"The flow of data is shown below:\n",(0,i.kt)("img",{src:n(941775).Z})),(0,i.kt)("h2",{id:"push-notifications"},"Push Notifications"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Automations Worker")," component handles all push notification scheduling working in tandem with the API Server using the ",(0,i.kt)("inlineCode",{parentName:"p"},"LAMP-js")," SDK. It caches CRON expressions matching to Activity IDs and Participant IDs for delivery. The workflow is shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(263806).Z})))}d.isMDXComponent=!0},263806:function(e,t,n){t.Z=n.p+"assets/images/activity_schedules-aa8c83e11230f46bad8e8ee0f3ce7696.svg"},941775:function(e,t,n){t.Z=n.p+"assets/images/push_notifications-d682e6f910e5410f132684088ec959e0.png"}}]);