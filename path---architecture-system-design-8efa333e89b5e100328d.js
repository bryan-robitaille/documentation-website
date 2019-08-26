webpackJsonp([1444413302176],{382:function(e,t){e.exports={data:{eng:{html:'<helmet>\n<title> Architecture - System Architecture </title>\n</helmet>\n<h1>System Architecture</h1>\n<p>The overall system relies on foundational microservices, an event driven message queue, and a jwt based authentication provider.</p>\n<p>Foundational Micro Services:</p>\n<ul>\n<li><a href="/profile/introduction">Profile as a service</a></li>\n<li><a href="">Notification as a Service</a></li>\n<li><a href="">Search as a Service</a></li>\n</ul>\n<p>Collaboration Services identified in the image below represent any of the additional services that are not foundational but are fully integrated in the Quantum architecture (Career Marketplace, Discussions, ect.)</p>\n<p>The message queue provides publication/subscription event handling for all connected services.  There is no need for an application to connect to a seperate API service by service but instead post a global message to an event.  All listening services subscribed to that event will then recieve a copy of the information to be handled internally.</p>\n<p>React Apps identified below are the Single Page Applications (SPA) that provide the visual window into the possibilities of Quantum.  From simple applications like Directory that focus on one key informational component to Career Marketplace that can have a wider focus the possibilities of what can be created are limitless.  With a user always in complete control of the data an application can access the security of information is truly in the users hands.  </p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 895px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 78.91097666378565%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADu0lEQVQ4y2NgwANu3rzJCKJPnz4juGPHjvObN2+eCeL/fz+JyT6gjOHzThOGLzuMGfACnYQpDAyMTGB2Xl4eK5Bi3rB2ZdSrl8//L168+CmDyTc2kNytte4s33ebgNV9ARr8GZvBYMOAoDTTloFB+D/D5e0tYJPnrznqtmv/qbOrV6/5f3p9UcP/gwzcMD1Aw5i/7oIaDDMUZhA6GwaurzBwfb7ZesLxpRH3Hm9y/P9tp8GTzztMUhCGGjMBDWaCa1i+cDZD/9TZjDoJU8H8U8s8gGH3n/noEm+T99tNa77tMtnxfa/5/9ebDL6/22r84tUW869vtpj+f7PJ4MzXXcauMHOAYcrM0FxfheIarfgprJ55XfxAAxn+H9DVeL/d7N3nPTb/320ze/duu9XrO2ssf99fbfzl4zbDZw9WG/3/ttv0P9DQdZ+2G6vBDfn//z/jlNmLhYxTp/N6Fs7kRYpnDlGvPP57G137nmyy/f1oo83/D1uN3rzZbPT+6lKzP083Wnz8vMP0JTBy/v/cY/ofGIa9YG319XXGM2fPmc7AoA4Oh2nzV6it27Stds3GrV2rN2zPmLNyf8He5dmWL9ZrTLyz2vL/4022/19ssXz5ZYfRxw/bTf9+2mHyExiOR4DhuhGkX1JEVFQUlDw2r10uNWPuoqS45uXKc2ZOFV+0YN70KTPntm3YvCVu0ZrdSfNXHyjetzjK4/MOo13f91n/f7fD+v/77RaXgBGyGZhsrGD+4mTn5BICGThh4mSVxqbmVCCbHYi5JJT1ZEDii5etmL9w8eJpC+ZNkQdFFoPFCb7Ty1wjnq032vlotV4TzKA3m4wQMS3MxMADohYtX6O6YcOGciBbQdrQQwJIg8JUqKmxQX/dxq3VMRUT1BnUWhmR4pG9MEyC+f//aISIS9067r7jnzlB7DWrVpZu2rTpgaSkJIjP7u7ioLlo6UqfhLo54itXrtKE6bmx0ZcJOXWICbIiOPblK8LsKlbdtyqYl65m6qQUmpCtaJa7mIvB9TtzTk23+uTJk6sMDQ05Zs6YrjB/wUIxkJ55s6YxSIuyMwjxMcPNYQK5u7y8PBSYeYVMUvrKLPPmXNSNaNSCyjPaZ00DpkcBFhBn0qTJ3Dt37vy5YMGCDhB/xYoVzFgLg+Li4hoFCQEeKBesed369bbTl2w0AKfR7685Jk2eHJHUvFR86ow5rq3NTYqQpFaPu4QBJmwG46qd8DA5euy40OmTx4RB7K1bt4qsWbN2cteEqUIw+fnz5+M0CwDRI5R6Jutf7gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="OADW Solution Architecture"\n        title=""\n        src="/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-71e8e.png"\n        srcset="/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-08905.png 224w,\n/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-eb8cb.png 448w,\n/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-71e8e.png 895w,\n/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-09504.png 1157w"\n        sizes="(max-width: 895px) 100vw, 895px"\n      />\n    </span>\n  </span>\n  </p>',htmlAst:{type:"root",children:[{type:"element",tagName:"helmet",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"title",properties:{},children:[{type:"text",value:" Architecture - System Architecture "}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h1",properties:{},children:[{type:"text",value:"System Architecture"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The overall system relies on foundational microservices, an event driven message queue, and a jwt based authentication provider."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Foundational Micro Services:"}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:"/profile/introduction"},children:[{type:"text",value:"Profile as a service"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:""},children:[{type:"text",value:"Notification as a Service"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"element",tagName:"a",properties:{href:""},children:[{type:"text",value:"Search as a Service"}]}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Collaboration Services identified in the image below represent any of the additional services that are not foundational but are fully integrated in the Quantum architecture (Career Marketplace, Discussions, ect.)"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The message queue provides publication/subscription event handling for all connected services.  There is no need for an application to connect to a seperate API service by service but instead post a global message to an event.  All listening services subscribed to that event will then recieve a copy of the information to be handled internally."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"React Apps identified below are the Single Page Applications (SPA) that provide the visual window into the possibilities of Quantum.  From simple applications like Directory that focus on one key informational component to Career Marketplace that can have a wider focus the possibilities of what can be created are limitless.  With a user always in complete control of the data an application can access the security of information is truly in the users hands.  "}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"\n  "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-wrapper"],style:"position: relative; display: block; ; max-width: 895px; margin-left: auto; margin-right: auto;"},children:[{type:"text",value:"\n    "},{type:"element",tagName:"span",properties:{className:["gatsby-resp-image-background-image"],style:"padding-bottom: 78.91097666378565%; position: relative; bottom: 0; left: 0; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADu0lEQVQ4y2NgwANu3rzJCKJPnz4juGPHjvObN2+eCeL/fz+JyT6gjOHzThOGLzuMGfACnYQpDAyMTGB2Xl4eK5Bi3rB2ZdSrl8//L168+CmDyTc2kNytte4s33ebgNV9ARr8GZvBYMOAoDTTloFB+D/D5e0tYJPnrznqtmv/qbOrV6/5f3p9UcP/gwzcMD1Aw5i/7oIaDDMUZhA6GwaurzBwfb7ZesLxpRH3Hm9y/P9tp8GTzztMUhCGGjMBDWaCa1i+cDZD/9TZjDoJU8H8U8s8gGH3n/noEm+T99tNa77tMtnxfa/5/9ebDL6/22r84tUW869vtpj+f7PJ4MzXXcauMHOAYcrM0FxfheIarfgprJ55XfxAAxn+H9DVeL/d7N3nPTb/320ze/duu9XrO2ssf99fbfzl4zbDZw9WG/3/ttv0P9DQdZ+2G6vBDfn//z/jlNmLhYxTp/N6Fs7kRYpnDlGvPP57G137nmyy/f1oo83/D1uN3rzZbPT+6lKzP083Wnz8vMP0JTBy/v/cY/ofGIa9YG319XXGM2fPmc7AoA4Oh2nzV6it27Stds3GrV2rN2zPmLNyf8He5dmWL9ZrTLyz2vL/4022/19ssXz5ZYfRxw/bTf9+2mHyExiOR4DhuhGkX1JEVFQUlDw2r10uNWPuoqS45uXKc2ZOFV+0YN70KTPntm3YvCVu0ZrdSfNXHyjetzjK4/MOo13f91n/f7fD+v/77RaXgBGyGZhsrGD+4mTn5BICGThh4mSVxqbmVCCbHYi5JJT1ZEDii5etmL9w8eJpC+ZNkQdFFoPFCb7Ty1wjnq032vlotV4TzKA3m4wQMS3MxMADohYtX6O6YcOGciBbQdrQQwJIg8JUqKmxQX/dxq3VMRUT1BnUWhmR4pG9MEyC+f//aISIS9067r7jnzlB7DWrVpZu2rTpgaSkJIjP7u7ioLlo6UqfhLo54itXrtKE6bmx0ZcJOXWICbIiOPblK8LsKlbdtyqYl65m6qQUmpCtaJa7mIvB9TtzTk23+uTJk6sMDQ05Zs6YrjB/wUIxkJ55s6YxSIuyMwjxMcPNYQK5u7y8PBSYeYVMUvrKLPPmXNSNaNSCyjPaZ00DpkcBFhBn0qTJ3Dt37vy5YMGCDhB/xYoVzFgLg+Li4hoFCQEeKBesed369bbTl2w0AKfR7685Jk2eHJHUvFR86ow5rq3NTYqQpFaPu4QBJmwG46qd8DA5euy40OmTx4RB7K1bt4qsWbN2cteEqUIw+fnz5+M0CwDRI5R6Jutf7gAAAABJRU5ErkJggg=='); background-size: cover; display: block;"},children:[{type:"text",value:"\n      "},{type:"element",tagName:"img",properties:{className:["gatsby-resp-image-image"],style:"width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;",alt:"OADW Solution Architecture",title:"",src:"/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-71e8e.png",srcSet:["/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-08905.png 224w","/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-eb8cb.png 448w","/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-71e8e.png 895w","/static/OADW_Architecture-Walkthrough-a6bf66bae45a89a68cadee688d31d43c-09504.png 1157w"],sizes:["(max-width:","895px)","100vw,","895px"]},children:[]},{type:"text",value:"\n    "}]},{type:"text",value:"\n  "}]},{type:"text",value:"\n  "}]}],data:{quirksMode:!1}},frontmatter:{title:"System Architecture",path:"/architecture/system_design",lang:"en"}},fr:null,overview:{totalCount:6,edges:[{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"fr",subnav:"1/About/À notre sujet/1"}}},{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"en",subnav:"1/About/À notre sujet/1"}}},{node:{frontmatter:{title:"Nouveautés",path:"/overview/whats-new",lang:"fr",subnav:"1/About/À notre sujet/2"}}},{node:{frontmatter:{title:"What's new?",path:"/overview/whats-new",lang:"en",subnav:"1/About/À notre sujet/2"}}},{node:{frontmatter:{title:"Ressources utiles",path:"/overview/resources",lang:"fr",subnav:"3/Resources/Ressources/2"}}},{node:{frontmatter:{title:"Helpful resources",path:"/overview/resources",lang:"en",subnav:"3/Resources/Ressources/2"}}}]},architecture:{totalCount:6,edges:[{node:{frontmatter:{title:"Introduction",path:"/architecture/introduction",lang:"fr",subnav:"0/Architecture/Architecture/1"}}},{node:{frontmatter:{title:"Technologie sous-jacente",path:"/architecture/underlying_technology",lang:"fr",subnav:"0/Architecture/Architecture/2"}}},{node:{frontmatter:{title:"Underlying Technology",path:"/architecture/underlying_technology",lang:"en",subnav:"0/Architecture/Architecture/2"}}},{node:{frontmatter:{title:"System Architecture",path:"/architecture/system_design",lang:"en",subnav:"0/Architecture/Architecture/3"}}},{node:{frontmatter:{title:"Integrations",path:"/architecture/integrations",lang:"en",subnav:"0/Architecture/Architecture/4"}}},{node:{frontmatter:{title:"Introduction",path:"/architecture/introduction",lang:"en",subnav:"0/Architecture/Architecutre/1"}}}]},identity:null,profile:{totalCount:12,edges:[{node:{frontmatter:{title:"Profil comme Service",path:"/profile/introduction",lang:"fr",subnav:"1/Profile/Profil/1"}}},{node:{frontmatter:{title:"Profile as a Service",path:"/profile/introduction",lang:"en",subnav:"1/Profile/Profil/1"}}},{node:{frontmatter:{title:"Data Models",path:"/profile/data-models",lang:"fr",subnav:"1/Profile/Profil/2"}}},{node:{frontmatter:{title:"Data Models",path:"/profile/data-models",lang:"en",subnav:"1/Profile/Profil/2"}}},{node:{frontmatter:{title:"Récupération des données",path:"/profile/queries",lang:"fr",subnav:"1/Profile/Profil/3"}}},{node:{frontmatter:{title:"Retrieving Data",path:"/profile/queries",lang:"en",subnav:"1/Profile/Profil/3"}}},{node:{frontmatter:{title:"Modifications des données",path:"/profile/mutations",lang:"fr",subnav:"1/Profile/Profil/4"}}},{node:{frontmatter:{title:"Modifying Data",path:"/profile/mutations",lang:"en",subnav:"1/Profile/Profil/4"}}},{node:{frontmatter:{title:"Avatars",path:"/profile/avatars",lang:"fr",subnav:"1/Profile/Profil/5"}}},{node:{frontmatter:{title:"Avatars",path:"/profile/avatars",lang:"en",subnav:"1/Profile/Profil/5"}}},{node:{frontmatter:{title:"Business Logic",path:"/profile/logic",lang:"fr",subnav:"1/Profile/Profil/6"}}},{node:{frontmatter:{title:"Business Logic",path:"/profile/logic",lang:"en",subnav:"1/Profile/Profil/6"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---architecture-system-design-8efa333e89b5e100328d.js.map