"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[3939],{603905:function(t,e,a){a.d(e,{Zo:function(){return h},kt:function(){return d}});var n=a(667294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},h=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,h=o(t,["components","mdxType","originalType","parentName"]),m=c(a),d=r,u=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return a?n.createElement(u,i(i({ref:e},h),{},{components:a})):n.createElement(u,i({ref:e},h))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},232329:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return h}});var n=a(487462),r=a(263366),s=(a(667294),a(603905)),i=["components"],o={},l="Tags & Attachments",c={unversionedId:"data_science/tags",id:"data_science/tags",title:"Tags & Attachments",description:"To offer a way to store persistent, easily accessible data, the LAMP platform has implemented a feature known as attachments (sometimes also called tags). You can use tags to store any json-formatted data. Using this feature, you can attach data to any element of LAMP including:",source:"@site/docs/09-data_science/09-tags.md",sourceDirName:"09-data_science",slug:"/data_science/tags",permalink:"/data_science/tags",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/09-tags.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1650470979,formattedLastUpdatedAt:"4/20/2022",sidebarPosition:9,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Using the LAMP Data Portal",permalink:"/data_science/data_portal"},next:{title:"Admin Checklist",permalink:"/consortium/admin/checklist"}},h=[{value:"Functions",id:"functions",children:[{value:"LAMP.Type.list_attachments(&#39;id&#39;)",id:"lamptypelist_attachmentsid",children:[],level:3},{value:"LAMP.Type.get_attachment(&#39;id&#39;,&#39;tag_name&#39;)",id:"lamptypeget_attachmentidtag_name",children:[],level:3},{value:"LAMP.Type.set_attachment(&#39;parent&#39;,&#39;target&#39;,&#39;tag_name&#39;,&#39;body&#39;)",id:"lamptypeset_attachmentparenttargettag_namebody",children:[],level:3}],level:2},{value:"Authority",id:"authority",children:[{value:"Case Example 1: Conflicting Tags",id:"case-example-1-conflicting-tags",children:[],level:3},{value:"Case Example 2: Removing a conflict",id:"case-example-2-removing-a-conflict",children:[],level:3}],level:2}],p={toc:h};function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"tags--attachments"},"Tags & Attachments"),(0,s.kt)("h1",{id:"overview"},"Overview"),(0,s.kt)("p",null,"To offer a way to store persistent, easily accessible data, the LAMP platform has implemented a feature known as attachments (sometimes also called tags). You can use tags to store any json-formatted data. Using this feature, you can attach data to any element of LAMP including:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Participants"),(0,s.kt)("li",{parentName:"ul"},"Studies"),(0,s.kt)("li",{parentName:"ul"},"Researchers"),(0,s.kt)("li",{parentName:"ul"},"Activities")),(0,s.kt)("h2",{id:"functions"},"Functions"),(0,s.kt)("p",null,"There are three main functions used to interact with LAMP attachments, that allow you to list, view, and set attachments. In order, they are:"),(0,s.kt)("h3",{id:"lamptypelist_attachmentsid"},"LAMP.Type.list_attachments('id')"),(0,s.kt)("p",null,"Given a LAMP id, this function returns an array of strings. Each string corresponds to a tag that has been set on the target. For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"LAMP.Type.list_attachments(\"ffmz65mn1gtav5fq3bhq\")['data']\n\n\n['graphs.data_quality.activity_counts',\n 'graphs.data_quality.passive_features',\n 'graphs.data_quality.quality_tags',\n 'lamp.attachment_test',\n 'lamp.dashboard.credential_roles',\n 'lamp.dashboard.researcher_tags',\n 'lamp.dashboard.user_type',\n 'lamp.test']\n\n")),(0,s.kt)("h3",{id:"lamptypeget_attachmentidtag_name"},"LAMP.Type.get_attachment('id','tag_name')"),(0,s.kt)("p",null,"Given a LAMP id and an existing tag, this function returns the currently set value of the tag. It returns a 404 error if the tag is not set. If the same tag has been set multiple times by different agents, (e.g. both a Researcher and a Study), the tag belonging to the highest authority (e.g. Researcher over Study) is returned. For more information on this, see ",(0,s.kt)("a",{parentName:"p",href:"#Authority"},"Authority")," below."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"LAMP.Type.get_attachment(\"ffmz65mn1gtav5fq3bhq\",'lamp.test')['data']\n\n{'test_data_key': 21283,\n 'my_list_of_data': [\"Android\", \"iOS\"]}\n")),(0,s.kt)("h3",{id:"lamptypeset_attachmentparenttargettag_namebody"},"LAMP.Type.set_attachment('parent','target','tag_name','body')"),(0,s.kt)("p",null,"This function is used to set the value of a tag. 'Target' here is the LAMP element the tag will be attached to - while 'parent' is the agent setting the tag (such as a Researcher, Study, or even a Participant). An element can also use the shorthand ",(0,s.kt)("inlineCode",{parentName:"p"},"'me'")," to set a tag on itself - e.g. a Researcher targeting themself. This function can also be used to delete a tag by setting ",(0,s.kt)("inlineCode",{parentName:"p"},"body")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','This is a test tag')['data']\n\nLAMP.Type.get_attachment('U0591253803','lamp.test')['data']\n'This is a test tag'\n\n\nLAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",\"me\",'lamp.test','This is also a test tag')['data']\n\nLAMP.Type.get_attachment(\"ffmz65mn1gtav5fq3bhq\",'lamp.test')['data']\n'This is also a test tag'\n")),(0,s.kt)("h2",{id:"authority"},"Authority"),(0,s.kt)("p",null,"LAMP does not restrict the setting of a tag even if it has already been set. If the tag was previously set by the same parent, it will be overwritten (or deleted if set to ",(0,s.kt)("inlineCode",{parentName:"p"},"None"),"). If the same tag has been set on the same target, but by multiple users, e.g. by both a Researcher and a Study, both will be ",(0,s.kt)("em",{parentName:"p"},"present")," in the database, but only the one set by the highest authority(see below) user will be returned from ",(0,s.kt)("inlineCode",{parentName:"p"},"LAMP.Type.get_attachment"),"."),(0,s.kt)("p",null,"In descending order, authorities are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Admin"),(0,s.kt)("li",{parentName:"ul"},"Researcher"),(0,s.kt)("li",{parentName:"ul"},"Study"),(0,s.kt)("li",{parentName:"ul"},"Participant")),(0,s.kt)("p",null,"If a tag set by a higher authority user is later deleted, however, a tag set by a lower authority user will become available again."),(0,s.kt)("h3",{id:"case-example-1-conflicting-tags"},"Case Example 1: Conflicting Tags"),(0,s.kt)("p",null,"In the following code block, both \"ffmz65mn1gtav5fq3bhq\" (a Researcher), and 'dynp0g0530xkahnzh0xc' (a Study) attempt to set the ",(0,s.kt)("inlineCode",{parentName:"p"},"lamp.test")," tag on the user 'U0591253803'. Both tags are successfully set and no error is thrown. However, since the Researcher has a higher authority than the Study, the tag set by the Researcher is returned (even though the tag set by the Study was set later)."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','Set by Researcher')['data']\nLAMP.Type.set_attachment('dynp0g0530xkahnzh0xc','U0591253803','lamp.test','Set by Study')['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n\n'Set by Researcher'\n")),(0,s.kt)("h3",{id:"case-example-2-removing-a-conflict"},"Case Example 2: Removing a conflict"),(0,s.kt)("p",null,"In the following code block, both \"ffmz65mn1gtav5fq3bhq\" (a Researcher), and 'dynp0g0530xkahnzh0xc' (a Study) attempt to set the ",(0,s.kt)("inlineCode",{parentName:"p"},"lamp.test")," tag on the user 'U0591253803'. As before, since the Researcher has a higher authority than the Study, the tag set by the Researcher is returned (even though the tag set by the Study was set later)."),(0,s.kt)("p",null,"However, the Researcher tag is then removed, and the tag set by the Study is now the one returned by the API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"LAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test','Set by Researcher')['data']\nLAMP.Type.set_attachment('dynp0g0530xkahnzh0xc','U0591253803','lamp.test','Set by Study')['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n'Set by Researcher'\n\nLAMP.Type.set_attachment(\"ffmz65mn1gtav5fq3bhq\",'U0591253803','lamp.test',None)['data']\n\nLAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']\n'Set by Study'\n")))}m.isMDXComponent=!0}}]);