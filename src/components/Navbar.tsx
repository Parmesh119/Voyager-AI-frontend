import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <nav className="w-full py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 36C8.05887 36 0 27.9411 0 18C0 8.05887 8.05887 0 18 0C27.9411 0 36 8.05887 36 18C36 27.9411 27.9411 36 18 36Z" fill="#F7F9FB"/>
              <path d="M18 2C9.16345 2 2 9.16345 2 18C2 26.8366 9.16345 34 18 34" stroke="#9BDC28" strokeWidth="3" strokeLinecap="round"/>
              <path d="M18 2C26.8366 2 34 9.16345 34 18C34 26.8366 26.8366 34 18 34" stroke="#6BD5E1" strokeWidth="3" strokeLinecap="round"/>
              <path d="M18 6C11.3726 6 6 11.3726 6 18C6 24.6274 11.3726 30 18 30" stroke="#6BD5E1" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 6C24.6274 6 30 11.3726 30 18C30 24.6274 24.6274 30 18 30" stroke="#9BDC28" strokeWidth="2" strokeLinecap="round"/>
              <path d="M18 10C13.5817 10 10 13.5817 10 18C10 22.4183 13.5817 26 18 26" stroke="#9BDC28" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M18 10C22.4183 10 26 13.5817 26 18C26 22.4183 22.4183 26 18 26" stroke="#6BD5E1" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span className="ml-2 text-[#9BDC28] font-semibold text-lg tracking-widest">VOYAGER AI</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-20">
          <NavItem href="#features" className='font-bold'>Features</NavItem>
          <NavItem href="#beliefs" className='font-bold'>Beliefs</NavItem>
          <NavItem href="#partnerships" className='font-bold'>Partnerships</NavItem>
          <NavItem href="#about" className='font-bold'>About Us</NavItem>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-black">
            Login
          </Button>
          <Button className="bg-[#2D7DD2] hover:bg-[#1d6abf]">
            Request a Demo
          </Button>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function NavItem({ href, children, className }: NavItemProps) {
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