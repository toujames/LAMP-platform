(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return s})),o.d(t,"metadata",(function(){return l})),o.d(t,"toc",(function(){return c})),o.d(t,"default",(function(){return u}));var r=o(3),n=o(8),a=(o(0),o(388)),i=["components"],s={},l={unversionedId:"deploy/recs",id:"deploy/recs",isDocsHomePage:!1,title:"Deployment Recommendations",description:"We encourage all self-deploying users to consult the legal and IT departments, as well as sign a Business Associate Agreement (BAA) with the cloud provider to comply with HIPAA regulations.",source:"@site/docs/07-deploy/02-recs.md",sourceDirName:"07-deploy",slug:"/deploy/recs",permalink:"/deploy/recs",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/02-recs.md",version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1634306057,formattedLastUpdatedAt:"10/15/2021",sidebarPosition:2,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Prerequisites for Deploying the LAMP Platform",permalink:"/deploy/prereqs"},next:{title:"Costs of Deploying the LAMP Platform",permalink:"/deploy/costs"}},c=[{value:"Remote Access (WAF) Notes",id:"remote-access-waf-notes",children:[]}],p={toc:c};function u(e){var t=e.components,o=Object(n.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"disclosure"},"Disclosure"),Object(a.b)("p",null,"We encourage all self-deploying users to consult the legal and IT departments, as well as sign a Business Associate Agreement (BAA) with the cloud provider to comply with HIPAA regulations."),Object(a.b)("p",null,"LAMP is completely free, open source software; as a result you are free to follow any or all steps that are suggested. However, we can only assure a successful deployment of the LAMP Platform if each required step is followed. If these steps are not implemented correctly, we are unable to guarantee LAMP will deploy properly. We are also unable to offer the technical support from our team for other deployments."),Object(a.b)("h1",{id:"technical-requirements"},"Technical Requirements"),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"use of Docker is imperative to successful self-deployment"),". A single Docker Stack file is used to automate single-node or multi-node deployments, and requires Docker Swarm (multi-node for cloud testing, integration, and production usage, or single-node for local testing or smaller deployments). The LAMP Platform has only been tested with Docker Swarm, so therefore our team is only equipped to provide support for those using Docker or Docker compatible services."),Object(a.b)("p",null,"We highly recommend the use of ",Object(a.b)("a",{parentName:"p",href:"https://www.portainer.io/"},"Portainer")," as a Swarm Management Console to make it easier to troubleshoot failed deployments, rapidly test and integrate new components, and effectively monitor container logs and health. ",Object(a.b)("a",{parentName:"p",href:"https://documentation.portainer.io/"},"Read this documentation to learn more about Portainer")," and how to configure and use it. We also recommend Traefik for managing service mesh routing and in-flight TLS encryption; additional Docker Stack files and instructions are provided for both in the self-deploy documentation. "),Object(a.b)("h3",{id:"remote-access-waf-notes"},"Remote Access (WAF) Notes"),Object(a.b)("p",null,'The mobile apps and browsers must make an initial connection to the hosted VersionCheck API (part of the App Gateway) before downloading the user interface component. If your organization chooses to submit separate copies of the mobile apps to the Apple/Google app stores, you will also be responsible for deploying the App Gateway within your organization as well. This also means your organization must "pin" the versions of components as accessed from the VersionCheck API. If your organization is NOT deploying an internal App Gateway (i.e if using the existing mindLAMP apps on the App Store) then you will be using the App Gateway as hosted by the Division of Digital Psychiatry. (This must be disclosed in security/IT diagrams.)'))}u.isMDXComponent=!0},388:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return o?n.a.createElement(f,s(s({ref:t},c),{},{components:o})):n.a.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);