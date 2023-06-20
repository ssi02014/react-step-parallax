import React from 'react';
import { StoryFn } from '@storybook/react';
import FixedStepParallax, {
  FixedStepParallaxProps,
} from '@components/FixedStepParallax';

export default {
  title: 'components/FixedStepParallax',
  argTypes: {
    easing: {
      options: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'],
      control: { type: 'select' },
    },
  },
};

const Template: StoryFn<FixedStepParallaxProps> = ({ ...args }) => {
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
      <FixedStepParallax
        easing={args.easing}
        duration={args.duration}
        background={args.background}
        endX={args.endX}
        endY={args.endY}
        startX={args.startX}
        startY={args.startY}
        rotate={args.rotate}
        extra={args.extra}>
        <FixedStepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullScreen Step Parallax
          </h2>
          <h3>Step1</h3>
          <button>Start</button>
        </FixedStepParallax.Item>
        <FixedStepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullScreen Step Parallax
          </h2>
          <h3>Step2</h3>
          <button>Start</button>
        </FixedStepParallax.Item>
        <FixedStepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullScreen Step Parallax
          </h2>
          <h3>Step3</h3>
          <button>Start</button>
        </FixedStepParallax.Item>
        <FixedStepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullScreen Step Parallax
          </h2>
          <h3>Step4</h3>
          <button>Start</button>
        </FixedStepParallax.Item>
        <FixedStepParallax.Item>
          <h2 style={{ fontSize: '32px', textAlign: 'center' }}>
            React FullScreen Step Parallax
          </h2>
          <h3>Step5</h3>
          <button>Start</button>
        </FixedStepParallax.Item>
      </FixedStepParallax>

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
    endX: 0,
    endY: 0,
    startX: 100,
    startY: 0,
    easing: 'ease',
    extra: (
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
    ),
  },
};
