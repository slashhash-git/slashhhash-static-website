"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="h-10 w-10 rounded-full border-2 border-gray-900 flex items-center justify-center bg-white">
              <div className="absolute top-1 left-2 w-2 h-2 rounded-full bg-orange-500"></div>
              <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-blue-500"></div>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="/" prefetch={false} className="flex items-center">
              <span className="text-xl font-bold text-gray-900">/#</span>
              <span className="text-xl font-bold text-gray-900 ml-1">
                SlashHash
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
