import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  User, 
  Gamepad2, 
  LogOut 
} from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path ? "nav-link nav-link-active" : "nav-link";
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Gamepad2 className="h-8 w-8 text-accent" />
            <span className="text-2xl font-display text-glow-accent">Gaming Portal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
            <Link to="/games" className={isActive("/games")}>
              Games
            </Link>
            <Link to="/tournaments" className={isActive("/tournaments")}>
              Tournaments
            </Link>
            <Link to="/streams" className={isActive("/streams")}>
              Live Streams
            </Link>
            <Link to="/news" className={isActive("/news")}>
              News
            </Link>
            <Link to="/community" className={isActive("/community")}>
              Community
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 bg-muted/50"
              />
            </div>

            <ThemeToggle />

            {user ? (
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatarUrl} alt={user.username} />
                        <AvatarFallback className="bg-primary-700">
                          {user.username.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{user.username}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile">
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                  <Link to="/auth/login">Log in</Link>
                </Button>
                <Button variant="accent" asChild>
                  <Link to="/auth/register">Sign up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 bg-muted/50"
              />
            </div>
            
            <nav className="flex flex-col space-y-2">
              <Link to="/" className={isActive("/")}>
                Home
              </Link>
              <Link to="/games" className={isActive("/games")}>
                Games
              </Link>
              <Link to="/tournaments" className={isActive("/tournaments")}>
                Tournaments
              </Link>
              <Link to="/streams" className={isActive("/streams")}>
                Live Streams
              </Link>
              <Link to="/news" className={isActive("/news")}>
                News
              </Link>
              <Link to="/community" className={isActive("/community")}>
                Community
              </Link>
            </nav>
            
            <div className="flex flex-col space-y-2 pt-2 border-t">
              {user ? (
                <>
                  <Link to="/profile" className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatarUrl} alt={user.username} />
                      <AvatarFallback className="bg-primary-700">
                        {user.username.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.username}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </Link>
                  <Button variant="outline" onClick={logout} className="w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link to="/auth/login">Log in</Link>
                  </Button>
                  <Button variant="accent" asChild className="w-full">
                    <Link to="/auth/register">Sign up</Link>
                  </Button>
                </>
              )}
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm">Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;