"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NavItems } from "@/constant";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md fixed top-1 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/vercel.svg" alt="Logo" width={32} height={32} />
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            MyBrand
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {NavItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg rounded-lg p-4 absolute top-16 right-4 w-48">
          {NavItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 py-2 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
