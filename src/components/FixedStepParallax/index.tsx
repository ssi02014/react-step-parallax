import React, { createContext, useContext, useEffect, useRef } from 'react';
import {
  FixedStepParallaxMainWrapper,
  FixedStepParallaxItemWrapper,
  FixedStepParallaxScrollWrapper,
} from './style';
import { Easing } from '@interfaces/style';
import useIOSVh from '@hooks/useIOSVh';
import useSearchParallaxItems from '@hooks/useSearchParallaxItems';

export interface FixedStepParallaxProps {
  children: React.ReactNode;
  rotate?: number;
  background?: string;
  duration?: number;
  endX?: number;
  endY?: number;
  startX?: number;
  startY?: number;
  extra?: React.ReactNode;
  easing?: Easing;
}

export interface FixedStepParallaxContextProps {
  duration: number;
  endX: number;
  endY: number;
  startX: number;
  startY: number;
  rotate: number;
  easing: Easing;
}

export interface FixedStepParallaxItemProps {
  children: React.ReactNode;
  rotate?: number;
  endX?: number;
  endY?: number;
  startX?: number;
  startY?: number;
  easing?: Easing;
  duration?: number;
}

const FixedStepParallaxContext = createContext<FixedStepParallaxContextProps>({
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
  rotate: 0,
  duration: 0.5,
  easing: 'ease',
});

const FixedStepParallax = ({
  children,
  extra,
  background = '#fff',
  duration = 500,
  rotate = 0,
  endX = 0,
  endY = 0,
  startX = 0,
  startY = 0,
  easing = 'ease',
}: FixedStepParallaxProps) => {
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);
  const childrenCount = React.Children.count(children);

  const parallaxItems = useSearchParallaxItems(
    scrollWrapperRef,
    '.fixed-step-parallax-item'
  );
  useIOSVh();

  const getIsCorrectChildren = (elements: Element[]) => {
    if (elements.length > 0 && childrenCount !== elements.length) {
      throw new Error('Add only FlyInItemParallax.Item to Children.');
    }
  };

  useEffect(() => {
    if (!scrollWrapperRef.current) return;
    if (!parallaxItems.length) return;

    const scrollWrapper = scrollWrapperRef.current;
    const clientHeight = scrollWrapper.clientHeight;
    const boundingTop = scrollWrapper.getBoundingClientRect().top;

    getIsCorrectChildren(parallaxItems);

    parallaxItems[0].classList.add('active');

    const scroll = () => {
      const scrollY = window.scrollY;

      if (
        scrollY - boundingTop > clientHeight * 2 * childrenCount ||
        scrollY < boundingTop
      ) {
        scrollWrapper.style.position = 'relative';
      } else {
        scrollWrapper.style.position = 'sticky';
      }

      parallaxItems.forEach((_, idx) => {
        if (
          scrollY - boundingTop >= clientHeight * idx &&
          scrollY - boundingTop < clientHeight * (idx + 1)
        ) {
          if (!idx) {
            parallaxItems[idx].classList.add('active');
            parallaxItems[idx + 1].classList.remove('active');
          } else if (idx === childrenCount - 1) {
            parallaxItems[idx].classList.add('active');
            parallaxItems[idx - 1].classList.remove('active');
          } else {
            parallaxItems[idx].classList.add('active');
            parallaxItems[idx + 1].classList.remove('active');
            parallaxItems[idx - 1].classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', scroll);
    () => window.removeEventListener('scroll', scroll);
  }, [parallaxItems]);

  return (
    <FixedStepParallaxContext.Provider
      value={{ duration, easing, startX, startY, rotate, endX, endY }}>
      <FixedStepParallaxMainWrapper
        background={background}
        count={childrenCount}>
        <FixedStepParallaxScrollWrapper ref={scrollWrapperRef}>
          {children}
          {extra}
        </FixedStepParallaxScrollWrapper>
      </FixedStepParallaxMainWrapper>
    </FixedStepParallaxContext.Provider>
  );
};

FixedStepParallax.Item = ({
  children,
  endX,
  endY,
  startX,
  startY,
  rotate,
  easing,
  duration,
}: FixedStepParallaxItemProps) => {
  const context = useContext(FixedStepParallaxContext);
  const overridingContextProps = {
    endX: endX ?? context.endX,
    endY: endY ?? context.endY,
    startX: startX ?? context.startX,
    startY: startY ?? context.startY,
    rotate: rotate ?? context.rotate,
    easing: easing ?? context.easing,
    duration: duration ?? context.duration,
  };

  return (
    <FixedStepParallaxItemWrapper
      className={'fixed-step-parallax-item'}
      {...overridingContextProps}>
      {children}
    </FixedStepParallaxItemWrapper>
  );
};

export default FixedStepParallax;
