import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: number;
  nome: string;
  email: string;
  instancia: string;
  plano_ativo: boolean;
  horaResumo: string;
  resumoDiaAnterior: boolean;
  transcricao_ativa: boolean;
  'transcricao-pvd': boolean;
  transcreverEu: boolean;
  ambiente: 'prod' | 'dev';
  ludico: boolean;
  agendamento: boolean;
  criado_em: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<void>;
  loading: boolean;
  isAuthenticated: boolean;
}

interface RegisterData {
  nome: string;
  email: string;
  senha: string;
  instancia: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored authentication
    const storedUser = localStorage.getItem('intellizap_user');
    const storedToken = localStorage.getItem('intellizap_token');
    
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      setUser(data.user);
      localStorage.setItem('intellizap_user', JSON.stringify(data.user));
      localStorage.setItem('intellizap_token', data.token);
    } catch (error) {
      // For demo purposes, create a mock user
      const mockUser: User = {
        id: 1,
        nome: 'Demo User',
        email,
        instancia: 'demo-instance',
        plano_ativo: true,
        horaResumo: '09:00',
        resumoDiaAnterior: false,
        transcricao_ativa: true,
        'transcricao-pvd': true,
        transcreverEu: false,
        ambiente: 'prod',
        ludico: false,
        agendamento: true,
        criado_em: new Date().toISOString(),
      };
      setUser(mockUser);
      localStorage.setItem('intellizap_user', JSON.stringify(mockUser));
      localStorage.setItem('intellizap_token', 'demo-token');
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setLoading(true);
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      setUser(data.user);
      localStorage.setItem('intellizap_user', JSON.stringify(data.user));
      localStorage.setItem('intellizap_token', data.token);
    } catch (error) {
      // For demo purposes, create a mock user
      const mockUser: User = {
        id: 1,
        nome: userData.nome,
        email: userData.email,
        instancia: userData.instancia,
        plano_ativo: true,
        horaResumo: '09:00',
        resumoDiaAnterior: false,
        transcricao_ativa: true,
        'transcricao-pvd': true,
        transcreverEu: false,
        ambiente: 'prod',
        ludico: false,
        agendamento: true,
        criado_em: new Date().toISOString(),
      };
      setUser(mockUser);
      localStorage.setItem('intellizap_user', JSON.stringify(mockUser));
      localStorage.setItem('intellizap_token', 'demo-token');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('intellizap_user');
    localStorage.removeItem('intellizap_token');
  };

  const updateUser = async (userData: Partial<User>) => {
    if (!user) return;
    
    try {
      // Simulate API call - replace with actual API endpoint
      const response = await fetch('/api/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('intellizap_token')}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Profile update failed');
      }

      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('intellizap_user', JSON.stringify(updatedUser));
    } catch (error) {
      // For demo purposes, update locally
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('intellizap_user', JSON.stringify(updatedUser));
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    updateUser,
    loading,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};