import React from 'react';
import Link from 'next/link';

export default function TopNavBar() {
  return (
    <header className="w-full bg-cream-shell sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-margin-desktop py-4 max-w-container-max mx-auto md:px-margin-desktop px-margin-mobile">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            alt="Food Kashti Logo"
            className="h-12 w-12 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbnzLT9AIp-LXpg7jSM_LHLRbJOMb3VcKZDva2fu-XvGFMCjOxfRNLXpTfvRLZyAKNUxCPihMlGFpRFTcQkhf0MlCW5Wx59odsJyaqDUTs0JjELaaPaFe31Yj5cN5jgMmfkHf3PLQHGmHQtXQ0DfrJmwudmAB-3yD2fAmBvCn_KsfSDWx4qigQhY9-Yt0_PYFPHTn8fB-W2C5RBGeIxDVNVd8ZIiHWtLx8b6lrdOcX9CaVkF0XFfF-2Cc6qtPXpHSn_Xo"
          />
          <span className="text-headline-md font-headline-md font-bold text-primary">
            Food Kashti
          </span>
        </Link>
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="text-label-lg font-label-lg text-hearth-orange font-bold border-b-2 border-hearth-orange pb-1 hover:text-hearth-orange transition-colors"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-label-lg font-label-lg text-on-surface hover:text-hearth-orange transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-label-lg font-label-lg text-on-surface hover:text-hearth-orange transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-label-lg font-label-lg text-on-surface hover:text-hearth-orange transition-colors"
          >
            Contact
          </Link>
        </nav>
        {/* Trailing Action */}
        <div className="hidden md:flex">
          <button className="border-2 border-hearth-orange text-hearth-orange font-label-lg text-label-lg px-6 py-2 rounded-full hover:bg-hearth-orange hover:text-white transition-colors">
            Sign Up / Login
          </button>
        </div>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </div>
    </header>
  );
}
