import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storeValue, setStoreValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoreValue(value);
    } catch (error) {
      console.log(error);
    }
  };
  return [storeValue, setValue ];
}

export default useLocalStorage;
