import React from 'react';
import { StoryFn } from '@storybook/react';
import StepParallax, { StepParallaxProps } from '@components/StepParallax';

export default {
  title: 'components/StepParallax',
  argTypes: {
    easing: {
      options: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'],
      control: { type: 'select' },
    },
  },
};

const Template: StoryFn<StepParallaxProps> = ({ ...args }) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '700px',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
        }}>
        <h2>EMPTY SPACE1</h2>
      </div>
      <StepParallax
        easing={args.easing}
        duration={args.duration}
        background={args.background}
        translateX={args.translateX}
        translateY={args.translateY}
        rotate={args.rotate}
        extra={args.extra}>
        <StepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullPage Step Parallax
          </h2>
          <h3>Step1</h3>
          <button>Start</button>
        </StepParallax.Item>
        <StepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullPage Step Parallax
          </h2>
          <h3>Step2</h3>
          <button>Start</button>
        </StepParallax.Item>
        <StepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullPage Step Parallax
          </h2>
          <h3>Step3</h3>
          <button>Start</button>
        </StepParallax.Item>
        <StepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullPage Step Parallax
          </h2>
          <h3>Step4</h3>
          <button>Start</button>
        </StepParallax.Item>
        <StepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullPage Step Parallax
          </h2>
          <h3>Step5</h3>
          <button>Start</button>
        </StepParallax.Item>
      </StepParallax>

      <div
        style={{
          width: '100%',
          height: '700px',
          backgroundColor: '#DEFE',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
        }}>
        <h2>EMPTY SPACE2</h2>
      </div>
    </div>
  );
};

export const Default = {
  render: Template,

  args: {
    background: '#fff',
    rotate: 0,
    duration: 500,
    translateX: 100,
    translateY: 0,
    easing: 'ease',
    extra: (
      <>
        <div
          style={{
            width: '80px',
            height: '80px',
            position: 'absolute',
            backgroundColor: '#3178d4',
            bottom: '10%',
            left: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
          }}>
          Extra Div1!!
        </div>
      </>
    ),
  },
};
