import { Disclosure } from "@headlessui/react";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <p className="text-white font-bold hidden lg:block h-8 w-auto">
              <p><span><NavLink to="/">Coins Ranking</NavLink></span></p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;