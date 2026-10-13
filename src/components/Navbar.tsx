import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { GLOBAL_CTA_URL, getInquiryMailtoUrl } from '../data/content';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '자가진단', href: '#diagnosis' },
    { label: '솔루션', href: '#solutions' },
    { label: '제작사례', href: '#case-studies' },
    { label: '성과지표', href: '#metrics' },
    { label: '간편문의', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0916]/90 backdrop-blur-md border-b border-[#755FBE]/20 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Authentic Purple Moon Logo) */}
          <a
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8FF] rounded transition-transform hover:scale-105"
            aria-label="퍼플문 홈페이지로 이동"
          >
            <Logo className="h-7 sm:h-8 w-auto" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:underline hover:underline-offset-4 decoration-[#00B8FF] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={GLOBAL_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#6049a8] hover:from-[#846ed4] hover:to-[#755FBE] rounded-lg transition-all shadow-[0_0_20px_rgba(117,95,190,0.35)] hover:shadow-[0_0_25px_rgba(0,184,255,0.4)] border border-[#755FBE]/40 whitespace-nowrap"
            >
              <span>프로젝트 문의하기</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8FF] touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#100d20] border-b border-[#755FBE]/30 px-5 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 px-3 text-base font-medium text-slate-200 hover:text-[#00B8FF] hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-500">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <a
              href={GLOBAL_CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#00B8FF] rounded-lg shadow-lg"
            >
              <span>프로젝트 문의하기</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
