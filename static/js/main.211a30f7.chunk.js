(this.webpackJsonptaxodium=this.webpackJsonptaxodium||[]).push([[0],{145:function(e,t){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},207:function(e,t){},253:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n.n(a),o=n(177),r=n.n(o),s=(n(203),n(52)),c=n(54),l=(n(204),n(114)),d=n(35),u=n(266),b=n(268),m=n(273),h=n(274),j=n(269),f=n(275),g=(n(205),n(7));var p=function(e){var t=e.isShown,n=e.progress;return t?Object(g.jsxs)("div",{className:"w-full h-full fixed bg-white text-center",children:[" ",Object(g.jsx)("div",{className:"loader z-50",children:"Loading..."}),Object(g.jsxs)("div",{className:"text-black",children:["Loading ",n,"%"]})]}):Object(g.jsx)(g.Fragment,{})};function x(e,t,n){var a=Object(d.a)(Object(d.a)({},e),{},{data:O(e.data,t,n),visible:!0,id:e.id+"_coarse"}),i=function(e){return Object(d.a)(Object(d.a)({},e),{},{id:e.id.replace("main","mini"),lineWidthScale:1,pickable:!1,getRadius:e.id.includes("search")?.5*e.getRadius:e.getRadius})}(a);return[a,Object(d.a)(Object(d.a)({},e),{},{visible:!0,id:e.id+"_fine"}),i]}function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a={},i=e.filter((function(e){var i=Math.round(t.x[e]*n)/n,o=Math.round(t.y[e]*n)/n;return a[i]?!a[i][o]&&(a[i][o]=1,!0):(a[i]=Object(l.a)({},o,1),!0)}));return i}var v=[{contour:[[-100,-100],[-100,100],[100,100],[100,-100]],zipcode:94107,population:26599,area:6.11}];function y(e){if(void 0===e)return[200,200,200];if("unknown"===e)return[200,200,200];if("USA"===e)return[95,158,245];if("England"===e)return[214,58,15];if("Scotland"===e)return[255,130,82];if("Wales"===e)return[148,49,22];if("Northern Ireland"===e)return[140,42,15];if("France"===e)return[140,28,120];if("Germany"===e)return[106,140,28];if("India"===e)return[61,173,166];if("Denmark"===e)return[24,112,32];var t=0;if(0===(e=e.split("").reverse().join("")).length)return t;for(var n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t),t&=t;var a=[0,0,0];for(n=0;n<3;n++){var i=t>>8*n&255;a[n]=i}return a[0]+a[1]+a[2]<150||a[0]+a[1]+a[2]>500?y(e+"_"):a}function w(e){var t=y(e);return"rgb(".concat(t[0],",").concat(t[1],",").concat(t[2],")")}var N=function(e){return[1/Math.pow(2,e-5.6),0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},C=function(e){return 7/Math.pow(2,e.zoom-5.6)};var k=function(e){var t=e.data,n=e.colourBy,i=e.searchItems,o=e.progress,r=e.setSelectedNode,l=e.searchColors,O=Object(a.useState)({ids:[],top:0,bottom:0}),k=Object(c.a)(O,2),S=k[0],M=k[1],_=t.node_data,z=Object(a.useMemo)((function(){return _.ids.filter((function(e){return""!==_.names[e]}))}),[_]),A=Object(a.useState)(),T=Object(c.a)(A,2),R=T[0],I=T[1],P=Object(a.useState)({zoom:4.7,target:[6,13]}),E=Object(c.a)(P,2),U=E[0],L=E[1],B=Object(a.useRef)(null),D=Object(a.useCallback)((function(e){var t=e.viewId,n=e.viewState;e.oldViewState;if("minimap"!==t&&(n.minimap={zoom:3,target:[5,13]},n.target[0]=C(n),B.current.viewports.length)){var a=B.current.viewports[0],i=a.unproject([0,0,0]),o=a.unproject([a.width,a.height,0]);o[0]=o[0]*Math.pow(2,n.zoom-6),i[0]=i[0]*Math.pow(2,n.zoom-6),n=Object(d.a)(Object(d.a)({},n),{},{nw:i,se:o,needs_update:!1}),i[0]=-500,o[0]=500,L(n)}}),[B]),W=Object(a.useState)(!1),q=Object(c.a)(W,2),F=q[0],G=q[1],V=Object(a.useCallback)((function(e){if(0===e.buttons&&"onMouseMove"===e._reactName)return!1;var t=B.current.pickObject({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY,radius:1});if("onMouseDown"===e._reactName&&(t&&"minimap"===t.viewport.id?G(!0):G(!1)),t&&"main"===t.viewport.id&&"onClick"===e._reactName&&r(t.object),t||"onClick"!==e._reactName||r(null),t&&"minimap"===t.viewport.id&&F){var n=Object(d.a)(Object(d.a)({},U),{},{target:[C(U),t.coordinate[1]],needs_update:!0});L(n)}}),[U,F,r]),H=Object(a.useMemo)((function(){return new b.a({id:"mini-poly-layer",data:v,pickable:!0,stroked:!0,opacity:.5,filled:!0,wireframe:!0,getPolygon:function(e){return e.contour},getFillColor:function(e){return[240,240,240]},getLineColor:[80,80,80],getLineWidth:1,lineWidthUnits:"pixels"})}),[]),K=Object(a.useMemo)((function(){return{data:z.filter((function(){return!0})),visible:!0,opacity:.6,getRadius:3,radiusUnits:"pixels",id:"main-scatter",pickable:!0,getLineColor:[100,100,100],lineWidthUnits:"pixels",lineWidthScale:1,onHover:function(e){return I(e)},getPosition:function(e){return[_.x[e],_.y[e]]},getFillColor:function(e){return"lineage"===n?y(t.lineage_mapping[_.lineages[e]]):"country"===n?y(t.country_mapping[_.countries[e]]):[200,200,200]}}}),[z,_,t,n]),Y=Object(a.useMemo)((function(){return x(K,_,100)}),[K,_]),J=Object(a.useMemo)((function(){return Y.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:N(U.zoom),stroked:e.id.includes("mini")?void 0:U.zoom>15,radiusMaxPixels:e.id.includes("mini")?2:U.zoom>15?U.zoom/5:3})}))}),[Y,U.zoom]),X=Object(a.useMemo)((function(){return J.map((function(e){return new m.a(e)}))}),[J]),Q=Object(a.useMemo)((function(){return i.map((function(e,n){var a,i=e.value.toLowerCase().trim();if("mutation"===e.category){var o=t.mutation_mapping.indexOf(e.value);a=function(e){return _.mutations[e].mutation&&_.mutations[e].mutation.includes(o)}}"name"===e.category&&(a=function(e){return _.names[e].toLowerCase().includes(i)}),"country"===e.category&&(a=function(e){return t.country_mapping[_.countries[e]].toLowerCase()===i}),"lineage"===e.category&&(a=function(e){return t.lineage_mapping[_.lineages[e]].toLowerCase()===i});var r=null!==e.value&&""!==e.value&&e.enabled;return{id:"main-search-"+n,enabled:r,data:r?z.filter(a):[],opacity:.7,getRadius:7+2*n,filled:!1,stroked:!0,radiusUnits:"pixels",lineWidthUnits:"pixels",lineWidthScale:1,getPosition:function(e){return[_.x[e],_.y[e]]},getFillColor:function(e){return[0,0,0]},getLineColor:function(e){return l[n%l.length]}}})).filter((function(e){return e.enabled}))}),[t,_,i,z]),Z=Object(a.useMemo)((function(){var e;return(e=[]).concat.apply(e,Object(s.a)(Q.map((function(e){return x(e,_,100)}))))}),[Q,_]),$=Object(a.useMemo)((function(){return Z.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:N(U.zoom)})}))}),[Z,U.zoom]),ee=Object(a.useMemo)((function(){return $.map((function(e){return new m.a(e)}))}),[$]),te=Object(a.useMemo)((function(){return{id:"main-line",data:_.ids,pickable:!1,getWidth:1,getTargetPosition:function(e){return[_.x[_.parents[e]],_.y[e]]},getSourcePosition:function(e){return[_.x[e],_.y[e]]},getColor:[150,150,150]}}),[_]),ne=Object(a.useMemo)((function(){return{id:"main-line-2",data:_.ids,pickable:!1,getWidth:1,getTargetPosition:function(e){return[_.x[_.parents[e]],_.y[_.parents[e]]]},getSourcePosition:function(e){return[_.x[_.parents[e]],_.y[e]]},getColor:[150,150,150]}}),[_]),ae=Object(a.useMemo)((function(){return[].concat.apply([],[te,ne].map((function(e){return x(e,_,100)})))}),[te,ne,_]),ie=Object(a.useMemo)((function(){return ae.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:N(U.zoom)})}))}),[ae,U.zoom]),oe=Object(a.useMemo)((function(){return ie.map((function(e){return new h.a(e)}))}),[ie]);if(U.zoom>17)if(U.nw[1]>S.top&U.se[1]<S.bottom);else{var re=U.nw[1],se=U.se[1],ce=se-re,le=re-4*ce,de=se+4*ce,ue=z.filter((function(e){return _.y[e]>le&_.y[e]<de}));M({top:le,bottom:de,ids:ue})}var be=Object(a.useMemo)((function(){return{id:"main-text-layer",data:S.ids,getPosition:function(e){return[_.x[e]+.3,_.y[e]]},getText:function(e){return _.names[e]},getColor:[180,180,180],getAngle:0,billboard:!0,getTextAnchor:"start",getAlignmentBaseline:"center"}}),[_,S]),me=Object(a.useMemo)((function(){return[new j.a(Object(d.a)(Object(d.a)({},be),{},{visible:U.zoom>18.5,getSize:U.zoom>19?12:9.5,modelMatrix:N(U.zoom)}))]}),[be,U]),he=Object(a.useMemo)((function(){return new b.a({id:"mini-pos",data:[U],opacity:.1,radiusMinPixels:4,radiusMaxPixels:4,getRadius:4,getLineWidth:.1,getPolygon:function(e){return void 0!==e.nw?[[e.nw[0],e.nw[1]],[e.se[0],e.nw[1]],[e.se[0],e.se[1]],[e.nw[0],e.se[1]]]:[]},getFillColor:[255,255,255]})}),[U]),je=Object(a.useMemo)((function(){return[H].concat(Object(s.a)(me),Object(s.a)(oe),Object(s.a)(X),Object(s.a)(ee),[he])}),[H,me,X,oe,he,ee]);window.deck=B;var fe=Object(a.useMemo)((function(){return[new f.a({id:"main",controller:!0}),new f.a({id:"minimap",x:"79%",y:"1%",width:"20%",height:"35%",controller:!0})]}),[]),ge=Object(a.useMemo)((function(){if(R&&R.object){var e=t.lineage_mapping[_.lineages[R.object]],n=t.country_mapping[_.countries[R.object]],a=t.date_mapping[_.dates[R.object]];return Object(g.jsxs)("div",{className:"bg-gray-100 p-3 opacity-90 text-sm",style:{position:"absolute",zIndex:1,pointerEvents:"none",left:R.x,top:R.y},children:[Object(g.jsx)("h2",{className:"font-bold",children:_.names[R.object]}),Object(g.jsx)("div",{style:{color:w(e)},children:e}),Object(g.jsxs)("div",{children:[" ",n]}),a,Object(g.jsx)("div",{className:"text-xs",children:_.mutations[R.object]&&_.mutations[R.object].mutation&&_.mutations[R.object].mutation.map((function(e){return t.mutation_mapping[e]})).join(", ")})]})}}),[t,_,R]),pe=Object(a.useMemo)((function(){return 0===_.ids.length}),[_]);return Object(g.jsxs)("div",{className:"w-full h-full relative",onClick:V,onMouseMove:V,onMouseDown:V,children:[" ",Object(g.jsx)(u.a,{onAfterRender:function(){(void 0===U.nw||U.needs_update)&&D({viewState:U})},ref:B,views:fe,viewState:U,onViewStateChange:D,layerFilter:Object(a.useCallback)((function(e){var t=e.layer,n=e.viewport;return(t.id.startsWith("main")&&"main"===n.id||t.id.startsWith("mini")&&"minimap"===n.id&&!0!==window.hidemini)&(t.id.includes("mini")|U.zoom<8&!t.id.includes("fine")|U.zoom>8&!t.id.includes("coarse"))}),[U.zoom]),controller:!0,layers:je,children:ge}),pe&&Object(g.jsx)(p,{isShown:!0,progress:o})]})},S=n(95),M=n(182);var _=function(e){var t=e.id,n=e.category,a=e.enabled,i=e.value,o=e.setThis,r=e.removeItem,s=e.index,c=e.searchColors,l=c[s%c.length];return Object(g.jsxs)("div",{className:"border-gray-100 border-b mb-3 pb-3",children:[Object(g.jsx)("input",{name:"isGoing",type:"checkbox",style:{outline:a&&i.length>0?"1px solid rgb(".concat(l[0],",").concat(l[1],",").concat(l[2],")"):"0px",outlineOffset:"2px"},className:"w-3 h-3 m-3",checked:a,onChange:function(e){return o({enabled:!a})}}),Object(g.jsxs)("select",{className:" w-36 border py-2 px-1 text-grey-darkest text-sm",value:n,onChange:function(e){return o({category:e.target.value})},children:[Object(g.jsx)("option",{value:"name",children:"Sequence name"}),Object(g.jsx)("option",{value:"lineage",children:"Lineage"}),Object(g.jsx)("option",{value:"country",children:"Country"}),Object(g.jsx)("option",{value:"mutation",children:"AA mutation"})]}),"\xa0",Object(g.jsx)(M.DebounceInput,{className:" w-32 border py-2 px-3 text-grey-darkest",value:i,onChange:function(e){return o({value:e.target.value})},debounceTimeout:300}),Object(g.jsx)("div",{className:"text-sm text-gray-600 px-3",children:{name:"Enter a sequence name like QEUH-13ADA01",lineage:"Enter a PANGO lineage like B.1.1.7. Note that sub-lineages will not be found by this method.",country:"Enter a country like 'India' ",mutation:"Enter an amino acid mutation like S:E484K"}[n]}),Object(g.jsxs)("button",{className:"block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-5 text-gray-700",onClick:function(){return r(t)},children:[Object(g.jsx)(S.c,{className:"inline-block mr-2"}),"Remove this search"]})]})},z=n(183),A=n(184),T=n(185);var R=function(e){var t=e.searchItems,n=e.setSearchItems,a=e.colourBy,i=e.setColourBy,o=e.selectedNode,r=e.data,c=e.searchColors,l=r.node_data;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:"border-b border-gray-300",children:[Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(z.a,{className:"inline-block mr-2"}),"Search"]}),t.map((function(e,a){return Object(g.jsx)(_,{searchColors:c,index:a,id:e.id,category:e.category,value:e.value,setThis:function(e){t[a]=Object(d.a)(Object(d.a)({},t[a]),e),n(Object(s.a)(t))},removeItem:function(e){n(t.filter((function(t){return t.id!==e})))},enabled:e.enabled},e.id)})),Object(g.jsxs)("button",{className:"block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-5 text-gray-700",onClick:function(){return n([].concat(Object(s.a)(t),[{id:Math.random(),category:"name",value:"",enabled:!0}]))},children:[Object(g.jsx)(A.a,{className:"inline-block mr-2"}),"Add a new search"]})]}),Object(g.jsxs)("div",{className:"border-b border-gray-300 pb-3",children:[Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(T.a,{className:"inline-block mr-2"}),"Colour by"]}),Object(g.jsxs)("select",{className:"border py-2 px-3 text-grey-darkest",value:a,onChange:function(e){return i(e.target.value)},children:[Object(g.jsx)("option",{value:"lineage",children:"Lineage"}),Object(g.jsx)("option",{value:"country",children:"Country"}),Object(g.jsx)("option",{value:"none",children:"None"})]})]}),Object(g.jsx)("div",{children:o&&Object(g.jsxs)("div",{className:"text-gray-500 mr-3",children:[Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(S.a,{className:"inline-block mr-2"}),"Node info"]}),Object(g.jsx)("div",{className:"font-bold",children:l.names[o]}),l.genbanks[o]&&"unknown"!==l.genbanks[o]&&"nan"!==l.genbanks[o]&&Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Genbank:"})," ",Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:"https://www.ncbi.nlm.nih.gov/nuccore/"+l.genbanks[o],children:l.genbanks[o]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Date:"})," ",r.date_mapping[l.dates[o]]]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Lineage:"})," ",Object(g.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"https://outbreak.info/situation-reports?pango="+r.lineage_mapping[l.lineages[o]],children:r.lineage_mapping[l.lineages[o]]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Country:"})," ",r.country_mapping[l.countries[o]]]}),Object(g.jsx)("span",{className:"font-semibold",children:"Mutations:"}),Object(g.jsx)("div",{className:"text-xs mr-5",children:l.mutations[o].mutation&&l.mutations[o].mutation.map((function(e){return r.mutation_mapping[e]})).join(", ")})]})})]})},I=n(186),P=n.n(I);var E=function(e){var t=e.enabled,n=e.setEnabled;return Object(g.jsxs)("div",{className:"w-full ".concat(t?"":"hidden"),children:[Object(g.jsx)("div",{onClick:function(){return n(!1)},className:"fixed w-full h-full bg-black opacity-80 z-40"}),Object(g.jsxs)("div",{onClick:function(){return n(!1)},className:"fixed w-full h-full  opacity-100 z-40",children:[Object(g.jsxs)("div",{className:"mx-auto mt-5 p-5 bg-white shadow-md z-100 w-4/5 opacity-100 ",children:[Object(g.jsx)("button",{className:"absolute top-5 right-5 text-xl font-bold",onClick:function(){return n(!1)},children:"X"}),Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl",children:"About Cov2Tree"}),"This website allows you to explore a phylogenetic tree with more than a million SARS-Cov-2 sequences, sequenced by researchers around the world. The interface was made by"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://theo.io/",children:"Theo Sanderson"})," ","using a custom-developed open-source library called"," ",Object(g.jsxs)("a",{href:"http://github.com/theosanderson/taxodium",className:"text-blue-700 underline",children:[" ","Taxodium"]}),".",Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl mt-10",children:"The sequences"}),Object(g.jsxs)("p",{children:["This tree displays sequences generated by scientists all over the world. The sequences are sourced from GenBank (i.e. the INSDC databases), the China National Center for Bioinformation, and from COG-UK. They are collated"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://hgdownload.soe.ucsc.edu/goldenPath/wuhCor1/UShER_SARS-CoV-2//",children:"here"})," ","by Angie Hinrichs and others at UCSC."]}),Object(g.jsx)("p",{children:"This website would be empty but for the hard work of all these researchers, and their openness in submitting their work to public databases, and we gratefully acknowledge this."}),Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl mt-10",children:"The tree"}),Object(g.jsxs)("p",{children:["The tree shown here is produced by the UCSC team, and made available"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://hgdownload.soe.ucsc.edu/goldenPath/wuhCor1/UShER_SARS-CoV-2//",children:"here"}),". It is derived from releases of Rob Lanfear's"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://github.com/roblanf/sarscov2phylo",children:"sarscov2phylo"}),", pruned to include only public sequences aggregated from GenBank, COG-UK, and the China National Center for Bioinformation. The tree has been re-rooted to Wuhan/Hu-1 (GenBank MN908947.3, RefSeq NC_045512.2), and nodes with no associated mutations have been collapsed. Sequences released after the final sarscov2phylo release (Nov. 13, 2020) have been added to the tree using"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://github.com/yatisht/usher",children:"UShER"}),", developed by Yatish Turakhia. UShER development and tree inference was done in Russ Corbett-Detig and David Haussler's groups at the UCSC Genomics Institute. It is described here only for completeness. UCSC provide metadata with the sequences, including lineages called by"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://www.pango.network/",children:"Pangolin"}),"."]}),Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl mt-10",children:"Citations"}),Object(g.jsx)("p",{children:"Lanfear, Rob (2020). A global phylogeny of SARS-CoV-2 sequences from GISAID. Zenodo DOI: 10.5281/zenodo.3958883"}),Object(g.jsx)("p",{children:"Turakhia et al. (2021). Ultrafast Sample Placement on Existing Trees (UShER) Empowers Real-Time Phylogenetics for the SARS-CoV-2 Pandemic."}),Object(g.jsx)("p",{children:"Rambaut et al. (2020). A dynamic nomenclature proposal for SARS-CoV-2 lineages to assist genomic epidemiology."}),Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl mt-10",children:"Related tools"}),Object(g.jsxs)("p",{children:["You can also explore large phylogenies using"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://pando.tools",children:"Pando"}),","," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://microreact.org/",children:"Microreact"}),", and sampled phylogenies on"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://nextstrain.org/",children:"NextStrain"}),"."]})]})," "]})]})},U=n(191),L=n(188),B=n(233);B.parse.defaults.keepCase=!0;var D=[[183,0,255],[255,213,0],[255,0,0],[0,0,255],[0,255,255]];var W=function(){var e=Object(a.useState)([{id:.123,category:"lineage",value:"",enabled:!0}]),t=Object(c.a)(e,2),n=t[0],i=t[1],o=Object(a.useCallback)((function(e){i(e)}),[]),r=Object(a.useState)("lineage"),l=Object(c.a)(r,2),d=l[0],u=l[1],b=Object(a.useCallback)((function(e){u(e)}),[]),m=Object(a.useState)({status:"not_attempted",data:{node_data:{ids:[]}}}),h=Object(c.a)(m,2),j=h[0],f=h[1],p=Object(a.useState)(null),x=Object(c.a)(p,2),O=x[0],v=x[1],y=Object(a.useState)(!1),w=Object(c.a)(y,2),N=w[0],C=w[1];return Object(a.useEffect)((function(){"not_attempted"===j.status&&(console.log("starting dl"),f({status:"loading",progress:0,data:{node_data:{ids:[]}}}),B.load("./tree.proto").then((function(e){P.a.get("/nodelist.pb",{responseType:"arraybuffer",onDownloadProgress:function(e){var t=Math.floor(e.loaded/1e8*1*100);f({status:"loading",progress:t,data:{node_data:{ids:[]}}})}}).then((function(e){return e.data})).then((function(t){console.log("buffer loaded");var n=e.lookupType("AllData");window.buffer=t,window.NodeList=n;var a=n.decode(new Uint8Array(t)),i=n.toObject(a);i.node_data.ids=Object(s.a)(Array(i.node_data.x.length).keys()),f({status:"loaded",data:i})}))})))}),[j.status]),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(E,{enabled:N,setEnabled:C}),Object(g.jsxs)("div",{className:"h-screen w-screen",children:[Object(g.jsx)("div",{className:"from-gray-500 to-gray-600 bg-gradient-to-bl h-15 shadow-md z-20",children:Object(g.jsxs)("div",{className:"flex justify-between",children:[Object(g.jsxs)("h1",{className:"text-xl p-4  pb-5 text-white ",children:[Object(g.jsx)(L.a,{className:"inline-block h-8 w-8 pr-2 "}),Object(g.jsx)("span",{className:"font-bold",children:"Cov2Tree"}),":"," ",Object(g.jsxs)("span",{className:"font-light",children:["interactive SARS-CoV-2 phylogeny"," "]})]}),Object(g.jsx)("div",{className:"inline-block p-4",children:Object(g.jsxs)("button",{onClick:function(){return C(!0)},className:"mr-10 text-white font-bold hover:underline",children:[Object(g.jsx)(S.b,{className:"inline-block h-7 w-8"})," About / Acknowledgements"]})})]})}),Object(g.jsx)("div",{className:"main_content",children:Object(g.jsxs)("div",{className:"md:grid md:grid-cols-12 h-full",children:[Object(g.jsx)("div",{className:"md:col-span-8 h-3/6 md:h-full w-full",children:Object(g.jsx)(k,{searchColors:D,setSelectedNode:v,searchItems:n,data:"loaded"===j.status?j.data:{node_data:{ids:[]}},progress:j.progress,colourBy:d})}),Object(g.jsx)("div",{className:"md:col-span-4 h-full bg-white  border-gray-600   pl-5 shadow-xl",children:Object(g.jsx)(R,{searchColors:D,selectedNode:O,searchItems:n,data:"loaded"===j.status?j.data:{node_data:{ids:[]}},setSearchItems:o,colourBy:d,setColourBy:b})})]})})]})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,276)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),o(e),r(e)}))};r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root")),q()}},[[253,1,2]]]);
//# sourceMappingURL=main.211a30f7.chunk.js.map