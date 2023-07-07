import React, { createContext, useState, useContext, useEffect } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

const JobContext = createContext('');

const JobContextProvider = ({ children }) => {
  const [currentJob, setCurrentJob] = useState('merhaba');
  const [isShowJob, setIsShowJob] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const updateMenu = () => setIsMenuOpen(!isMenuOpen);

  const updateCurrentJob = (item) => setCurrentJob(item);
  const updateShowJob = (arg) => setIsShowJob(arg);

  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState();
  const handleSize = (size) => {
    size.width < 640 ? setIsMobile(true) : setIsMobile(false);
  };
  const contextValue = {
    currentJob,
    updateCurrentJob,
    isMobile,
    isShowJob,
    updateShowJob,
    updateMenu,
    isMenuOpen,
  };

  useEffect(() => {
    handleSize(size);
  }, [size]);
  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
};

export { JobContext, JobContextProvider };
