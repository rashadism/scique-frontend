import SidebarListElement from "./components/SidebarListElement";
import Logo from "./icons/Logo";
import Search from "./icons/Search";

const links = ["Ask", "History", "Statistics"];
function App() {
	return (
		<div className="h-screen flex flex-row">
			<div className="bg-black w-1/5 flex flex-col">
				<div className="flex items-center justify-center gap-2 p-8">
					<Logo color="primary" />
					<span className="text-4xl font-medium tracking-widest text-smudge">
						scique
					</span>
				</div>
				<div className="flex-grow">
					{links.map((link) => (
						// eslint-disable-next-line react/jsx-key
						<SidebarListElement
							title={link}
							icon={Logo}
							className="ml-6"
						/>
					))}
				</div>
				<button className="bg-primary/[0.2] m-4 mx-6 p-2 font-bold tracking-wider text-primary rounded-lg hover:scale-105">
					Sign out
				</button>
			</div>

			<div className="bg-ash p-12 flex-grow flex-col items-end justify-end">
				<form className="flex">
					<textarea
						type="text"
						placeholder="Enter a Science MCQ question with 5 options"
						className="w-full rounded-l-lg bg-smudge resize-none placeholder-slate-500 p-1 pl-4 leading-5 h-32"
						style={{
							scrollbarWidth: "thin",
							scrollbarColor: "#3b82f6 #d1d5db",
						}}
					/>
					<button className="bg-smudge pr-2 pt-2 rounded-r-lg text-primary font-medium flex items-start">
						<Search color="primary" />
					</button>
				</form>
			</div>
		</div>
	);
}

export default App;
