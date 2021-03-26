(window.webpackJsonp=window.webpackJsonp||[]).push([[232],{316:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=a(7),l=(a(0),a(422)),b={title:"Data Types",slug:"data_types"},i={unversionedId:"todo/Data Science with LAMP/Data Types",id:"todo/Data Science with LAMP/Data Types",isDocsHomePage:!1,title:"Data Types",description:"All event streams in the LAMP API are catalogued by a timestamp and specific \"blueprints\" (schema) of what kind of data they hold. For example, a sensor event that occurred 20 minutes ago would carry that instant's timestamp, along with a link to what kind of sensor it was, and that sensor's measurement as a payload of data. The kinds of activities and sensors available are declared below, along with the blueprint you can expect their events' data to follow.",source:"@site/docs/todo/Data Science with LAMP/Data Types.md",slug:"/todo/Data Science with LAMP/data_types",permalink:"/LAMP-platform/todo/Data Science with LAMP/data_types",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/todo/Data Science with LAMP/Data Types.md",version:"current",lastUpdatedBy:"Rebecca Bilden",lastUpdatedAt:1616775661},o=[{value:"Activity Types",id:"activity-types",children:[]},{value:"Sensor Types",id:"sensor-types",children:[{value:"Beta Sensors",id:"beta-sensors",children:[]}]}],c={toc:o};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"All event streams in the LAMP API are catalogued by a timestamp and specific \"blueprints\" (schema) of what kind of data they hold. For example, a sensor event that occurred 20 minutes ago would carry that instant's timestamp, along with a link to what kind of sensor it was, and that sensor's measurement as a payload of data. The kinds of activities and sensors available are declared below, along with the blueprint you can expect their events' data to follow. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"To learn more about accessing these data types, follow along with either of these tutorials:"),"\n",Object(l.b)("a",{parentName:"p",href:"../Topics/Preparing%20to%20analyze%20your%20data%20in%20R.md"},"Preparing to analyze your data in R")," or ",Object(l.b)("a",{parentName:"p",href:"../Topics/Preparing%20to%20analyze%20your%20data%20in%20Python.md"},"Preparing to analyze your data in Python"),"."),Object(l.b)("h2",{id:"activity-types"},"Activity Types"),Object(l.b)("p",null,"In the case of activities (active data) completed by the participant or patient, the activity declares two types of blueprints: ",Object(l.b)("strong",{parentName:"p"},"static data"),", or data that relates to the overall session, and ",Object(l.b)("strong",{parentName:"p"},"temporal slices"),", data that provides millisecond precision and carries information about each action or intention the participant or patient might have. Furthermore, activities that can be customized will also have ",Object(l.b)("strong",{parentName:"p"},"settings")," blueprints, but these won't actually appear in the event data (and are omitted from the fields listed below)."),Object(l.b)("p",null,"[Fields]","(Data Types/Fields a985fc19122441c4bedf3b9467c9f6b2.csv)"),Object(l.b)("h2",{id:"sensor-types"},"Sensor Types"),Object(l.b)("p",null,"Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the ",Object(l.b)("strong",{parentName:"p"},"Platform Server")," automatically by using the Activity API written in JavaScript. By \u201cbeginning\u201d and \u201cending\u201d a recording of these interactions, as well as \u201cemitting\u201d temporal data during the interaction, an ActivityEvent can be captured and sent to the ",Object(l.b)("strong",{parentName:"p"},"Platform Server"),". A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository."),Object(l.b)("p",null,"[Sensor]","(Data Types/Sensor 78757c3c00a84323bd4f12d83f659355.csv)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.accelerometer.motion:")," records processed triaxial motion, triaxial rotation, triaxial gravity, and triaxial magnetic field data.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"tilt"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"roll"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"pitch"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"yaw"),": number"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"rotation"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"x"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"y"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"z"),": number"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"gravity"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"x"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"y"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"z"),": number"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"user_accel"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"x"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"y"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"z"),": number"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"magnetic_field"),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"x"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"y"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"z"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"calibration"),": number"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.analytics:")," records events such as page opens, notification receipt, or login sessions.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"This data type is currently for internal use only.")),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"event_name"),": string"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"event_payload"),": any"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.blood_pressure:")," records blood pressure from an external connected monitor.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.calls:")," records calls after encrypting the phone number.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"phone_number"),": string"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"duration"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"call_type"),": string<incoming, outgoing, missed, busy>"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.distance:")," records total distance moved.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.bluetooth:")," records bluetooth devices within range as well as signal strength.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"device_id"),": string"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"frequency"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"rssi"),": number"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.flights:")," records stairs of flights climbed.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.height:")," records self-reported height.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.magnetometer:")," records triaxial magnetic field changes.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"x"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"y"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"z"),": number"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.respiratory_rate: r"),"ecords respiratory rate from an external connected monitor.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.heart_rate:")," records heart rate from an external connected monitor.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.segment:")," records workout segment duration and length.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.gyroscope:")," records unprocessed triaxial gyroscope data.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"x"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"y"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"z"),": number"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.sms:")," records text messages after encrypting the phone number.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"phone_number"),": string"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"length"),": integer"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"sms_type"),": string<sent, received>"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.sleep:")," records sleep duration with start and stop times.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.weight:")," records self-reported weight, or weight from an external connected monitor.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.steps:")," records number of steps taken since last such event, or the start of the day.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"value"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"units"),": string"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.wifi:")," records encrypted wireless hotspots as well as signal strength.",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"device_id"),": string"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"frequency"),": number"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("strong",{parentName:"li"},"rssi"),": number")))),Object(l.b)("h3",{id:"beta-sensors"},"Beta Sensors"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.gps")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.analytics")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.device_motion")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.steps")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.nearby_device")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.telephony")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.screen_state")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.segment")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.sleep")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.nutrition")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.blood_glucose")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.blood_pressure")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.oxygen_saturation")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.body_temperature")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.heart_rate")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.respiratory_rate")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.accelerometer")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"lamp.activity_recognition"))),Object(l.b)("hr",null),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Was there something we didn't cover, or need more help?"),"\nLet us know by making a post in the ",Object(l.b)("a",{parentName:"p",href:"https://community.lamp.digital/"},"LAMP Community"),", or ",Object(l.b)("a",{parentName:"p",href:"mailto:team@digitalpsych.org"},"contact us directly"),". Thank you for your contribution! \ud83c\udf1f\n",Object(l.b)("em",{parentName:"p"},"Page last updated on September 28th, 2020.")))}p.isMDXComponent=!0},422:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(a),O=r,j=s["".concat(b,".").concat(O)]||s[O]||m[O]||l;return a?n.a.createElement(j,i(i({ref:t},c),{},{components:a})):n.a.createElement(j,i({ref:t},c))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var c=2;c<l;c++)b[c]=a[c];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);