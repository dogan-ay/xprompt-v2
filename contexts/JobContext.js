import React, { createContext, useState, useContext } from 'react';

const JobContext = createContext('');

const JobContextProvider = ({ children }) => {
  const [currentJob, setCurrentJob] = useState('merhaba');
  const updateCurrentJob = (item) => setCurrentJob(item);
  const contextValue = {
    currentJob,
    updateCurrentJob,
  };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
};

export { JobContext, JobContextProvider };
