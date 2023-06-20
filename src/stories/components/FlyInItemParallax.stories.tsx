import React from 'react';
import { StoryFn } from '@storybook/react';
import FlyInItemParallax, {
  FlyInItemParallaxProps,
} from '@components/FlyInItemParallax';
import styled from '@emotion/styled';

export default {
  title: 'components/FlyInItemParallax',
  argTypes: {
    easing: {
      options: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'],
      control: { type: 'radio' },
    },
    justify: {
      options: [
        'start',
        'end',
        'center',
        'space-around',
        'space-between',
        'space-evenly',
        'flex-start',
        'flex-end',
        'left',
        'right',
      ],
      control: { type: 'radio' },
    },
    align: {
      options: [
        'normal',
        'stretch',
        'center',
        'start',
        'end',
        'flex-start',
        'flex-end',
        'self-start',
        'self-end',
      ],
      control: { type: 'radio' },
    },
    direction: {
      options: ['column', 'row'],
      control: { type: 'radio' },
    },
    wrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: { type: 'radio' },
    },
  },
};

const Template: StoryFn<FlyInItemParallaxProps> = ({ ...args }) => {
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '1500px',
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
        }}>
        <h2>EMPTY SPACE1</h2>
      </div>
      <FlyInItemParallax
        startY={args.startY}
        startX={args.startX}
        gap={args.gap}
        rotate={args.rotate}
        duration={args.duration}
        delay={args.delay}
        screenHeight={args.screenHeight}
        extra={args.extra}
        justify={args.justify}
        align={args.align}
        wrap={args.wrap}
        direction={args.direction}
        background={args.background}
        threshold={args.threshold}>
        <FlyInItemParallax.Item>
          <Box>
            <h3>Item1</h3>
            <p>Description</p>
          </Box>
        </FlyInItemParallax.Item>
        <FlyInItemParallax.Item rotate={30}>
          <Box>
            <h3>Item1</h3>
            <p>Overriding(Rotate: 30)</p>
          </Box>
        </FlyInItemParallax.Item>
        <FlyInItemParallax.Item startY={-100}>
          <Box>
            <h3>Item1</h3>
            <p>Overriding(startY: -100)</p>
          </Box>
        </FlyInItemParallax.Item>
        <FlyInItemParallax.Item>
          <Box>
            <h3>Item1</h3>
            <p>Description</p>
          </Box>
        </FlyInItemParallax.Item>
        <FlyInItemParallax.Item>
          <Box>
            <h3>Item1</h3>
            <p>Description</p>
          </Box>
        </FlyInItemParallax.Item>
      </FlyInItemParallax>
      <div
        style={{
          width: '100%',
          height: '1500px',
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

const Box = styled.div`
  padding: 30px 40px;
  background-color: #bf5f5f;
  color: #fff;
`;

export const Default = {
  render: Template,

  args: {
    screenHeight: 0,
    delay: 100,
    background: '#fff',
    duration: 300,
    rotate: 0,
    startX: 0,
    startY: 100,
    gap: 10,
    threshold: 0.3,
    justify: 'center',
    align: 'center',
    easing: 'ease',
    direction: 'row',
    wrap: 'wrap',
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
