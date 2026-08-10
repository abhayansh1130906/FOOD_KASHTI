import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container dark:bg-inverse-surface border-t border-outline-variant dark:border-outline flat no-shadows">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-desktop py-12 max-w-container-max mx-auto text-body-md font-body-md">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <span className="text-headline-md font-headline-md text-primary dark:text-inverse-primary">
            Food Kashti
          </span>
          <p className="text-on-surface-variant dark:text-surface-variant max-w-xs">
            Tastes like Home. Delivering the soul of a home-cooked meal without the labor.
          </p>
          <div className="text-label-sm font-label-sm text-on-surface-variant mt-4">
            © {new Date().getFullYear()} Food Kashti. All rights reserved.
          </div>
        </div>
        {/* Links Column */}
        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="text-on-surface-variant dark:text-surface-variant hover:text-hearth-orange dark:hover:text-hearth-orange transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className="text-on-surface-variant dark:text-surface-variant hover:text-hearth-orange dark:hover:text-hearth-orange transition-all duration-300"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-on-surface-variant dark:text-surface-variant hover:text-hearth-orange dark:hover:text-hearth-orange transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
        {/* Legal Column */}
        <div className="flex flex-col gap-3">
          <Link
            href="#"
            className="text-on-surface-variant dark:text-surface-variant hover:text-hearth-orange dark:hover:text-hearth-orange transition-all duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-on-surface-variant dark:text-surface-variant hover:text-hearth-orange dark:hover:text-hearth-orange transition-all duration-300"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
