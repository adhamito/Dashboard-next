import React from 'react';
import Image from 'next/image';
import { SideBarItems } from './SideBarItems';
import SidebarItem from './SideBarItem';

interface SideBarProps {
  Toggle: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ Toggle }) => {
  return (
    <aside className={`fixed bg-[#31352d] text-gray-500 z-50 h-full shadow-gray-500/20 transition duration-300 ease-in-out ${Toggle ? 'w-[20rem]' : 'w-[5rem]'}`}>
      <div className='flex items-center relative py-6 px-3.5'>
        <Image
          src="https://www.cdnlogo.com/logos/j/40/jira.svg"
          alt='logo'
          width={39}
          height={19}
          className='mx-4.5 min-h-fit'
        />
        {Toggle && (
          <h2 className='pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max'>
            D-brain
          </h2>
        )}
      </div>
      <nav>
        <ul className='mt-7'>
          {SideBarItems.map((item, index) => (
            <SidebarItem key={index} item={item} Toggle={Toggle} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
