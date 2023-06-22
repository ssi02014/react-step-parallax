import React, { useEffect, useState } from 'react';

const useSearchParallaxItems = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  className: string
) => {
  const [items, setItems] = useState<Element[]>([]);

  useEffect(() => {
    if (!ref.current) return;
    const wrapper = ref.current;

    setItems([...wrapper.querySelectorAll(className)]);
  }, []);

  return items;
};

export default useSearchParallaxItems;
