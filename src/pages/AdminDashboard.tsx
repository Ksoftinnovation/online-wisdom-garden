
import React from "react";
import { useUser } from "@/contexts/UserContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container my-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        <Card className="mb-6 bg-amber-50 border-amber-200">
          <CardHeader>
            <CardTitle>Admin Control Panel</CardTitle>
            <CardDescription>Welcome, {user?.name}!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Email:</strong> {user?.email}</p>
              <p><strong>Role:</strong> {user?.role}</p>
              <Button 
                variant="outline" 
                onClick={handleLogout}
                className="mt-4"
              >
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p>2 active users</p>
              <Button className="mt-4 bg-edu-primary hover:bg-edu-primary/90">Manage Users</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <p>5 courses published</p>
              <Button className="mt-4 bg-edu-primary hover:bg-edu-primary/90">Manage Courses</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View platform usage statistics</p>
              <Button className="mt-4 bg-edu-primary hover:bg-edu-primary/90">View Reports</Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
