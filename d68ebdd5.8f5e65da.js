(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(357)),o={title:"User Experience Upgrades",author:"Aditya Vaidyam",author_title:"Division of Digital Psychiatry",author_url:"https://github.com/avaidyam",author_image_url:"https://avatars.githubusercontent.com/u/1361003",description:"User Experience Upgrades",hide_table_of_contents:!1},c={permalink:"/blog/2020/10/15/",source:"@site/blog/2020-10-15.md",description:"User Experience Upgrades",date:"2020-10-15T00:00:00.000Z",tags:[],title:"User Experience Upgrades",readingTime:1.045,truncated:!1,prevItem:{title:"Clinical Customization Updates",permalink:"/blog/2020/10/23/"},nextItem:{title:"General Availability of mindLAMP 2",permalink:"/blog/2020/10/05/"}},l=[{value:"Updated management interface",id:"updated-management-interface",children:[]},{value:"Self-hosted deployment support",id:"self-hosted-deployment-support",children:[]},{value:"Database improvements",id:"database-improvements",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"features"},"Features"),Object(i.b)("h3",{id:"updated-management-interface"},"Updated management interface"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The new Participant and Activity management tabs allow clinicians to better manage multiple studies or clinics in one simplified page."),Object(i.b)("li",{parentName:"ul"},"Activity management has been retooled to support complete customization of what patients see when they use the app.")),Object(i.b)("h3",{id:"self-hosted-deployment-support"},"Self-hosted deployment support"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The LAMP Platform API Server has been retooled to automatically manage aspects of the deployment process."),Object(i.b)("li",{parentName:"ul"},"Databases are automatically bootstrapped and a secure system administrator password is automatically created and persisted on first launch.")),Object(i.b)("h1",{id:"improvements"},"Improvements"),Object(i.b)("h3",{id:"database-improvements"},"Database improvements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Improved the performance of Tag lookup, including for custom visualizations and patient names."),Object(i.b)("li",{parentName:"ul"},"Improved the performance of security and credential verification.")),Object(i.b)("h1",{id:"bug-fixes"},"Bug Fixes"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Resolved an issue where connecting to a specific server address on the mobile app caused the app to not load the user interface."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where activity streaks were incorrectly reported as 14 days regardless of the actual streak duration."),Object(i.b)("li",{parentName:"ul"},"Resolved an issue where Jewels and Box Game were not correctly opening or saving due to missing values in configuration."),Object(i.b)("li",{parentName:"ul"},"Resolved a major issue that significantly impacted sensor collection frequency on iOS devices \u2014 device motion data is now correctly collected at frequencies greater than 0.002 Hz.")))}p.isMDXComponent=!0},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);