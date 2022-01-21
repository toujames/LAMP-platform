"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[1894],{603905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43278:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),o=["components"],s={},c="Create and Rename User",l={unversionedId:"consortium/admin/create_user",id:"consortium/admin/create_user",isDocsHomePage:!1,title:"Create and Rename User",description:"You can add a user to an existing group. See instructions below:",source:"@site/docs/10-consortium/01-admin/13-create_user.md",sourceDirName:"10-consortium/01-admin",slug:"/consortium/admin/create_user",permalink:"/consortium/admin/create_user",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/10-consortium/01-admin/13-create_user.md",tags:[],version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1642794126,formattedLastUpdatedAt:"1/21/2022",sidebarPosition:13,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Schedule or Delete an Activity",permalink:"/consortium/admin/sched_delete-activity"},next:{title:"Reset a Patient's Credentials",permalink:"/consortium/admin/reset_user"}},p=[],u={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-and-rename-user"},"Create and Rename User"),(0,i.kt)("p",null,"You can add a user to an existing group. See instructions below:"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/aYqDNHMp9Gg",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(659785).Z})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Log into the app and click on the "Users" tab.'),(0,i.kt)("li",{parentName:"ol"},"Tap the profile icon at top right and select the Manage Credentials option from the drop-down list. "),(0,i.kt)("li",{parentName:"ol"},"Tap the ",(0,i.kt)("inlineCode",{parentName:"li"},"[+]")," button at the top right of the list; you will be prompted with a counter for the number of patients/participants to add, as you may want to create more than one at a time."),(0,i.kt)("li",{parentName:"ol"},"Once you create a patient, you will have the opportunity to input an email address and password. This does ",(0,i.kt)("strong",{parentName:"li"},"not")," need to be a real email. You can make the email anything you'd like (e.g. ",(0,i.kt)("a",{parentName:"li",href:"mailto:patient@xyz.com"},"patient@xyz.com"),").")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(349164).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(809595).Z})),(0,i.kt)("h1",{id:"rename-a-user"},"Rename a User"),(0,i.kt)("p",null,"For each patient/participant in the list on this screen, you\u2019ll see an outlined text box containing their de-identified patient identifier, typically beginning with a ",(0,i.kt)("inlineCode",{parentName:"p"},"U"),", followed by a random number of random digits. "),(0,i.kt)("p",null,"It is not recommended to use full names or other identifying text when referring to patients instead of their patient identifier as this increases your liability and and risk when ",(0,i.kt)("strong",{parentName:"p"},"complying with HIPAA, COPPA, GDPR, or other federal regulations.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Log into the app and click on the "Users" tab.'),(0,i.kt)("li",{parentName:"ol"},"Check the box next to the patient's name."),(0,i.kt)("li",{parentName:"ol"},"Tap ",(0,i.kt)("strong",{parentName:"li"},"Rename")," to add, edit, or remove the de-identification alias. "),(0,i.kt)("li",{parentName:"ol"},"Tap outside of the text box or press the check mark icon at the right side of the text box. You will now see the patient/participant\u2019s identifier as mini hovering text above the text box.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(659785).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(959512).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97910).Z})),(0,i.kt)("p",null,"Though it appears that the patient has been \u201crenamed,\u201d this new alias is only visible to you, as a clinician or researcher, and not to the user, or anywhere in the data when saved or exported."))}d.isMDXComponent=!0},959512:function(e,t,n){t.Z=n.p+"assets/images/edit_pass-63b22bcf02d50763d5dff29cd0d8a50b.jpg"},809595:function(e,t,n){t.Z=n.p+"assets/images/new_patient_qr-cee1929090811155989753a2838896ab.jpg"},349164:function(e,t,n){t.Z=n.p+"assets/images/patient_menu-45f00975e13febc3bb92097504fa6b39.jpg"},97910:function(e,t,n){t.Z=n.p+"assets/images/rename-bdcda793a04376f144738dca11ccf8fd.jpg"},659785:function(e,t,n){t.Z=n.p+"assets/images/users_tab-0e262569eb9e13f7ab30e02d75433857.jpg"}}]);