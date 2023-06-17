import styled from '@emotion/styled';
import { StepParallaxContextProps } from '.';

export const ParallaxMainWrapper = styled.div<{ background: string }>`
  position: relative;
  width: 100%;
  background: ${({ background }) => background};
`;

export const ParallaxScrollWrapper = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ParallaxScrollItemWrapper = styled.div<StepParallaxContextProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: ${({ duration, easing }) => `all ${duration / 1000}s ${easing}`};
  transform: ${({ translateX, translateY, rotate }) =>
    `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`};

  &.active {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg);
  }
`;
