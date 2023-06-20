import React, { createContext, useContext, useEffect, useRef } from 'react';
import {
  FlyInItemParallaxInnerWrapper,
  FlyInItemParallaxMainWrapper,
  FlyInItemWrapper,
} from './style';
import { Align, Easing, FlexWrap, Justify } from '@interfaces/style';

export interface FlyInItemParallaxProps {
  children: React.ReactNode;
  extra?: React.ReactNode;
  screenHeight?: number;
  direction?: 'column' | 'row';
  justify?: Justify;
  align?: Align;
  rotate?: number;
  background?: string;
  duration?: number;
  delay?: number;
  startX?: number;
  startY?: number;
  threshold?: number;
  gap?: number;
  easing?: Easing;
  wrap?: FlexWrap;
}

export interface FlyInItemParallaxContextProps {
  duration: number;
  startX: number;
  startY: number;
  delay: number;
  rotate: number;
  easing: Easing;
}

export interface FlyInItemParallaxItemProps {
  children: React.ReactNode;
  idx?: number;
  duration?: number;
  startX?: number;
  startY?: number;
  easing?: Easing;
  delay?: number;
  rotate?: number;
}

const FlyInItemParallaxContext = createContext<FlyInItemParallaxContextProps>({
  startX: 0,
  startY: 100,
  rotate: 0,
  duration: 300,
  delay: 100,
  easing: 'ease',
});

const FlyInItemParallax = ({
  children,
  extra,
  screenHeight,
  delay = 100,
  background = '#fff',
  duration = 300,
  rotate = 0,
  startX = 0,
  startY = 100,
  gap = 0,
  threshold = 0.3,
  justify = 'center',
  align = 'center',
  easing = 'ease',
  direction = 'row',
  wrap = 'wrap',
}: FlyInItemParallaxProps) => {
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const childrenCount = React.Children.count(children);

  useEffect(() => {
    if (!mainWrapperRef.current) return;

    const mainWrapper = mainWrapperRef.current;
    const flyInItems = mainWrapper.querySelectorAll('.fly-in-parallax-item');

    if (childrenCount !== flyInItems.length) {
      throw new Error('Add only FlyInItemParallax.Item to Children.');
    }

    const onIntersect = ([entry]: IntersectionObserverEntry[]) => {
      flyInItems.forEach((item) => {
        item.classList.toggle('active', entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(onIntersect, {
      threshold,
    });

    observer.observe(mainWrapper);
    return () => observer.unobserve(mainWrapper);
  }, []);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <FlyInItemParallaxContext.Provider
      value={{ delay, rotate, duration, startX, startY, easing }}>
      <FlyInItemParallaxMainWrapper
        screenHeight={screenHeight}
        background={background}
        ref={mainWrapperRef}>
        <FlyInItemParallaxInnerWrapper
          gap={gap}
          justify={justify}
          align={align}
          direction={direction}
          wrap={wrap}>
          {React.Children.map(
            children as React.ReactElement<FlyInItemParallaxItemProps>,
            (child, idx) => {
              return React.cloneElement(child, { idx });
            }
          )}
        </FlyInItemParallaxInnerWrapper>
        {extra}
      </FlyInItemParallaxMainWrapper>
    </FlyInItemParallaxContext.Provider>
  );
};

FlyInItemParallax.Item = ({
  children,
  startX,
  startY,
  easing,
  duration,
  delay,
  rotate,
  idx = 0,
}: FlyInItemParallaxItemProps) => {
  const context = useContext(FlyInItemParallaxContext);
  const overridingContextProps = {
    startX: startX ?? context.startX,
    startY: startY ?? context.startY,
    duration: duration ?? context.duration,
    easing: easing ?? context.easing,
    delay: delay ?? context.delay,
    rotate: rotate ?? context.rotate,
  };

  return (
    <FlyInItemWrapper
      className={'fly-in-parallax-item'}
      idx={idx}
      {...overridingContextProps}>
      {children}
    </FlyInItemWrapper>
  );
};

export default FlyInItemParallax;
