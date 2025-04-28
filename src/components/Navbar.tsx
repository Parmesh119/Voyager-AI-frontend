import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '@/assets/logo/Logo';

export function Navbar() {
  return (
    <nav className="w-full py-4 px-4 md:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Logo />
            <span className="ml-2 text-[#9BDC28] font-semibold tracking-widest text-xl">VOYAGER AI</span>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-20 font-[Arial]">
          <NavItem href="#features" className='font-bold'>Features</NavItem>
          <NavItem href="#beliefs" className='font-bold'>Beliefs</NavItem>
          <NavItem href="#partnerships" className='font-bold'>Partnerships</NavItem>
          <NavItem href="#about" className='font-bold'>About Us</NavItem>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-black">
            Login
          </Button>
          <Button className="bg-[#2D7DD2] hover:bg-[#1d6abf] font-extrabold">
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