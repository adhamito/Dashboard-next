import React, { ReactNode } from 'react';

const PageWrapper = ({ children, Toggle }: { children: ReactNode; Toggle: boolean }) => {
  return (
    <div
      className={`flex-grow p-2  transition-all duration-300 
        ${Toggle ? 'pl-[20rem]' : 'pl-[5.6rem]'}
         text-black dark:bg-slate-900 dark:text-white
      `}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
