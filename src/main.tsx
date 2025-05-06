import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Toaster } from "@/components/ui/sonner"
import Router from './AppRouter.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
    <Router />
    </ParallaxProvider>
    <Toaster position={"top-center"} />
  </StrictMode>
);
