(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{254:function(t,n,e){"use strict";e.r(n);var a=e(1),o=e.n(a),r=e(275),s=e.n(r),l=e(76),i=(e(74),e(158),e(292)),d=e(77),u=(e(159),e(32)),m=e.n(u),p=e(60),g=e.n(p),c=e(75),v=function(t){function n(n){var e;return(e=t.call(this,n)||this).toggle=e.toggle.bind(g()(g()(e))),e.state={dropdownOpen:!1},e}m()(n,t);var e=n.prototype;return e.toggle=function(){this.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})},e.render=function(){var t=this.props,n=t.files,e=t.nameEn,a=t.nameFr,r=t.path,s=t.i18n,i=n.sort(function(t,n){return parseInt(t.node.frontmatter.subnav.split("/")[3],10)-parseInt(n.node.frontmatter.subnav.split("/")[3],10)});return o.a.createElement(l.p,null,o.a.createElement(l.q,{onClick:this.toggle,className:"dropdown-toggle",style:{border:"0px"}},"en"===s.language?e:a),o.a.createElement(l.j,{isOpen:this.state.dropdownOpen},i.map(function(t){if("en"===s.language&&"en"===t.node.frontmatter.lang||"fr"===s.language&&"fr"===t.node.frontmatter.lang)return o.a.createElement(l.q,{active:r===t.node.frontmatter.path,style:{"padding-left":"2rem",border:"0px"}},o.a.createElement(d.a,{to:t.node.frontmatter.path,activeStyle:{color:"white"}},t.node.frontmatter.title))})))},n}(o.a.Component),f=Object(c.b)("default")(v),h=Object(c.b)("default")(function(t){return o.a.createElement(d.b,{query:"4163922871",render:function(n){var e="",a="",r=[],s=[];return n[t.path.split("/")[1]].edges.forEach(function(n){n.node.frontmatter.subnav.split("/")[1]!==e&&(""!==e&&s.push(o.a.createElement(f,{files:r,nameEn:e,nameFr:a,path:t.path})),r=[],e=n.node.frontmatter.subnav.split("/")[1],a=n.node.frontmatter.subnav.split("/")[2]),r.push(n)}),0!==r.push.length&&s.push(o.a.createElement(f,{files:r,nameEn:e,nameFr:a,path:t.path})),o.a.createElement("div",null,o.a.createElement(l.r,{vertical:!0},s))},data:i})}),b=e(81);e.d(n,"pageQuery",function(){return S}),n.default=Object(c.b)("default")(function(t){var n=t.data,e=t.i18n,a=n.eng,r=n.fr,i=a.frontmatter.path,d=new s.a({createElement:o.a.createElement,components:{badge:l.a}}).Compiler;return o.a.createElement(b.a,null,o.a.createElement(l.u,null,o.a.createElement(l.i,{xs:"3"},o.a.createElement(h,{path:i})),o.a.createElement(l.i,null,"en"===e.language||null===r?o.a.createElement("div",{className:"col-sm"},d(a.htmlAst)):o.a.createElement("div",{className:"col-sm"},d(r.htmlAst)))))});var S="1855962696"},292:function(t){t.exports={data:{component:{totalCount:30,edges:[{node:{frontmatter:{title:"Colour",path:"/component/colour",lang:"en",subnav:"1/Visuals/Visuels/1"}}},{node:{frontmatter:{title:"Icons",path:"/component/icons",lang:"en",subnav:"1/Visuals/Visuels/2"}}},{node:{frontmatter:{title:"Typography",path:"/component/typography",lang:"en",subnav:"1/Visuals/Visuels/3"}}},{node:{frontmatter:{title:"Typographie",path:"/component/typography",lang:"fr",subnav:"1/Visuals/Visuels/3"}}},{node:{frontmatter:{title:"Avatars and thumbnails",path:"/component/avatars-and-thumbnails",lang:"en",subnav:"2/Standard/Standard/1"}}},{node:{frontmatter:{title:"Tooltips",path:"/component/tooltips",lang:"en",subnav:"2/Standard/Standard/10"}}},{node:{frontmatter:{title:"Badges",path:"/component/badges",lang:"en",subnav:"2/Standard/Standard/2"}}},{node:{frontmatter:{title:"Badges",path:"/component/badges",lang:"fr",subnav:"2/Standard/Standard/2"}}},{node:{frontmatter:{title:"Buttons",path:"/component/buttons",lang:"en",subnav:"2/Standard/Standard/3"}}},{node:{frontmatter:{title:"Cards",path:"/component/cards",lang:"en",subnav:"2/Standard/Standard/4"}}},{node:{frontmatter:{title:"Comments",path:"/component/comments",lang:"en",subnav:"2/Standard/Standard/5"}}},{node:{frontmatter:{title:"Divider/Rule",path:"/component/divider-rule",lang:"en",subnav:"2/Standard/Standard/6"}}},{node:{frontmatter:{title:"Grids and Spacing",path:"/component/grids-and-spacing",lang:"en",subnav:"2/Standard/Standard/7"}}},{node:{frontmatter:{title:"System messaging",path:"/component/system-messaging",lang:"en",subnav:"2/Standard/Standard/8"}}},{node:{frontmatter:{title:"Tags, chips and pills",path:"/component/tags-chips-and-pills",lang:"en",subnav:"2/Standard/Standard/9"}}},{node:{frontmatter:{title:"Breadcrumbs",path:"/component/nav-breadcrumbs",lang:"en",subnav:"3/Navigation/Navigation/1"}}},{node:{frontmatter:{title:"Back to Top",path:"/component/nav-back-to-top",lang:"en",subnav:"3/Navigation/Navigation/2"}}},{node:{frontmatter:{title:"Drawers and Accordions",path:"/component/drawers-and-accordions",lang:"en",subnav:"3/Navigation/Navigation/3"}}},{node:{frontmatter:{title:"Links",path:"/component/links",lang:"en",subnav:"3/Navigation/Navigation/5"}}},{node:{frontmatter:{title:"Liens",path:"/component/links",lang:"fr",subnav:"3/Navigation/Navigation/5"}}},{node:{frontmatter:{title:"Menus",path:"/component/menus",lang:"en",subnav:"3/Navigation/Navigation/6"}}},{node:{frontmatter:{title:"Pagination and Scrolling",path:"/component/pagination-scrolling",lang:"en",subnav:"3/Navigation/Navigation/7"}}},{node:{frontmatter:{title:"Search",path:"/component/search",lang:"en",subnav:"3/Navigation/Navigation/8"}}},{node:{frontmatter:{title:"Barre de Recherche",path:"/component/search",lang:"fr",subnav:"3/Navigation/Navigation/8"}}},{node:{frontmatter:{title:"Form Design and Labels",path:"/component/forms-overall-design-and-labels",lang:"en",subnav:"4/Forms/Formulaires/1"}}},{node:{frontmatter:{title:"Button inputs",path:"/component/forms-buttons-inputs",lang:"en",subnav:"4/Forms/Formulaires/2"}}},{node:{frontmatter:{title:"Errors and validation",path:"/component/forms-errors-and-validation",lang:"en",subnav:"4/Forms/Formulaires/3"}}},{node:{frontmatter:{title:"File upload",path:"/component/file-upload",lang:"en",subnav:"4/Forms/Formulaires/4"}}},{node:{frontmatter:{title:"Progress indicators",path:"/component/progress-indicators",lang:"en",subnav:"4/Forms/Formulaires/5"}}},{node:{frontmatter:{title:"Text inputs",path:"/component/forms-text-inputs",lang:"en",subnav:"4/Forms/Formulaires/6"}}}]},overview:{totalCount:7,edges:[{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"en",subnav:"1/About/À notre sujet/1"}}},{node:{frontmatter:{title:"What's new?",path:"/overview/whats-new",lang:"en",subnav:"1/About/À notre sujet/2"}}},{node:{frontmatter:{title:"Quoi de neuf?",path:"/overview/whats-new",lang:"fr",subnav:"1/About/À notre sujet/2"}}},{node:{frontmatter:{title:"Frequently asked questions",path:"/overview/frequently-asked-questions",lang:"en",subnav:"1/About/À notre sujet/3"}}},{node:{frontmatter:{title:"Inclusive design",path:"/overview/inclusive-design",lang:"en",subnav:"2/Resources/Ressources/1"}}},{node:{frontmatter:{title:"Research and best practices",path:"/overview/research-and-best-practices",lang:"en",subnav:"2/Resources/Ressources/2"}}},{node:{frontmatter:{title:"Blogs",path:"/overview/blogs",lang:"en",subnav:"4/Community/Communauté/1"}}}]},content:{totalCount:5,edges:[{node:{frontmatter:{title:"Content guidelines",path:"/content/content-guidelines",lang:"en",subnav:"1/Content/Contenu/1"}}},{node:{frontmatter:{title:"Formatting",path:"/content/formatting",lang:"en",subnav:"1/Content/Contenu/2"}}},{node:{frontmatter:{title:"Glossary",path:"/content/glossary",lang:"en",subnav:"1/Content/Contenu/3"}}},{node:{frontmatter:{title:"Help articles",path:"/content/help-articles",lang:"en",subnav:"1/Content/Contenu/4"}}},{node:{frontmatter:{title:"System vocabulary",path:"/content/system-vocabulary",lang:"en",subnav:"1/Content/Contenu/5"}}}]},identity:null,data:{totalCount:8,edges:[{node:{frontmatter:{title:"Overview",path:"/data/data-overview",lang:"en",subnav:"1/Data/Données/1"}}},{node:{frontmatter:{title:"Choosing visualizations",path:"/data/choosing-visualizations",lang:"en",subnav:"1/Data/Données/2"}}},{node:{frontmatter:{title:"Column and bar graphs",path:"/data/column-and-bar-graphs",lang:"en",subnav:"1/Data/Données/3"}}},{node:{frontmatter:{title:"Legends and tooltips",path:"/data/legends-and-tooltips",lang:"en",subnav:"1/Data/Données/4"}}},{node:{frontmatter:{title:"Line graphs",path:"/data/line-graphs",lang:"en",subnav:"1/Data/Données/5"}}},{node:{frontmatter:{title:"Scatterplots",path:"/data/scatterplots",lang:"en",subnav:"1/Data/Données/6"}}},{node:{frontmatter:{title:"Stylized numbers",path:"/data/stylized numbers",lang:"en",subnav:"1/Data/Données/7"}}},{node:{frontmatter:{title:"Tables",path:"/data/tables",lang:"en",subnav:"1/Data/Données/8"}}}]}}}}}]);
//# sourceMappingURL=component---src-templates-md-template-js-9f8adc0bf0c106962450.js.map