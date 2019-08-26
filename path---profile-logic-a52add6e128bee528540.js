webpackJsonp([99202152675517],{395:function(e,t){e.exports={data:{eng:{html:"<helmet>\n<title> Profile - Business Logic</title>\n</helmet>\n<h2>Business Logic</h2>\n<p>The user is the source of truth for information except for fields that require additional validation, such as the user's organization, team, or supervisor.  The user that owns the team that a user is attempting to join must approve their request.  Until the approval is processed, the user will continue to remain a part of the team / organization that they are currently a part of.</p>\n<h3>Supervisor</h3>\n<p>There is no external validation of \"supervisory\" status.  Instead it is assumed that a user is a supervisor once a single user identifies them as their supervisor which creates a reporting relationship between the two users.</p>\n<h4>Teams</h4>\n<p>Teams are how users are grouped in reporting relationships, and allow for the dynamic creation and dispaly of reporting relationship graphs.\nIt is important to note that the reporting relationship with teams will follow the user from team to team or organization to organization unless explicitly transferred to another user.</p>\n<p><strong>You can:</strong></p>\n<ul>\n<li>Create teams</li>\n<li>Modify your teams</li>\n<li>Delete your teams</li>\n<li>Transfer your teams</li>\n</ul>\n<p><strong>You can not:</strong></p>\n<ul>\n<li>Create someone else's teams</li>\n<li>Modify someone else's teams</li>\n<li>Delete someone else's teams</li>\n<li>Delete your default team</li>\n</ul>\n<h4>Approvals</h4>\n<p><strong>You can:</strong></p>\n<ul>\n<li>Approve or deny membership requests to join a team you own</li>\n<li>Approve or deny informational requests of reporting user's information fields requiring validation</li>\n</ul>\n<p><strong>You can not:</strong></p>\n<ul>\n<li>Approve any other requests except for users who have a direct reporting relationship with you</li>\n</ul>\n<h3>User</h3>\n<p>Everyone is a user, even if they have supervisory status, and is responsible for ensuring their information is up to date.</p>\n<h4>Supervisor</h4>\n<p><strong>You can:</strong></p>\n<ul>\n<li>Select another user as your supervisor.  The reporting relationship will only be created once the other user has approved your request.</li>\n</ul>\n<p><strong>You can not:</strong></p>\n<ul>\n<li>Select another user as your supervisor without their consent.</li>\n</ul>\n<h4>Organization</h4>\n<p>By default, everyone is a part of the \"Global Organization\" when a profile is created.  This default organizaiton contains everyone who is not directly associated to a specific organization.</p>\n<p><strong>You can:</strong></p>\n<ul>\n<li>Join an organization directly without identifying a supervisor.  This will list you as in the organization's Default Team.</li>\n<li>Join an organization by identifying another user as your supervisor who is a part of the organization you want to join</li>\n</ul>\n<p><strong>You can not:</strong></p>\n<ul>\n<li>Create an organization</li>\n<li>Identify a user as your supervisor but remain not part of their organization</li>\n<li>Modify an organization</li>\n<li>Delete an organization</li>\n</ul>",htmlAst:{type:"root",children:[{type:"element",tagName:"helmet",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"title",properties:{},children:[{type:"text",value:" Profile - Business Logic"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Business Logic"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"The user is the source of truth for information except for fields that require additional validation, such as the user's organization, team, or supervisor.  The user that owns the team that a user is attempting to join must approve their request.  Until the approval is processed, the user will continue to remain a part of the team / organization that they are currently a part of."}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"Supervisor"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:'There is no external validation of "supervisory" status.  Instead it is assumed that a user is a supervisor once a single user identifies them as their supervisor which creates a reporting relationship between the two users.'}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Teams"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Teams are how users are grouped in reporting relationships, and allow for the dynamic creation and dispaly of reporting relationship graphs.\nIt is important to note that the reporting relationship with teams will follow the user from team to team or organization to organization unless explicitly transferred to another user."}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"You can:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Create teams"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Modify your teams"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Delete your teams"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Transfer your teams"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"You can not:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Create someone else's teams"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Modify someone else's teams"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Delete someone else's teams"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Delete your default team"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Approvals"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"You can:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Approve or deny membership requests to join a team you own"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Approve or deny informational requests of reporting user's information fields requiring validation"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"You can not:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Approve any other requests except for users who have a direct reporting relationship with you"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h3",properties:{},children:[{type:"text",value:"User"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:"Everyone is a user, even if they have supervisory status, and is responsible for ensuring their information is up to date."}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Supervisor"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"You can:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Select another user as your supervisor.  The reporting relationship will only be created once the other user has approved your request."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"You can not:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Select another user as your supervisor without their consent."}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h4",properties:{},children:[{type:"text",value:"Organization"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"text",value:'By default, everyone is a part of the "Global Organization" when a profile is created.  This default organizaiton contains everyone who is not directly associated to a specific organization.'}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"You can:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Join an organization directly without identifying a supervisor.  This will list you as in the organization's Default Team."}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Join an organization by identifying another user as your supervisor who is a part of the organization you want to join"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"p",properties:{},children:[{type:"element",tagName:"strong",properties:{},children:[{type:"text",value:"You can not:"}]}]},{type:"text",value:"\n"},{type:"element",tagName:"ul",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Create an organization"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Identify a user as your supervisor but remain not part of their organization"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Modify an organization"}]},{type:"text",value:"\n"},{type:"element",tagName:"li",properties:{},children:[{type:"text",value:"Delete an organization"}]},{type:"text",value:"\n"}]}],data:{quirksMode:!1}},frontmatter:{title:"Business Logic",path:"/profile/logic",lang:"en"}},fr:{html:"<helmet>\n<title> Profil - logique d'entreprise</title>\n</helmet>\n<h2>Traductions françaises à venir</h2>",htmlAst:{type:"root",children:[{type:"element",tagName:"helmet",properties:{},children:[{type:"text",value:"\n"},{type:"element",tagName:"title",properties:{},children:[{type:"text",value:" Profil - logique d'entreprise"}]},{type:"text",value:"\n"}]},{type:"text",value:"\n"},{type:"element",tagName:"h2",properties:{},children:[{type:"text",value:"Traductions françaises à venir"}]}],data:{quirksMode:!1}},frontmatter:{title:"logique d'entreprise",path:"/profile/logic",lang:"fr"}},overview:{totalCount:2,edges:[{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"en",subnav:"1/About/À notre sujet/1"}}},{node:{frontmatter:{title:"Introduction",path:"/overview/introduction",lang:"fr",subnav:"1/About/À notre sujet/1"}}}]},architecture:{totalCount:6,edges:[{node:{frontmatter:{title:"Introduction",path:"/architecture/introduction",lang:"fr",subnav:"0/Architecture/Architecture/1"}}},{node:{frontmatter:{title:"Underlying Technology",path:"/architecture/underlying_technology",lang:"en",subnav:"0/Architecture/Architecture/2"}}},{node:{frontmatter:{title:"Technologie sous-jacente",path:"/architecture/underlying_technology",lang:"fr",subnav:"0/Architecture/Architecture/2"}}},{node:{frontmatter:{title:"System Architecture",path:"/architecture/system_design",lang:"en",subnav:"0/Architecture/Architecture/3"}}},{node:{frontmatter:{title:"Integrations",path:"/architecture/integrations",lang:"en",subnav:"0/Architecture/Architecture/4"}}},{node:{frontmatter:{title:"Introduction",path:"/architecture/introduction",lang:"en",subnav:"0/Architecture/Architecutre/1"}}}]},identity:null,profile:{totalCount:12,edges:[{node:{frontmatter:{title:"Introduction",path:"/profile/introduction",lang:"en",subnav:"1/Profile/Profil/1"}}},{node:{frontmatter:{title:"Introduction",path:"/profile/introduction",lang:"fr",subnav:"1/Profile/Profil/1"}}},{node:{frontmatter:{title:"Data Models",path:"/profile/data-models",lang:"en",subnav:"1/Profile/Profil/2"}}},{node:{frontmatter:{title:"modèles de données",path:"/profile/data-models",lang:"fr",subnav:"1/Profile/Profil/2"}}},{node:{frontmatter:{title:"Récupération des données",path:"/profile/queries",lang:"fr",subnav:"1/Profile/Profil/3"}}},{node:{frontmatter:{title:"Retrieving Data",path:"/profile/queries",lang:"en",subnav:"1/Profile/Profil/3"}}},{node:{frontmatter:{title:"Modifying Data",path:"/profile/mutations",lang:"en",subnav:"1/Profile/Profil/4"}}},{node:{frontmatter:{title:"Modifications des données",path:"/profile/mutations",lang:"fr",subnav:"1/Profile/Profil/4"}}},{node:{frontmatter:{title:"Avatars",path:"/profile/avatars",lang:"en",subnav:"1/Profile/Profil/5"}}},{node:{frontmatter:{title:"Avatars",path:"/profile/avatars",lang:"fr",subnav:"1/Profile/Profil/5"}}},{node:{frontmatter:{title:"Business Logic",path:"/profile/logic",lang:"en",subnav:"1/Profile/Profil/6"}}},{node:{frontmatter:{title:"logique d'entreprise",path:"/profile/logic",lang:"fr",subnav:"1/Profile/Profil/6"}}}]},notifications:{totalCount:8,edges:[{node:{frontmatter:{title:"Introduction",path:"/notifications/introduction",lang:"en",subnav:"1/Notifications/Notifications/1"}}},{node:{frontmatter:{title:"Introduction",path:"/notifications/introduction",lang:"fr",subnav:"1/Notifications/Notifications/1"}}},{node:{frontmatter:{title:"Data Models",path:"/notifications/data-models",lang:"en",subnav:"1/Notifications/Notifications/2"}}},{node:{frontmatter:{title:"modèles de données",path:"/notifications/data-models",lang:"fr",subnav:"1/Notifications/Notifications/2"}}},{node:{frontmatter:{title:"Retrieving Data",path:"/notifications/queries",lang:"en",subnav:"1/Notifications/Notifications/3"}}},{node:{frontmatter:{title:"Récupération des données",path:"/notifications/queries",lang:"fr",subnav:"1/Notifications/Notifications/3"}}},{node:{frontmatter:{title:"Modifying Data",path:"/notifications/mutations",lang:"en",subnav:"1/Notifications/Notifications/4"}}},{node:{frontmatter:{title:"Modifications des données",path:"/notifications/mutations",lang:"fr",subnav:"1/Notifications/Notifications/4"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---profile-logic-a52add6e128bee528540.js.map