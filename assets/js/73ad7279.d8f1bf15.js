"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[241],{3882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>S,default:()=>C,frontMatter:()=>N,metadata:()=>A,toc:()=>E});var a=n(4848),r=n(8453);var i=n(6540),s=n(4164),l=n(3104),o=n(6347),u=n(205),c=n(7485),d=n(1682),m=n(679);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[o,c]=f({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,m.Dv)(n);return[a,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=o??d;return b({value:e,tabValues:r})?e:null})();(0,u.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,r]),tabValues:r}}var v=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==r&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:m,onClick:d,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=g(e);return(0,a.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,a.jsx)(y,{...t,...e}),(0,a.jsx)(w,{...t,...e})]})}function k(e){const t=(0,v.A)();return(0,a.jsx)(j,{...e,children:h(e.children)},String(t))}const I={tabItem:"tabItem_Ymn6"};function V(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(I.tabItem,r),hidden:n,children:t})}const N={sidebar_position:1},S="Introduction",A={id:"machine-learning/statistical-modeling/introduction",title:"Introduction",description:"Probability and Statistics",source:"@site/knowledge/machine-learning/statistical-modeling/introduction.md",sourceDirName:"machine-learning/statistical-modeling",slug:"/machine-learning/statistical-modeling/introduction",permalink:"/knowledge/machine-learning/statistical-modeling/introduction",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Statistical Modeling",permalink:"/knowledge/category/statistical-modeling"},next:{title:"Appendix",permalink:"/knowledge/machine-learning/statistical-modeling/appendix"}},T={},E=[{value:"Probability and Statistics",id:"probability-and-statistics",level:2}];function q(e){const t={annotation:"annotation",h1:"h1",h2:"h2",header:"header",math:"math",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,a.jsx)(t.h2,{id:"probability-and-statistics",children:"Probability and Statistics"}),"\n",(0,a.jsx)(k,{children:(0,a.jsx)(V,{value:"banan",label:"Random Variable (rv)",attributes:{type:"definition"},children:(0,a.jsx)("div",{class:"tab-content","data-type":"definition",children:(0,a.jsxs)(t.p,{children:["Blala ",(0,a.jsxs)(t.span,{className:"katex",children:[(0,a.jsx)(t.span,{className:"katex-mathml",children:(0,a.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(t.semantics,{children:[(0,a.jsx)(t.mrow,{children:(0,a.jsx)(t.mo,{children:"\u222b"})}),(0,a.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\int "})]})})}),(0,a.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(t.span,{className:"base",children:[(0,a.jsx)(t.span,{className:"strut",style:{height:"1.1111em",verticalAlign:"-0.3061em"}}),(0,a.jsx)(t.span,{className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0006em"},children:"\u222b"})]})})]})]})})})})]})}function C(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(q,{...e})}):q(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var a=n(6540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);