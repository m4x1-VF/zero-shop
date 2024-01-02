"use client";
import Link from "next/link";
import { titleFont } from "@/config/fonts";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useUIStore } from "@/store";

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu);
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* Logo*/}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Zero
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Links */}
      <div className="hidden sm:block">
        <Link
          href="/category/men"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Man
        </Link>
        <Link
          href="/category/women"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Woman
        </Link>
        <Link
          href="/category/kid"
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
        >
          Kids
        </Link>
      </div>
      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-1 bg-red-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openMenu}
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
