"use strict";(self.webpackChunkserver=self.webpackChunkserver||[]).push([[4730],{79211:(J,g,s)=>{s.d(g,{F:()=>C});var e=s(74081),t=s(27279),l=s(93415),i=s(48102),d=s(87006),y=s(57121),c=s(70627),O=s(61020);const C=({displayedFilters:r})=>{const[M,p]=(0,t.useState)(!1),{formatMessage:A}=(0,O.Z)(),m=(0,t.useRef)(),h=()=>{p(X=>!X)};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(l.x,{paddingTop:1,paddingBottom:1,children:[(0,e.jsx)(i.z,{variant:"tertiary",ref:m,startIcon:(0,e.jsx)(y.Z,{}),onClick:h,size:"S",children:A({id:"app.utils.filters",defaultMessage:"Filters"})}),M&&(0,e.jsx)(d.J5,{displayedFilters:r,isVisible:M,onToggle:h,source:m})]}),(0,e.jsx)(d.W$,{filtersSchema:r})]})};C.propTypes={displayedFilters:c.arrayOf(c.shape({name:c.string.isRequired,metadatas:c.shape({label:c.string}),fieldSchema:c.shape({type:c.string})})).isRequired}},14730:(J,g,s)=>{s.r(g),s.d(g,{U:()=>he,i:()=>Ie});var e=s(74081),t=s(87006),l=s(59461),i=s(38178),d=s(27279),y=s(48102),c=s(86967),O=s(93153),C=s(50086),r=s(73411),M=s(32370),p=s(10701),A=s(4987),m=s(93415),h=s(5938),X=s(6918),oe=s(15244),ae=s(23298),K=s(74577),L=s(35250),f=s(73354),S=s(27875),G=s(37472),k=s(74758),w=s(29206),P=s(61020),z=s(40464),ne=s(51447),le=s(11266),b=s(66333),de=s(79211),j=s(16543),fe=s(26784),Pe=s(78665),o=s(70627),De=s(89486),Oe=s(82298),xe=s(71563),ue=s(30864),q=s(47853);const Ee=({onClick:a})=>{const{formatMessage:_}=(0,P.Z)();return(0,e.jsx)(y.z,{onClick:a,startIcon:(0,e.jsx)(j.Z,{}),size:"S",children:_({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})};Ee.propTypes={onClick:o.func.isRequired};const ce=({canDelete:a,headers:_,entriesToDelete:v,onClickDelete:ee,onSelectRow:$,withMainAction:Z,withBulkActions:B,rows:I})=>{const{push:D,location:{pathname:V}}=(0,ne.k6)(),{formatMessage:x}=(0,P.Z)();return(0,e.jsx)(c.p,{children:I.map(n=>{const F=v.findIndex(U=>U===n.id)!==-1;return(0,e.jsxs)(O.Tr,{...(0,t.X7)({fn:()=>D(`${V}/${n.id}`),condition:B}),children:[Z&&(0,e.jsx)(C.Td,{...t.UW,children:(0,e.jsx)(r.C,{"aria-label":x({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,i.g)(n.firstname,n.lastname)}),checked:F,onChange:()=>{$({name:n.id,value:!F})}})}),_.map(({key:U,cellFormatter:Y,name:W,...N})=>(0,e.jsx)(C.Td,{children:typeof Y=="function"?Y(n,{key:U,name:W,formatMessage:x,...N}):(0,e.jsx)(M.Z,{textColor:"neutral800",children:n[W]||"-"})},U)),B&&(0,e.jsx)(C.Td,{children:(0,e.jsxs)(p.k,{justifyContent:"end",children:[(0,e.jsx)(A.h,{onClick:()=>D(`${V}/${n.id}`),label:x({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,i.g)(n.firstname,n.lastname)}),noBorder:!0,icon:(0,e.jsx)(fe.Z,{})}),a&&(0,e.jsx)(m.x,{paddingLeft:1,...t.UW,children:(0,e.jsx)(A.h,{onClick:()=>ee(n.id),label:x({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,i.g)(n.firstname,n.lastname)}),noBorder:!0,icon:(0,e.jsx)(Pe.Z,{})})})]})})]},n.id)})})};ce.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},ce.propTypes={canDelete:o.bool,entriesToDelete:o.array,headers:o.array.isRequired,onClickDelete:o.func,onSelectRow:o.func,rows:o.array,withBulkActions:o.bool,withMainAction:o.bool};const ge={firstname:"",lastname:"",email:"",roles:[]},ye=[],Ce=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ae=q.Ry().shape({firstname:q.Z_().trim().required(t.I0.required),lastname:q.Z_(),email:q.Z_().email(t.I0.email).required(t.I0.required),roles:q.IX().min(1,t.I0.required).required(t.I0.required)}),je={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Me=({onSuccess:a,onToggle:_})=>{const[v,ee]=(0,d.useState)("create"),[$,Z]=(0,d.useState)(!1),[B,I]=(0,d.useState)(null),{formatMessage:D}=(0,P.Z)(),V=(0,t.lm)(),{lockApp:x,unlockApp:n}=(0,t.o1)(),{post:F}=(0,t.kY)(),U=(0,b.p)(ye,async()=>(await s.e(9385).then(s.bind(s,19385))).ROLE_LAYOUT,{combine(E,R){return[...E,R]},defaultValue:[]}),Y=(0,b.p)(ge,async()=>(await s.e(9385).then(s.bind(s,19385))).FORM_INITIAL_VALUES,{combine(E,R){return{...E,...R}},defaultValue:ge}),W=(0,b.p)(ue.M,async()=>(await s.e(7304).then(s.bind(s,97304))).MagicLinkEE),N=(0,z.useMutation)(E=>F("/admin/users",E),{async onSuccess({data:E}){I(E.data.registrationToken),await a(),re(),Z(!1)},onError(E){throw Z(!1),V({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),E},onSettled(){n()}}),se=D({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ie=async(E,{setErrors:R})=>{x(),Z(!0);try{await N.mutateAsync(E)}catch(H){n(),H?.response?.data?.error.message==="Email already taken"&&R({email:H.response.data.error.message})}},re=()=>{u?ee(u):_()},{buttonSubmitLabel:te,isDisabled:Q,next:u}=je[v],Ue=v==="create"?(0,e.jsx)(y.z,{type:"submit",loading:$,children:D(te)}):(0,e.jsx)(y.z,{type:"button",loading:$,onClick:_,children:D(te)});return W?(0,e.jsxs)(h.P,{onClose:_,labelledBy:"title",children:[(0,e.jsx)(X.x,{children:(0,e.jsx)(De.O,{label:se,children:(0,e.jsx)(Oe.$,{isCurrent:!0,children:se})})}),(0,e.jsx)(xe.J9,{enableReinitialize:!0,initialValues:Y,onSubmit:ie,validationSchema:Ae,validateOnChange:!1,children:({errors:E,handleChange:R,values:H})=>(0,e.jsxs)(t.l0,{children:[(0,e.jsx)(oe.f,{children:(0,e.jsxs)(p.k,{direction:"column",alignItems:"stretch",gap:6,children:[v!=="create"&&(0,e.jsx)(W,{registrationToken:B}),(0,e.jsxs)(m.x,{children:[(0,e.jsx)(M.Z,{variant:"beta",as:"h2",children:D({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),(0,e.jsx)(m.x,{paddingTop:4,children:(0,e.jsx)(p.k,{direction:"column",alignItems:"stretch",gap:1,children:(0,e.jsx)(ae.r,{gap:5,children:Ce.map(_e=>_e.map(T=>(0,e.jsx)(K.P,{...T.size,children:(0,e.jsx)(t.jm,{...T,disabled:Q,error:E[T.name],onChange:R,value:H[T.name]})},T.name)))})})})]}),(0,e.jsxs)(m.x,{children:[(0,e.jsx)(M.Z,{variant:"beta",as:"h2",children:D({id:"global.roles",defaultMessage:"User's role"})}),(0,e.jsx)(m.x,{paddingTop:4,children:(0,e.jsxs)(ae.r,{gap:5,children:[(0,e.jsx)(K.P,{col:6,xs:12,children:(0,e.jsx)(ue.S,{disabled:Q,error:E.roles,onChange:R,value:H.roles})}),U.map(_e=>_e.map(T=>(0,e.jsx)(K.P,{...T.size,children:(0,e.jsx)(t.jm,{...T,disabled:Q,onChange:R,value:H[T.name]})},T.name)))]})})]})]})}),(0,e.jsx)(L.m,{startActions:(0,e.jsx)(y.z,{variant:"tertiary",onClick:_,type:"button",children:D({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:Ue})]})})]}):null};Me.propTypes={onToggle:o.func.isRequired,onSuccess:o.func.isRequired};const me=({pagination:a})=>(0,e.jsx)(m.x,{paddingTop:4,children:(0,e.jsxs)(p.k,{alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(t.v4,{}),(0,e.jsx)(t.tU,{pagination:a})]})});me.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},me.propTypes={pagination:o.shape({page:o.number,pageCount:o.number,pageSize:o.number,total:o.number})};const ve=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Te=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:a},{formatMessage:_}){return(0,e.jsx)(M.Z,{textColor:"neutral800",children:a.map(v=>_({id:`Settings.permissions.users.${v.code}`,defaultMessage:v.name})).join(`,
`)})}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:a},{formatMessage:_}){return(0,e.jsxs)(p.k,{children:[(0,e.jsx)(t.qb,{isActive:a,variant:a?"success":"danger"}),(0,e.jsx)(M.Z,{textColor:"neutral800",children:_({id:a?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:a?"Active":"Inactive"})})]})}}],pe=["ee","license-limit-info"],he=()=>{const{post:a}=(0,t.kY)(),{formatAPIError:_}=(0,t.So)(),[v,ee]=(0,d.useState)(!1),$=(0,l.v9)(i.s),{allowedActions:{canCreate:Z,canDelete:B,canRead:I}}=(0,t.ss)($.settings.users),D=(0,z.useQueryClient)(),V=(0,t.lm)(),{formatMessage:x}=(0,P.Z)(),{search:n}=(0,ne.TH)();(0,t.go)();const{users:F,pagination:U,isError:Y,isLoading:W,refetch:N}=(0,le.u)(w.parse(n,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:I}),se=(0,b.p)(Ee,async()=>(await s.e(8384).then(s.bind(s,98384))).CreateActionEE),ie=Te.map(u=>({...u,metadatas:{...u.metadatas,label:x(u.metadatas.label)}})),re=x({id:"global.users",defaultMessage:"Users"}),te=()=>{ee(u=>!u)},Q=(0,z.useMutation)(async u=>{await a("/admin/users/batch-delete",{ids:u})},{async onSuccess(){await N(),await D.refetchQueries(pe)},onError(u){V({type:"warning",message:{id:"notification.error",message:_(u),defaultMessage:"An error occured"}})}});return se?(0,e.jsxs)(f.o,{"aria-busy":W,children:[(0,e.jsx)(t.SL,{name:"Users"}),(0,e.jsx)(S.T,{primaryAction:Z&&(0,e.jsx)(se,{onClick:te}),title:re,subtitle:x({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),I&&(0,e.jsx)(G.Z,{startActions:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.m,{label:x({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:re})}),(0,e.jsx)(de.F,{displayedFilters:ve})]})}),(0,e.jsxs)(k.D,{canRead:I,children:[!I&&(0,e.jsx)(t.ZF,{}),Y&&(0,e.jsx)("div",{children:"TODO: An error occurred"}),I&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.tM,{contentType:"Users",isLoading:W,onConfirmDeleteAll:Q.mutateAsync,onConfirmDelete:u=>Q.mutateAsync([u]),headers:ie,rows:F,withBulkActions:!0,withMainAction:B,children:(0,e.jsx)(ce,{canDelete:B,headers:ie,rows:F,withBulkActions:!0,withMainAction:B})}),U&&(0,e.jsx)(me,{pagination:U})]})]}),v&&(0,e.jsx)(Me,{onSuccess:async()=>{await N(),await D.refetchQueries(pe)},onToggle:te})]}):null},Le=()=>{const a=(0,b.p)(he,async()=>(await s.e(7110).then(s.bind(s,77110))).UserListPageEE);return a?(0,e.jsx)(a,{}):null},Ie=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const a=(0,l.v9)(i.s);return(0,e.jsx)(t.O4,{permissions:a.settings.users.main,children:(0,e.jsx)(Le,{})})}},Symbol.toStringTag,{value:"Module"}))},30864:(J,g,s)=>{s.d(g,{M:()=>m,S:()=>K,a:()=>A});var e=s(74081),t=s(70627),l=s(61020),i=s(66333),d=s(4987),y=s(5627),c=s(78955),O=s(87006),C=s(78031),r=s(34547),M=s(40464),p=s(72450);const A=({children:L,target:f})=>{const S=(0,O.lm)(),{formatMessage:G}=(0,l.Z)(),{copy:k}=(0,O.VP)(),w=G({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),P=async()=>{await k(f)&&S({type:"info",message:{id:"notification.link-copied"}})};return(0,e.jsx)(O.Y_,{endAction:(0,e.jsx)(d.h,{label:w,noBorder:!0,icon:(0,e.jsx)(C.Z,{}),onClick:P}),title:f,titleEllipsis:!0,subtitle:L,icon:(0,e.jsx)("span",{style:{fontSize:32},children:"\u2709\uFE0F"}),iconBackground:"neutral100"})};A.propTypes={children:t.oneOfType([t.element,t.string]).isRequired,target:t.string.isRequired};const m=({registrationToken:L})=>{const{formatMessage:f}=(0,l.Z)(),S=`${window.location.origin}${(0,i.T)()}/auth/register?registrationToken=${L}`;return(0,e.jsx)(A,{target:S,children:f({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})})};m.defaultProps={registrationToken:""},m.propTypes={registrationToken:t.string};const h=(0,p.F4)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,X=p.ZP.div`
  animation: ${h} 2s infinite linear;
`,oe=()=>(0,e.jsx)(X,{children:(0,e.jsx)(r.Z,{})}),ae=async()=>{const{get:L}=(0,O.tg)(),{data:f}=await L("/admin/roles");return f.data},K=({disabled:L,error:f,onChange:S,value:G})=>{const{status:k,data:w}=(0,M.useQuery)(["roles"],ae,{staleTime:5e4}),{formatMessage:P}=(0,l.Z)(),z=f?P({id:f,defaultMessage:f}):"",ne=P({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),le=P({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),b=P({id:"app.components.Select.placeholder",defaultMessage:"Select"}),de=k==="loading"?(0,e.jsx)(oe,{}):void 0;return(0,e.jsx)(y.P,{id:"roles",disabled:L,error:z,hint:le,label:ne,name:"roles",onChange:j=>{S({target:{name:"roles",value:j}})},placeholder:b,multi:!0,startIcon:de,value:G.map(j=>j.toString()),withTags:!0,required:!0,children:(w||[]).map(j=>(0,e.jsx)(c.W,{value:j.id.toString(),children:P({id:`global.${j.code}`,defaultMessage:j.name})},j.id))})};K.defaultProps={disabled:!1,error:void 0},K.propTypes={disabled:t.bool,error:t.string,onChange:t.func.isRequired,value:t.array.isRequired}},11266:(J,g,s)=>{s.d(g,{u:()=>i});var e=s(27279),t=s(87006),l=s(40464);function i(d={},y={}){const{id:c="",...O}=d,{get:C}=(0,t.kY)(),{data:r,isError:M,isLoading:p,refetch:A}=(0,l.useQuery)(["users",c,O],async()=>{const{data:{data:h}}=await C(`/admin/users/${c}`,{params:O});return h},y);return{users:e.useMemo(()=>{let h=[];return r&&("results"in r?Array.isArray(r.results)&&(h=r.results):h=[r]),h},[r]),pagination:e.useMemo(()=>(r&&"pagination"in r)??null,[r]),isLoading:p,isError:M,refetch:A}}},37472:(J,g,s)=>{s.d(g,{Z:()=>l});var e=s(74081),t=s(10701);const l=({startActions:i,endActions:d})=>!i&&!d?null:(0,e.jsxs)(t.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(t.k,{gap:2,wrap:"wrap",children:i}),(0,e.jsx)(t.k,{gap:2,shrink:0,wrap:"wrap",children:d})]})},16543:(J,g,s)=>{s.d(g,{Z:()=>l});var e=s(74081);const t=i=>(0,e.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...i,children:[(0,e.jsx)("path",{fill:"#32324D",d:"M0 2.8A.8.8 0 0 1 .8 2h22.4a.8.8 0 0 1 .8.8v2.71a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2.8Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M1.922 7.991C.197 6.675 0 6.252 0 5.289h23.953c.305 1.363-1.594 2.506-2.297 3.125-1.953 1.363-6.253 4.36-7.828 5.45-1.575 1.09-3.031.455-3.562 0-2.063-1.41-6.62-4.557-8.344-5.873ZM22.8 18H1.2c-.663 0-1.2.471-1.2 1.053v1.894C0 21.529.537 22 1.2 22h21.6c.663 0 1.2-.471 1.2-1.053v-1.894c0-.582-.537-1.053-1.2-1.053Z"}),(0,e.jsx)("path",{fill:"#32324D",d:"M0 9.555v10.972h24V9.554c-2.633 1.95-8.367 6.113-9.96 7.166-1.595 1.052-3.352.438-4.032 0L0 9.555Z"})]}),l=t}}]);
