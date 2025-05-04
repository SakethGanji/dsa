import { createContext, useContext } from 'react';

export type Role = 'admin' | 'developer' | 'analyst' | 'viewer';

type AuthContextType = {
    isAuthenticated: boolean;
    user: {
        name: string;
        soeid: string;
        role: Role;
    };
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // Simulate a logged-in user (swap with JWT later)
    const mockUser = {
        name: 'Jane Doe',
        soeid: 'JD1234',
        role: 'developer' as Role,
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated: true, user: mockUser }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};
