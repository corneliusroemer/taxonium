(this.webpackJsonptaxodium=this.webpackJsonptaxodium||[]).push([[0],{146:function(e,t){},203:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){},207:function(e,t){},253:function(e,t,n){"use strict";n.r(t);var a=n(7),o=n.n(a),i=n(178),r=n.n(i),s=(n(203),n(52)),c=n(54),l=(n(204),n(115)),d=n(28),u=n(266),b=n(268),m=n(273),h=n(274),j=n(269),f=n(275),g=(n(205),n(6));var p=function(e){var t=e.isShown,n=e.progress;return t?Object(g.jsxs)("div",{className:"w-full h-full fixed bg-white text-center",children:[" ",Object(g.jsx)("div",{className:"loader z-50",children:"Loading..."}),Object(g.jsxs)("div",{className:"text-black",children:["Loading ",n,"%"]})]}):Object(g.jsx)(g.Fragment,{})},x=n(109);function O(e,t,n){var a=Object(d.a)(Object(d.a)({},e),{},{data:v(e.data,t,n),visible:!0,id:e.id+"_coarse"}),o=function(e){return Object(d.a)(Object(d.a)({},e),{},{id:e.id.replace("main","mini"),lineWidthScale:1,pickable:!1,getRadius:e.id.includes("search")?.5*e.getRadius:e.getRadius})}(a);return[a,Object(d.a)(Object(d.a)({},e),{},{visible:!0,id:e.id+"_fine"}),o]}function v(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,a={},o=e.filter((function(e){var o=Math.round(t.x[e]*n)/n,i=Math.round(t.y[e]*n)/n;return a[o]?!a[o][i]&&(a[o][i]=1,!0):(a[o]=Object(l.a)({},i,1),!0)}));return o}var y=[{contour:[[-100,-100],[-100,100],[100,100],[100,-100]],zipcode:94107,population:26599,area:6.11}];function w(e){if(void 0===e)return[200,200,200];if("unknown"===e)return[200,200,200];if("USA"===e)return[95,158,245];if("England"===e)return[214,58,15];if("Scotland"===e)return[255,130,82];if("Wales"===e)return[148,49,22];if("Northern Ireland"===e)return[140,42,15];if("France"===e)return[140,28,120];if("Germany"===e)return[106,140,28];if("India"===e)return[61,173,166];if("Denmark"===e)return[24,112,32];var t=0;if(0===(e=e.split("").reverse().join("")).length)return t;for(var n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t),t&=t;var a=[0,0,0];for(n=0;n<3;n++){var o=t>>8*n&255;a[n]=o}return a[0]+a[1]+a[2]<150||a[0]+a[1]+a[2]>500?w(e+"_"):a}function N(e){var t=w(e);return"rgb(".concat(t[0],",").concat(t[1],",").concat(t[2],")")}var C=function(e){return[1/Math.pow(2,e-5.6),0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},k=function(e){return 7/Math.pow(2,e.zoom-5.6)};var S=function(e){var t=e.data,n=e.colourBy,o=e.searchItems,i=e.progress,r=e.setSelectedNode,l=e.searchColors,v=Object(a.useState)({ids:[],top:0,bottom:0}),S=Object(c.a)(v,2),M=S[0],_=S[1],z=t.node_data,A=Object(a.useMemo)((function(){return z.ids.filter((function(e){return""!==z.names[e]}))}),[z]),T=Object(a.useState)(),P=Object(c.a)(T,2),R=P[0],I=P[1],E=Object(a.useState)({zoom:4.7,target:[6,13]}),U=Object(c.a)(E,2),L=U[0],B=U[1],D=Object(a.useRef)(null),W=Object(a.useCallback)((function(e){var t=e.viewId,n=e.viewState;e.oldViewState;if("minimap"!==t&&(n.minimap={zoom:3,target:[5,13]},n.target[0]=k(n),D.current.viewports.length)){var a=D.current.viewports[0],o=a.unproject([0,0,0]),i=a.unproject([a.width,a.height,0]);i[0]=i[0]*Math.pow(2,n.zoom-6),o[0]=o[0]*Math.pow(2,n.zoom-6),n=Object(d.a)(Object(d.a)({},n),{},{nw:o,se:i,needs_update:!1}),o[0]=-500,i[0]=500,B(n)}}),[D]),q=Object(a.useState)(!1),F=Object(c.a)(q,2),G=F[0],V=F[1],H=Object(a.useCallback)((function(e){if(0===e.buttons&&"onPointerMove"===e._reactName)return!1;var t=D.current.pickObject({x:e.nativeEvent.offsetX,y:e.nativeEvent.offsetY,radius:1});if("onPointerDown"===e._reactName&&(t&&"minimap"===t.viewport.id?V(!0):V(!1)),t&&"main"===t.viewport.id&&"onClick"===e._reactName&&r(t.object),t||"onClick"!==e._reactName||r(null),t&&"minimap"===t.viewport.id&&G){var n=Object(d.a)(Object(d.a)({},L),{},{target:[k(L),t.coordinate[1]],needs_update:!0});B(n)}}),[L,G,r]),K=Object(a.useMemo)((function(){return new b.a({id:"mini-poly-layer",data:y,pickable:!0,stroked:!0,opacity:.5,filled:!0,wireframe:!0,getPolygon:function(e){return e.contour},getFillColor:function(e){return[240,240,240]},getLineColor:[80,80,80],getLineWidth:1,lineWidthUnits:"pixels"})}),[]),Y=Object(a.useMemo)((function(){return{data:A.filter((function(){return!0})),visible:!0,opacity:.6,getRadius:3,radiusUnits:"pixels",id:"main-scatter",pickable:!0,getLineColor:[100,100,100],lineWidthUnits:"pixels",lineWidthScale:1,onHover:function(e){return I(e)},getPosition:function(e){return[z.x[e],z.y[e]]},getFillColor:function(e){return"lineage"===n?w(t.lineage_mapping[z.lineages[e]]):"country"===n?w(t.country_mapping[z.countries[e]]):[200,200,200]}}}),[A,z,t,n]),J=Object(a.useMemo)((function(){return O(Y,z,100)}),[Y,z]),X=Object(a.useMemo)((function(){return J.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:C(L.zoom),stroked:e.id.includes("mini")?void 0:L.zoom>15,radiusMaxPixels:e.id.includes("mini")?2:L.zoom>15?L.zoom/5:3})}))}),[J,L.zoom]),Q=Object(a.useMemo)((function(){return X.map((function(e){return new m.a(e)}))}),[X]),Z=Object(a.useMemo)((function(){return o.map((function(e,n){var a,o=e.value.toLowerCase().trim();if("mutation"===e.category){var i=t.mutation_mapping.indexOf(e.value);a=function(e){return z.mutations[e].mutation&&z.mutations[e].mutation.includes(i)}}"name"===e.category&&(a=function(e){return z.names[e].toLowerCase().includes(o)}),"country"===e.category&&(a=function(e){return t.country_mapping[z.countries[e]].toLowerCase()===o}),"lineage"===e.category&&(a=function(e){return t.lineage_mapping[z.lineages[e]].toLowerCase()===o});var r=null!==e.value&&""!==e.value&&e.enabled;return{id:"main-search-"+n,enabled:r,data:r?A.filter(a):[],opacity:.7,getRadius:7+2*n,filled:!1,stroked:!0,radiusUnits:"pixels",lineWidthUnits:"pixels",lineWidthScale:1,getPosition:function(e){return[z.x[e],z.y[e]]},getFillColor:function(e){return[0,0,0]},getLineColor:function(e){return l[n%l.length]}}})).filter((function(e){return e.enabled}))}),[t,z,o,A,l]),$=Object(a.useMemo)((function(){var e;return(e=[]).concat.apply(e,Object(s.a)(Z.map((function(e){return O(e,z,100)}))))}),[Z,z]),ee=Object(a.useMemo)((function(){return $.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:C(L.zoom)})}))}),[$,L.zoom]),te=Object(a.useMemo)((function(){return ee.map((function(e){return new m.a(e)}))}),[ee]),ne=Object(a.useMemo)((function(){return{id:"main-line",data:z.ids,pickable:!1,getWidth:1,getTargetPosition:function(e){return[z.x[z.parents[e]],z.y[e]]},getSourcePosition:function(e){return[z.x[e],z.y[e]]},getColor:[150,150,150]}}),[z]),ae=Object(a.useMemo)((function(){return{id:"main-line-2",data:z.ids,pickable:!1,getWidth:1,getTargetPosition:function(e){return[z.x[z.parents[e]],z.y[z.parents[e]]]},getSourcePosition:function(e){return[z.x[z.parents[e]],z.y[e]]},getColor:[150,150,150]}}),[z]),oe=Object(a.useMemo)((function(){return[].concat.apply([],[ne,ae].map((function(e){return O(e,z,100)})))}),[ne,ae,z]),ie=Object(a.useMemo)((function(){return oe.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{modelMatrix:e.id.includes("mini")?void 0:C(L.zoom)})}))}),[oe,L.zoom]),re=Object(a.useMemo)((function(){return ie.map((function(e){return new h.a(e)}))}),[ie]);if(L.zoom>17)if(L.nw[1]>M.top&L.se[1]<M.bottom);else{var se=L.nw[1],ce=L.se[1],le=ce-se,de=se-4*le,ue=ce+4*le,be=A.filter((function(e){return z.y[e]>de&z.y[e]<ue}));_({top:de,bottom:ue,ids:be})}var me=Object(a.useMemo)((function(){return{id:"main-text-layer",data:M.ids,getPosition:function(e){return[z.x[e]+.3,z.y[e]]},getText:function(e){return z.names[e]},getColor:[180,180,180],getAngle:0,billboard:!0,getTextAnchor:"start",getAlignmentBaseline:"center"}}),[z,M]),he=Object(a.useMemo)((function(){return[new j.a(Object(d.a)(Object(d.a)({},me),{},{visible:L.zoom>18.5,getSize:L.zoom>19?12:9.5,modelMatrix:C(L.zoom)}))]}),[me,L]),je=Object(a.useMemo)((function(){return new b.a({id:"mini-pos",data:[L],opacity:.1,radiusMinPixels:4,radiusMaxPixels:4,getRadius:4,getLineWidth:.1,getPolygon:function(e){return void 0!==e.nw?[[e.nw[0],e.nw[1]],[e.se[0],e.nw[1]],[e.se[0],e.se[1]],[e.nw[0],e.se[1]]]:[]},getFillColor:[255,255,255]})}),[L]),fe=Object(a.useMemo)((function(){return[K].concat(Object(s.a)(he),Object(s.a)(re),Object(s.a)(Q),Object(s.a)(te),[je])}),[K,he,Q,re,je,te]);window.deck=D;var ge=Object(a.useMemo)((function(){return[new f.a({id:"main",controller:!0}),new f.a({id:"minimap",x:"79%",y:"1%",width:"20%",height:"35%",controller:!0})]}),[]),pe=Object(a.useMemo)((function(){if(R&&R.object){var e=t.lineage_mapping[z.lineages[R.object]],n=t.country_mapping[z.countries[R.object]],a=t.date_mapping[z.dates[R.object]];return Object(g.jsxs)("div",{className:"bg-gray-100 p-3 opacity-90 text-sm",style:{position:"absolute",zIndex:1,pointerEvents:"none",left:R.x,top:R.y},children:[Object(g.jsx)("h2",{className:"font-bold",children:z.names[R.object]}),Object(g.jsx)("div",{style:{color:N(e)},children:e}),Object(g.jsxs)("div",{children:[" ",n]}),a,Object(g.jsx)("div",{className:"text-xs",children:z.mutations[R.object]&&z.mutations[R.object].mutation&&z.mutations[R.object].mutation.map((function(e){return t.mutation_mapping[e]})).join(", ")})]})}}),[t,z,R]),xe=Object(a.useMemo)((function(){return 0===z.ids.length}),[z]),Oe=Object(a.useCallback)((function(e){var t=Object(d.a)(Object(d.a)({},L),{},{zoom:L.zoom+e,needs_update:!0}),n=Object(d.a)(Object(d.a)({},t),{},{target:[k(t),t.target[1]]});B(n)}),[L]);return Object(g.jsxs)("div",{className:"w-full h-full relative",onClick:H,onPointerMove:H,onPointerDown:H,children:[" ",Object(g.jsxs)(u.a,{onAfterRender:function(){(void 0===L.nw||L.needs_update)&&W({viewState:L})},ref:D,views:ge,viewState:L,onViewStateChange:W,layerFilter:Object(a.useCallback)((function(e){var t=e.layer,n=e.viewport;return(t.id.startsWith("main")&&"main"===n.id||t.id.startsWith("mini")&&"minimap"===n.id&&!0!==window.hidemini)&(t.id.includes("mini")|L.zoom<8&!t.id.includes("fine")|L.zoom>8&!t.id.includes("coarse"))}),[L.zoom]),controller:!0,layers:fe,children:[pe,Object(g.jsxs)("div",{style:{position:"absolute",right:"0.2em",bottom:"0.2em"},children:[Object(g.jsx)("button",{className:" w-12 h-10 bg-gray-100  p-1 rounded border-gray-300 text-gray-700 opacity-60 hover:opacity-100",onClick:function(){Oe(.6)},children:Object(g.jsx)(x.b,{className:"mx-auto  w-5 h-5 "})}),Object(g.jsx)("button",{className:" w-12 h-10 bg-gray-100 ml-1 p-1 rounded border-gray-300 text-gray-700  opacity-60  hover:opacity-100",onClick:function(){Oe(-.6)},children:Object(g.jsx)(x.c,{className:"mx-auto w-5 h-5 "})})]})]}),xe&&Object(g.jsx)(p,{isShown:!0,progress:i})]})},M=n(95),_=n(183);var z=function(e){var t=e.id,n=e.category,a=e.enabled,o=e.value,i=e.setThis,r=e.removeItem,s=e.index,c=e.searchColors,l=c[s%c.length];return Object(g.jsxs)("div",{className:"border-gray-100 border-b mb-3 pb-3",children:[Object(g.jsx)("input",{name:"isGoing",type:"checkbox",style:{outline:a&&o.length>0?"1px solid rgb(".concat(l[0],",").concat(l[1],",").concat(l[2],")"):"0px",outlineOffset:"2px"},className:"w-3 h-3 m-3",checked:a,onChange:function(e){return i({enabled:!a})}}),Object(g.jsxs)("select",{className:" w-36 border py-2 px-1 text-grey-darkest text-sm h-10",value:n,onChange:function(e){return i({category:e.target.value})},children:[Object(g.jsx)("option",{value:"name",children:"Sequence name"}),Object(g.jsx)("option",{value:"lineage",children:"Lineage"}),Object(g.jsx)("option",{value:"country",children:"Country"}),Object(g.jsx)("option",{value:"mutation",children:"AA mutation"})]}),"\xa0",Object(g.jsx)(_.DebounceInput,{className:" w-32 border py-2 px-3 text-grey-darkest h-10",value:o,onChange:function(e){return i({value:e.target.value})},debounceTimeout:300}),Object(g.jsx)("button",{className:" bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border  text-gray-700 ml-2 h-8",onClick:function(){return r(t)},children:Object(g.jsx)(M.c,{className:"inline-block "})}),Object(g.jsx)("div",{className:"text-sm text-gray-600 px-3",children:{name:"Enter a sequence name like QEUH-13ADA01",lineage:"Enter a PANGO lineage like B.1.1.7. Note that sub-lineages will not be found by this method.",country:"Enter a country like 'India' ",mutation:"Enter an amino acid mutation like S:E484K"}[n]})]})},A=n(184),T=n(185);var P=function(e){var t=e.searchItems,n=e.setSearchItems,a=e.colourBy,o=e.setColourBy,i=e.selectedNode,r=e.data,c=e.searchColors,l=r.node_data;return Object(g.jsxs)("div",{children:[Object(g.jsxs)("div",{className:" border-t md:border-t-0 border-b border-gray-300",children:[Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(A.a,{className:"inline-block mr-2"}),"Search"]}),t.map((function(e,a){return Object(g.jsx)(z,{searchColors:c,index:a,id:e.id,category:e.category,value:e.value,setThis:function(e){t[a]=Object(d.a)(Object(d.a)({},t[a]),e),n(Object(s.a)(t))},removeItem:function(e){n(t.filter((function(t){return t.id!==e})))},enabled:e.enabled},e.id)})),Object(g.jsxs)("button",{className:"block bg-gray-100 text-sm mx-auto p-1 rounded border-gray-300 border m-5 text-gray-700",onClick:function(){return n([].concat(Object(s.a)(t),[{id:Math.random(),category:"name",value:"",enabled:!0}]))},children:[Object(g.jsx)(T.a,{className:"inline-block mr-2"}),"Add a new search"]})]}),Object(g.jsxs)("div",{className:"border-b border-gray-300 pb-3",children:[Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(x.a,{className:"inline-block mr-2"}),"Colour by"]}),Object(g.jsxs)("select",{className:"border py-2 px-3 text-grey-darkest",value:a,onChange:function(e){return o(e.target.value)},children:[Object(g.jsx)("option",{value:"lineage",children:"Lineage"}),Object(g.jsx)("option",{value:"country",children:"Country"}),Object(g.jsx)("option",{value:"none",children:"None"})]})]}),Object(g.jsx)("div",{children:i&&Object(g.jsxs)("div",{className:"text-gray-500 mr-3",children:[Object(g.jsxs)("h2",{className:"text-xl mt-5 mb-4 text-gray-700",children:[Object(g.jsx)(M.a,{className:"inline-block mr-2"}),"Node info"]}),Object(g.jsx)("div",{className:"font-bold",children:l.names[i]}),l.genbanks[i]&&"unknown"!==l.genbanks[i]&&"nan"!==l.genbanks[i]&&Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Genbank:"})," ",Object(g.jsx)("a",{target:"_blank",rel:"noreferrer",className:"underline",href:"https://www.ncbi.nlm.nih.gov/nuccore/"+l.genbanks[i],children:l.genbanks[i]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Date:"})," ",r.date_mapping[l.dates[i]]]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Lineage:"})," ",Object(g.jsx)("a",{className:"underline",target:"_blank",rel:"noreferrer",href:"https://outbreak.info/situation-reports?pango="+r.lineage_mapping[l.lineages[i]],children:r.lineage_mapping[l.lineages[i]]})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{className:"font-semibold",children:"Country:"})," ",r.country_mapping[l.countries[i]]]}),Object(g.jsx)("span",{className:"font-semibold",children:"Mutations:"}),Object(g.jsx)("div",{className:"text-xs mr-5",children:l.mutations[i].mutation&&l.mutations[i].mutation.map((function(e){return r.mutation_mapping[e]})).join(", ")})]})})]})},R=n(186),I=n.n(R);var E=function(e){var t=e.enabled,n=e.setEnabled;return Object(g.jsxs)("div",{className:"w-full ".concat(t?"":"hidden"),children:[Object(g.jsx)("div",{onClick:function(){return n(!1)},className:"fixed w-full h-full bg-black opacity-80 z-40"}),Object(g.jsxs)("div",{onClick:function(){return n(!1)},className:"fixed w-full h-full  opacity-100 z-40",children:[Object(g.jsxs)("div",{className:"mx-auto mt-5 p-5 bg-white shadow-md z-100 w-4/5 opacity-100 ",children:[Object(g.jsx)("button",{className:"absolute top-5 right-5 text-xl font-bold",onClick:function(){return n(!1)},children:"X"}),Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl",children:"About Cov2Tree"}),"This website allows you to explore a phylogenetic tree with more than a million SARS-Cov-2 sequences, sequenced by researchers around the world. The interface was made by"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://theo.io/",children:"Theo Sanderson"})," ","using a custom-developed open-source library called"," ",Object(g.jsxs)("a",{href:"http://github.com/theosanderson/taxodium",className:"text-blue-700 underline",children:[" ","Taxodium"]}),".",Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl mt-10",children:"The sequences"}),Object(g.jsxs)("p",{children:["This tree displays sequences generated by scientists all over the world. The sequences are sourced from GenBank (i.e. the INSDC databases), the China National Center for Bioinformation, and from COG-UK. They are collated"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://hgdownload.soe.ucsc.edu/goldenPath/wuhCor1/UShER_SARS-CoV-2//",children:"here"})," ","by Angie Hinrichs and others at UCSC."]}),Object(g.jsx)("p",{children:"This website would be empty but for the hard work of all these researchers, and their openness in submitting their work to public databases, and we gratefully acknowledge this."}),Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl mt-10",children:"The tree"}),Object(g.jsxs)("p",{children:["The tree shown here is produced by the UCSC team, and made available"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"http://hgdownload.soe.ucsc.edu/goldenPath/wuhCor1/UShER_SARS-CoV-2//",children:"here"}),". It is derived from releases of Rob Lanfear's"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://github.com/roblanf/sarscov2phylo",children:"sarscov2phylo"}),", pruned to include only public sequences aggregated from GenBank, COG-UK, and the China National Center for Bioinformation. The tree has been re-rooted to Wuhan/Hu-1 (GenBank MN908947.3, RefSeq NC_045512.2), and nodes with no associated mutations have been collapsed. Sequences released after the final sarscov2phylo release (Nov. 13, 2020) have been added to the tree using"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://github.com/yatisht/usher",children:"UShER"}),", developed by Yatish Turakhia. UShER development and tree inference was done in Russ Corbett-Detig and David Haussler's groups at the UCSC Genomics Institute. It is described here only for completeness. UCSC provide metadata with the sequences, including lineages called by"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://www.pango.network/",children:"Pangolin"}),"."]}),Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl mt-10",children:"Citations"}),Object(g.jsx)("p",{children:"Lanfear, Rob (2020). A global phylogeny of SARS-CoV-2 sequences from GISAID. Zenodo DOI: 10.5281/zenodo.3958883"}),Object(g.jsx)("p",{children:"Turakhia et al. (2021). Ultrafast Sample Placement on Existing Trees (UShER) Empowers Real-Time Phylogenetics for the SARS-CoV-2 Pandemic."}),Object(g.jsx)("p",{children:"Rambaut et al. (2020). A dynamic nomenclature proposal for SARS-CoV-2 lineages to assist genomic epidemiology."}),Object(g.jsx)("h1",{className:"font-bold mb-5 text-xl mt-10",children:"Related tools"}),Object(g.jsxs)("p",{children:["You can also explore large phylogenies using"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://pando.tools",children:"Pando"}),","," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://microreact.org/",children:"Microreact"}),", and sampled phylogenies on"," ",Object(g.jsx)("a",{className:"text-blue-700 underline",href:"https://nextstrain.org/",children:"NextStrain"}),"."]})]})," "]})]})},U=n(191),L=n(188),B=n(233);B.parse.defaults.keepCase=!0;var D=[[183,0,255],[255,213,0],[255,0,0],[0,0,255],[0,255,255]];var W=function(){var e=Object(a.useState)([{id:.123,category:"lineage",value:"",enabled:!0}]),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useCallback)((function(e){o(e)}),[]),r=Object(a.useState)("lineage"),l=Object(c.a)(r,2),d=l[0],u=l[1],b=Object(a.useCallback)((function(e){u(e)}),[]),m=Object(a.useState)({status:"not_attempted",data:{node_data:{ids:[]}}}),h=Object(c.a)(m,2),j=h[0],f=h[1],p=Object(a.useState)(null),x=Object(c.a)(p,2),O=x[0],v=x[1],y=Object(a.useState)(!1),w=Object(c.a)(y,2),N=w[0],C=w[1];return Object(a.useEffect)((function(){"not_attempted"===j.status&&(console.log("starting dl"),f({status:"loading",progress:0,data:{node_data:{ids:[]}}}),B.load("./tree.proto").then((function(e){I.a.get("/nodelist.pb",{responseType:"arraybuffer",onDownloadProgress:function(e){var t=Math.floor(e.loaded/1e8*1*100);f({status:"loading",progress:t,data:{node_data:{ids:[]}}})}}).then((function(e){return e.data})).then((function(t){console.log("buffer loaded");var n=e.lookupType("AllData");window.buffer=t,window.NodeList=n;var a=n.decode(new Uint8Array(t)),o=n.toObject(a);o.node_data.ids=Object(s.a)(Array(o.node_data.x.length).keys()),f({status:"loaded",data:o})}))})))}),[j.status]),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(E,{enabled:N,setEnabled:C}),Object(g.jsxs)("div",{className:"h-screen w-screen",children:[Object(g.jsx)("div",{className:"from-gray-500 to-gray-600 bg-gradient-to-bl h-15 shadow-md z-20",children:Object(g.jsxs)("div",{className:"flex justify-between",children:[Object(g.jsxs)("h1",{className:"text-xl p-4  pb-5 text-white ",children:[Object(g.jsx)(L.a,{className:"inline-block h-8 w-8 pr-2 "}),Object(g.jsx)("span",{className:"font-bold",children:"Cov2Tree"}),":"," ",Object(g.jsxs)("span",{className:"font-light",children:["interactive SARS-CoV-2 phylogeny"," "]})]}),Object(g.jsx)("div",{className:"inline-block p-4",children:Object(g.jsxs)("button",{onClick:function(){return C(!0)},className:"mr-10 text-white font-bold hover:underline",children:[Object(g.jsx)(M.b,{className:"inline-block h-7 w-8"})," About / Acknowledgements"]})})]})}),Object(g.jsx)("div",{className:"main_content",children:Object(g.jsxs)("div",{className:"md:grid md:grid-cols-12 h-full",children:[Object(g.jsx)("div",{className:"md:col-span-8 h-3/6 md:h-full w-full",children:Object(g.jsx)(S,{searchColors:D,setSelectedNode:v,searchItems:n,data:"loaded"===j.status?j.data:{node_data:{ids:[]}},progress:j.progress,colourBy:d})}),Object(g.jsx)("div",{className:"md:col-span-4 h-full bg-white  border-gray-600   pl-5 shadow-xl",children:Object(g.jsx)(P,{searchColors:D,selectedNode:O,searchItems:n,data:"loaded"===j.status?j.data:{node_data:{ids:[]}},setSearchItems:i,colourBy:d,setColourBy:b})})]})})]})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,276)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),i(e),r(e)}))};r.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(W,{})}),document.getElementById("root")),q()}},[[253,1,2]]]);
//# sourceMappingURL=main.b22dfaf2.chunk.js.map