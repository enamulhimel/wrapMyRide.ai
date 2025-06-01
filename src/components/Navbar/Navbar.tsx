import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';


import logo from "../../assets/wrapLogo.png"
import CommonWrapper from '@/common/CommonWrapper';
import SubcribeButton from '../footer/SubcribeButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'How It Works', path: '/howItWorks' },
    { name: 'For Dealers', path: '/forDealers' },
    { name: 'For Wrap Shops', path: '/forWrapShops' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Why Us', path: '/whyUs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full border-b border-[rgba(255,255,255,0.36)]  z-50  overflow-hidden">
      <CommonWrapper className="mx-auto ">
        <div className="flex  justify-between items-center h-16  ">
          <div className=" ">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className=" h-16 w-[83px]"
                src={logo}
                alt="WrapMyRide.ai"
              />
            
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className=" text-white menu-hover-btn uppercase text-lg font-secondary  font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
        
          </div>
          <div className="hidden md:block">   <SubcribeButton className=' uppercase' >try it now</SubcribeButton></div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-gray-100  hover:text-black focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </CommonWrapper>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/70  border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col items-center justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-white menu-hover-btn"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
           <SubcribeButton className=' uppercase' >try it now</SubcribeButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
