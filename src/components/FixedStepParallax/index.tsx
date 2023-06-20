import React, { createContext, useContext, useEffect, useRef } from 'react';
import {
  FixedStepParallaxMainWrapper,
  FixedStepParallaxItemWrapper,
  FixedStepParallaxScrollWrapper,
} from './style';
import { Easing } from '@interfaces/style';

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
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);
  const childrenCount = React.Children.count(children);

  useEffect(() => {
    if (!scrollWrapperRef.current || !mainWrapperRef.current) return;

    const scrollWrapper = scrollWrapperRef.current;
    const clientHeight = scrollWrapper.clientHeight;
    const boundingTop = scrollWrapper.getBoundingClientRect().top;

    const fixedStepParallaxItems = scrollWrapper.querySelectorAll(
      '.fixed-step-parallax-item'
    );

    if (childrenCount !== fixedStepParallaxItems.length) {
      throw new Error('Add only  FixedStepParallax.Item to Children.');
    }

    fixedStepParallaxItems[0].classList.add('active');

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

      fixedStepParallaxItems.forEach((_, idx) => {
        if (
          scrollY - boundingTop >= clientHeight * idx &&
          scrollY - boundingTop < clientHeight * (idx + 1)
        ) {
          if (!idx) {
            fixedStepParallaxItems[idx].classList.add('active');
            fixedStepParallaxItems[idx + 1].classList.remove('active');
          } else if (idx === childrenCount - 1) {
            fixedStepParallaxItems[idx].classList.add('active');
            fixedStepParallaxItems[idx - 1].classList.remove('active');
          } else {
            fixedStepParallaxItems[idx].classList.add('active');
            fixedStepParallaxItems[idx + 1].classList.remove('active');
            fixedStepParallaxItems[idx - 1].classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', scroll);
    () => window.removeEventListener('scroll', scroll);
  }, []);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <FixedStepParallaxContext.Provider
      value={{ duration, easing, startX, startY, rotate, endX, endY }}>
      <FixedStepParallaxMainWrapper
        ref={mainWrapperRef}
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
