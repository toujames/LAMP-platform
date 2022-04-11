"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[9034],{603905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(667294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},773506:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=a(487462),n=a(263366),i=(a(667294),a(603905)),o=["components"],s={},c="Data Quality",l={unversionedId:"data_science/Cortex/Visualizations/data-quality",id:"data_science/Cortex/Visualizations/data-quality",title:"Data Quality",description:"Why care about passive data?",source:"@site/docs/09-data_science/06-Cortex/05-Visualizations/01-data-quality.md",sourceDirName:"09-data_science/06-Cortex/05-Visualizations",slug:"/data_science/Cortex/Visualizations/data-quality",permalink:"/data_science/Cortex/Visualizations/data-quality",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/06-Cortex/05-Visualizations/01-data-quality.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1649702923,formattedLastUpdatedAt:"4/11/2022",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Trip Duration",permalink:"/data_science/Cortex/Features/Secondary/trip_duration"},next:{title:"Using Document Transformations",permalink:"/data_science/jsonata"}},u=[{value:"Why care about passive data?",id:"why-care-about-passive-data",children:[{value:"1) Activity counts over the last week:",id:"1-activity-counts-over-the-last-week",children:[],level:3},{value:"2) A measure of screen, GPS, and accelerometer quality over the past week:",id:"2-a-measure-of-screen-gps-and-accelerometer-quality-over-the-past-week",children:[],level:3},{value:"3) Average screen time, steps, and home time over the past week, as a sanity check:",id:"3-average-screen-time-steps-and-home-time-over-the-past-week-as-a-sanity-check",children:[],level:3},{value:"Where are the graphs I&#39;ve generated?",id:"where-are-the-graphs-ive-generated",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-quality"},"Data Quality"),(0,i.kt)("h2",{id:"why-care-about-passive-data"},"Why care about passive data?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is collected continuously, in the background."),(0,i.kt)("li",{parentName:"ul"},"It can be used to help understand behaviors."),(0,i.kt)("li",{parentName:"ul"},"Correlations with survey data can provide interesting insights. ")),(0,i.kt)("p",null,"Missing data is problematic because it will affect the validity of passive features. There are multiple reasons you could have low data collection including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Permissions not set properly"),(0,i.kt)("li",{parentName:"ul"},"Low battery"),(0,i.kt)("li",{parentName:"ul"},"App has not been used in a while"),(0,i.kt)("li",{parentName:"ul"},"Remote area (for GPS)"),(0,i.kt)("li",{parentName:"ul"},"Phone not in use (OS turns off data collection)")),(0,i.kt)("p",null,"As such, it is important to monitor data to ensure that you have enough data to create good quality features. If you have participants with low data, you can follow up and try to resolve the issue. We have created visualizations that can be attached to your Data Portal on the Dashboard to provide a summary of your participant's data. These include:"),(0,i.kt)("h3",{id:"1-activity-counts-over-the-last-week"},"1) Activity counts over the last week:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(873182).Z})),(0,i.kt)("h3",{id:"2-a-measure-of-screen-gps-and-accelerometer-quality-over-the-past-week"},"2) A measure of screen, GPS, and accelerometer quality over the past week:"),(0,i.kt)("p",null,"The graph has tool tips. If you hover over a colored block in the graph it will tell you the computed data frequency (percentage of hours with data) as well as any days where the participant had no data."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(514155).Z})),(0,i.kt)("h3",{id:"3-average-screen-time-steps-and-home-time-over-the-past-week-as-a-sanity-check"},"3) Average screen time, steps, and home time over the past week, as a sanity check:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(184347).Z}),"\n",(0,i.kt)("img",{src:a(411804).Z}),"\n",(0,i.kt)("img",{src:a(903669).Z})),(0,i.kt)("p",null,"To generate these graphs, you can either call a function from Cortex, or download the source code from Github and run a bash script."),(0,i.kt)("p",null,'To use the Cortex function, make sure that Cortex is installed. Then use the following code (substituting "researcher_id" with your own ID):'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"import cortex\ncortex.visualizations.data_quality.data_quality(researcher_id)\n")),(0,i.kt)("p",null,"To run the bash script, first clone the cortex repository from source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/BIDMCDigitalPsychiatry/LAMP-cortex.git\n")),(0,i.kt)("p",null,'Then from inside the LAMP-cortex folder run the bash script (substituting "researcher_id" with your own ID):'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'./cortex/visualizations/run_data_quality.sh "researcher_id"\n')),(0,i.kt)("h3",{id:"where-are-the-graphs-ive-generated"},"Where are the graphs I've generated?"),(0,i.kt)("p",null,'Graphs are attached to the Data Portal. To Navigate to the Data Portal, go to the Dashboard and click "Data Portal" on the left hand side:'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4157).Z})),(0,i.kt)("p",null,'Search for and select your researcher. Then toggle the button next to "Analyze participant data" to see the researcher graphs.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(819453).Z})),(0,i.kt)("p",null,"Here, under graphs.data_quality, you should see the three graphs shown above: activity counts, passive features, and quality tags (along with any others you may have created). You can click on the buttons to view each graph."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(555025).Z})),(0,i.kt)("p",null,"For more information, please go to the Data Portal section of the documentation."))}d.isMDXComponent=!0},873182:function(e,t,a){t.Z=a.p+"assets/images/activities_qual_viz-0d01b21d3c82cc45abb2d01f2204c85f.png"},4157:function(e,t,a){t.Z=a.p+"assets/images/data_portal_viz0-e2944d3872bbf83e9d6b16fc462a2dc4.png"},819453:function(e,t,a){t.Z=a.p+"assets/images/data_portal_viz1-81b3f0ea979f939c3aacca4c4b3154d4.png"},555025:function(e,t,a){t.Z=a.p+"assets/images/data_portal_viz2-f8dccebfe96aa85b856e8ba3041760ee.png"},184347:function(e,t,a){t.Z=a.p+"assets/images/hometime_qual_viz-5d049ab94ace930cb51cd6bd27759505.png"},411804:function(e,t,a){t.Z=a.p+"assets/images/screen_dur_qual_viz-a97fd67e9a0ed9ddbc629e027e120b97.png"},903669:function(e,t,a){t.Z=a.p+"assets/images/steps_qual_viz-245aa42d0beeff20f1edbcc62d91d69b.png"},514155:function(e,t,a){t.Z=a.p+"assets/images/tags_qual_viz-1e08da92d16e4142525aeb3ebc3977b6.png"}}]);