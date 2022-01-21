"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[5893],{603905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),m=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=m(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(u,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},776679:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(487462),r=n(263366),l=(n(667294),n(603905)),i=["components"],o={},u="MAPNET",m={unversionedId:"consortium/mapnet",id:"consortium/mapnet",isDocsHomePage:!1,title:"MAPNET",description:"Current MAPNET Specific Features and Information",source:"@site/docs/10-consortium/06-mapnet.md",sourceDirName:"10-consortium",slug:"/consortium/mapnet",permalink:"/consortium/mapnet",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/10-consortium/06-mapnet.md",tags:[],version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1642794126,formattedLastUpdatedAt:"1/21/2022",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Add Additional Notes to the DBT Diary Card",permalink:"/consortium/LAC/Clients/add_note"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},p=[{value:"Current MAPNET Specific Features and Information",id:"current-mapnet-specific-features-and-information",children:[],level:3}],s={toc:p};function d(t){var e=t.components,o=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mapnet"},"MAPNET"),(0,l.kt)("h3",{id:"current-mapnet-specific-features-and-information"},"Current MAPNET Specific Features and Information"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"When requested, it can be configured so that patients are unable to view some or all results on the prevent screen. If this is not a current feature for your site and you would like to implement it, please reach out to ",(0,l.kt)("a",{parentName:"li",href:"mailto:team@digitalpsych.org"},"team@digitalpsych.org"),"."),(0,l.kt)("li",{parentName:"ol"},'If viewing LAMP export files in Excel, please ensure to replace the "activity" column with the proper survey name, and add a new "timestamp_txt" column with the formula: ',(0,l.kt)("inlineCode",{parentName:"li"},"=((A1/1000)-14400)/86400 + 25569")," and set the formatting of the column to date-time. (Replace ",(0,l.kt)("inlineCode",{parentName:"li"},"A1")," in the formula with the actual column.)"),(0,l.kt)("li",{parentName:"ol"},"McLean and the other MAPNET sites are now all hosted on the same server. Each MAPNET site functions separately as a researcher on this server. To add more sites, please reach out to ",(0,l.kt)("a",{parentName:"li",href:"mailto:team@digitalpsych.org"},"team@digitalpsych.org"),".")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"MAPNET Sites Currently Using LAMP")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"McLEAN LEAP Center"),(0,l.kt)("li",{parentName:"ul"},"PREP East"),(0,l.kt)("li",{parentName:"ul"},"PREP West"),(0,l.kt)("li",{parentName:"ul"},"Cambridge Health Alliance"),(0,l.kt)("li",{parentName:"ul"},"JRI Salem"),(0,l.kt)("li",{parentName:"ul"},"Edinburg"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Resources for Clinicians")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(765984).Z},"General MAPNET Clinician Guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{target:"_blank",href:n(683589).Z},"CHA MAPNET Clinician Guide")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://vimeo.com/499774666"},"LAMP Training Edinburg"))))),(0,l.kt)("h1",{id:"mapnet-feature-requests"},"MAPNET Feature Requests"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Submitted by"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Include Activity Names in CSV Export"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null},"Alyssa Williamson, Molly Stettenbauer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Specify between baseline and follow up assessments"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null},"Alyssa Williamson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ability to export all patients from all clinics to csv from the dashboard"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null},"Alyssa Williamson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add ability to change the date field from the dashboard retroactively"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null},"Alyssa Williamson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Change data responses to be numerical values"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null},"Molly Stettenbauer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Self report versus clinician administered scales being available to only patients versus only clinicians"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Being able to save clinical notes somewhere while doing clinician administered surveys for patients"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Reverse coding survey questions"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Specifically marking questions is required versus optional"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null},"Emily He")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Add a BMI auto calculator to it so when you plug in weight and height it fills in the BMI"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Conditional Logic"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Editing Survey Questions"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null},"Alyssa Williamson")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sum scores from the MOAS"),(0,l.kt)("td",{parentName:"tr",align:null},"Submitted"),(0,l.kt)("td",{parentName:"tr",align:null},"Molly Stettenbauer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Hide prevent graphs from patients"),(0,l.kt)("td",{parentName:"tr",align:null},"Completed"),(0,l.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0},765984:function(t,e,n){e.Z=n.p+"assets/files/LAMP_Clinician_Guide_MAPNET-353a1361ea6567539e2e1422edf83bb1.pptx"},683589:function(t,e,n){e.Z=n.p+"assets/files/Start_Here_LAMP_w__Pics-cdbe98d54913ec45358e12c256ced5b7.docx"}}]);