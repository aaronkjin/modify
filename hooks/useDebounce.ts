import { useEffect, useState } from "react";

/* Delayed fetching while users are inputting keys in the Search */
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      // Default delay of 500 milliseconds
    }, delay || 500);

    return () => {
      clearTimeout(timer);
    }
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;