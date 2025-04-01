import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const list = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Pricing", to: "/pricing" },
    { label: "Consulting", to: "/consulting" },
    { label: "Ai Coach", to: "/ai-Coach" },
  ];

  return (
    <nav className="w-full py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex justify-between items-center gap-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>

          <ul className="hidden md:flex items-center space-x-6 bg-[#F5EBFF] rounded-full px-4 py-2 relative">
            {list.map((item, i) => (
              <li key={i} className="relative">
                <Link
                  to={item.to}
                  className={`text-[14px] font-semibold px-4 py-2 rounded-full transition ${
                    location.pathname === item.to
                      ? "bg-white text-[#7A4DCC] shadow-md"
                      : "text-[#7A4DCC] hover:text-[#5A2DBE]"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className=" md:block flex  ">
          <div>
            <Button className="rounded-md inline w-full text-[16px] px-5 py-5 bg-transparent shadow-none border-none text-foreground">
              Sign in
            </Button>
          </div>
          <div>
            <Button
              variant="outline"
              className="rounded-full text-[16px] px-5 py-5"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Menu (Sheet) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-64 p-4"
              // style={{ backgroundImage: `url(${faqbg})` }}
            >
              <ul className="space-y-4">
                {list.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`text-[14px] font-semibold leading-normal transition ${
                        location.pathname === item.to
                          ? "text-[#B3A162]"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-5"
                >
                  Sign in
                </Button>
                <Button
                  variant="outline"
                  className="rounded-md w-full text-[16px] px-5 py-5"
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
