
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={32} className="text-edu-primary" />
              <span className="font-bold text-2xl text-white">EduLearn</span>
            </div>
            <p className="mb-6 text-gray-400">
              Empowering individuals through quality education and skill development for a brighter future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-edu-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-edu-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-edu-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-edu-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-edu-primary transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-edu-primary transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-edu-primary transition-colors">About Us</a></li>
              <li><a href="#instructors" className="hover:text-edu-primary transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-edu-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-edu-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-edu-primary transition-colors">Data Science</a></li>
              <li><a href="#" className="hover:text-edu-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-edu-primary transition-colors">Business</a></li>
              <li><a href="#" className="hover:text-edu-primary transition-colors">Marketing</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Subscribe</h4>
            <p className="mb-4 text-gray-400">Join our newsletter to get updates on new courses and special offers.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-gray-300"
              />
              <Button className="bg-edu-primary hover:bg-edu-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} EduLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
