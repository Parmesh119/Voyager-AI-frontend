import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/assets/logo/Logo';
import RequestDemoModal from '@/components/RequestDemoModal';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navigate = useNavigate()
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent): void => {
      // Close the menu if click is outside the navigation elements
      const navElement = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-toggle');

      if (navElement && !navElement.contains(event.target as Node) &&
        menuButton && !menuButton.contains(event.target as Node)) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobileDevice = () => {
    return window.matchMedia('(max-width: 767px)').matches ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone|Mobile|Silk|Kindle|BB10|PlayBook|MeeGo|Tizen|Palm|Nokia/i.test(navigator.userAgent);
  };


  const handleRequestDemo = () => {
    // Close mobile menu first before navigating or opening modal
    closeMobileMenu();

    if (isMobileDevice()) {
      navigate('/request-demo', { replace: true });
    } else {
      setIsRequestModalOpen(true);
    }
  };

  const handleCloseRequestModal = () => {
    setIsRequestModalOpen(false);
  }


  return (
    <>
      <nav
        className={cn(
          "w-full py-3 px-4 md:px-8 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled && "shadow-md py-2"
        )}

      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <NavLink to="/">
              <div className="flex items-center gap-2">
                <Logo />
                <span className="ml-2 text-[#9BDC28] font-semibold tracking-widest text-xl">VOYAGER AI</span>
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 lg:space-x-20 font-[Arial]">
            <NavItem href="#features" className='font-bold'>Features</NavItem>
            <NavItem href="#beliefs" className='font-bold'>Beliefs</NavItem>
            <NavItem href="#partnerships" className='font-bold'>Partnerships</NavItem>
            <NavItem href="#about" className='font-bold'>About Us</NavItem>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="text-black font-bold">
              Login
            </Button>
            <Button
              onClick={isRequestModalOpen ? handleCloseRequestModal : handleRequestDemo}
              className="cursor-pointer bg-[#2D7DD2] hover:bg-[#1d6abf] font-extrabold"
            >
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              id="menu-toggle"
              variant="ghost"
              size="sm"
              className="px-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-black" />
              ) : (
                <Menu size={24} className="text-black" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-x-0 bg-gradient-to-r from-[#FFFFFF] to-[#F0F0F0] shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="flex flex-col space-y-3">
              <MobileNavItem href="#features" onClick={closeMobileMenu}>Features</MobileNavItem>
              <MobileNavItem href="#beliefs" onClick={closeMobileMenu}>Beliefs</MobileNavItem>
              <MobileNavItem href="#partnerships" onClick={closeMobileMenu}>Partnerships</MobileNavItem>
              <MobileNavItem href="#about" onClick={closeMobileMenu}>About Us</MobileNavItem>
            </div>

            <div className="flex flex-col space-y-3">
              <Button variant="ghost" className="text-black font-bold ">
                Login
              </Button>
              <Button
                onClick={handleRequestDemo}
                className="bg-[#2D7DD2] hover:bg-[#1d6abf] font-extrabold w-full"
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>

      {/* Modal Component */}
      <RequestDemoModal isOpen={isRequestModalOpen} onClose={handleCloseRequestModal} />
    </>
  );
}


interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavItem({ href, children, className }: NavItemProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-black transition-colors hover:text-[#2D7DD2] text-base font-medium",
        className
      )}
    >
      {children}
    </a>
  );
}

interface MobileNavItemProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

function MobileNavItem({ href, onClick, children }: MobileNavItemProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (href.startsWith('#')) {

      if (location.pathname !== '/') {

        navigate('/');

        setTimeout(() => {
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      } else {

        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {

      navigate(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-black font-bold py-2 block hover:text-[#2D7DD2] border-b border-gray-100"
    >
      {children}
    </a>
  );
}