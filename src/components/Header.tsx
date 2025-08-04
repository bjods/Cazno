"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
      isScrolled 
        ? 'translate-y-0 bg-background/80 backdrop-blur-sm border-b border-border' 
        : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            CAZNO
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#case-studies" className="text-sm hover:text-muted-foreground transition">
              Case Studies
            </Link>
            <Link href="#about" className="text-sm hover:text-muted-foreground transition">
              About
            </Link>
            <Link href="#solutions" className="text-sm hover:text-muted-foreground transition">
              Solutions
            </Link>
            <Link href="#resources" className="text-sm hover:text-muted-foreground transition">
              Resources
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden md:block text-sm hover:text-muted-foreground transition"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="hidden md:block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition"
            >
              Get Started →
            </Link>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#case-studies" className="text-sm hover:text-muted-foreground transition">
                Case Studies
              </Link>
              <Link href="#about" className="text-sm hover:text-muted-foreground transition">
                About
              </Link>
              <Link href="#solutions" className="text-sm hover:text-muted-foreground transition">
                Solutions
              </Link>
              <Link href="#resources" className="text-sm hover:text-muted-foreground transition">
                Resources
              </Link>
              <Link href="/login" className="text-sm hover:text-muted-foreground transition">
                Sign In
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm hover:bg-primary/90 transition text-center"
              >
                Get Started →
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}