import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Info, Star, Package, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const list = [
    { label: "Home", to: "/", icon: <Home className="w-4 h-4" /> },
    { label: "About Us", to: "/about", icon: <Info className="w-4 h-4" /> },
    { label: "Reviews", to: "/review", icon: <Star className="w-4 h-4" /> },
    {
      label: "Products",
      to: "/products",
      icon: <Package className="w-4 h-4" />,
    },
    { label: "Blog", to: "/blog", icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <nav className="w-full py-4 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <div>
          <ul className="hidden md:flex items-center space-x-6 bg-[#F5EBFF] rounded-full px-6 py-3 shadow-lg">
            {list.map((item, i) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={i} className="relative">
                  <Link
                    to={item.to}
                    className={`group flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-white text-[#7A4DCC] shadow-md"
                        : "text-[#7A4DCC] hover:text-[#5A2DBE]"
                    }`}
                  >
                    {/* Show icon for active tab or on hover */}
                    <span
                      className={`transition-opacity ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Sign In & Get Started */}
        <div className="flex gap-4">
          <Button className="rounded-md text-[16px] px-5 py-3 bg-transparent shadow-none border-none text-foreground">
            Sign in
          </Button>
          <Button
            variant="outline"
            className="rounded-full text-[16px] px-5 py-3"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4">
              <ul className="space-y-4">
                {list.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`text-[14px] font-semibold flex items-center gap-2 leading-normal transition ${
                        location.pathname === item.to
                          ? "text-[#B3A162]"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.icon} {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-3"
                >
                  Sign in
                </Button>
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-3"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
