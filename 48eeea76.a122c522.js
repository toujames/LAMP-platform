(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(3),o=t(7),i=(t(0),t(422)),r={title:"Anomaly Detection in R",slug:"anomaly_detection_r"},c={unversionedId:"todo/Data Science with LAMP/Anomaly Detection in R",id:"todo/Data Science with LAMP/Anomaly Detection in R",isDocsHomePage:!1,title:"Anomaly Detection in R",description:"Code originally written in 2017 by Ian Barnett, PhD, and modified and maintained by the Division of Digital Psychiatry.",source:"@site/docs/todo/Data Science with LAMP/Anomaly Detection in R.md",slug:"/todo/Data Science with LAMP/anomaly_detection_r",permalink:"/LAMP-platform/todo/Data Science with LAMP/anomaly_detection_r",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/todo/Data Science with LAMP/Anomaly Detection in R.md",version:"current",lastUpdatedBy:"Rebecca Bilden",lastUpdatedAt:1616775463},l=[{value:"1. Add the following to working directory",id:"1-add-the-following-to-working-directory",children:[]},{value:"2. Setup and source files",id:"2-setup-and-source-files",children:[]},{value:"3. Define main anomaly detection function",id:"3-define-main-anomaly-detection-function",children:[]},{value:"4. Run anomaly detection on each participant",id:"4-run-anomaly-detection-on-each-participant",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Code originally written in 2017 by ",Object(i.b)("a",{parentName:"p",href:"mailto:ibarnett@pennmedicine.upenn.edu"},"Ian Barnett, PhD"),", and modified and maintained by the ",Object(i.b)("a",{parentName:"p",href:"mailto:team@digitalpsych.org"},"Division of Digital Psychiatry"),"."),Object(i.b)("h3",{id:"1-add-the-following-to-working-directory"},"1. Add the following to working directory"),Object(i.b)("p",null,"[TSDecompositionMissing.cpp]","(../Topics/Anomaly Detection in R/TSDecompositionMissing.cpp)"),Object(i.b)("p",null,"[TSAnomalyDetection.R]","(../Topics/Anomaly Detection in R/TSAnomalyDetection.r)"),Object(i.b)("h3",{id:"2-setup-and-source-files"},"2. Setup and source files"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-r"},'library(Rcpp)\nlibrary(mvtnorm)\nlibrary(Matrix)\n\n# Make sure you have the following files in the working directory\n# TSAnomalyDetection.R\n# TSDecompositionMissing.cpp\n\n# Source TSAnomalyDetection\nsource(\'TSAnomalyDetection.R\')\n\n### set the following user parameters:\n## 1) output_filepath: directory containing the code as well as therds file\n## 2) name of the patientinfo file\n## 3) name of the rds file containing daily digital phenotypes\n\noutput_filepath="PATH-OF-WORKING-DIRECTORY"\n\npatient_names <- c("PARTICIPANT-IDS")\n\n# Input feature matrix should have the columns\n# IID, Date, Feature-1-A, Feature-2-B, Feature 3-A, Feature-3-B, ...\ninfilename=paste("INPUT-FEATURE-MATRIX-RDS",sep="")\ninfilepath=paste(output_filepath,infilename,sep="/")\n\n# Need to inform the anomaly detection method what the features are and how many columns for each\n# Make sure these are in the right order\nfeatures <- data.frame(feature_categories = c("Feature 1","Feature 2"),\n                       feature_lengths = c(2, 2), \n                       stringsAsFactors = F)\n')),Object(i.b)("h3",{id:"3-define-main-anomaly-detection-function"},"3. Define main anomaly detection function"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-r"},'anomaly_detection_plot = function(ID, features = NULL, onesided=TRUE) {\n\n  infilepath=paste(output_filepath,infilename,sep="/")\n  if (!file.exists(infilepath)) {\n    cat("Data filepath does not exist.")\n    return(NULL)\n  } else if (is.null(features)) {\n    cat("No feature information provided.")\n    return(NULL)\n  }\n  \n  dat = readRDS(infilepath)\n  \n  ## Need to convert NaN to NA or Hotelling\'s \n  ## method will fail. This "Method Dispatch"\n  ## solves the issue in 3 lines\n  is.nan.data.frame <- function(x)\n    do.call(cbind, lapply(x, is.nan))\n  \n  dat[is.nan(dat)] <- NA\n  \n  outmat = matrix(NA,nrow=nrow(dat),ncol=18)\n  rIDs=which(dat$IID==ID)\n  y = dat[rIDs,]\n  if(nrow(y)<4) {\n    cat(" Not enough data for anomaly detection.")\n    return(NULL)\n  }\n  y = y[c(-1,-nrow(y)),]\n  fvar=apply(y[,3:ncol(y)],2,function(xx) var(xx,na.rm=T))\n  fext=apply(y[,3:ncol(y)],2,function(xx) length(which(!is.na(xx))))\n  \n  # Remove individual features for which there is no data\n  IDrm=unique(c(which(is.na(fvar)),which(fvar==0),which(fext<3)))+2\n  features$rm = NA\n  features$feats = NA\n  for (i in 1:length(features$feature_categories)) {\n    rm_comp <- ifelse(i==1, 0, sum(features$rm[1:(i-1)], na.rm = T))\n    features$rm[i] <- length(which(IDrm<=sum(features$feature_lengths[1:i], na.rm=T)+2)) - rm_comp\n    features$feats[i] <- features$feature_lengths[i] - features$rm[i]\n  }\n  \n  if(length(IDrm)>0){\n    y = y[,-IDrm]\n  }\n  \n  if(sum(features$feats, na.rm=T)==0){\n    cat(" Not enough data for anomaly detection.")\n    return(NULL)\n  }\n  \n# Perform anomaly detection on each of the feature groups\n  for(i in 1:length(features$feature_categories)){\n    if(features$feats[i] == 0) {next}\n    idx <- ifelse(i == 1, 0, sum(features$feats[1:(i-1)], na.rm=T))\n    out=AnomalyDetectionTS(t(data.matrix(y[,(3 + idx):(3+sum(features$feats[1:i], na.rm = T)-1)])),B=1000,onesided)\n    outmat[rIDs[c(-1,-length(rIDs))],((3*i)-2)] = out$output[1,]\n    outmat[rIDs[c(-1,-length(rIDs))],((3*i)-1)] = out$output[2,]\n    outmat[rIDs[c(-1,-length(rIDs))],(3*i)] = out$output[3,]\n  }\n  return(list(outmat,rIDs))\n}\n')),Object(i.b)("h3",{id:"4-run-anomaly-detection-on-each-participant"},"4. Run anomaly detection on each participant"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-r"},'featanom = readRDS(infilepath)\nnew_cols <- c()\n\n# Append new columns to hold anomaly detection output\nfor (i in 1:length(features$feature_categories)) {\n  new_cols <- c(new_cols, paste(features$feature_categories[i], "_stat", sep=""))\n  new_cols <- c(new_cols, paste(features$feature_categories[i], "_df", sep=""))\n  new_cols <- c(new_cols, paste(features$feature_categories[i], "_pval", sep=""))\n}\n\nnewcolnames=c(names(featanom),new_cols)\nfeatanom = cbind(featanom,matrix(NA,nrow=nrow(featanom),ncol=length(new_cols)))\ncolnames(featanom)=newcolnames\n\ncat("\\nPerforming anomaly detection for ",length(patient_names),"subjects:\\n\\n")\nfor(i in 1:length(patient_names)){\n  cat(paste("ID: ",patient_names[i]," (",i,"/",length(patient_names),")\\n",sep=""))\n  out=anomaly_detection_plot(ID=patient_names[i], features = features, onesided=TRUE)\n  rIDs = out[[2]]\n  if(!is.null(rIDs) && length(rIDs)>3){\n    outmat=out[[1]]\n    featanom[rIDs[c(-1,-2,-length(rIDs))],((ncol(featanom)-(length(new_cols)-1)):ncol(featanom))]=outmat[rIDs[c(-1,-2,-length(rIDs))],]\n  }\n}\n\n# View output\nhead(featanom)\n')),Object(i.b)("hr",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Was there something we didn't cover, or need more help?"),"\nLet us know by making a post in the ",Object(i.b)("a",{parentName:"p",href:"https://community.lamp.digital/"},"LAMP Community"),", or ",Object(i.b)("a",{parentName:"p",href:"mailto:team@digitalpsych.org"},"contact us directly"),". Thank you for your contribution! \ud83c\udf1f\n",Object(i.b)("em",{parentName:"p"},"Page last updated on July 3rd, 2020.")))}u.isMDXComponent=!0},422:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return d}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},f=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(t),p=a,d=f["".concat(r,".").concat(p)]||f[p]||m[p]||i;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);