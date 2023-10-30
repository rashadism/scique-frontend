import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";
import { useAppContext } from "./contexts/AppContext";
import Home from "./components/Home";
import History from "./components/History";

function App() {
	const { section } = useAppContext();
	return (
		<div className="h-screen flex flex-row font-display divide-x">
			<Sidebar />

			{section === "Home" ? (
				<Home />
			) : section === "Ask" ? (
				<MainArea />
			) : section === "History" ? (
				<History />
			) : (
				<div>404</div>
			)}
		</div>
	);
}

export default App;
