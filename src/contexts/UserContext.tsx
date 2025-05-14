
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define user types
export type UserRole = "user" | "admin" | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  verified?: boolean;
}

// Extended user type for internal use with password
interface UserWithPassword extends User {
  password: string;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  tempUser: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  verifyOTP: (otp: string) => Promise<boolean>;
  resendOTP: () => Promise<boolean>;
  logout: () => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Mock users for demo purposes
const mockUsers: UserWithPassword[] = [
  { id: "1", name: "John Doe", email: "user@example.com", password: "user123", role: "user" as UserRole, verified: true },
  { id: "2", name: "Admin User", email: "admin@example.com", password: "admin123", role: "admin" as UserRole, verified: true },
];

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [tempUser, setTempUser] = useState<User | null>(null);
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
          // Check if user is verified
          if (!matchedUser.verified) {
            // Remove password before storing in state
            const { password: _, ...userWithoutPassword } = matchedUser;
            setTempUser(userWithoutPassword);
            setIsLoading(false);
            resolve(false);
            return;
          }
          
          // Remove password before storing
          const { password: _, ...userWithoutPassword } = matchedUser;
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
        const newUser: UserWithPassword = {
          id: newUserId,
          name,
          email,
          password,
          role: "user" as UserRole,
          verified: false
        };
        
        // In a real app, we would save this to a database
        // For this mock, we're adding to our array but in reality this would be reset on page reload
        mockUsers.push(newUser);
        
        // Store user in temp state (not in localStorage yet)
        const { password: _, ...userWithoutPassword } = newUser;
        setTempUser(userWithoutPassword);
        
        setIsLoading(false);
        resolve(true);
      }, 1000);
    });
  };

  // OTP verification function
  const verifyOTP = async (otp: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, we would validate the OTP
        // For this mock, we'll accept any 6-digit OTP
        if (otp.length === 6 && tempUser) {
          // Update the user's verification status
          const userIndex = mockUsers.findIndex(u => u.email === tempUser.email);
          if (userIndex !== -1) {
            mockUsers[userIndex].verified = true;
            
            // Set the user as verified and authenticated
            const verifiedUser = { ...tempUser, verified: true };
            setUser(verifiedUser);
            setTempUser(null);
            localStorage.setItem("user", JSON.stringify(verifiedUser));
            
            setIsLoading(false);
            resolve(true);
            return;
          }
        }
        
        setIsLoading(false);
        resolve(false);
      }, 1000);
    });
  };

  // Resend OTP function
  const resendOTP = async (): Promise<boolean> => {
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // In a real app, we would generate and send a new OTP
        resolve(true);
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setUser(null);
    setTempUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    tempUser,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    verifyOTP,
    resendOTP,
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
