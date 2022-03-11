"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[6284],{603905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return s}});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(n),s=r,f=p["".concat(c,".").concat(s)]||p[s]||d[s]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},202861:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return u}});var a=n(487462),r=n(263366),o=(n(667294),n(603905)),l=["components"],i={},c="Deploying via CloudFormation",m={unversionedId:"deploy/cloudformation",id:"deploy/cloudformation",isDocsHomePage:!1,title:"Deploying via CloudFormation",description:"\x3c!-- NOTE TO BIDMC MAINTAINERS:",source:"@site/docs/07-deploy/06-cloudformation.md",sourceDirName:"07-deploy",slug:"/deploy/cloudformation",permalink:"/deploy/cloudformation",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/07-deploy/06-cloudformation.md",tags:[],version:"current",lastUpdatedBy:"Luke Scheuer",lastUpdatedAt:1647022805,formattedLastUpdatedAt:"3/11/2022",sidebarPosition:6,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Preparing Resources on AWS",permalink:"/deploy/aws"},next:{title:"Deploying the LAMP Platform",permalink:"/deploy/deploying"}},u=[{value:"Validate",id:"validate",children:[],level:2},{value:"Create",id:"create",children:[],level:2},{value:"Update",id:"update",children:[],level:2},{value:"Delete",id:"delete",children:[],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-via-cloudformation"},"Deploying via CloudFormation"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/cloudformation/home?#/stacks/new?stackName=LAMP&templateURL=https://s3.us-east-2.amazonaws.com/lamp.cloudformation/cloudformation.yml"},(0,o.kt)("img",{parentName:"a",src:"https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png",alt:null}))),(0,o.kt)("h2",{id:"validate"},"Validate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation validate-template \\\n    --region us-east-2 \\\n    --template-body file://cloudformation.yaml\n")),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation create-stack \\\n    --region us-east-2 \\\n    --stack-name LAMP \\\n    --template-body file://cloudformation.yaml \\\n    --capabilities CAPABILITY_NAMED_IAM \\\n    --parameters HostedZoneId=YOUR_HOSTED_ZONE_HERE,DomainName=YOUR_DOMAIN_NAME_HERE,InstanceType=t3.medium,ImageId=ami-0f57b4cec24530068,VpcCidrBlock=10.0.0.0/16,SubnetCidrBlock=10.0.0.0/24,KeyName=YOUR_KEY_NAME_HERE,SecurityGroupName=mindLAMP-platform-ec2-sg,SshCidrBlock=52.95.4.0/24,Ec2Instance01Name=mindLAMP-platform-ec2-01,Ec2Instance02Name=mindLAMP-platform-ec2-02\n")),(0,o.kt)("h2",{id:"update"},"Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation update-stack \\\n    --region us-east-2 \\\n    --stack-name LAMP \\\n    --template-body file://cloudformation.yaml \\\n    --capabilities CAPABILITY_NAMED_IAM \\\n    --parameters HostedZoneId=YOUR_HOSTED_ZONE_HERE,DomainName=YOUR_DOMAIN_NAME_HERE,InstanceType=t3.medium,ImageId=ami-0f57b4cec24530068,VpcCidrBlock=10.0.0.0/16,SubnetCidrBlock=10.0.0.0/24,KeyName=YOUR_KEY_NAME_HERE,SecurityGroupName=mindLAMP-platform-ec2-sg,SshCidrBlock=52.95.4.0/24,Ec2Instance01Name=mindLAMP-platform-ec2-01,Ec2Instance02Name=mindLAMP-platform-ec2-02\n")),(0,o.kt)("h2",{id:"delete"},"Delete"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"aws cloudformation delete-stack \\\n    --region us-east-2 \\\n    --stack-name LAMP\n")))}p.isMDXComponent=!0}}]);