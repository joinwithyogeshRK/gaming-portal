import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <div className="flex-1 flex">
        {/* Left side - Game visuals */}
        <div className="hidden lg:block lg:w-1/2 bg-[url('/images/auth-bg.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex items-center justify-center">
            <div className="max-w-md p-8">
              <h1 className="text-4xl font-display text-white mb-4 text-glow-accent">
                Join the Gaming Revolution
              </h1>
              <p className="text-lg text-white/90">
                Access exclusive tournaments, connect with fellow gamers, and track your gaming journey.
              </p>
            </div>
          </div>
        </div>
        
        {/* Right side - Auth form */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <div className="p-6">
            <Link to="/" className="flex items-center gap-2">
              <Gamepad2 className="h-8 w-8 text-accent" />
              <span className="text-2xl font-display text-glow-accent">Gaming Portal</span>
            </Link>
          </div>
          
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="w-full max-w-md">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;