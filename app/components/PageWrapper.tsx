import React, { FC, ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode,
}
const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className='bg-slate-50 flex-grow text-black p-2 mt-16 pl-[20.4rem]'>pagewrapper {children}</div>
  )
}

export default PageWrapper;
