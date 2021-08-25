(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(376)),i=["components"],l={},p={unversionedId:"deploy/deploying",id:"deploy/deploying",isDocsHomePage:!1,title:"Deploying the LAMP Platform",description:"You must have a configured Docker Swarm cluster to continue.",source:"@site/docs/06-deploy/07-deploying.md",sourceDirName:"06-deploy",slug:"/deploy/deploying",permalink:"/deploy/deploying",editUrl:"https://github.com/BIDMCDigitalPsychiatry/LAMP-platform/edit/master/docs/06-deploy/07-deploying.md",version:"current",lastUpdatedBy:"Suraj Patel",lastUpdatedAt:1629894139,formattedLastUpdatedAt:"8/25/2021",sidebarPosition:7,frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Deploying via CloudFormation",permalink:"/deploy/cloudformation"},next:{title:"Testing the LAMP Platform",permalink:"/deploy/testing"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Cloud Mesh Router",id:"cloud-mesh-router",children:[]},{value:"LAMP Platform",id:"lamp-platform",children:[]},{value:"Maintaining and Updating the LAMP Platform",id:"maintaining-and-updating-the-lamp-platform",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You must have a configured Docker Swarm cluster to continue."),"\nPlease follow all steps below in the exact order specified, though you may skip optional steps."),Object(o.b)("p",null,"The files provided below support these orchestration tools: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Docker Compose")," (single-node)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Docker Swarm")," (single-node or multi-node)"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Kubernetes")," (multi-node)\n\u2192 For more information on using Kubernetes, ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/get-started/orchestration/"},"follow this guide")," or ",Object(o.b)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/kubernetes/#override-the-default-orchestrator"},"this guide")," instead.")),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This step is required.")," "),Object(o.b)("p",null,"Configure firewall rules as needed to avoid directly opening ports on your nodes, and instead appropriately route traffic through ports ",Object(o.b)("inlineCode",{parentName:"p"},"80")," (HTTP) and ",Object(o.b)("inlineCode",{parentName:"p"},"443")," (HTTPS). "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a new network called ",Object(o.b)("inlineCode",{parentName:"p"},"public")," to connect all externally accessible services. "),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker network create --driver overlay --attachable public\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Using your DNS provider of choice, provision a domain name (here we use ",Object(o.b)("inlineCode",{parentName:"p"},"[example.com](http://example.com)")," to represent your domain name and ",Object(o.b)("inlineCode",{parentName:"p"},"1.1.1.1")," to represent your node's IP address). "),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"DNS Records"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 RECORD NAME   \u2502 TYPE \u2502 VALUE   \u2502 TTL  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 example.com   \u2502 A    \u2502 1.1.1.1 \u2502 3600 \u2502 \n\u2502 *.example.com \u2502 A    \u2502 1.1.1.1 \u2502 3600 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you have multiple nodes in your cluster, be sure to configure alternate IP address values for all DNS records."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"DNS Records"),Object(o.b)("p",{parentName:"li"},"  For example, on ",Object(o.b)("strong",{parentName:"p"},"AWS Route53"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ROUND-ROBIN")," refers to ",Object(o.b)("inlineCode",{parentName:"p"},"Multivalue Answer")," response types ",Object(o.b)("strong",{parentName:"p"},"without")," health-check enabled."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 RECORD NAME   \u2502 TYPE \u2502 VALUE   \u2502 TTL  \u2502 MODE        \u2502 ALIAS   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 example.com   \u2502 A    \u2502 1.1.1.1 \u2502 3600 \u2502 ROUND-ROBIN \u2502 node-01 \u2502\n\u2502 example.com   \u2502 A    \u2502 2.2.2.2 \u2502 3600 \u2502 ROUND-ROBIN \u2502 node-02 \u2502\n\u2502 *.example.com \u2502 A    \u2502 1.1.1.1 \u2502 3600 \u2502 ROUND-ROBIN \u2502 node-01 \u2502\n\u2502 *.example.com \u2502 A    \u2502 2.2.2.2 \u2502 3600 \u2502 ROUND-ROBIN \u2502 node-02 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))))),Object(o.b)("h3",{id:"cloud-mesh-router"},"Cloud Mesh Router"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This step is optional and can be skipped."),"\nWe recommend deploying ",Object(o.b)("inlineCode",{parentName:"p"},"Traefik")," as a ",Object(o.b)("strong",{parentName:"p"},"Cloud Mesh Router")," to make it easier to connect services and components, generate SSL certificates for encrypting traffic, diagnose traffic issues, and capture access logs for auditing."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Docker Stack:")," ",Object(o.b)("inlineCode",{parentName:"p"},"**traefik.yml**")),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("strong",{parentName:"p"},"You MUST replace the following configuration variables in your copy of this file:")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"administrator@example.com")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'version: "3.7"\nservices:\n  traefik:\n    image: traefik:latest\n    command:\n      - "--log.level=INFO"\n      - "--accesslog=true"\n      - "--api=true"\n      - "--providers.docker=true"\n      - "--providers.docker.swarmMode=true"\n      - "--providers.docker.exposedByDefault=false"\n      - "--entrypoints.web.address=:80"\n      - "--entrypoints.websecure.address=:443"\n      - "--entrypoints.websecure.http.tls.certResolver=default"\n      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"\n      - "--entrypoints.web.http.redirections.entryPoint.scheme=https"\n      - "--entrypoints.web.http.redirections.entryPoint.permanent=true"\n      - "--certificatesResolvers.default.acme.email=administrator@example.com"\n      - "--certificatesResolvers.default.acme.storage=/data/acme.json"\n      - "--certificatesResolvers.default.acme.tlsChallenge=true"\n    volumes:\n      - "/var/run/docker.sock:/var/run/docker.sock:ro"\n      - "traefik-ssl:/data/"\n    ports:\n      - target: 80\n        protocol: tcp\n        published: 80\n        mode: ingress\n      - target: 443\n        protocol: tcp\n        published: 443\n        mode: ingress\n    networks:\n      - public\n    deploy:\n      mode: replicated\n      placement:\n        constraints:\n          - node.role == manager\nnetworks:\n  public:\n    external: true\nvolumes:\n  traefik-ssl:\n')))))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker stack deploy --compose-file traefik.yml router\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"We recommend deploying ",Object(o.b)("inlineCode",{parentName:"strong"},"[Portainer](https://www.portainer.io/)"))," as a ",Object(o.b)("strong",{parentName:"p"},"Swarm Management Console")," to make it easier to troubleshoot failed deployments, rapidly test and integrate new components, and effectively monitor container logs and health. Read this documentation to learn more about ",Object(o.b)("a",{parentName:"p",href:"https://portainer.readthedocs.io/en/stable/"},"Portainer and how to configure and use it"),"."),Object(o.b)("h3",{id:"lamp-platform"},"LAMP Platform"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This step is required.")," "),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"/data")," folder in the node that will be hosting the database(s)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /data/couchdb\n")),Object(o.b)("p",null,"You must first generate two cryptographically secure hexadecimal strings. Substitute these strings in the stack file below as indicated by the environment variables after the ",Object(o.b)("inlineCode",{parentName:"p"},"#"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"openssl rand -hex 8 # DB_PASSWORD_HERE\nopenssl rand -hex 32 # 32_BIT_ENCRYPTION_KEY_HERE\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Docker Stack:")," ",Object(o.b)("inlineCode",{parentName:"p"},"**lamp.yml**")),Object(o.b)("p",{parentName:"li"},"  ",Object(o.b)("strong",{parentName:"p"},"You MUST replace the following configuration variables in your copy of this file:")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"32_BIT_ENCRYPTION_KEY_HERE")," See above.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"DB_PASSSWORD_HERE")," See above.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"YOUR_PUSH_KEY_HERE")," \u2192 ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"mailto:team@digitalpsych.org"},"Please contact us to enable push notifications.")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"api.example.com")," Your LAMP Platform API Server domain shared with others to use.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"db.example.com")," Your internal database management domain."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"version: '3.7'\nservices:\n  server:\n    image: ghcr.io/bidmcdigitalpsychiatry/lamp-server:2021\n    healthcheck:\n      test: wget --no-verbose --tries=1 --spider http://localhost:3000 || exit 1\n    environment:\n      HTTPS: 'off'\n      ROOT_KEY: '32_BIT_ENCRYPTION_KEY_HERE'\n      CDB: 'http://admin:DB_PASSSWORD_HERE@database:5984/'\n      PUSH_API_GATEWAY: 'https://app-gateway.lamp.digital/'\n      PUSH_API_KEY: 'YOUR_PUSH_KEY_HERE'\n      DASHBOARD_URL: 'dashboard.lamp.digital'\n      REDIS_HOST: 'redis://cache:6379/0'\n      NATS_SERVER: 'message_queue:4222'\n    networks:\n      - default\n      - public\n    deploy:\n      mode: replicated\n      update_config:\n        order: start-first\n        failure_action: rollback\n      labels:\n        traefik.enable: 'true'\n        traefik.docker.network: 'public'\n        traefik.http.routers.lamp_server.entryPoints: 'websecure'\n        traefik.http.routers.lamp_server.rule: 'Host(`api.example.com`)'\n        traefik.http.routers.lamp_server.tls.certresolver: 'default'\n        traefik.http.services.lamp_server.loadbalancer.server.port: 3000\n      placement:\n        constraints:\n          - node.role == manager\n  database:\n    image: apache/couchdb:3.1.1\n    healthcheck:\n      test: curl --fail --silent http://localhost:5984/_up || exit 1\n    environment:\n      COUCHDB_USER: 'admin'\n      COUCHDB_PASSWORD: 'DB_PASSWORD_HERE'\n    volumes:\n      - /data/couchdb:/opt/couchdb/data\n    networks:\n      - public\n    deploy:\n      mode: replicated\n      update_config:\n        order: stop-first\n        failure_action: rollback\n      labels:\n        traefik.enable: 'true'\n        traefik.http.routers.lamp_database.entryPoints: 'websecure'\n        traefik.http.routers.lamp_database.rule: 'Host(`db.example.com`)'\n        traefik.http.routers.lamp_database.tls.certresolver: 'default'\n        traefik.http.services.lamp_database.loadbalancer.server.port: 5984\n      placement:\n        constraints:\n          - node.role == manager\n  cache:\n    image: redis:6.0.8-alpine\n    healthcheck:\n      test: redis-cli ping\n    deploy:\n      mode: replicated\n      update_config:\n        order: stop-first\n        failure_action: rollback\n      placement:\n        constraints:\n          - node.role == manager\n  message_queue:\n    image: nats:2.1.9-alpine3.12\n    healthcheck:\n      test: wget --no-verbose --tries=1 --spider http://localhost:8222/varz || exit 1\n    deploy:\n      mode: replicated\n      update_config:\n        order: start-first\n        failure_action: rollback\n      placement:\n        constraints:\n          - node.role == manager\nnetworks:\n  public:\n    external: true\n")))))),Object(o.b)("p",null,"If you've deployed the ",Object(o.b)("strong",{parentName:"p"},"Swarm Management Console"),", log into your swarm cluster and navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"Stack"),' tab on the left sidebar. Paste the contents of the stack file into the editor pane and tap "Deploy", instead of running the command below. '),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"docker stack deploy --compose-file lamp.yml lamp\n")),Object(o.b)("h2",{id:"maintaining-and-updating-the-lamp-platform"},"Maintaining and Updating the LAMP Platform"),Object(o.b)("p",null,"If you are using this Docker Stack provided, you will only need to run a ",Object(o.b)("inlineCode",{parentName:"p"},"docker service update")," command on the API Server to pull the latest image. Because Docker image versioning is calendar-based, at the moment you will manually need to update from ",Object(o.b)("inlineCode",{parentName:"p"},"2021")," to ",Object(o.b)("inlineCode",{parentName:"p"},"2022"),", and so on."))}b.isMDXComponent=!0},376:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,u=b["".concat(i,".").concat(m)]||b[m]||d[m]||o;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);