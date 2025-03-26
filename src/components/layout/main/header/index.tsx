"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/layout/main/navbar";
import Switch from "@/components/common/switch";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import useIsMobile from "@/components/hooks/useIsMobile";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  useEffect(() => {
    if (!isMobile) {
      setIsNavbarOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="py-4 px-8 md:px-16">
      {isMobile ? (
        <div className="relative flex items-center justify-between">
          <Bars3BottomLeftIcon
            className="h-6 w-6 cursor-pointer"
            onClick={toggleNavbar}
          />
          <span className="animate-pulse text-2xl">12:51</span>
          <Switch size="small" />
          <div
            className={`fixed inset-0 bg-white shadow-lg z-50 transition-transform transform ${isNavbarOpen ? "translate-x-0" : "-translate-x-full"} ease-in-out duration-300`}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">Menu</h2>
              <XMarkIcon
                className="h-6 w-6 cursor-pointer"
                onClick={toggleNavbar}
              />
            </div>
            <Navbar />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 items-center gap-4">
          <div className="col-span-2">
            <span className="animate-pulse text-2xl">12:51</span>
          </div>
          <div className="col-span-8 flex justify-center">
            <Navbar />
          </div>
          <div className="col-span-2 flex justify-end">
            <Switch size="small" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
