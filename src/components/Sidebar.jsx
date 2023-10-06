import SidebarListElement from "./SidebarListElement";
import Logo from "../icons/Logo";

const links = ["Ask", "History", "Statistics"];

const Sidebar = () => {
	return (
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
					<SidebarListElement title={link} icon={Logo} />
				))}
			</div>
			<button className="bg-primary/[0.2] m-4 mx-6 p-2 font-bold tracking-wider text-primary rounded-lg hover:scale-105">
				Sign out
			</button>
		</div>
	);
};
export default Sidebar;
