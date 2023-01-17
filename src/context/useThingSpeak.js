import { createContext, useContext, useState } from 'react';


export const ThingSpeakContext = createContext();

export const ThingSpeakProvider = ({ children, config }) => {

  const [thingSpeakConfig, setThingSpeakConfig] = useState(config);

  return (
  <ThingSpeakContext.Provider value={[ thingSpeakConfig, setThingSpeakConfig ]}>
    {children}
  </ThingSpeakContext.Provider>
)};

export const useThingSpeak = () => useContext(ThingSpeakContext);