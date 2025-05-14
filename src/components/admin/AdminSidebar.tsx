
import React from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Settings, 
  Bell, 
  Search,
  Menu
} from "lucide-react";

interface AdminSidebarProps {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
}

const AdminSidebar = ({ isMobileSidebarOpen, toggleMobileSidebar }: AdminSidebarProps) => {
  return (
    <>
      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMobileSidebar}
        className="md:hidden fixed top-4 left-4 z-50"
      >
        <Menu />
      </Button>

      {/* Mobile sidebar overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40 md:hidden" 
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-sidebar shadow-lg z-50 transition-transform transform
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:w-64 md:flex-shrink-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-700 rounded-md mr-2"></div>
              <h2 className="text-lg font-bold truncate">Admin Dashboard</h2>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <nav className="space-y-6">
              <div>
                <div className="mb-2 text-sm font-medium text-gray-500">ORGANIZATION</div>
                <ul className="space-y-1">
                  <li>
                    <Link 
                      to="/admin-dashboard" 
                      className="flex items-center px-3 py-2 text-sm rounded-md bg-green-50 text-green-700"
                    >
                      <LayoutDashboard size={18} className="mr-2" />
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#" 
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      <Bell size={18} className="mr-2" />
                      Alerts
                      <span className="ml-auto bg-gray-200 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">0</span>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#" 
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      <Search size={18} className="mr-2" />
                      Activity Feed
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#" 
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      <Settings size={18} className="mr-2" />
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <div className="mb-2 text-sm font-medium text-gray-500">RESOURCES</div>
                <ul className="space-y-1">
                  <li>
                    <Link 
                      to="#" 
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      Resource Policies
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#" 
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      Billing
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="#" 
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          
          <div className="p-4 border-t">
            <button 
              onClick={() => console.log("Collapse sidebar")}
              className="flex items-center justify-center w-full text-sm text-gray-600 hover:text-gray-900"
            >
              <span>Collapse</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
