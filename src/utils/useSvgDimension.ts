import { RefObject, useEffect, useState } from 'react';

const useSvgDimension = (ref: RefObject<SVGSVGElement>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      setWidth(rect.width);
      setHeight(rect.height);
    }
  }, [ref]);

  return { width, height };
};

export default useSvgDimension;
