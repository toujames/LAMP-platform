"use strict";(self.webpackChunkLAMP_documentation=self.webpackChunkLAMP_documentation||[]).push([[9514,4608],{871055:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(667294),l=a(386010),o=a(595999),r="backToTopButton_i9tI",c="backToTopButtonShow_wCmF",i=a(153810);function s(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var d=function(){var e,t=(0,n.useState)(!1),a=t[0],d=t[1],u=(0,n.useRef)(!1),m=s(),b=m.smoothScrollTop,p=m.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(u.current)u.current=!1;else{var l=a<n;if(l||p(),a<300)d(!1);else if(l){var o=document.documentElement.scrollHeight;a+window.innerHeight<o&&d(!0)}else d(!1)}})),(0,i.SL)((function(e){e.location.hash&&(u.current=!0,d(!1))})),n.createElement("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",i.kM.common.backToTopButton,r,(e={},e[c]=a,e)),type:"button",onClick:function(){return b()}})}},333847:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(667294),l=a(603905),o=a(746291),r=a(77019),c=a(310284),i=a(119028),s=a(724608),d=a(134096),u=a(871055),m=a(276775),b=a(595999),p=a(386010),f={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},h=a(153810),v=a(212859);function E(e){var t,a,o,s=e.currentDocRoute,m=e.versionMetadata,v=e.children,E=e.sidebarName,g=(0,h.Vq)(),k=m.pluginId,_=m.version,Z=(0,n.useState)(!1),C=Z[0],N=Z[1],S=(0,n.useState)(!1),I=S[0],T=S[1],M=(0,n.useCallback)((function(){I&&T(!1),N((function(e){return!e}))}),[I]);return n.createElement(r.Z,{wrapperClassName:h.kM.wrapper.docsPages,pageClassName:h.kM.page.docsDocPage,searchMetadata:{version:_,tag:(0,h.os)(k,_)}},n.createElement("div",{className:f.docPage},n.createElement(u.Z,null),g&&n.createElement("aside",{className:(0,p.Z)(f.docSidebarContainer,(t={},t[f.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(f.docSidebarContainer)&&C&&T(!0)}},n.createElement(c.Z,{key:E,sidebar:g,path:s.path,onCollapse:M,isHidden:I}),I&&n.createElement("div",{className:f.collapsedDocSidebar,title:(0,b.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:M,onClick:M},n.createElement(d.Z,{className:f.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,p.Z)(f.docMainContainer,(a={},a[f.docMainContainerEnhanced]=C||!g,a))},n.createElement("div",{className:(0,p.Z)("container padding-top--md padding-bottom--lg",f.docItemWrapper,(o={},o[f.docItemWrapperEnhanced]=C,o))},n.createElement(l.Zo,{components:i.Z},v)))))}var g=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,r=t.find((function(e){return(0,m.LX)(l.pathname,e)}));if(!r)return n.createElement(s.default,null);var c=r.sidebar,i=c?a.docsSidebars[c]:null;return n.createElement(n.Fragment,null,n.createElement(v.Z,null,n.createElement("html",{className:a.className})),n.createElement(h.qu,{version:a},n.createElement(h.bT,{sidebar:i},n.createElement(E,{currentDocRoute:r,versionMetadata:a,sidebarName:c},(0,o.Z)(t,{versionMetadata:a})))))}},310284:function(e,t,a){a.d(t,{Z:function(){return W}});var n=a(667294),l=a(386010),o=a(153810),r=a(393783),c=a(755537),i=a(134096),s=a(595999),d=a(487462),u=a(263366),m=a(239960),b=a(813919),p=a(390541),f="menuLinkText_OKON",h="hasHref_TwRn",v=a(972389),E=["items"],g=["item"],k=["item","onItemClick","activePath","level"],_=["item","onItemClick","activePath","level"],Z=(0,n.memo)((function(e){var t=e.items,a=(0,u.Z)(e,E);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(C,(0,d.Z)({key:t,item:e},a))})))}));function C(e){var t=e.item,a=(0,u.Z)(e,g);return"category"===t.type?0===t.items.length?null:n.createElement(N,(0,d.Z)({item:t},a)):n.createElement(S,(0,d.Z)({item:t},a))}function N(e){var t,a=e.item,r=e.onItemClick,c=e.activePath,i=e.level,b=(0,u.Z)(e,k),p=a.items,E=a.label,g=a.collapsible,_=a.className,C=a.href,N=function(e){var t=(0,v.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0}),[e,t])}(a),S=(0,o._F)(a,c),I=(0,o.uR)({initialState:function(){return!!g&&(!S&&a.collapsed)}}),T=I.collapsed,M=I.setCollapsed,y=I.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,o.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:S,collapsed:T,setCollapsed:M}),n.createElement("li",{className:(0,l.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":T},_)},n.createElement("div",{className:"menu__list-item-collapsible"},n.createElement(m.Z,(0,d.Z)({className:(0,l.Z)("menu__link",(t={"menu__link--sublist":g&&!C,"menu__link--active":S},t[f]=!g,t[h]=!!N,t)),onClick:g?function(e){null==r||r(a),C?M(!1):(e.preventDefault(),y())}:function(){null==r||r(a)},href:g?null!=N?N:"#":N},b),E),C&&g&&n.createElement("button",{"aria-label":(0,s.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:E}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),y()}})),n.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:T},n.createElement(Z,{items:p,tabIndex:T?-1:0,onItemClick:r,activePath:c,level:i+1})))}function S(e){var t=e.item,a=e.onItemClick,r=e.activePath,c=e.level,i=(0,u.Z)(e,_),s=t.href,f=t.label,h=t.className,v=(0,o._F)(t,r);return n.createElement("li",{className:(0,l.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(c),"menu__list-item",h),key:f},n.createElement(m.Z,(0,d.Z)({className:(0,l.Z)("menu__link",{"menu__link--active":v}),"aria-current":v?"page":void 0,to:s},(0,b.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},i),(0,b.Z)(s)?f:n.createElement("span",null,f,n.createElement(p.Z,null))))}var I="sidebar_a3j0",T="sidebarWithHideableNavbar_VlPv",M="sidebarHidden_OqfG",y="sidebarLogo_hmkv",A="menu_cyFh",w="menuWithAnnouncementBar_+O1J",L="collapseSidebarButton_eoK2",F="collapseSidebarButtonIcon_e+kA";function P(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,s.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",L),onClick:t},n.createElement(i.Z,{className:F}))}function B(e){var t,a,r=e.path,i=e.sidebar,s=e.onCollapse,d=e.isHidden,u=function(){var e=(0,o.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,o.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),m=(0,o.LU)(),b=m.navbar.hideOnScroll,p=m.hideableSidebar;return n.createElement("div",{className:(0,l.Z)(I,(t={},t[T]=b,t[M]=d,t))},b&&n.createElement(c.Z,{tabIndex:-1,className:y}),n.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",A,(a={},a[w]=u,a))},n.createElement("ul",{className:(0,l.Z)(o.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:i,activePath:r,level:1}))),p&&n.createElement(P,{onClick:s}))}var x=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:(0,l.Z)(o.kM.docs.docSidebarMenu,"menu__list")},n.createElement(Z,{items:a,activePath:r,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function R(e){return n.createElement(o.Cv,{component:x,props:e})}var D=n.memo(B),H=n.memo(R);function W(e){var t=(0,r.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(D,e),l&&n.createElement(H,e))}},134096:function(e,t,a){var n=a(487462),l=a(667294);t.Z=function(e){return l.createElement("svg",(0,n.Z)({width:"20",height:"20","aria-hidden":"true"},e),l.createElement("g",{fill:"#7a7a7a"},l.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},724608:function(e,t,a){a.r(t);var n=a(667294),l=a(77019),o=a(595999);t.default=function(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);