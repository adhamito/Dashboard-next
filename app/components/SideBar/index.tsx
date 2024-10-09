import React from 'react';
import Image from 'next/image';
import { SideBarItems } from './SideBarItems';
import SidebarItem from './SideBarItem';

interface SideBarProps {
  Toggle: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ Toggle }) => {
  return (
    <aside
      className={`fixed transition-all duration-300 ease-in-out z-50 h-full shadow-lg 
        ${Toggle ? 'w-[20rem]' : 'w-[5rem]'} 
        bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200
        border-r border-gray-300 dark:border-gray-700`}
    >
      <div className="flex items-center relative py-6 px-4">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/mediafire-1.svg"
          alt="logo"
          width={39}
          height={19}
          className="mx-4.5 min-h-fit"
        />
        {Toggle && (
          <h2 className="pl-2 font-bold text-2xl text-gray-900 dark:text-white">
            D-brain
          </h2>
        )}
      </div>
      <nav>
        <ul className="mt-7 space-y-2">
          {SideBarItems.map((item, index) => (
            <SidebarItem key={index} item={item} Toggle={Toggle} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
