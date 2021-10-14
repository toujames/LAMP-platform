(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(8),a=(n(0),n(387)),i=["components"],l={},s={unversionedId:"deploy/troubleshooting",id:"deploy/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting Deployment",description:"This page contains fixes for potential issues you may encounter when using LAMP. However, it is not comprehensive. If you encounter an issue you are unable to resolve with the help of this page, please help us improve by posting your issue at community.lamp.digital",source:"@site/docs/07-deploy/09-troubleshooting.md",sourceDirName:"07-deploy",slug:"/deploy/troubleshooting",permalink:"/deploy/troubleshooting",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/09-troubleshooting.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1634220931,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:9,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Testing the LAMP Platform",permalink:"/deploy/testing"},next:{title:"Components of the LAMP Platform",permalink:"/develop/intro"}},c=[{value:"Large Logs",id:"large-logs",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This page contains fixes for potential issues you may encounter when using LAMP. However, it is not comprehensive. If you encounter an issue you are unable to resolve with the help of this page, please help us improve by posting your issue at ",Object(a.b)("a",{parentName:"p",href:"https://community.lamp.digital"},"community.lamp.digital")," "),Object(a.b)("h2",{id:"large-logs"},"Large Logs"),Object(a.b)("p",null,"LAMP-server is designed for long uptimes and detailed logging. An unfortunate side-effect of this is that, especially over a long period of time, logging files can grow large and affect available disk space, negatively impacting docker performance."),Object(a.b)("p",null,"Check your disk space usage in the terminal of your ",Object(a.b)("inlineCode",{parentName:"p"},"lamp-server")," node with:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"```bash\ndf\n```\n")),Object(a.b)("p",null,"If it is 100%, navigate to your docker directory (try ",Object(a.b)("inlineCode",{parentName:"p"},"cd /var/lib/docker"),") and run "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"   du -h --max-depth=1 containers/\n")),Object(a.b)("p",null,"This command will list your containers space usage. If LAMP-server is very large (in excess of 10gb), you can attempt to clean the logs by running "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"    docker stop YOUR_SERVER_ONTAINER_ID_HERE && docker rm YOUR_CONTAINER_ID_HERE\n    \n")),Object(a.b)("p",null,"This will stop and remove your container, at which point docker swarm should spin up a new one."),Object(a.b)("p",null,"To prevent this issue from happening in the future, add the following to your docker compose file. The docs YAML file has this added as of September 2nd, so this bug should not occur if you began using LAMP after this date."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml"},'    logging:\n      options:\n        max-size: "10m"\n        max-file: "3"\n')))}u.isMDXComponent=!0},387:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||a;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);