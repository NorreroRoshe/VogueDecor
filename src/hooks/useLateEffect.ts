import { useEffect, useRef } from "react";

export const useLateEffect = (
  callback: () => void,
  dependencies: unknown[]
) => {
  const initRef = useRef(true);

  useEffect(() => {
    if (initRef.current) {
      initRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
};
