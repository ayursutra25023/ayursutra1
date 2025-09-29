import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'patient' | 'practitioner' | 'admin';
  profile?: {
    age?: number;
    dosha?: string;
    healthConditions?: string[];
    lifestyle?: string;
    specialization?: string;
    experience?: number;
    clinicId?: string;
  };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User['profile']>) => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
  role: 'patient' | 'practitioner' | 'admin';
  profile?: Partial<User['profile']>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage for demo)
    const storedUser = localStorage.getItem('ayursutra-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Demo implementation - in real app, this would call your backend
      const users = JSON.parse(localStorage.getItem('ayursutra-users') || '[]');
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('ayursutra-user', JSON.stringify(userWithoutPassword));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      // Demo implementation
      const users = JSON.parse(localStorage.getItem('ayursutra-users') || '[]');
      const existingUser = users.find((u: any) => u.email === userData.email);
      
      if (existingUser) {
        return false; // User already exists
      }

      const newUser = {
        id: Date.now().toString(),
        ...userData
      };

      users.push(newUser);
      localStorage.setItem('ayursutra-users', JSON.stringify(users));
      
      const { password: _, ...userWithoutPassword } = newUser;
      setUser(userWithoutPassword);
      localStorage.setItem('ayursutra-user', JSON.stringify(userWithoutPassword));
      
      return true;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ayursutra-user');
  };

  const updateProfile = async (updates: Partial<User['profile']>): Promise<void> => {
    if (user) {
      const updatedUser = {
        ...user,
        profile: { ...user.profile, ...updates }
      };
      setUser(updatedUser);
      localStorage.setItem('ayursutra-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};