"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[2036],{603905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(667294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13696:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(487462),i=a(263366),r=(a(667294),a(603905)),o=["components"],l={},s="Introduction",p={unversionedId:"data_science/intro",id:"data_science/intro",title:"Introduction",description:"The API sandbox (in the menu bar at the top of this page) allows you to test the raw HTTP REST API against a live server to see how to work with the low-level API itself.",source:"@site/docs/09-data_science/01-intro.md",sourceDirName:"09-data_science",slug:"/data_science/intro",permalink:"/data_science/intro",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/01-intro.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1649702923,formattedLastUpdatedAt:"4/11/2022",sidebarPosition:1,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Working with the App Gateway",permalink:"/develop/app_gateway"},next:{title:"Data Types",permalink:"/data_science/data_types"}},c=[{value:"LAMP Protocol",id:"lamp-protocol",children:[],level:2},{value:"Object Model",id:"object-model",children:[],level:2},{value:"Using the SDK",id:"using-the-sdk",children:[],level:2}],d={toc:c};function m(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The API sandbox (in the menu bar at the top of this page) allows you to test the raw HTTP REST API against a live server to see how to work with the low-level API itself."),"\nIf you're interested in working in Ry, Python, or JS, we recommend you try out our programming libraries instead. "),(0,r.kt)("h2",{id:"lamp-protocol"},"LAMP Protocol"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LAMP Protocol"),", or Application Programming Interface (API), is the formalized inter-component language used by any app or tool connecting to the ",(0,r.kt)("inlineCode",{parentName:"p"},"LAMP Platform"),'. It consists of major "surfaces" that describe types of data, actions that may be performed on these types of data, and access and manipulation control of these data. These "surfaces" are designed to be compatible with the Health Level 7 (HL7) organization\'s Fast Healthcare Interoperability Resources (FHIR) standard resources as well as compliant with the Health Insurance Portability and Accountability Act (HIPAA).'),(0,r.kt)("p",null,"A schema (data blueprint) presented below for each type of data in relation to other types, along with a description of the properties and actions available. The use of ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON Schema")," at build-time codifies these schema using sets of validation rules and declared links between types and properties. Furthermore, the Spec data types use ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON Schema")," at run-time to constrain data from different device sensors or activity interfaces dynamically."),(0,r.kt)("h2",{id:"object-model"},"Object Model"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Object Hierarchy",src:a(439038).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ActivitySpec"),": (global) a representation of an interactive user interface that can be presented to ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant"),"s."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SensorSpec"),": (global) a representation of a physical hardware sensor that can be used to passively collect data on a device owned by a ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Researcher"),": encapsulates access and control of multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"Studies"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Study"),": encapsulates the assignment of ",(0,r.kt)("inlineCode",{parentName:"li"},"Activities")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Sensors")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Participants"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Activity"),": activates, configures, and optionally schedules, an interactive   activity for the ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant")," to use, and optionally, receive notifications for."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Sensor"),": activates and configures a hardware sensor on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant"),"'s physical device for sensor data collection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Participant"),": encapsulates the storage and retrieval of ",(0,r.kt)("inlineCode",{parentName:"li"},"ActivityEvent")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"SensorEvent")," data streams.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ActivityEvent"),": a chronologically ordered timestamp-indexed packet of data synthesized from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant"),"'s interaction session with an ",(0,r.kt)("inlineCode",{parentName:"li"},"Activity"),", containing temporal slices representative of each tap or action within the session.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Note:")," this object is owned both by the ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant")," AND the ",(0,r.kt)("inlineCode",{parentName:"li"},"Activity"),", and so it is possible to query the data either cross-",(0,r.kt)("inlineCode",{parentName:"li"},"Activity")," for a specific ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant")," ",(0,r.kt)("inlineCode",{parentName:"li"},"OR")," cross-",(0,r.kt)("inlineCode",{parentName:"li"},"Participant")," for a specific ",(0,r.kt)("inlineCode",{parentName:"li"},"Activity"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SensorEvent"),": a chronologically ordered timestamp-indexed packet of data synthesized by hardware sensors on a physical device being used by ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Note:")," this object is owned both by the ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant")," AND the ",(0,r.kt)("inlineCode",{parentName:"li"},"Sensor"),", and so it is possible to query the data either cross-",(0,r.kt)("inlineCode",{parentName:"li"},"Sensor")," for a specific ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant")," ",(0,r.kt)("inlineCode",{parentName:"li"},"OR")," cross-",(0,r.kt)("inlineCode",{parentName:"li"},"Participant")," for a specific ",(0,r.kt)("inlineCode",{parentName:"li"},"Sensor"),".")))))))))),(0,r.kt)("p",null,"Each of the above data types also support the below associated data types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Type"),": ",(0,r.kt)("em",{parentName:"li"},"(any of the data types above)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Credential"),": a security credential granting authorization to read and write to this specific object and any of its children, with which all data read/write operations are appended to a global audit log.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Device"),": a specifically identified physical hardware device, console, or browser that represents the origin of a read/write operation in the global audit log."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Tag"),": any arbitrary key-value indexed data, either represented as a JSON object (with or without an associated ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON Schema"),"), or as a data-url encoded string.")))),(0,r.kt)("p",null,"Though the above hierarchy is described in terms of object composition, that is, in a manner similar to files recursively nested within several folders, it is important to distinguish and describe a form of object inheritance used by ",(0,r.kt)("inlineCode",{parentName:"p"},"Spec/*/Event")," data types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ActivitySpec"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"SensorSpec"),": similar to apps on an App Store, the Spec object describes the schema for input (configuration) and output (data) for an interactive activity or a hardware sensor.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Activity"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"Sensor"),": this object can be thought of as an 'instance' of a Spec object assigned within a ",(0,r.kt)("inlineCode",{parentName:"li"},"Study"),", with a specific name, icon, schedule, customized parameters, and more. ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ActivityEvent"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"SensorEvent"),": represents an 'event' as part of a time series event stream recorded by the ",(0,r.kt)("inlineCode",{parentName:"li"},"Activity")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"Sensor"),". ")))))),(0,r.kt)("h2",{id:"using-the-sdk"},"Using the SDK"),(0,r.kt)("p",null,"To follow along with the sample code provided in this document, install the appropriate SDK. Currently, we officially support the following:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i lamp-core\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Python")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install LAMP-core\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"R")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'R -e \'install.packages("devtools"); devtools::install_github("BIDMCDigitalPsychiatry/LAMP-r")\'\n')))}m.isMDXComponent=!0},439038:function(e,t,a){t.Z=a.p+"assets/images/object_model-00fbbab6ccd5b7f576f62ed315c6184d.svg"}}]);