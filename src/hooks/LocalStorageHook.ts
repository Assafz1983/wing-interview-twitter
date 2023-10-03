import { useState, useCallback } from 'react';

function useLocalStorageArr(key: string, initialValue: any) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    const valToReturn = storedValue ? JSON.parse(storedValue) : initialValue;
    return valToReturn;
  });

  const setValueCallback = useCallback((newValue: any) => {
    const existingItems = localStorage.getItem(key);
    const arrExistingItems = existingItems ? JSON.parse(existingItems) : initialValue;
    const newItems = [newValue, ...arrExistingItems];
    localStorage.setItem(key, JSON.stringify(newItems));
    setValue(newItems);
  }, [key]);

  return [value, setValueCallback];
}
export default useLocalStorageArr;