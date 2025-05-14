
import React, { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import Projects from "@/components/admin/Projects";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const AdminDashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="md:hidden w-8">
            {/* This space is for the mobile menu toggle button that's positioned absolutely */}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-lg font-bold">EduLMS Admin</div>
            <nav className="hidden lg:flex space-x-4">
              <Button variant="ghost">Access Manager</Button>
              <Button variant="ghost">Billing</Button>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">All Clusters</Button>
            <Button variant="ghost" size="sm">Get Help</Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <UserCircle className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-medium">
                  {user?.name}
                </DropdownMenuItem>
                <DropdownMenuItem className="text-muted-foreground">
                  {user?.email}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleLogout}
                  className="text-red-600 cursor-pointer"
                >
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminSidebar 
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 pt-4">
          <div className="mb-4">
            <div className="text-sm text-blue-600 mb-2">EDULMS ORG - 2025-05-14</div>
          </div>
          
          {/* Projects Component */}
          <Projects />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
