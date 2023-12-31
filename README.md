# 💻 React Step Parallax
### 내가 쉽게 활용하려고 만든 Parallax 컴포넌트 💪

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
<h5 align="center">Click Icon ⬇️</h5>
<p align="center">
  <a href="https://ssi02014.github.io/react-step-parallax">
    <img src="https://user-images.githubusercontent.com/64779472/220122236-c90ae4a5-8271-41df-b150-230b97991d41.png" width="120">
  </a>
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

### STEP 2️⃣
```js
import { FixedStepParallax } from 'react-step-parallax';

const App = () => {
  return (
    <div>
      {/* Parallax Common Setting */}
      <FixedStepParallax
        background={'#fff'} // css background property (string)
        startX={100} // number(px), start position
        startY={0} // number(px), start position
        endX={0} // number(px), end position
        endY={0} // number(px), end position
        rotate={0} // number(deg)
        easing={'ease'} // 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out'
        duration={500} // number (millisecond 500 -> 0.5)
        extra={/* extra ReactNode(Required position: absolute) */}
      >
        <FixedStepParallax.Item
          // Each Item Props Overriding
          startX={200} 
          startY={-200}
          endX={100} 
          endY={100}
          rotate={30}
          easing={'ease-in'} 
          duration={300} 
        >
          {/* STEP1 ReactNode */}
        </FixedStepParallax.Item>
        <FixedStepParallax.Item>
          {/* STEP2 ReactNode */}
        </FixedStepParallax.Item>
        <FixedStepParallax.Item>
          {/* STEP3 ReactNode */}
        </FixedStepParallax.Item>
        <FixedStepParallax.Item>
          {/* STEP4 ReactNode */}
        </FixedStepParallax.Item>
      </FixedStepParallax>
      {/* ... */}
    </div>
  )
}
```

<br />

## How to use Next.js(v13) 😊
### STEP 1️⃣
- Install library
```
yarn add react-step-parallax next-transpile-modules
or
npm install react-step-parallax next-transpile-modules
```

<br />

### STEP 2️⃣
- Modify next.config
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["react-step-parallax"],
};

module.exports = nextConfig;
```

<br />

### STEP 3️⃣
- the usage is the same as "React.js"

<br />
