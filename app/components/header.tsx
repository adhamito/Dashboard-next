import React from 'react';
import { BsList } from 'react-icons/bs';

interface HeaderProps {
    Toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ Toggle, setToggle }) => {
    const handleToggle = () => {
        setToggle(prev => !prev); 
    };


    
  return (
    <header className='fixed bg-[#31353d] w-full z-0 px-4 shadow-sm shadow-state-500/40 pl-[20rem]'>
      <div className='flex items-center justify-between h-16'>
        <button 
          className='bg-[#3a3f48] text-[#6e768e] hover:bg-white ml-3 rounded-md h-[30px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex justify-center ite  ' 
          aria-label='Open menu' 
          onClick={handleToggle}
        >
          <BsList />
        </button>
      </div>
    </header>
  );
};

export default Header;
