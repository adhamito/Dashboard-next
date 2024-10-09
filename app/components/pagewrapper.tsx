import React, { ReactNode } from 'react';

const PageWrapper = ({ children, Toggle }: { children: ReactNode; Toggle: boolean }) => {
  return (
    <div
      className={`bg-slate-50 flex-grow text-black  p-2 mt-16 transition-all duration-300 ${Toggle ? 'pl-[20rem]' : 'pl-[5.6rem]'}
      }`}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
