
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define user types
export type UserRole = "user" | "admin" | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock users for demo purposes
const mockUsers = [
  { id: "1", name: "John Doe", email: "user@example.com", password: "user123", role: "user" as UserRole },
  { id: "2", name: "Admin User", email: "admin@example.com", password: "admin123", role: "admin" as UserRole },
];

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const matchedUser = mockUsers.find(
          (u) => u.email === email && u.password === password
        );
        
        if (matchedUser) {
          // Remove password before storing
          const { password, ...userWithoutPassword } = matchedUser;
          setUser(userWithoutPassword);
          localStorage.setItem("user", JSON.stringify(userWithoutPassword));
          setIsLoading(false);
          resolve(true);
        } else {
          setUser(null);
          setIsLoading(false);
          resolve(false);
        }
      }, 1000);
    });
  };

  // Register function
  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if user already exists
        const existingUser = mockUsers.find(u => u.email === email);
        
        if (existingUser) {
          setIsLoading(false);
          resolve(false);
          return;
        }
        
        // Create new user
        const newUserId = `${mockUsers.length + 1}`;
        const newUser = {
          id: newUserId,
          name,
          email,
          password,
          role: "user" as UserRole
        };
        
        // In a real app, we would save this to a database
        // For this mock, we're adding to our array but in reality this would be reset on page reload
        mockUsers.push(newUser);
        
        // Remove password before storing in state/localStorage
        const { password: pwd, ...userWithoutPassword } = newUser;
        setUser(userWithoutPassword);
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        
        setIsLoading(false);
        resolve(true);
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook to use the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
