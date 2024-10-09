import React from 'react';
import { BsList } from 'react-icons/bs';
import { ModeToggle } from './ModeToggle';

interface HeaderProps {
  Toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ Toggle, setToggle }) => {
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <header
      className={`fixed w-full z-40 h-16 flex items-center justify-between px-4 
                  transition-all duration-300 ease-in-out shadow-lg 
                  bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200
                  border-b border-gray-300 dark:border-gray-700 pl-16 `}
    >
      <button
        className={`bg-[#96b6f1] text-white hover:bg-gray-300 
                    dark:hover:bg-gray-600 rounded-md h-[30px] w-[30px]
                    flex items-center justify-center transition duration-300 ease-in-out ${Toggle ? 'ml-64' : 'ml-6'}`}
        aria-label="Open menu"
        onClick={handleToggle}
      >
        <BsList />
      </button>

      <div className="flex items-center space-x-4">
        <ModeToggle />
        
      </div>
    </header>
  );
};

export default Header;
