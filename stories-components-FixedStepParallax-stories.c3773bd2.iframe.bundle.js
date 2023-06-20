"use strict";(self.webpackChunkreact_step_parallax=self.webpackChunkreact_step_parallax||[]).push([[228],{"./src/stories/components/FixedStepParallax.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FixedStepParallax_stories});var _templateObject,_templateObject2,_templateObject3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectDestructuringEmpty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),common=__webpack_require__("./src/utils/common.ts"),FixedStepParallaxMainWrapper=emotion_styled_browser_esm.Z.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  position: relative;\n  width: 100%;\n  height: ",";\n  background: ",";\n"])),(function(_ref){var count=_ref.count;return"calc((var(--vh, 1vh) * 100 * ".concat(count+1,"));")}),(function(_ref2){return _ref2.background})),FixedStepParallaxScrollWrapper=emotion_styled_browser_esm.Z.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  height: calc((var(--vh, 1vh) * 100));\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n"]))),FixedStepParallaxItemWrapper=emotion_styled_browser_esm.Z.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: calc((var(--vh, 1vh) * 100));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  opacity: 0;\n  transition: ",";\n  transform: ",";\n  z-index: 9999;\n\n  &.active {\n    opacity: 1;\n    transform: ",";\n  }\n"])),(function(_ref3){var duration=_ref3.duration,easing=_ref3.easing;return"all ".concat(duration/1e3,"s ").concat(easing)}),(function(_ref4){var startX=_ref4.startX,startY=_ref4.startY,rotate=_ref4.rotate;return"translate(".concat((0,common.y)(startX),", ").concat((0,common.y)(startY),") rotate(").concat(rotate,"deg)")}),(function(_ref5){var endX=_ref5.endX,endY=_ref5.endY;return"translate(".concat(endX,"px, ").concat(endY,"px) rotate(0deg)")}));try{FixedStepParallaxMainWrapper.displayName="FixedStepParallaxMainWrapper",FixedStepParallaxMainWrapper.__docgenInfo={description:"",displayName:"FixedStepParallaxMainWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any> | undefined"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}},background:{defaultValue:null,description:"",name:"background",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FixedStepParallax/style.tsx#FixedStepParallaxMainWrapper"]={docgenInfo:FixedStepParallaxMainWrapper.__docgenInfo,name:"FixedStepParallaxMainWrapper",path:"src/components/FixedStepParallax/style.tsx#FixedStepParallaxMainWrapper"})}catch(__react_docgen_typescript_loader_error){}try{FixedStepParallaxScrollWrapper.displayName="FixedStepParallaxScrollWrapper",FixedStepParallaxScrollWrapper.__docgenInfo={description:"",displayName:"FixedStepParallaxScrollWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FixedStepParallax/style.tsx#FixedStepParallaxScrollWrapper"]={docgenInfo:FixedStepParallaxScrollWrapper.__docgenInfo,name:"FixedStepParallaxScrollWrapper",path:"src/components/FixedStepParallax/style.tsx#FixedStepParallaxScrollWrapper"})}catch(__react_docgen_typescript_loader_error){}try{FixedStepParallaxItemWrapper.displayName="FixedStepParallaxItemWrapper",FixedStepParallaxItemWrapper.__docgenInfo={description:"",displayName:"FixedStepParallaxItemWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any> | undefined"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},endX:{defaultValue:null,description:"",name:"endX",required:!0,type:{name:"number"}},endY:{defaultValue:null,description:"",name:"endY",required:!0,type:{name:"number"}},startX:{defaultValue:null,description:"",name:"startX",required:!0,type:{name:"number"}},startY:{defaultValue:null,description:"",name:"startY",required:!0,type:{name:"number"}},rotate:{defaultValue:null,description:"",name:"rotate",required:!0,type:{name:"number"}},easing:{defaultValue:null,description:"",name:"easing",required:!0,type:{name:"enum",value:[{value:'"linear"'},{value:'"ease"'},{value:'"ease-in"'},{value:'"ease-out"'},{value:'"ease-in-out"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FixedStepParallax/style.tsx#FixedStepParallaxItemWrapper"]={docgenInfo:FixedStepParallaxItemWrapper.__docgenInfo,name:"FixedStepParallaxItemWrapper",path:"src/components/FixedStepParallax/style.tsx#FixedStepParallaxItemWrapper"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FixedStepParallaxContext=(0,react.createContext)({startX:0,startY:0,endX:0,endY:0,rotate:0,duration:.5,easing:"ease"}),FixedStepParallax=function FixedStepParallax(_ref){var children=_ref.children,extra=_ref.extra,_ref$rotate=_ref.rotate,rotate=void 0===_ref$rotate?0:_ref$rotate,_ref$background=_ref.background,background=void 0===_ref$background?"#fff":_ref$background,_ref$duration=_ref.duration,duration=void 0===_ref$duration?500:_ref$duration,_ref$endX=_ref.endX,endX=void 0===_ref$endX?0:_ref$endX,_ref$endY=_ref.endY,endY=void 0===_ref$endY?0:_ref$endY,_ref$startX=_ref.startX,startX=void 0===_ref$startX?0:_ref$startX,_ref$startY=_ref.startY,startY=void 0===_ref$startY?0:_ref$startY,_ref$easing=_ref.easing,easing=void 0===_ref$easing?"ease":_ref$easing,mainWrapperRef=(0,react.useRef)(null),scrollWrapperRef=(0,react.useRef)(null),childrenCount=react.Children.count(children);return(0,react.useEffect)((function(){if(scrollWrapperRef.current&&mainWrapperRef.current){var scrollWrapper=scrollWrapperRef.current,clientHeight=scrollWrapper.clientHeight,boundingTop=scrollWrapper.getBoundingClientRect().top,fixedStepParallaxItems=scrollWrapper.querySelectorAll(".fixed-step-parallax-item");if(childrenCount!==fixedStepParallaxItems.length)throw new Error("Add only  FixedStepParallax.Item to Children.");fixedStepParallaxItems[0].classList.add("active");var scroll=function scroll(){var scrollY=window.scrollY;scrollWrapper.style.position=scrollY-boundingTop>2*clientHeight*childrenCount||scrollY<boundingTop?"relative":"sticky",fixedStepParallaxItems.forEach((function(_,idx){scrollY-boundingTop>=clientHeight*idx&&scrollY-boundingTop<clientHeight*(idx+1)&&(idx?idx===childrenCount-1?(fixedStepParallaxItems[idx].classList.add("active"),fixedStepParallaxItems[idx-1].classList.remove("active")):(fixedStepParallaxItems[idx].classList.add("active"),fixedStepParallaxItems[idx+1].classList.remove("active"),fixedStepParallaxItems[idx-1].classList.remove("active")):(fixedStepParallaxItems[idx].classList.add("active"),fixedStepParallaxItems[idx+1].classList.remove("active")))}))};window.addEventListener("scroll",scroll)}}),[]),(0,react.useEffect)((function(){var vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(vh,"px"))}),[]),(0,jsx_runtime.jsx)(FixedStepParallaxContext.Provider,{value:{duration,easing,startX,startY,rotate,endX,endY},children:(0,jsx_runtime.jsx)(FixedStepParallaxMainWrapper,{ref:mainWrapperRef,background,count:childrenCount,children:(0,jsx_runtime.jsxs)(FixedStepParallaxScrollWrapper,{ref:scrollWrapperRef,children:[children,extra]})})})};FixedStepParallax.Item=function(_ref2){var children=_ref2.children,context=(0,react.useContext)(FixedStepParallaxContext);return(0,jsx_runtime.jsx)(FixedStepParallaxItemWrapper,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:"fixed-step-parallax-item"},context),{},{children}))};const components_FixedStepParallax=FixedStepParallax;try{FixedStepParallax.displayName="FixedStepParallax",FixedStepParallax.__docgenInfo={description:"",displayName:"FixedStepParallax",props:{rotate:{defaultValue:{value:"0"},description:"",name:"rotate",required:!1,type:{name:"number | undefined"}},background:{defaultValue:{value:"#fff"},description:"",name:"background",required:!1,type:{name:"string | undefined"}},duration:{defaultValue:{value:"500"},description:"",name:"duration",required:!1,type:{name:"number | undefined"}},endX:{defaultValue:{value:"0"},description:"",name:"endX",required:!1,type:{name:"number | undefined"}},endY:{defaultValue:{value:"0"},description:"",name:"endY",required:!1,type:{name:"number | undefined"}},startX:{defaultValue:{value:"0"},description:"",name:"startX",required:!1,type:{name:"number | undefined"}},startY:{defaultValue:{value:"0"},description:"",name:"startY",required:!1,type:{name:"number | undefined"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},easing:{defaultValue:{value:"ease"},description:"",name:"easing",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"linear"'},{value:'"ease"'},{value:'"ease-in"'},{value:'"ease-out"'},{value:'"ease-in-out"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FixedStepParallax/index.tsx#FixedStepParallax"]={docgenInfo:FixedStepParallax.__docgenInfo,name:"FixedStepParallax",path:"src/components/FixedStepParallax/index.tsx#FixedStepParallax"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;const FixedStepParallax_stories={title:"components/FixedStepParallax",argTypes:{easing:{options:["linear","ease","ease-in","ease-out","ease-in-out"],control:{type:"select"}}}};var Default={render:function Template(_ref){var args=Object.assign({},((0,objectDestructuringEmpty.Z)(_ref),_ref));return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"700px",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff"},children:(0,jsx_runtime.jsx)("h2",{children:"EMPTY SPACE1"})}),(0,jsx_runtime.jsxs)(components_FixedStepParallax,{easing:args.easing,duration:args.duration,background:args.background,endX:args.endX,endY:args.endY,startX:args.startX,startY:args.startY,rotate:args.rotate,extra:args.extra,children:[(0,jsx_runtime.jsxs)(components_FixedStepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullScreen Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step1"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]}),(0,jsx_runtime.jsxs)(components_FixedStepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullScreen Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step2"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]}),(0,jsx_runtime.jsxs)(components_FixedStepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullScreen Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step3"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]}),(0,jsx_runtime.jsxs)(components_FixedStepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullScreen Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step4"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]}),(0,jsx_runtime.jsxs)(components_FixedStepParallax.Item,{children:[(0,jsx_runtime.jsx)("h2",{style:{fontSize:"32px",textAlign:"center"},children:"React FullScreen Step Parallax"}),(0,jsx_runtime.jsx)("h3",{children:"Step5"}),(0,jsx_runtime.jsx)("button",{children:"Start"})]})]}),(0,jsx_runtime.jsx)("div",{style:{width:"100%",height:"700px",backgroundColor:"#DEFE",display:"flex",justifyContent:"center",alignItems:"center",color:"black"},children:(0,jsx_runtime.jsx)("h2",{children:"EMPTY SPACE2"})})]})},args:{background:"#fff",rotate:0,duration:500,endX:0,endY:0,startX:100,startY:0,easing:"ease",extra:(0,jsx_runtime.jsx)("div",{style:{width:"80px",height:"80px",position:"absolute",backgroundColor:"#3178d4",bottom:"10%",left:"10%",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff"},children:"Extra Div1!!"})}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  render: Template,\n  args: {\n    background: '#fff',\n    rotate: 0,\n    duration: 500,\n    endX: 0,\n    endY: 0,\n    startX: 100,\n    startY: 0,\n    easing: 'ease',\n    extra: <div style={{\n      width: '80px',\n      height: '80px',\n      position: 'absolute',\n      backgroundColor: '#3178d4',\n      bottom: '10%',\n      left: '10%',\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center',\n      color: '#fff'\n    }}>\n        Extra Div1!!\n      </div>\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/utils/common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>getConvertedImageSize});var getConvertedImageSize=function getConvertedImageSize(size){return"number"==typeof size?"".concat(size,"px"):size?isNaN(+size)?null:"".concat(size,"px"):null}}}]);