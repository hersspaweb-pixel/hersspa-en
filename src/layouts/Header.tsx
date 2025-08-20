'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import franchiseData from '../data/franchise.json';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const navItems = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Service',
    href: '#service',
  },
  {
    label: 'Gallery',
    href: '#gallery',
  },
  {
    label: 'Partner',
    href: '#partner',
  },
];

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedFranchise, setSelectedFranchise] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleFranchiseClick = (item: { id: number; label: string }) => {
    setSelectedFranchise(item);
    setIsDropdownOpen(false);
    setIsDialogOpen(true);
  };

  return (
    <header className="w-full sticky top-0 z-50 flex justify-center h-[60] bg-[#543217]">
      <div className="container grid grid-cols-7">
        <nav className="col-span-3">
          <ul className="flex gap-8 mr-4 items-center justify-end h-full">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="bg-gradient-to-b from-white to-[#FFD56E] text-[20px] bg-clip-text text-transparent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-1 relative z-50">
          <Image
            src="/logo-2.png"
            alt="Logo"
            width={200}
            height={200}
            className="w-[85%] absolute -top-3 left-1/2 transform -translate-x-1/2 rounded-b-[50px] rounded-t-[28px] "
          />
        </div>
        <div
          className="col-span-3 flex items-center justify-center h-full relative"
          ref={dropdownRef}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-[#543217] border-2 cursor-pointer border-[#FFD56E] px-6 py-2 rounded-md relative"
          >
            <span className="bg-gradient-to-b from-white to-[#FFD56E] text-[20px] bg-clip-text text-transparent font-bold">
              FRANCHISING
            </span>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full mt-2 bg-white border-2 border-[#543217] rounded-md shadow-lg min-w-[250px] z-50">
              {franchiseData.franchiseItems.map((item) => (
                <button
                  key={item.id}
                  className="block w-full cursor-pointer text-left px-6 py-3 text-[#543217] hover:bg-[#FFD56E] hover:bg-opacity-20 transition-colors border-b border-[#543217] border-opacity-20 last:border-b-0"
                  onClick={() => handleFranchiseClick(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => setIsDialogOpen(open)}
      >
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-[#543217] text-xl font-bold">
              {selectedFranchise?.label}
            </DialogTitle>
            <DialogDescription className="text-[#543217]">
              List of Her S Spa Branches.
            </DialogDescription>
          </DialogHeader>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto">
            {selectedFranchise?.children?.map(
              (location: { id: number; label: string }) => (
                <div
                  key={location.id}
                  className="p-3 bg-[#FFD56E] bg-opacity-10 rounded-md border border-[#543217] border-opacity-20"
                >
                  <span className="text-[#543217] font-medium">
                    {location.label}
                  </span>
                </div>
              )
            )}
            {selectedFranchise?.children?.length === 0 && (
              <div className="col-span-full text-center py-8 text-[#543217] opacity-60">
                Coming soon
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              className="bg-[#543217] text-white cursor-pointer hover:bg-[#543217]/90"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
