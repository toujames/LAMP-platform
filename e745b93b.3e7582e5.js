(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{380:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(3),n=r(7),o=(r(0),r(422)),i={},c={unversionedId:"todo/Testing the LAMP Platform",id:"todo/Testing the LAMP Platform",isDocsHomePage:!1,title:"Testing the LAMP Platform",description:"Testing the LAMP Platform",source:"@site/docs/todo/Testing the LAMP Platform.md",slug:"/todo/Testing the LAMP Platform",permalink:"/LAMP-platform/todo/Testing the LAMP Platform",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/todo/Testing the LAMP Platform.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1616008991,sidebar:"Main",previous:{title:"Survey Instrument Library",permalink:"/LAMP-platform/todo/Survey Instrument Library"},next:{title:"Topics.csv",permalink:"/LAMP-platform/todo/Topics.csv"}},p=[],l={toc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"testing-the-lamp-platform"},"Testing the LAMP Platform"),Object(o.b)("p",null,"Once you've deployed the ",Object(o.b)("inlineCode",{parentName:"p"},"LAMP-server")," and ",Object(o.b)("inlineCode",{parentName:"p"},"LAMP-database"),", you'll be able to use the mindLAMP app (either on your mobile device or ",Object(o.b)("a",{parentName:"p",href:"https://dashboard.lamp.digital/"},"in a desktop browser"),") to connect to your instance. "),Object(o.b)("p",null,"All data is encrypted before communication between your browser or the app to and from your newly deployed server. No data will be communicated with any other server, including the default API server at ",Object(o.b)("a",{parentName:"p",href:"http://api.lamp.digital"},"api.lamp.digital")," or other third party services."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify the status of the CouchDB database."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -k https://admin:DB_PASSSWORD_HERE@db.example.com/\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify the status of the LAMP Platform API Server."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/\n")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Generate your server administrator password."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:admin'\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Check the Docker service logs for ",Object(o.b)("inlineCode",{parentName:"p"},"LAMP_server")," to locate your generated server administrator password."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker service logs LAMP_server\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Verify that the newly generated password (",Object(o.b)("inlineCode",{parentName:"p"},"GENERATED_PASSWORD_HERE"),") works."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl -k https://api.example.com/researcher -H 'Authorization: Basic admin:GENERATED_PASSWORD_HERE'\n")))))),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"Researcher")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"Participant")," using the browser management user interface to verify the setup works as expected. To jumpstart your instance of the LAMP Platform and test surveys or other activities, follow the instructions in ",Object(o.b)("a",{parentName:"p",href:"Activities%20Tips,%20Surveys,%20and%20Cognitive%20Tests/Create%20Surveys.md"},"Create Surveys")," and import the file below into the ",Object(o.b)("inlineCode",{parentName:"p"},"Researcher")," you just created. "),Object(o.b)("p",null,"[lamp_example_survey_battery_export.json]","(Testing the LAMP Platform/export.json)"),Object(o.b)("p",null,"If any of the above steps fails to complete successfully you will not be able to reach this step."))}s.isMDXComponent=!0},422:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return r?n.a.createElement(d,c(c({ref:t},l),{},{components:r})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);