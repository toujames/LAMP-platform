"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[2918],{603905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},175010:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(487462),a=n(263366),i=(n(667294),n(603905)),o=["components"],l={},s="Sensor Types",c={unversionedId:"using/sensors",id:"using/sensors",title:"Sensor Types",description:"Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the Platform Server automatically by using the Activity API written in JavaScript. By \u201cbeginning\u201d and \u201cending\u201d a recording of these interactions, as well as \u201cemitting\u201d temporal data during the interaction, an ActivityEvent can be captured and sent to the Platform Server. A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository.",source:"@site/docs/05-using/07-sensors.md",sourceDirName:"05-using",slug:"/using/sensors",permalink:"/using/sensors",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/05-using/07-sensors.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1649188851,formattedLastUpdatedAt:"4/5/2022",sidebarPosition:7,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Cognitive Games and Assessments",permalink:"/using/cog_games"},next:{title:"Clinical vs. Research Use",permalink:"/using/clin_vs_res"}},d=[{value:"Details on the most commonly analyzed specs are below: For greater detail of specs, see <strong>Cortex &amp; API</strong> section.",id:"details-on-the-most-commonly-analyzed-specs-are-below-for-greater-detail-of-specs-see-cortex--api-section",children:[],level:4},{value:"Accelerometer",id:"accelerometer",children:[{value:"Description",id:"description",children:[],level:3}],level:2},{value:"Bluetooth",id:"bluetooth",children:[{value:"Description",id:"description-1",children:[],level:3}],level:2},{value:"Calls",id:"calls",children:[{value:"Description",id:"description-2",children:[],level:3}],level:2},{value:"Distance",id:"distance",children:[],level:2},{value:"GPS",id:"gps",children:[{value:"Description",id:"description-3",children:[],level:3}],level:2},{value:"Gyroscope",id:"gyroscope",children:[{value:"Description",id:"description-4",children:[],level:3}],level:2},{value:"Motion",id:"motion",children:[{value:"Description",id:"description-5",children:[],level:3}],level:2},{value:"None",id:"none",children:[{value:"Description",id:"description-6",children:[],level:3}],level:2},{value:"SMS",id:"sms",children:[{value:"Description",id:"description-7",children:[],level:3}],level:2},{value:"Screen",id:"screen",children:[{value:"Description",id:"description-8",children:[],level:3}],level:2},{value:"WiFi",id:"wifi",children:[{value:"Description",id:"description-9",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sensor-types"},"Sensor Types"),(0,i.kt)("p",null,"Active sensor events are produced on a rolling basis via interactions by a Participant. They are transferred to the ",(0,i.kt)("strong",{parentName:"p"},"Platform Server")," automatically by using the Activity API written in JavaScript. By \u201cbeginning\u201d and \u201cending\u201d a recording of these interactions, as well as \u201cemitting\u201d temporal data during the interaction, an ActivityEvent can be captured and sent to the ",(0,i.kt)("strong",{parentName:"p"},"Platform Server"),". A list of existing Sensors is provided below with name and description; a live server instance must be consulted for data schema information (see GET /sensor_spec). Implementations for these hardware sensors are provided in the GitHub repository."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"SensorSpec"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.analytics")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Location"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.gps")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Device Motion"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.device_motion")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Accelerometer"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.accelerometer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pedometer"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.steps")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sleep"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.sleep")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Nutrition"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.nutrition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Workouts"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.segment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Screen"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.screen_state")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Bluetooth & WiFi"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.nearby_device")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Calls & Texts"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.telephony")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Blood Pressure"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.blood_pressure")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Blood Glucose"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.blood_glucose")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Oxygen Saturation"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.oxygen_saturation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Body Temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.body_temperature")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Heart Rate & HRV"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.heart_rate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Respiratory Rate"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.respiratory_rate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Activity Recognition"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.activity_recognition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"lamp.none")))),(0,i.kt)("h4",{id:"details-on-the-most-commonly-analyzed-specs-are-below-for-greater-detail-of-specs-see-cortex--api-section"},"Details on the most commonly analyzed specs are below: For greater detail of specs, see ",(0,i.kt)("strong",{parentName:"h4"},"Cortex & API")," section."),(0,i.kt)("h2",{id:"accelerometer"},"Accelerometer"),(0,i.kt)("p",null,"SensorSpec: lamp.accelerometer"),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("p",null,"The triaxial accelerometer measures acceleration applied to the device. Each measurement is measured in Gs and is taken relative to the coordinate plane of the device, screen facing upwards. For example, a device resting face-up on a flat surface will report a measurement with the coordinate values ",(0,i.kt)("inlineCode",{parentName:"p"},"<0, 0, 1>"),"."),(0,i.kt)("h2",{id:"bluetooth"},"Bluetooth"),(0,i.kt)("p",null,"Cortex: cortex.raw.bluetooth"),(0,i.kt)("h3",{id:"description-1"},"Description"),(0,i.kt)("p",null,"The bluetooth sensor logs information about the device's Bluetooth sensor and about surrounding Bluetooth devices that are enabled and/or visible. The device scan for surrounding Bluetooth devices at a set frequency (default is 60 seconds). If multiple devices are detected in a single scan, they are all assigned the same timestamp."),(0,i.kt)("h2",{id:"calls"},"Calls"),(0,i.kt)("p",null,"SensorSpec: lamp.calls"),(0,i.kt)("h3",{id:"description-2"},"Description"),(0,i.kt)("p",null,"The calls sensor measures information on phone calls made and received by the user. Each event is a single phone call, with information on its type (incoming, outgoing, missed, etc), duration, and trace (the other device which the user connected with during the call).\nCall type options differ between Android and iOS devices."),(0,i.kt)("h2",{id:"distance"},"Distance"),(0,i.kt)("p",null,"SensorSpec: lamp.distance"),(0,i.kt)("h2",{id:"gps"},"GPS"),(0,i.kt)("p",null,"SensorSpec: lamp.gps"),(0,i.kt)("h3",{id:"description-3"},"Description"),(0,i.kt)("p",null,"The GPS sensor gets the longitude and latitude of a user at a designated frequency of ~1Hz. As a requirement for smartphone apps to be running in the background and collecting any passive sensor data, GPS ",(0,i.kt)("strong",{parentName:"p"},"is required")," to be collected when any sensor data is being collected, even if it is not manually selected. To save battery and make it so extra data is not collected, GPS is collected at a lower frequency when it is not selected."),(0,i.kt)("h2",{id:"gyroscope"},"Gyroscope"),(0,i.kt)("p",null,"SensorSpec: lamp.gyroscope"),(0,i.kt)("h3",{id:"description-4"},"Description"),(0,i.kt)("p",null,"The gyroscope sensors measures the rate of rotation around each of a device's x, y and z axes. Rotation values are in radians/second. Positive values indicate counter-clockwise rotation; negative values indicate clockwise rotation. These are raw values\u2014i.e. they do not correct for nosie or drift."),(0,i.kt)("h2",{id:"motion"},"Motion"),(0,i.kt)("p",null,"SensorSpec: lamp.accelerometer.motion"),(0,i.kt)("h3",{id:"description-5"},"Description"),(0,i.kt)("p",null,"The motion sensor gathers information on the device's physical movement. It includes metrics on device tilt, rotation, experienced gravity, acceleration, and magnetic field. The acceleration measure here differs from ",(0,i.kt)("inlineCode",{parentName:"p"},"lamp.accelerometer")," in that this measure does not correct for gravity."),(0,i.kt)("h2",{id:"none"},"None"),(0,i.kt)("p",null,"SensorSpec: lamp.none"),(0,i.kt)("h3",{id:"description-6"},"Description"),(0,i.kt)("p",null,"The none sensor makes it so that no sensor data is collected from any sensors. This can be convenient if a user or study is ideally only to collect active data."),(0,i.kt)("h2",{id:"sms"},"SMS"),(0,i.kt)("p",null,"SensorSpec: lamp.sms"),(0,i.kt)("h3",{id:"description-7"},"Description"),(0,i.kt)("p",null,"The sms sensor measures information on text messages sent and received by the user. Each event is a single message, with information on its type (incoming, outgoing) and trace (the other device involved in the messaging exchange). "),(0,i.kt)("h2",{id:"screen"},"Screen"),(0,i.kt)("p",null,"SensorSpec: lamp.screen_state"),(0,i.kt)("h3",{id:"description-8"},"Description"),(0,i.kt)("p",null,"The screen state sensor records when the screen was turned on or off, when the device was locked or unlocked, and changes in battery level from charging or discharging the device.\nThis sensor ",(0,i.kt)("strong",{parentName:"p"},"DOES NOT")," record the amount of time spent within specific apps on the device or how many notifications were received."),(0,i.kt)("h2",{id:"wifi"},"WiFi"),(0,i.kt)("p",null,"Cortex: cortex.raw.wifi"),(0,i.kt)("h3",{id:"description-9"},"Description"),(0,i.kt)("p",null,"The wifi sensor provides information about the devices to which the user's device connects via wifi."))}u.isMDXComponent=!0}}]);