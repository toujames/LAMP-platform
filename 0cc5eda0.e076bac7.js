(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{414:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,f=s["".concat(c,".").concat(b)]||s[b]||p[b]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(414)),c={},i={unversionedId:"todo/Data Science with LAMP/Data Types/Sensor/Bluetooth ac8a783c095e4d21b368dddfc8798130",id:"todo/Data Science with LAMP/Data Types/Sensor/Bluetooth ac8a783c095e4d21b368dddfc8798130",isDocsHomePage:!1,title:"Bluetooth ac8a783c095e4d21b368dddfc8798130",description:"Bluetooth",source:"@site/docs/todo/Data Science with LAMP/Data Types/Sensor/Bluetooth ac8a783c095e4d21b368dddfc8798130.md",slug:"/todo/Data Science with LAMP/Data Types/Sensor/Bluetooth ac8a783c095e4d21b368dddfc8798130",permalink:"/LAMP-platform/todo/Data Science with LAMP/Data Types/Sensor/Bluetooth ac8a783c095e4d21b368dddfc8798130",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/todo/Data Science with LAMP/Data Types/Sensor/Bluetooth ac8a783c095e4d21b368dddfc8798130.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1615981212},d=[{value:"Description",id:"description",children:[]},{value:"Data",id:"data",children:[]}],u={toc:d};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"bluetooth"},"Bluetooth"),Object(o.b)("p",null,"SensorSpec: lamp.bluetooth"),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"The bluetooth sensor logs information about the device's Bluetooth sensor and about surrounding Bluetooth devices that are enabled and/or visible. The device scan for surrounding Bluetooth devices at a set frequency (default is 60 seconds). If multiple devices are detected in a single scan, they are all assigned the same timestamp."),Object(o.b)("p",null,"It is supported for Android devices"),Object(o.b)("h3",{id:"data"},"Data"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"device_id: string"),": unique identifier for detected device"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"frequency: number"),": (units: Hz) WiFi band frequency"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rssi: number"),": (units: DB) WiFI signal strength")))}l.isMDXComponent=!0}}]);