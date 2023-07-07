import React, { createContext, useState, useContext } from 'react';

const JobContext = createContext('');

const JobContextProvider = ({ children }) => {
  const [currentJob, setCurrentJob] = useState('merhaba');
  const setJob = (item) => setCurrentJob(item);
  const testF = () => console.log('test');
  const contextValue = {
    currentJob,
    setJob,
    testF,
  };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
};

export { JobContext, JobContextProvider };
