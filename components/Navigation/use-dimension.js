import { useEffect, useRef } from "react";


export const useDimensions = ref => {
  const dimensions = useRef({ width: 0, height: 0 });
  useEffect(() => {
    dimensions.current.width = ref?.current?.offsetWidth || 0;
    dimensions.current.height = ref?.current?.offsetHeight;
  }, [ref]);

  return dimensions.current;
};
