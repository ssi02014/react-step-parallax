# 💻 React Step Parallax

<br />

<p align="center">
  <a href="https://www.npmjs.com/package/react-step-parallax" target="_blank">
    <img src="https://github.com/ssi02014/react-step-parallax/assets/64779472/5b8ba080-e1c6-43e3-86a4-58165dc2a3b3" />
  </a>
</p>

<h2 align="center">React FullPage Step Parallax 🚀 </h2> 

<p align="center">
  <a href="https://www.npmjs.com/package/react-step-parallax" target="_blank">
  <img src="https://img.shields.io/npm/v/react-step-parallax.svg"></a>
  <a href="https://www.npmjs.com/package/react-step-parallax" target="_blank">
  <img src="https://img.shields.io/npm/dt/react-step-parallax.svg"></a>
  <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fssi02014%2Freact-step-parallax&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false">
</p>

<br />

<h3 align="center">🌟 CONTRIBUTORS 🌟</h3>
<p align="center">
  <a href="https://github.com/ssi02014/react-step-parallax/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=ssi02014/react-step-parallax">
  </a>
</p>

<br />

<h3 align="center">Storybook Demo Page</h3>
<h5 align="center">Click Icon</h5>
<p align="center">
  <a href="https://ssi02014.github.io/react-step-parallax">
    <img src="https://user-images.githubusercontent.com/64779472/220122236-c90ae4a5-8271-41df-b150-230b97991d41.png" width="120">
  </a>
</p>
<p align="center">
  <a href="https://github.com/ssi02014/react-step-parallax/blob/master/src/stories/components/StepParallax.stories.tsx">Storybook Demo Code</a>
</p>

<br />

## Desktop Video 📷
<p align='center'>
  <img width="450" src="https://github.com/ssi02014/react-step-parallax/assets/64779472/91268e36-09b4-4e75-9f1a-386474909fac">
</p>

<br />

## Mobile Video 📷
<p align='center'>
  <img width="450" src="https://github.com/ssi02014/react-step-parallax/assets/64779472/1628f06e-a3f8-4068-9497-cfe61112c8d0">
</p>

<br />

## How to use 😊
### STEP 1️⃣
- Install library
```
yarn add react-step-parallax
or
npm install react-step-parallax
```

<br />

### STEP 1️⃣
```js
import StepParallax from 'react-step-parallax';

const App = () => {
  return (
    <div>
      <StepParallax
        easing={'ease'} // 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
        duration={500} // number
        background={'#fff'} // css background property (string)
        translateX={100} // number
        translateY={0} // number
        rotate={0} // number
        extra={/* extra ReactNode(Required position: absolute) */}
      >
        <StepParallax.Item>
          {/* STEP1 ReactNode */}
        </StepParallax.Item>
        <StepParallax.Item>
          {/* STEP2 ReactNode */}
        </StepParallax.Item>
        <StepParallax.Item>
          {/* STEP3 ReactNode */}
        </StepParallax.Item>
        <StepParallax.Item>
          {/* STEP4 ReactNode */}
        </StepParallax.Item>
      </StepParallax>

      {/* ... */}
    </div>
  )
}
```

<br />