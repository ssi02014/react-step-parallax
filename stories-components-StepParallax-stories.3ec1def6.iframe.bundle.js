"use strict";(self.webpackChunkreact_step_parallax=self.webpackChunkreact_step_parallax||[]).push([[956],{"./src/stories/components/StepParallax.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StepParallax_stories});var _templateObject,_templateObject2,_templateObject3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),ParallaxMainWrapper=emotion_styled_browser_esm.Z.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  width: 100%;\n  background: ",";\n"])),(function(_ref){return _ref.background})),ParallaxScrollWrapper=emotion_styled_browser_esm.Z.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n"]))),ParallaxScrollItemWrapper=emotion_styled_browser_esm.Z.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  opacity: 0;\n  transition: ",";\n  transform: ",";\n  z-index: 9999;\n\n  &.active {\n    opacity: 1;\n    transform: translate(0, 0) rotate(0deg);\n  }\n"])),(function(_ref2){var duration=_ref2.duration,easing=_ref2.easing;return"all ".concat(duration/1e3,"s ").concat(easing)}),(function(_ref3){var translateX=_ref3.translateX,translateY=_ref3.translateY,rotate=_ref3.rotate;return"translate(".concat(translateX,"px, ").concat(translateY,"px) rotate(").concat(rotate,"deg)")}));try{ParallaxMainWrapper.displayName="ParallaxMainWrapper",ParallaxMainWrapper.__docgenInfo={description:"",displayName:"ParallaxMainWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any> | undefined"}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StepParallax/style.tsx#ParallaxMainWrapper"]={docgenInfo:ParallaxMainWrapper.__docgenInfo,name:"ParallaxMainWrapper",path:"src/components/StepParallax/style.tsx#ParallaxMainWrapper"})}catch(__react_docgen_typescript_loader_error){}try{ParallaxScrollWrapper.displayName="ParallaxScrollWrapper",ParallaxScrollWrapper.__docgenInfo={description:"",displayName:"ParallaxScrollWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StepParallax/style.tsx#ParallaxScrollWrapper"]={docgenInfo:ParallaxScrollWrapper.__docgenInfo,name:"ParallaxScrollWrapper",path:"src/components/StepParallax/style.tsx#ParallaxScrollWrapper"})}catch(__react_docgen_typescript_loader_error){}try{ParallaxScrollItemWrapper.displayName="ParallaxScrollItemWrapper",ParallaxScrollItemWrapper.__docgenInfo={description:"",displayName:"ParallaxScrollItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any> | undefined"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!0,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!0,type:{name:"number"}},rotate:{defaultValue:null,description:"",name:"rotate",required:!0,type:{name:"number"}},easing:{defaultValue:null,description:"",name:"easing",required:!0,type:{name:"enum",value:[{value:'"linear"'},{value:'"ease"'},{value:'"ease-in"'},{value:'"ease-out"'},{value:'"ease-in-out"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StepParallax/style.tsx#ParallaxScrollItemWrapper"]={docgenInfo:ParallaxScrollItemWrapper.__docgenInfo,name:"ParallaxScrollItemWrapper",path:"src/components/StepParallax/style.tsx#ParallaxScrollItemWrapper"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),StepParallaxContext=(0,react.createContext)({translateX:0,translateY:0,rotate:0,duration:.5,easing:"ease"}),StepParallax=function StepParallax(_ref){var children=_ref.children,extra=_ref.extra,_ref$rotate=_ref.rotate,rotate=void 0===_ref$rotate?0:_ref$rotate,_ref$background=_ref.background,background=void 0===_ref$background?"#fff":_ref$background,_ref$duration=_ref.duration,duration=void 0===_ref$duration?500:_ref$duration,_ref$translateX=_ref.translateX,translateX=void 0===_ref$translateX?0:_ref$translateX,_ref$translateY=_ref.translateY,translateY=void 0===_ref$translateY?0:_ref$translateY,_ref$easing=_ref.easing,easing=void 0===_ref$easing?"ease":_ref$easing,mainWrapperRef=(0,react.useRef)(null),scrollWrapperRef=(0,react.useRef)(null),childrenCount=react.Children.count(children);return(0,react.useEffect)((function(){if(scrollWrapperRef.current&&mainWrapperRef.current){var scrollWrapper=scrollWrapperRef.current,clientHeight=scrollWrapper.clientHeight,boundingTop=scrollWrapper.getBoundingClientRect().top,scrollItems=scrollWrapper.querySelectorAll(".parallax-scroll-item-wrapper");mainWrapperRef.current.style.height="".concat(clientHeight*(childrenCount+1),"px"),scrollItems[0].classList.add("active");var scroll=function scroll(){var scrollY=window.scrollY;scrollWrapper.style.position=scrollY-boundingTop>clientHeight*childrenCount+clientHeight||scrollY<boundingTop?"relative":"sticky",react.Children.forEach(children,(function(child,idx){scrollY-boundingTop>=clientHeight*idx&&scrollY-boundingTop<clientHeight*(idx+1)&&(idx?idx===childrenCount-1?(scrollItems[idx].classList.add("active"),scrollItems[idx-1].classList.remove("active")):(scrollItems[idx].classList.add("active"),scrollItems[idx+1].classList.remove("active"),scrollItems[idx-1].classList.remove("active")):(scrollItems[idx].classList.add("active"),scrollItems[idx+1].classList.remove("active")))}))};window.addEventListener("scroll",scroll)}}),[]),(0,jsx_runtime.jsx)(StepParallaxContext.Provider,{value:{duration,easing,translateX,translateY,rotate},children:(0,jsx_runtime.jsx)(ParallaxMainWrapper,{ref:mainWrapperRef,background,children:(0,jsx_runtime.jsxs)(ParallaxScrollWrapper,{ref:scrollWrapperRef,children:[children,extra]})})})};StepParallax.Item=function(_ref2){var children=_ref2.children,context=(0,react.useContext)(StepParallaxContext),itemWrapperRef=(0,react.useRef)(null);return(0,jsx_runtime.jsx)(ParallaxScrollItemWrapper,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:"parallax-scroll-item-wrapper",ref:itemWrapperRef},context),{},{children}))};const components_StepParallax=StepParallax;try{StepParallax.displayName="StepParallax",StepParallax.__docgenInfo={description:"",displayName:"StepParallax",props:{rotate:{defaultValue:{value:"0"},description:"",name:"rotate",required:!1,type:{name:"number | undefined"}},background:{defaultValue:{value:"#fff"},description:"",name:"background",required:!1,type:{name:"string | undefined"}},duration:{defaultValue:{value:"500"},description:"",name:"duration",required:!1,type:{name:"number | undefined"}},translateX:{defaultValue:{value:"0"},description:"",name:"translateX",required:!1,type:{name:"number | undefined"}},translateY:{defaultValue:{value:"0"},description:"",name:"translateY",required:!1,type:{name:"number | undefined"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},easing:{defaultValue:{value:"ease"},description:"",name:"easing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"linear"'},{value:'"ease"'},{value:'"ease-in"'},{value:'"ease-out"'},{value:'"ease-in-out"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/StepParallax/index.tsx#StepParallax"]={docgenInfo:StepParallax.__docgenInfo,name:"StepParallax",path:"src/components/StepParallax/index.tsx#StepParallax"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;const StepParallax_stories={title:"components/StepParallax",argTypes:{easing:{options:["linear","ease","ease-in","ease-out","ease-in-out"],control:{type:"select"}}}};var Default={render:function Template(_ref){var args=Object.assign({},((0,objectDestructuringEmpty.Z)(_ref),_ref));return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"700px",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff"},children:(0,jsx_runtime.jsx)("h2",{children:"EMPTY SPACE1"})}),(0,jsx_runtime.jsxs)(components_StepParallax,{easing:args.easing,duration:args.duration,background:args.background,translateX:args.translateX,translateY:args.translateY,rotate:args.rotate,extra:args.extra,children:[(0,jsx_runtime.jsxs)(components_StepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullPage Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step1"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]}),(0,jsx_runtime.jsxs)(components_StepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullPage Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step2"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]}),(0,jsx_runtime.jsxs)(components_StepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullPage Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step3"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]}),(0,jsx_runtime.jsxs)(components_StepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullPage Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step4"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]}),(0,jsx_runtime.jsxs)(components_StepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullPage Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step5"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]})]}),(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"700px",backgroundColor:"#DEFE",display:"flex",justifyContent:"center",alignItems:"center",color:"black"},children:(0,jsx_runtime.jsx)("h2",{children:"EMPTY SPACE2"})})]})},args:{background:"#fff",rotate:0,duration:500,translateX:100,translateY:0,easing:"ease",extra:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("div",{style:{width:"80px",height:"80px",position:"absolute",backgroundColor:"#3178d4",bottom:"10%",left:"10%",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff"},children:"Extra Div1!!"})})}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: Template,\n  args: {\n    background: '#fff',\n    rotate: 0,\n    duration: 500,\n    translateX: 100,\n    translateY: 0,\n    easing: 'ease',\n    extra: <>\n        <div style={{\n        width: '80px',\n        height: '80px',\n        position: 'absolute',\n        backgroundColor: '#3178d4',\n        bottom: '10%',\n        left: '10%',\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center',\n        color: '#fff'\n      }}>\n          Extra Div1!!\n        </div>\n      </>\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]}}]);