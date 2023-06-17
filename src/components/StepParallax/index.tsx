import React, { createContext, useContext, useEffect, useRef } from 'react';
import {
  ParallaxMainWrapper,
  ParallaxScrollItemWrapper,
  ParallaxScrollWrapper,
} from './style';

export interface StepParallaxProps {
  children: React.ReactNode;
  rotate?: number;
  background?: string;
  duration?: number;
  translateX?: number;
  translateY?: number;
  extra?: React.ReactNode;
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface StepParallaxContextProps {
  duration: number;
  translateX: number;
  translateY: number;
  rotate: number;
  easing: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

export interface StepParallaxItemProps {
  children: React.ReactNode;
}

const StepParallaxContext = createContext<StepParallaxContextProps>({
  translateX: 0,
  translateY: 0,
  rotate: 0,
  duration: 0.5,
  easing: 'ease',
});

const StepParallax = ({
  children,
  extra,
  rotate = 0,
  background = '#fff',
  duration = 500,
  translateX = 0,
  translateY = 0,
  easing = 'ease',
}: StepParallaxProps) => {
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);
  const childrenCount = React.Children.count(children);

  useEffect(() => {
    if (!scrollWrapperRef.current || !mainWrapperRef.current) return;

    const scrollWrapper = scrollWrapperRef.current;
    const clientHeight = scrollWrapper.clientHeight;
    const boundingTop = scrollWrapper.getBoundingClientRect().top;
    const scrollItems = scrollWrapper.querySelectorAll(
      '.parallax-scroll-item-wrapper'
    );

    mainWrapperRef.current.style.height = `${
      clientHeight * (childrenCount + 1)
    }px`;
    scrollItems[0].classList.add('active');

    const scroll = () => {
      const scrollY = window.scrollY;

      if (
        scrollY - boundingTop > clientHeight * childrenCount + clientHeight ||
        scrollY < boundingTop
      ) {
        scrollWrapper.style.position = 'relative';
      } else {
        scrollWrapper.style.position = 'sticky';
      }

      React.Children.forEach(children, (child, idx) => {
        if (
          scrollY - boundingTop >= clientHeight * idx &&
          scrollY - boundingTop < clientHeight * (idx + 1)
        ) {
          if (!idx) {
            scrollItems[idx].classList.add('active');
            scrollItems[idx + 1].classList.remove('active');
          } else if (idx === childrenCount - 1) {
            scrollItems[idx].classList.add('active');
            scrollItems[idx - 1].classList.remove('active');
          } else {
            scrollItems[idx].classList.add('active');
            scrollItems[idx + 1].classList.remove('active');
            scrollItems[idx - 1].classList.remove('active');
          }
        }
      });
    };

    window.addEventListener('scroll', scroll);
    () => window.removeEventListener('scroll', scroll);
  }, []);

  return (
    <StepParallaxContext.Provider
      value={{ duration, easing, translateX, translateY, rotate }}>
      <ParallaxMainWrapper ref={mainWrapperRef} background={background}>
        <ParallaxScrollWrapper ref={scrollWrapperRef}>
          {children}
          {extra}
        </ParallaxScrollWrapper>
      </ParallaxMainWrapper>
    </StepParallaxContext.Provider>
  );
};

StepParallax.Item = ({ children }: StepParallaxItemProps) => {
  const context = useContext(StepParallaxContext);
  const itemWrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <ParallaxScrollItemWrapper
      className={`parallax-scroll-item-wrapper`}
      ref={itemWrapperRef}
      {...context}>
      {children}
    </ParallaxScrollItemWrapper>
  );
};

export default StepParallax;
