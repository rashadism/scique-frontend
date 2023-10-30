import SidebarListElement from "./SidebarListElement";
import { SlEnergy, SlGraph, SlHome, SlRocket } from "react-icons/sl";

const links = [
	{ title: "Home", icon: SlHome },
	{ title: "Ask", icon: SlRocket },
	{ title: "History", icon: SlGraph },
];

const Sidebar = () => {
	return (
		<div className="max-w-[20%] min-w-[20%] flex flex-col justify-between divide-y divide-neutral/[0.2]">
			<div className="flex items-center justify-center gap-2 p-4 text-2xl tracking-widest">
				<SlEnergy className="text-primary" />
				<span>scique</span>
			</div>
			<div className="flex flex-col flex-grow divide-y divide-neutral/[0.2]">
				<div className="flex-grow">
					{links.map((link) => (
						// eslint-disable-next-line react/jsx-key
						<SidebarListElement
							title={link.title}
							icon={link.icon}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
export default Sidebar;
