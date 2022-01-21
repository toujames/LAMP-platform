"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[4372],{603905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},356625:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(487462),r=a(263366),o=(a(667294),a(603905)),l=["components"],i={},s="Preparing to Analyze Your Data in Python",p={unversionedId:"data_science/python",id:"data_science/python",isDocsHomePage:!1,title:"Preparing to Analyze Your Data in Python",description:"If you'd like to follow along with this tutorial but don't have a Python development environment set up, consider using Google Collab, a free service from Google Research.",source:"@site/docs/09-data_science/04-python.md",sourceDirName:"09-data_science",slug:"/data_science/python",permalink:"/data_science/python",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/09-data_science/04-python.md",tags:[],version:"current",lastUpdatedBy:"Aditya Vaidyam",lastUpdatedAt:1642794126,formattedLastUpdatedAt:"1/21/2022",sidebarPosition:4,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"How does the LAMP Data Format Work?",permalink:"/data_science/data"},next:{title:"Preparing to Analyze Your Data in R",permalink:"/data_science/r"}},c=[{value:"Protocol methods",id:"protocol-methods",children:[{value:"Querying sensor data",id:"querying-sensor-data",children:[],level:3},{value:"Example: Query accelerometer data",id:"example-query-accelerometer-data",children:[],level:3},{value:"Query sensor data",id:"query-sensor-data",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preparing-to-analyze-your-data-in-python"},"Preparing to Analyze Your Data in Python"),(0,o.kt)("p",null,"If you'd like to follow along with this tutorial but don't have a Python development environment set up, ",(0,o.kt)("strong",{parentName:"p"},"consider using ",(0,o.kt)("a",{parentName:"strong",href:"https://colab.research.google.com/"},"Google Collab"),", a free service")," from Google Research. "),(0,o.kt)("h1",{id:"installation-and-setup"},"Installation and Setup"),(0,o.kt)("p",null,"First install the package. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install LAMP-core\n")),(0,o.kt)("p",null,"Then, import the library and connect to the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import LAMP\nLAMP.connect('my_email@address.com', 'my_password', 'api.lamp.digital')\n")),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("h2",{id:"protocol-methods"},"Protocol methods"),(0,o.kt)("p",null,"Methods native to the LAMP API can now be called to pull data from the platform."),(0,o.kt)("p",null,"For example, we can find all of the participants belonging to a Researcher:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"TEST_RESEARCHER = 'UmVzZWFyY2hlcjoxNjM~'\n\n[LAMP.Participant.all_by_study(study['id'])['data'] for study in LAMP.Study.all_by_researcher(TEST_RESEARCHER)['data']]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# OUTPUT\n\n#{'data': [{'id': 'U34260565',\n#    'language': 'en',\n#    'theme': '#359FFE',\n#    'emergency_contact': None,\n#    'helpline': None},\n#   {'id': 'U33327158',\n#    'language': 'en',\n#    'theme': '#359FFE',\n#    'emergency_contact': None,\n#    'helpline': None}]}\n")),(0,o.kt)("p",null,"The code below will make CSV files of all the 'lamp.gps.contextual' sensor events for all participants under a given researcher id:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import LAMP\nimport pandas as pd \nLAMP.connect(\"MY_EMAIL_ADDRESS_HERE\", \"MY_PASSWORD_HERE\")\n\nfor participant in LAMP.Participant.all_by_researcher(\"me\")['data']:\n    data = []\n    events = LAMP.SensorEvent.all_by_participant(participant['id'], origin='lamp.gps.contextual')['data']\n    for event in events:\n        data.append({\n            'timestamp': event['timestamp'],\n            'UTC time': \"\",\n            'latitude': event['data']['latitude'],\n            'longitude': event['data']['longitude'],\n            'altitude': 1.0,\n            'accuracy': 1.0\n        })\n    # Don't make CSV files for participants without any `lamp.gps.contextual` events.\n    if len(data) > 0:\n        pd.DataFrame.from_dict(data, orient='columns').to_csv(f\"{participant['id']}.csv\", index=False)\n")),(0,o.kt)("h3",{id:"querying-sensor-data"},"Querying sensor data"),(0,o.kt)("p",null,'Query sensor data with "all_by_participant"'),(0,o.kt)("p",null,'Specify a sensor with "origin". If no origin is passed, it will try to query all sensors'),(0,o.kt)("p",null,"Note that due to device or user specification, some spensors may not have data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'# Full sensor specs at https://docs.lamp.digital/Data-Types-99b045852c7b406f87c124b927fe95fa\n\n# Please note that no GPS data has been included with these dummy profiles\n\nparticipant_1 = "U5704591513"\nlamp_sensors = ["lamp.accelerometer", "lamp.accelerometer.motion", "lamp.analytics", \n           "lamp.blood_pressure", "lamp.bluetooth", "lamp.calls", "lamp.distance",\n           "lamp.flights", "lamp.gps", "lamp.gps.contextual", "lamp.gyroscope",\n           "lamp.heart_rate", "lamp.height", "lamp.magnetometer", "lamp.respiratory_rate"\n           "lamp.screen_state","lamp.segment", "lamp.sleep", "lamp.steps",\n           "lamp.weight", "lamp.wifi"]\n\nLAMP.SensorEvent.all_by_participant(participant_1, origin="lamp.bluetooth")[\'data\'][:5]#, origin="lamp.calls")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"[{'timestamp': 1578863459719,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -71}},\n {'timestamp': 1578863459533,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -74}},\n {'timestamp': 1578863459196,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': '1EKJ5ZTXj_h85oA6mP8kGq84oWSB5uaRJRlaepCb4vhPTPifquqjWJ237bsh7FEtbNrH9f45h2HSMdTffTmb_Q==',\n   'RSSI': -60}},\n {'timestamp': 1578863459167,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': 'YyTeKHTPetzGdC0j2EPJ9-VJ9FxafDpHd34MA41BQDKSt1Q4B7vtuFJZpN7_JTOKnDycjRcA3ik8pYwcrfFGlQ==',\n   'RSSI': -98}},\n {'timestamp': 1578863458989,\n  'sensor': 'lamp.bluetooth',\n  'data': {'hashed MAC': 'lYcGRvQlyI9Gq8Yqu1wDX8mOQJDBzIMnnGS9UsVxsrsmKWb1nFOY0tLLAE8VTzJ83GeJaBhmnhpL8weRv7A96Q==',\n   'RSSI': -97}}]\n")),(0,o.kt)("h3",{id:"example-query-accelerometer-data"},"Example: Query accelerometer data"),(0,o.kt)("p",null,'Accelerometer data points are SensorEvents with the origin "lamp.accelerometer".'),(0,o.kt)("p",null,"See LAMP-py documentation at\xa0",(0,o.kt)("a",{parentName:"p",href:"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"},"https://github.com/BIDMCDigitalPsychiatry/LAMP-py"),"\xa0for further API details."),(0,o.kt)("p",null,'Query responses are limtied to 1000 entries. In the event that there are more than 1000 events for a given sensor, the most recent 1000 events are returned. To access more data\u2014or to query during a specific time range\u2014you must use the "_to" and "from" parameters'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"# '_from' and 'to' are UNIX timestamps\nparticipant_accel_tr = LAMP.SensorEvent.all_by_participant(participant_1, \n                                                           origin=\"lamp.accelerometer\",\n                                                           _from=1577735460618,\n                                                           to=1577735460737)\nparticipant_accel_tr['data']\n")),(0,o.kt)("h3",{id:"query-sensor-data"},"Query sensor data"),(0,o.kt)("p",null,"Surveys are ActivityEvents, with each survey type defined as an Activity"),(0,o.kt)("p",null,"'duration' is the survey completion time, in ms"),(0,o.kt)("p",null,"'activity' is the Activity id"),(0,o.kt)("p",null,"'temporal_slices' contains responses for each survey question"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"LAMP.ActivityEvent.all_by_participant(participant_1)['data'][0]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# {'timestamp': 1600557560000,\n#  'duration': 15000,\n#  'activity': '16fnz109gs4sehyfc84n',\n#  'static_data': {},\n#  'temporal_slices': [{'item': 'How did you feel this week?',\n#    'value': 'Okay',\n#    'type': 'valid',\n#    'duration': 5000,\n#    'level': None},\n#   {'item': 'Have you been admitted to the hospital for psychiatric reasons in the past week?',\n#    'value': 'No',\n#    'type': 'valid',\n#    'duration': 7000,\n#    'level': None},\n#   {'item': 'Use this space to write down your thoughts and feelings about the week. ',\n#    'value': 'it was okay',\n#    'type': 'valid',\n#    'duration': 3000,\n#    'level': None}]}\n")),(0,o.kt)("p",null,"Details of the 'activity can be be viewed the following method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"LAMP.Activity.view('16fnz109gs4sehyfc84n')\n")))}d.isMDXComponent=!0}}]);