import Sidebar from "./components/Sidebar";
import MainArea from "./components/MainArea";

function App() {
	return (
		<div className="h-screen flex flex-row font-display divide-x">
			<Sidebar />

			<MainArea />
		</div>
	);
}

export default App;
