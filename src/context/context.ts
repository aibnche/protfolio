import React from 'react'

// Define the context type
interface UserContextType {
	delay: boolean;
	setDelay: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context with proper type and default values
const UserContext = React.createContext<UserContextType | undefined>(undefined);
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer, UserContext}
