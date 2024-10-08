import React from 'react';
import Image from 'next/image';
import { SideBarItems } from '@/SideBar_constant';
import Sidebar_item from '../components/sidebar_item';

const SideBar = () => {
  return (
    <aside className='fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-gray-500/20 transition duration-300 ease-in-out w-[20rem]'>
      <div className='flex items-center relative py-5 px-3.5 '>
        <Image
          src="https://www.cdnlogo.com/logos/j/41/jira.svg"
          alt='logo'
          width={40}
          height={20}
          className='mx-3.5 min-h-fit'
        />
        <h3 className='pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max'>
          D-brain
        </h3>
      </div>
      <nav>
        <ul className='mt-6'>
          {SideBarItems.map((item, index) => (
            <Sidebar_item key={index} item={item} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
