"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Edukasi", href: "/edukasi" },
    { name: "Katalog", href: "/katalog" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isMobileMenuOpen ? "bg-white shadow-lg" : ""}
    ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"}
  `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                <Image src={"/logo/arenankalikesek.png"} alt="" width={80} height={80} />
                <Image src={"/logo/bemft.png"} alt="" width={60} height={60} />
                <div className="hidden sm:block">
                  <h1 className={`text-xl font-bold ${isScrolled ? "text-gray-800" : "text-white"}`}>
                    Gula Aren Sriwulan
                  </h1>
                  <p className={`text-xs text-gray-600 ${isScrolled ? "text-gray-800" : "text-white"}`}>BEM FT Undip</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg hover:text-amber-700 hover:bg-amber-50 transition-all duration-200 font-medium ${isScrolled ? "text-gray-700" : "text-white"}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            {/* <div className="hidden md:flex items-center space-x-4">
              <button className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200">
                Pesan Sekarang
              </button>
            </div> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="px-4 py-6 bg-white border-t border-gray-100 shadow-lg">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 rounded-lg text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              {/* <button className="mt-4 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 w-full">
                Pesan Sekarang
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer untuk konten di bawah navbar */}
      {/* <div className="h-20"></div> */}
    </>
  );
};

export default Navbar;
