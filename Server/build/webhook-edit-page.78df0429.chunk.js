(self.webpackChunkvngle=self.webpackChunkvngle||[]).push([[5162],{4665:function(B,A,a){(function(e,i){B.exports=i(a(67294))})(this,function(e){return function(i){var P={};function c(o){if(P[o])return P[o].exports;var g=P[o]={i:o,l:!1,exports:{}};return i[o].call(g.exports,g,g.exports,c),g.l=!0,g.exports}return c.m=i,c.c=P,c.d=function(o,g,v){c.o(o,g)||Object.defineProperty(o,g,{enumerable:!0,get:v})},c.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},c.t=function(o,g){if(1&g&&(o=c(o)),8&g||4&g&&typeof o=="object"&&o&&o.__esModule)return o;var v=Object.create(null);if(c.r(v),Object.defineProperty(v,"default",{enumerable:!0,value:o}),2&g&&typeof o!="string")for(var k in o)c.d(v,k,function(d){return o[d]}.bind(null,k));return v},c.n=function(o){var g=o&&o.__esModule?function(){return o.default}:function(){return o};return c.d(g,"a",g),g},c.o=function(o,g){return Object.prototype.hasOwnProperty.call(o,g)},c.p="",c(c.s=145)}({0:function(i,P){i.exports=e},145:function(i,P,c){"use strict";c.r(P);var o=c(0);function g(){return(g=Object.assign||function(v){for(var k=1;k<arguments.length;k++){var d=arguments[k];for(var V in d)Object.prototype.hasOwnProperty.call(d,V)&&(v[V]=d[V])}return v}).apply(this,arguments)}P.default=function(v){return o.createElement("svg",g({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v),o.createElement("path",{d:"M4 20.252V3.748a1 1 0 011.507-.862l14.028 8.252a1 1 0 010 1.724L5.507 21.113A1 1 0 014 20.252z",fill:"#212134"}))}}})})},98776:(B,A,a)=>{"use strict";a.d(A,{Z:()=>it});var e=a(67294),i=a(68547),P=a(62031),c=a(23724),o=a(49656),g=a(32104),v=a(63955),k=a(45697),d=a.n(k),V=a(68717),Ee=a.n(V),ye=a(84734),Y=a.n(ye),be=a(4665),Pe=a.n(be),q=a(78862),F=a(5493),_=a(19408),S=a(9008),z=a(55967),O=a(34626),D=a(80831),L=a(97132),ee=a(91767),I=a(49425),te=a(78384),Ce=a(59522),Oe=a(81325),Me=a(11700),Se=a.n(Me);const H=({disabledEvents:n,name:t,events:r,inputValue:s,handleChange:m,handleChangeAll:E})=>{const b=r.filter(u=>!n.includes(u)),l=s.length===b.length,f=s.length>0,y=({target:{name:u}})=>{E({target:{name:u,value:!l}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(Oe.Checkbox,{indeterminate:f&&!l,"aria-label":"Select all entries",name:t,onChange:y,value:l},Se()(t))),r.map(u=>e.createElement("td",{key:u},e.createElement(Ce.BaseCheckbox,{disabled:n.includes(u),"aria-label":u,name:u,value:s.includes(u),onValueChange:h=>m({target:{name:u,value:h}})}))))};H.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange:()=>{},handleChangeAll:()=>{}},H.propTypes={disabledEvents:d().array,events:d().array,inputValue:d().array,handleChange:d().func,handleChangeAll:d().func,name:d().string.isRequired};const Ie=H,xe=n=>n.reduce((t,r)=>{const s=r.split(".")[0];return t[s]||(t[s]=[]),t[s].push(r),t},{}),Te=te.default.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:n})=>n.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:n})=>n.spaces[7]};
  }
`,W={headers:{default:["Settings.webhooks.events.create","Settings.webhooks.events.update","app.utils.delete"],draftAndPublish:["Settings.webhooks.events.create","Settings.webhooks.events.update","app.utils.delete","app.utils.publish","app.utils.unpublish"]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},ne=({isDraftAndPublish:n})=>{const t=n?W.headers.draftAndPublish:W.headers.default,r=n?W.events.draftAndPublish:W.events.default,{formatMessage:s}=(0,L.useIntl)(),{values:m,handleChange:E}=(0,D.useFormikContext)(),b="events",l=m.events,f=[],y=xe(l),u=({target:{name:p,value:T}})=>{let C=new Set(l);T?C.add(p):C.delete(p),E({target:{name:b,value:Array.from(C)}})},h=({target:{name:p,value:T}})=>{let C=new Set(l);T?r[p].forEach(w=>{f.includes(w)||C.add(w)}):r[p].forEach(w=>C.delete(w)),E({target:{name:b,value:Array.from(C)}})};return e.createElement(S.Stack,{spacing:1},e.createElement(ee.FieldLabel,null,s({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(Te,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),t.map(p=>p==="app.utils.publish"||p==="app.utils.unpublish"?e.createElement("td",{key:p,title:s({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for contents with Draft/Publish system enabled"})},e.createElement(I.Typography,{variant:"sigma",textColor:"neutral600"},s({id:p,defaultMessage:p}))):e.createElement("td",{key:p},e.createElement(I.Typography,{variant:"sigma",textColor:"neutral600"},s({id:p,defaultMessage:p})))))),e.createElement("tbody",null,Object.keys(r).map(p=>e.createElement(Ie,{disabledEvents:f,key:p,name:p,events:r[p],inputValue:y[p],handleChange:u,handleChangeAll:h})))))};ne.propTypes={isDraftAndPublish:d().bool.isRequired};const we=ne;var Re=a(80768),Ae=a.n(Re),j=a(67826),ke=a(83662),re=a(54675);const ae=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"];var De=Object.defineProperty,Le=Object.defineProperties,je=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,le=(n,t,r)=>t in n?De(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,Ve=(n,t)=>{for(var r in t||(t={}))se.call(t,r)&&le(n,r,t[r]);if(U)for(var r of U(t))oe.call(t,r)&&le(n,r,t[r]);return n},Be=(n,t)=>Le(n,je(t)),Fe=(n,t)=>{var r={};for(var s in n)se.call(n,s)&&t.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&U)for(var s of U(n))t.indexOf(s)<0&&oe.call(n,s)&&(r[s]=n[s]);return r};const N=n=>{var t=n,{name:r,onChange:s,value:m}=t,E=Fe(t,["name","onChange","value"]);const[b,l]=(0,e.useState)(m?[...ae,m]:ae),f=u=>{s({target:{name:r,value:u}})},y=u=>{l(h=>[...h,u]),s({target:{name:r,value:u}})};return e.createElement(re.CreatableCombobox,Be(Ve({},E),{onChange:f,onCreateOption:y,placeholder:"",value:m}),b.map(u=>e.createElement(re.ComboboxOption,{value:u,key:u},u)))};N.defaultProps={value:void 0},N.propTypes={name:d().string.isRequired,onChange:d().func.isRequired,value:d().string};const We=N,Ue=()=>{const{formatMessage:n}=(0,L.useIntl)(),{values:t,errors:r}=(0,D.useFormikContext)();return e.createElement(S.Stack,{spacing:1},e.createElement(ee.FieldLabel,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(F.Box,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(D.FieldArray,{validateOnChange:!1,name:"headers",render:({push:s,remove:m})=>{var E;return e.createElement(O.Grid,{gap:4},(E=t.headers)==null?void 0:E.map((b,l)=>{var f,y,u,h,p,T,C,w,G,K;return e.createElement(e.Fragment,{key:l},e.createElement(O.GridItem,{col:6},e.createElement(D.Field,{as:We,name:`headers.${l}.key`,"aria-label":`row ${l+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:((y=(f=r.headers)==null?void 0:f[l])==null?void 0:y.key)&&n({id:(u=r.headers[l])==null?void 0:u.key,defaultMessage:(h=r.headers[l])==null?void 0:h.key})})),e.createElement(O.GridItem,{col:6},e.createElement(j.Flex,{alignItems:"flex-end"},e.createElement(F.Box,{style:{flex:1}},e.createElement(D.Field,{as:z.TextInput,"aria-label":`row ${l+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${l}.value`,error:((T=(p=r.headers)==null?void 0:p[l])==null?void 0:T.value)&&n({id:(C=r.headers[l])==null?void 0:C.value,defaultMessage:(w=r.headers[l])==null?void 0:w.value})})),e.createElement(j.Flex,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:(K=(G=r.headers)==null?void 0:G[l])!=null&&K.value?0:5},e.createElement(i.RemoveRoundedButton,{onClick:()=>t.headers.length!==1&&m(l),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:l+1})})))))}),e.createElement(O.GridItem,{col:12},e.createElement(ke.TextButton,{type:"button",onClick:()=>{s({key:"",value:""})},startIcon:e.createElement(Ae(),null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))}})))};var $e=a(84040),ie=a.n($e),Ge=a(57572),Ke=a.n(Ge);const $=te.default.svg(({theme:n,color:t})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[t]};
  }
`),Z=({isPending:n,statusCode:t})=>{const{formatMessage:r}=(0,L.useIntl)();return n?e.createElement(S.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement($,{as:Ke()}),e.createElement(I.Typography,null,r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):t>=200&&t<300?e.createElement(S.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement($,{as:Y(),color:"success700"}),e.createElement(I.Typography,null,r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):t>=300?e.createElement(S.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement($,{as:ie(),color:"danger700"}),e.createElement(I.Typography,null,r({id:"Settings.error",defaultMessage:"error"})," ",t)):null};Z.propTypes={isPending:d().bool.isRequired,statusCode:d().number},Z.defaultProps={statusCode:void 0};const X=({statusCode:n,message:t})=>{const{formatMessage:r}=(0,L.useIntl)();return n>=200&&n<300?e.createElement(j.Flex,{justifyContent:"flex-end"},e.createElement(I.Typography,{textColor:"neutral600",ellipsis:!0},r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(j.Flex,{justifyContent:"flex-end"},e.createElement(j.Flex,{maxWidth:(0,i.pxToRem)(250),justifyContent:"flex-end",title:t},e.createElement(I.Typography,{ellipsis:!0,textColor:"neutral600"},t))):null};X.propTypes={statusCode:d().number,message:d().string},X.defaultProps={statusCode:void 0,message:void 0};const de=({onCancel:n})=>{const{formatMessage:t}=(0,L.useIntl)();return e.createElement(j.Flex,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(S.Stack,{horizontal:!0,spacing:2,style:{alignItems:"center"}},e.createElement(I.Typography,{textColor:"neutral400"},t({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement($,{as:ie(),color:"neutral400"}))))};de.propTypes={onCancel:d().func.isRequired};const Q=({isPending:n,onCancel:t,response:r})=>{const{statusCode:s,message:m}=r,{formatMessage:E}=(0,L.useIntl)();return e.createElement(F.Box,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(O.Grid,{gap:4,style:{alignItems:"center"}},e.createElement(O.GridItem,{col:3},e.createElement(I.Typography,null,E({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(O.GridItem,{col:3},e.createElement(Z,{isPending:n,statusCode:s})),e.createElement(O.GridItem,{col:6},n?e.createElement(de,{onCancel:t}):e.createElement(X,{statusCode:s,message:m}))))};Q.defaultProps={isPending:!1,onCancel:()=>{},response:{}},Q.propTypes={isPending:d().bool,onCancel:d().func,response:d().object};const ze=Q;var x=a(53209);const He=new RegExp("(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)"),Ne=new RegExp("(^$)|((https?://.*)(d*)/?(.*))"),Ze=x.Ry().shape({name:x.Z_(i.translatedErrors.string).required(i.translatedErrors.required).matches(He,i.translatedErrors.regex),url:x.Z_(i.translatedErrors.string).required(i.translatedErrors.required).matches(Ne,i.translatedErrors.regex),headers:x.Vo(n=>{let t=x.IX();if(n.length===1){const{key:r,value:s}=n[0];if(!r&&!s)return t}return t.of(x.Ry().shape({key:x.Z_().required(i.translatedErrors.required),value:x.Z_().required(i.translatedErrors.required)}))}),events:x.IX()}),J=({handleSubmit:n,data:t,triggerWebhook:r,isCreating:s,isTriggering:m,triggerResponse:E,isDraftAndPublishEvents:b})=>{const{formatMessage:l}=(0,L.useIntl)(),[f,y]=(0,e.useState)(!1);return e.createElement(D.Formik,{onSubmit:n,initialValues:{name:(t==null?void 0:t.name)||"",url:(t==null?void 0:t.url)||"",headers:Object.keys((t==null?void 0:t.headers)||[]).length?Object.entries(t.headers).map(([u,h])=>({key:u,value:h})):[{key:"",value:""}],events:(t==null?void 0:t.events)||[]},validationSchema:Ze,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:u,errors:h})=>e.createElement(i.Form,{noValidate:!0},e.createElement(q.HeaderLayout,{primaryAction:e.createElement(S.Stack,{horizontal:!0,spacing:2},e.createElement(_.Button,{onClick:()=>{r(),y(!0)},variant:"tertiary",startIcon:e.createElement(Pe(),null),disabled:s||m,size:"L"},l({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(_.Button,{startIcon:e.createElement(Y(),null),onClick:u,type:"submit",size:"L"},l({id:"global.save",defaultMessage:"Save"}))),title:s?l({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):t==null?void 0:t.name,navigationAction:e.createElement(i.Link,{startIcon:e.createElement(Ee(),null),to:"/settings/webhooks"},l({id:"global.back",defaultMessage:"Back"}))}),e.createElement(q.ContentLayout,null,e.createElement(S.Stack,{spacing:4},f&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(ze,{isPending:m,response:E,onCancel:()=>y(!1)})),e.createElement(F.Box,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(S.Stack,{spacing:6},e.createElement(O.Grid,{gap:6},e.createElement(O.GridItem,{col:6},e.createElement(D.Field,{as:z.TextInput,name:"name",error:h.name&&l({id:h.name}),label:l({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(O.GridItem,{col:12},e.createElement(D.Field,{as:z.TextInput,name:"url",error:h.url&&l({id:h.url}),label:l({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(Ue,null),e.createElement(we,{isDraftAndPublish:b})))))))};J.propTypes={data:d().object,handleSubmit:d().func.isRequired,triggerWebhook:d().func.isRequired,isCreating:d().bool.isRequired,isDraftAndPublishEvents:d().bool.isRequired,isTriggering:d().bool.isRequired,triggerResponse:d().object},J.defaultProps={data:void 0,triggerResponse:void 0};const Xe=J;var Qe=a(96486),Je=Object.defineProperty,Ye=Object.defineProperties,qe=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,ce=(n,t,r)=>t in n?Je(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,me=(n,t)=>{for(var r in t||(t={}))_e.call(t,r)&&ce(n,r,t[r]);if(ue)for(var r of ue(t))et.call(t,r)&&ce(n,r,t[r]);return n},tt=(n,t)=>Ye(n,qe(t));const nt=n=>{const t=me({},n);return(0,Qe.set)(t,"headers",rt(n.headers)),t},rt=n=>n.reduce((t,r)=>{const{key:s,value:m}=r;return s!==""?tt(me({},t),{[s]:m}):t},{}),ge=nt;var pe=a(25108),at=Object.defineProperty,fe=Object.getOwnPropertySymbols,st=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,he=(n,t,r)=>t in n?at(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,lt=(n,t)=>{for(var r in t||(t={}))st.call(t,r)&&he(n,r,t[r]);if(fe)for(var r of fe(t))ot.call(t,r)&&he(n,r,t[r]);return n},ve=(n,t,r)=>new Promise((s,m)=>{var E=f=>{try{l(r.next(f))}catch(y){m(y)}},b=f=>{try{l(r.throw(f))}catch(y){m(y)}},l=f=>f.done?s(f.value):Promise.resolve(f.value).then(E,b);l((r=r.apply(n,t)).next())});const it=()=>{const{params:{id:n}}=(0,o.useRouteMatch)("/settings/webhooks/:id"),{replace:t}=(0,o.useHistory)(),{lockApp:r,unlockApp:s}=(0,i.useOverlayBlocker)(),m=(0,i.useNotification)(),E=(0,c.useQueryClient)(),{isLoading:b,collectionTypes:l}=(0,g.bP)(),f=n==="create",y=(0,e.useCallback)(M=>ve(void 0,null,function*(){const[R,{data:mt}]=yield(0,i.to)((0,i.request)(`/admin/webhooks/${M}`,{method:"GET"}));return R?(m({type:"warning",message:{id:"notification.error"}}),null):mt}),[m]),{isLoading:u,data:h}=(0,c.useQuery)(["get-webhook",n],()=>y(n),{enabled:!f}),{isLoading:p,data:T,isIdle:C,mutate:w}=(0,c.useMutation)(()=>v.be.post(`/admin/webhooks/${n}/trigger`)),G=()=>w(null,{onError:()=>{m({type:"warning",message:{id:"notification.error"}})}}),K=(0,c.useMutation)(M=>(0,i.request)("/admin/webhooks",{method:"POST",body:M})),dt=(0,c.useMutation)(({id:M,body:R})=>(0,i.request)(`/admin/webhooks/${M}`,{method:"PUT",body:R})),ut=M=>ve(void 0,null,function*(){f?(r(),K.mutate(ge(M),{onSuccess:R=>{m({type:"success",message:{id:"Settings.webhooks.created"}}),t(`/settings/webhooks/${R.data.id}`),s()},onError:R=>{m({type:"warning",message:{id:"notification.error"}}),pe.log(R),s()}})):(r(),dt.mutate({id:n,body:ge(M)},{onSuccess:()=>{E.invalidateQueries(["get-webhook",n]),m({type:"success",message:{id:"notification.form.success.fields"}}),s()},onError:R=>{m({type:"warning",message:{id:"notification.error"}}),pe.log(R),s()}}))}),ct=(0,e.useMemo)(()=>l.some(M=>M.options.draftAndPublish===!0),[l]);return u||b?e.createElement(i.LoadingIndicatorPage,null):e.createElement(P.Main,null,e.createElement(i.SettingsPageTitle,{name:"Webhooks"}),e.createElement(Xe,lt({},{handleSubmit:ut,data:h,triggerWebhook:G,isCreating:f,isTriggering:p,isTriggerIdle:C,triggerResponse:T==null?void 0:T.data.data,isDraftAndPublishEvents:ct})))}},2937:(B,A,a)=>{"use strict";a.r(A),a.d(A,{default:()=>v});var e=a(67294),i=a(68547),P=a.n(i),c=a(92699),o=a(98776);const v=()=>e.createElement(i.CheckPagePermissions,{permissions:c.Z.settings.webhooks.create},e.createElement(o.Z,null))},27103:(B,A,a)=>{"use strict";a.r(A),a.d(A,{default:()=>v});var e=a(67294),i=a(68547),P=a.n(i),c=a(92699),o=a(98776);const v=()=>e.createElement(i.CheckPagePermissions,{permissions:c.Z.settings.webhooks.update},e.createElement(o.Z,null))}}]);
