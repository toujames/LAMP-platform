"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[6456],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14195:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={},p="Testing the LAMP Platform",s={unversionedId:"deploy/testing",id:"deploy/testing",title:"Testing the LAMP Platform",description:"Once you've deployed the LAMP-server and LAMP-database, you'll be able to use the mindLAMP app (either on your mobile device or in a desktop browser) to connect to your instance.",source:"@site/docs/07-deploy/08-testing.md",sourceDirName:"07-deploy",slug:"/deploy/testing",permalink:"/deploy/testing",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/08-testing.md",tags:[],version:"current",lastUpdatedBy:"dcurrey88",lastUpdatedAt:1650472174,formattedLastUpdatedAt:"4/20/2022",sidebarPosition:8,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Deploying the LAMP Platform",permalink:"/deploy/deploying"},next:{title:"Troubleshooting Deployment",permalink:"/deploy/troubleshooting"}},c=[],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing-the-lamp-platform"},"Testing the LAMP Platform"),(0,o.kt)("p",null,"Once you've deployed the ",(0,o.kt)("inlineCode",{parentName:"p"},"LAMP-server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LAMP-database"),", you'll be able to use the mindLAMP app (either on your mobile device or ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.lamp.digital/"},"in a desktop browser"),") to connect to your instance. "),(0,o.kt)("p",null,"All data is encrypted before communication between your browser or the app to and from your newly deployed server. No data will be communicated with any other server, including the default API server at ",(0,o.kt)("a",{parentName:"p",href:"http://api.lamp.digital"},"api.lamp.digital")," or other third party services."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the status of the CouchDB database."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k https://admin:DB_PASSSWORD_HERE@db.example.com/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify the status of the LAMP Platform API Server."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Generate your server administrator password."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:admin'\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the Docker service logs for ",(0,o.kt)("inlineCode",{parentName:"p"},"LAMP_server")," to locate your generated server administrator password."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker service logs LAMP_server\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Verify that the newly generated password (",(0,o.kt)("inlineCode",{parentName:"p"},"GENERATED_PASSWORD_HERE"),") works."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:GENERATED_PASSWORD_HERE'\n")))))),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Researcher")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Participant")," using the browser management user interface to verify the setup works as expected. To jumpstart your instance of the LAMP Platform and test surveys or other activities, follow the instructions in ",(0,o.kt)("strong",{parentName:"p"},"Create Surveys")," and import the file below into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Researcher")," you just created. "),(0,o.kt)("p",null,"[lamp_example_survey_battery_export.json]","(Testing the LAMP Platform/export.json)"),(0,o.kt)("p",null,"If any of the above steps fails to complete successfully you will not be able to reach this step."))}m.isMDXComponent=!0}}]);