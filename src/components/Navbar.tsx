import React from 'react';

export default function Navbar({ menuOpen, setMenuOpen } : { menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
<header className="fixed top-0 left-0 right-0 z-50 py-6">
        <nav className="lg:px-12">
          {/*Large Menu*/}
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute left-0"></div>
            <div className="flex items-center gap-1 rounded-full bg-pink-900 px-6 h-14 opacity-80">
              <a href="#about" className="relative text-sm font-semibold text-white px-3 py-1">
                <span className='absolute inset-0 rounded-full bg-pink-100 opacity-10'></span>
                <span className='relative z-10'>About</span>
              </a>
              <a href="#skills" className="relative text-sm font-semibold text-white px-3 py-1">
                <span className='absolute inset-0 rounded-full bg-pink-100 opacity-10'></span>
                <span className='relative z-10'>Skills</span>
              </a>
              <a href="#projects" className="relative text-sm font-semibold text-white px-3 py-1">
                <span className='absolute inset-0 rounded-full bg-pink-100 opacity-10'></span>
                <span className='relative z-10'>Projects</span>
              </a>
            </div>
          </div>
          {/* Medium Menu */}
          <div className="flex lg:hidden items-center justify-center relative">
            <button 
              type="button"
              className="rounded-full p-2.5 text-gray-200 bg-pink-900 opacity-80"
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mt-4 p-4">
<div className="flex flex-col gap-2">
            <a href="#about" className="text-white">About</a>
            <a href="#skills" className="text-white">Skills</a>
            <a href="#projects" className="text-white">Projects</a>
          </div>
            </div>
          
        )}

        </nav>
      </header>
    );
}