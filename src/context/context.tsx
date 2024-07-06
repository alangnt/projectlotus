import React, { createContext, useContext, useState, ReactNode } from 'react';

interface StatusContextProps {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const StatusContext = createContext<StatusContextProps | undefined>(undefined);

export const useStatus = () => {
    const context = useContext(StatusContext);
    if (!context) {
        throw new Error('useStatus must be used within a StatusProvider');
    }
    return context;
};

interface StatusProviderProps {
    children: ReactNode;
}

export const StatusProvider = ({ children }: StatusProviderProps) => {
    const [status, setStatus] = useState<boolean>(false);

    return (
        <StatusContext.Provider value={{ status, setStatus }}>
            {children}
        </StatusContext.Provider>
    );
};
