// BibleContext.js
import { createContext, useContext, useState } from 'react';

const BibleContext = createContext();

export const BibleProvider = ({ children }) => {
  const [selectedBible, setSelectedBible] = useState(null);

  const setBible = (bible) => {
    setSelectedBible(bible);
  };

  return (
    <BibleContext.Provider value={{ selectedBible, setBible }}>
      {children}
    </BibleContext.Provider>
  );
};

export const useBible = () => {
  return useContext(BibleContext);
};
