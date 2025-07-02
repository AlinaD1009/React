import { useState, useEffect, useRef } from 'react';

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return { value, setValue, ref };
}

