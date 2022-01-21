"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[9135],{603905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(s,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(g,o(o({ref:e},m),{},{components:n})):a.createElement(g,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},624774:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(487462),r=n(263366),l=(n(667294),n(603905)),o=["components"],i={},s="Costs of Deploying the LAMP Platform",p={unversionedId:"deploy/costs",id:"deploy/costs",isDocsHomePage:!1,title:"Costs of Deploying the LAMP Platform",description:'The components of the LAMP Platform rely on IT infrastructure that can be self-hosted by your organization (sometimes called "on-prem") or hosted by a cloud provider such as Amazon or Google.',source:"@site/docs/07-deploy/03-costs.md",sourceDirName:"07-deploy",slug:"/deploy/costs",permalink:"/deploy/costs",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/03-costs.md",tags:[],version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1642794126,formattedLastUpdatedAt:"1/21/2022",sidebarPosition:3,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Deployment Recommendations",permalink:"/deploy/recs"},next:{title:"Provisioning the LAMP Platform",permalink:"/deploy/provisioning"}},m=[{value:"Factors that Influence Provisioning of Compute and Storage Resources.",id:"factors-that-influence-provisioning-of-compute-and-storage-resources",children:[],level:2},{value:"Example Use-Cases and Their Associated Cloud Computing Costs.",id:"example-use-cases-and-their-associated-cloud-computing-costs",children:[],level:2}],u={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"costs-of-deploying-the-lamp-platform"},"Costs of Deploying the LAMP Platform"),(0,l.kt)("p",null,'The components of the LAMP Platform rely on IT infrastructure that can be self-hosted by your organization (sometimes called "on-prem") or hosted by a cloud provider such as Amazon or Google. '),(0,l.kt)("p",null,"If you'd like to deploy your organization's instance of the LAMP Platform on a cloud provider, please consult with your legal and IT departments first, and ",(0,l.kt)("strong",{parentName:"p"},"always ensure that you have signed a Business Associate Agreement")," (BAA) with the cloud provider to ",(0,l.kt)("strong",{parentName:"p"},"comply with HIPAA"),"."),(0,l.kt)("h2",{id:"factors-that-influence-provisioning-of-compute-and-storage-resources"},"Factors that Influence Provisioning of Compute and Storage Resources."),(0,l.kt)("p",null,"There are a few factors that need to be accounted when determining how to deploy the components explained above, as well as how high your monthly costs may be."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Computing:")," The components of the LAMP Platform are highly efficient and won't need much computing power; however, at minimum they require ",(0,l.kt)("strong",{parentName:"p"},"a single dual-core node with at least 2 gigabytes of memory."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Storage:")," The data collection rate for the LAMP Platform varies significantly depending on usage needs, spanning from a minimum of ",(0,l.kt)("strong",{parentName:"p"},"250 gigabytes of low-throughput (HDD) storage")," to a recommended ",(0,l.kt)("strong",{parentName:"p"},"4 terabytes of high-throughput (SSD) storage.")),(0,l.kt)("p",{parentName:"li"},"If you are collecting digital phenotyping data, using the integrated development environments, or scheduling intervention delivery/data analysis scripts, the minimum requirements ",(0,l.kt)("strong",{parentName:"p"},"WILL NOT")," be sufficient.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Network:")," The network bandwidth of the LAMP Platform varies significantly depending on your organization's size and study/clinic requirements; at minimum you must have single virtual private endpoint (i.e. firewall) with a bandwidth of ",(0,l.kt)("strong",{parentName:"p"},"at least 1 Gbps"),", to a recommended ",(0,l.kt)("strong",{parentName:"p"},"10 Gbps")," to adequately handle sustained multi-user loads."))),(0,l.kt)("p",null,"In all cases, the most costly and intensive part of deploying and maintaining the LAMP Platform will be storing the data."),(0,l.kt)("h2",{id:"example-use-cases-and-their-associated-cloud-computing-costs"},"Example Use-Cases and Their Associated Cloud Computing Costs."),(0,l.kt)("p",null,"When hosting the LAMP Platform with a cloud provider, your monthly costs may vary significantly based on the requirements explained previously. ",(0,l.kt)("a",{parentName:"p",href:"https://calculator.aws/#/estimate?id=f27215a7bb211d98cdfc0b2250888241299c41a9"},"Here are two example configurations with the Amazon Web Services (AWS) cloud provider:")," "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},'"I run a digital clinic with about ~15 patients and don\'t intend to use advanced features such as digital phenotyping (sensor data) collection or Automations."'),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Computing:")," 1 node, 2 vCPU, 2 GB RAM"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Storage:")," 250 GB, no snapshots"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Network:")," Up to 10 Gbps"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Total Cost: ~$35.00/mo")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},'"I run multiple research studies with 200+ patients and intend to collect digital phenotyping data at a high frequency, develop and use machine learning algorithms through the Automations framework, and more advanced features."'),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Computing:")," 2 nodes, 16 vCPU, 32 GB RAM"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Storage:")," 8.0 TB, automated monthly snapshots"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Network:")," 25 Gbps"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Total Cost: ~$1,500.00/mo"))))),(0,l.kt)("p",null,"Please note that it is currently not yet possible to configure specific sensors to operate at specific frequencies. ",(0,l.kt)("strong",{parentName:"p"},"This feature is coming soon but not available today.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Specification"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPU"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM (GB)"),(0,l.kt)("th",{parentName:"tr",align:null},"SSD (TB)"),(0,l.kt)("th",{parentName:"tr",align:null},"EBS"),(0,l.kt)("th",{parentName:"tr",align:null},"EC2"),(0,l.kt)("th",{parentName:"tr",align:null},"S3"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Transfer"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Monthly"),(0,l.kt)("th",{parentName:"tr",align:null},"Total Yearly"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"10 participants, active only"'),(0,l.kt)("td",{parentName:"tr",align:null},"2 (t3.small)"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"13.72"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.48"),(0,l.kt)("td",{parentName:"tr",align:null},"64.2"),(0,l.kt)("td",{parentName:"tr",align:null},"770.4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"100 participants, active only"'),(0,l.kt)("td",{parentName:"tr",align:null},"2 (t3.small)"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"13.72"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2.06"),(0,l.kt)("td",{parentName:"tr",align:null},"65.78"),(0,l.kt)("td",{parentName:"tr",align:null},"789.36")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"1000 participants, active only"'),(0,l.kt)("td",{parentName:"tr",align:null},"2 (t3.small)"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"102.4"),(0,l.kt)("td",{parentName:"tr",align:null},"13.72"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"2.06"),(0,l.kt)("td",{parentName:"tr",align:null},"118.18"),(0,l.kt)("td",{parentName:"tr",align:null},"1418.16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"10 participants, active + passive"'),(0,l.kt)("td",{parentName:"tr",align:null},"4 (c5.large)"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"102.4"),(0,l.kt)("td",{parentName:"tr",align:null},"124.1"),(0,l.kt)("td",{parentName:"tr",align:null},"23.56"),(0,l.kt)("td",{parentName:"tr",align:null},"5.12"),(0,l.kt)("td",{parentName:"tr",align:null},"255.18"),(0,l.kt)("td",{parentName:"tr",align:null},"3062.16")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"100 participants, active + passive"'),(0,l.kt)("td",{parentName:"tr",align:null},"4 (c5d.large)"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"204.8"),(0,l.kt)("td",{parentName:"tr",align:null},"186.4"),(0,l.kt)("td",{parentName:"tr",align:null},"23.56"),(0,l.kt)("td",{parentName:"tr",align:null},"10.24"),(0,l.kt)("td",{parentName:"tr",align:null},"425"),(0,l.kt)("td",{parentName:"tr",align:null},"5100.000000000001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1000 participants active + passive"),(0,l.kt)("td",{parentName:"tr",align:null},"8 (c5d.2xlarge)"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"409.6"),(0,l.kt)("td",{parentName:"tr",align:null},"248.2"),(0,l.kt)("td",{parentName:"tr",align:null},"23.56"),(0,l.kt)("td",{parentName:"tr",align:null},"20.48"),(0,l.kt)("td",{parentName:"tr",align:null},"701.84"),(0,l.kt)("td",{parentName:"tr",align:null},"8422.079999999998")))),(0,l.kt)("p",null,'When self-hosting the LAMP Platform (that is, "on-prem"), it\'s difficult to determine the monthly costs and maintenance needs. ',(0,l.kt)("a",{parentName:"p",href:"mailto:team@digitalpsych.org"},"Please reach out to us for a consultation")," if you or your organization would like assistance with self-hosting."),(0,l.kt)("p",null,'Though self-hosting may appear to be cheaper, the "hidden costs" should not be neglected in: ensuring redundant storage, no system down-time, regular storage backups, HIPAA-compatible encryption during flight and at rest, preventing network bottlenecks, regular system maintenance, and more. '),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"We do not recommend self-hosting")," unless your organization already has the infrastructure to correctly do so."))}d.isMDXComponent=!0}}]);