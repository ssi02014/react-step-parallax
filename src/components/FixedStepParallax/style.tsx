import styled from '@emotion/styled';
import { FixedStepParallaxContextProps } from '.';
import { getConvertedImageSize } from '@utils/common';

export const FixedStepParallaxMainWrapper = styled.div<{
  count: number;
  background: string;
}>`
  position: relative;
  width: 100%;
  height: ${({ count }) => `calc((var(--vh, 1vh) * 100 * ${count + 1}));`};
  background: ${({ background }) => background};
`;

export const FixedStepParallaxScrollWrapper = styled.div`
  width: 100%;
  height: calc((var(--vh, 1vh) * 100));
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const FixedStepParallaxItemWrapper = styled.div<FixedStepParallaxContextProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc((var(--vh, 1vh) * 100));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: ${({ duration, easing }) => `all ${duration / 1000}s ${easing}`};
  transform: ${({ startX, startY, rotate }) =>
    `translate(${getConvertedImageSize(startX)}, ${getConvertedImageSize(
      startY
    )}) rotate(${rotate}deg)`};
  z-index: 9999;

  &.active {
    opacity: 1;
    transform: ${({ endX, endY }) =>
      `translate(${endX}px, ${endY}px) rotate(0deg)`};
  }
`;
