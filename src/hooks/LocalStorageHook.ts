import { useState, useEffect } from 'react';

function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    const valToReturn = storedValue ? JSON.parse(storedValue) : initialValue;
    return valToReturn;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;