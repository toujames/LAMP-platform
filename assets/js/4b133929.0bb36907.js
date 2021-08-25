(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),o=(a(0),a(376)),c=["components"],i={},l={unversionedId:"deploy/cloudformation",id:"deploy/cloudformation",isDocsHomePage:!1,title:"Deploying via CloudFormation",description:"Validate",source:"@site/docs/06-deploy/06-cloudformation.md",sourceDirName:"06-deploy",slug:"/deploy/cloudformation",permalink:"/deploy/cloudformation",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/06-deploy/06-cloudformation.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1629894139,formattedLastUpdatedAt:"8/25/2021",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Preparing Resources on AWS",permalink:"/deploy/aws"},next:{title:"Deploying the LAMP Platform",permalink:"/deploy/deploying"}},d=[{value:"Validate",id:"validate",children:[]},{value:"Create",id:"create",children:[]},{value:"Update",id:"update",children:[]},{value:"Delete",id:"delete",children:[]}],m={toc:d};function p(e){var t=e.components,a=Object(r.a)(e,c);return Object(o.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudformation/home?#/stacks/new?stackName=LAMP&templateURL=https://s3.us-east-2.amazonaws.com/lamp.cloudformation/cloudformation.yml"},Object(o.b)("img",{parentName:"a",src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png",alt:null}))),Object(o.b)("h2",{id:"validate"},"Validate"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation validate-template \\\n    --region us-east-2 \\\n    --template-body file://cloudformation.yaml\n")),Object(o.b)("h2",{id:"create"},"Create"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation create-stack \\\n    --region us-east-2 \\\n    --stack-name LAMP \\\n    --template-body file://cloudformation.yaml \\\n    --capabilities CAPABILITY_NAMED_IAM \\\n    --parameters HostedZoneId=YOUR_HOSTED_ZONE_HERE,DomainName=YOUR_DOMAIN_NAME_HERE,InstanceType=t3.medium,ImageId=ami-0f57b4cec24530068,VpcCidrBlock=10.0.0.0/16,SubnetCidrBlock=10.0.0.0/24,KeyName=YOUR_KEY_NAME_HERE,SecurityGroupName=mindLAMP-platform-ec2-sg,SshCidrBlock=52.95.4.0/24,Ec2Instance01Name=mindLAMP-platform-ec2-01,Ec2Instance02Name=mindLAMP-platform-ec2-02\n")),Object(o.b)("h2",{id:"update"},"Update"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation update-stack \\\n    --region us-east-2 \\\n    --stack-name LAMP \\\n    --template-body file://cloudformation.yaml \\\n    --capabilities CAPABILITY_NAMED_IAM \\\n    --parameters HostedZoneId=YOUR_HOSTED_ZONE_HERE,DomainName=YOUR_DOMAIN_NAME_HERE,InstanceType=t3.medium,ImageId=ami-0f57b4cec24530068,VpcCidrBlock=10.0.0.0/16,SubnetCidrBlock=10.0.0.0/24,KeyName=YOUR_KEY_NAME_HERE,SecurityGroupName=mindLAMP-platform-ec2-sg,SshCidrBlock=52.95.4.0/24,Ec2Instance01Name=mindLAMP-platform-ec2-01,Ec2Instance02Name=mindLAMP-platform-ec2-02\n")),Object(o.b)("h2",{id:"delete"},"Delete"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation delete-stack \\\n    --region us-east-2 \\\n    --stack-name LAMP\n")))}p.isMDXComponent=!0},376:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),m=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(a),u=n,f=p["".concat(c,".").concat(u)]||p[u]||s[u]||o;return a?r.a.createElement(f,i(i({ref:t},d),{},{components:a})):r.a.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=a[d];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);