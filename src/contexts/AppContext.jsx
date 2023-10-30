import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
	const [section, setSection] = useState("Home");
	return (
		<AppContext.Provider value={{ section, setSection }}>
			{children}
		</AppContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		console.log("useAppContext should be inside AppContextProvider");
	}
	return context;
};
