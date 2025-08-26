"use client"

import Link from "next/link"
import { useRouter } from "next/router"

export function Header() {
  const router = useRouter()

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
              <span className="text-xl font-medium text-gray-900">/#</span>
              <span className="text-xl font-medium text-gray-900 ml-1">creators</span>
            </Link>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/discover"
            prefetch={false}
            className="text-gray-700 hover:text-red-500 transition-colors flex items-center"
          >
            /#<span className="text-red-500 ml-1">discover</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link
            href="/content"
            prefetch={false}
            className="text-gray-700 hover:text-red-500 transition-colors flex items-center"
          >
            /#<span className="text-red-500 ml-1">content</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/analytics" prefetch={false} className="text-gray-700 hover:text-red-500 transition-colors">
            /#<span className="text-red-500 ml-1">analytics</span>
          </Link>
          <Link href="/campaigns" prefetch={false} className="text-gray-700 hover:text-red-500 transition-colors">
            /#<span className="text-red-500 ml-1">campaigns</span>
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">d</span>
          </div>
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </header>
  )
}
