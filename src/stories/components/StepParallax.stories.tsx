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
        }}
      />
      <StepParallax
        easing={args.easing}
        duration={args.duration}
        background={args.background}
        translateX={args.translateX}
        translateY={args.translateY}>
        <StepParallax.Item>
          <h2>React FullPage Step Parallax</h2>
          <h5>Step1</h5>
          <button>Start</button>
        </StepParallax.Item>
        <StepParallax.Item>
          <h2>React FullPage Step Parallax</h2>
          <h5>Step2</h5>
          <button>Start</button>
        </StepParallax.Item>
        <StepParallax.Item>
          <h2>React FullPage Step Parallax</h2>
          <h5>Step3</h5>
          <button>Start</button>
        </StepParallax.Item>
        <StepParallax.Item>
          <h2>React FullPage Step Parallax</h2>
          <h5>Step4</h5>
          <button>Start</button>
        </StepParallax.Item>
        <StepParallax.Item>
          <h2>React FullPage Step Parallax</h2>
          <h5>Step5</h5>
          <button>Start</button>
        </StepParallax.Item>
      </StepParallax>

      <div
        style={{
          width: '100%',
          height: '700px',
          backgroundColor: 'green',
        }}
      />
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
  },
};
