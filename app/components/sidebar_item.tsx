'use client';

import React, { useState } from 'react';
import { SideNavItem } from '../../types/types'; 
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';

interface SidebarItemProps {
    item: SideNavItem; 
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const handleToggle = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div>
            <div 
                className="flex items-center p-2 hover:bg-gray-700 transition duration-200 ease-in-out cursor-pointer" 
                onClick={item.subMenu ? handleToggle : undefined}
            >
                <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white">
                        {item.icon}
                        <Link href={item.path} className="pl-3">{item.title}</Link>
                    </div>
                    {item.subMenu && (
                        <BsChevronDown className={`ml-auto stroke-2 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    )}
                </div>
            </div>
            
            {isOpen && item.subMenu && (
                <div className='bg-[#3a3f48]'>
                    <div className='grid gap-y-2 px-10 py-3 leading-5'>
                        {item.subMenuItems?.map((subItem, index) => (
                            <Link 
                                href={subItem.path} 
                                key={index} 
                                className='flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white'
                            >
                                {subItem.icon}
                                <span className="pl-3">{subItem.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarItem;
