
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleDashboardClick = () => {
    if (user?.role === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-dashboard');
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <BookOpen size={32} className="text-edu-primary" />
          <span className="font-bold text-xl md:text-2xl">EduLearn</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <li><Link to="/" className="font-medium hover:text-edu-primary transition-colors">Home</Link></li>
            <li><a href="#courses" className="font-medium hover:text-edu-primary transition-colors">Courses</a></li>
            <li><Link to="/language-book" className="font-medium hover:text-edu-primary transition-colors">Language Book</Link></li>
            <li><a href="#categories" className="font-medium hover:text-edu-primary transition-colors">Categories</a></li>
            <li><a href="#instructors" className="font-medium hover:text-edu-primary transition-colors">Instructors</a></li>
          </ul>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Button 
                  variant="ghost" 
                  className="font-medium flex items-center gap-2"
                  onClick={handleDashboardClick}
                >
                  <User size={18} />
                  {user?.role === 'admin' ? 'Admin Panel' : 'Dashboard'}
                </Button>
                <Button 
                  className="bg-edu-primary hover:bg-edu-primary/90"
                  onClick={handleLogoutClick}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="font-medium"
                  onClick={handleLoginClick}
                >
                  Log in
                </Button>
                <Button className="bg-edu-primary hover:bg-edu-primary/90">Sign up</Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container py-4">
          <ul className="flex flex-col gap-4">
            <li><Link to="/" className="block py-2 hover:text-edu-primary transition-colors">Home</Link></li>
            <li><a href="#courses" className="block py-2 hover:text-edu-primary transition-colors">Courses</a></li>
            <li><Link to="/language-book" className="block py-2 hover:text-edu-primary transition-colors">Language Book</Link></li>
            <li><a href="#categories" className="block py-2 hover:text-edu-primary transition-colors">Categories</a></li>
            <li><a href="#instructors" className="block py-2 hover:text-edu-primary transition-colors">Instructors</a></li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            {isAuthenticated ? (
              <>
                <Button 
                  variant="ghost" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={handleDashboardClick}
                >
                  <User size={18} />
                  {user?.role === 'admin' ? 'Admin Panel' : 'Dashboard'}
                </Button>
                <Button 
                  className="w-full bg-edu-primary hover:bg-edu-primary/90"
                  onClick={handleLogoutClick}
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={handleLoginClick}
                >
                  Log in
                </Button>
                <Button className="w-full bg-edu-primary hover:bg-edu-primary/90">Sign up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
