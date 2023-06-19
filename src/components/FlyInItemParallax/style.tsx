import styled from '@emotion/styled';
import { FlyInItemParallaxContextProps } from '.';
import { Align, FlexWrap, Justify } from '@interfaces/style';
import { getConvertedImageSize } from '@utils/common';

export const FlyInItemParallaxMainWrapper = styled.div<{
  background: string;
  screenHeight?: string | number;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ screenHeight }) =>
    screenHeight
      ? getConvertedImageSize(screenHeight)
      : `calc((var(--vh, 1vh) * 100))`};
  background: ${({ background }) => background};
`;

export const FlyInItemParallaxInnerWrapper = styled.div<{
  gap: number;
  direction: 'column' | 'row';
  justify: Justify;
  align: Align;
  wrap: FlexWrap;
}>`
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => `${gap}px`};
  z-index: 9999;
`;

export const FlyInItemWrapper = styled.div<
  FlyInItemParallaxContextProps & { idx: number }
>`
  opacity: 0;
  transition: ${({ duration, easing, delay, idx }) =>
    `all ${duration / 1000}s ${easing} ${(delay / 1000) * idx}s`};

  transform: ${({ targetX, targetY, rotate }) =>
    `translate(${getConvertedImageSize(targetX)}, ${getConvertedImageSize(
      targetY
    )}) rotate(${rotate}deg)`};

  &.active {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg);
  }
`;
