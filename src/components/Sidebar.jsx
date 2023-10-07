import SidebarListElement from "./SidebarListElement";
import Logo from "../icons/Logo";
import {
	SlBadge,
	SlBookOpen,
	SlBubbles,
	SlLocationPin,
	SlLogout,
} from "react-icons/sl";

const links = ["Ask", "Statistics", "Info"];

const Sidebar = () => {
	return (
		<div className="w-1/5 flex flex-col justify-between divide-y divide-neutral/[0.2]">
			<div className="flex items-center justify-center gap-2 p-4 text-2xl tracking-widest">
				<SlBubbles className="text-primary" />
				<span>scique</span>
			</div>
			<div className="flex flex-col flex-grow divide-y divide-neutral/[0.2]">
				<div className="flex-grow">
					{links.map((link) => (
						// eslint-disable-next-line react/jsx-key
						<SidebarListElement title={link} icon={SlBookOpen} />
					))}
				</div>
				<a className="flex gap-4 items-center cursor-pointer justify-center p-3 hover:bg-primary/[0.04] hover:text-primary">
					<div className="flex flex-grow gap-2 items-center justify-center">
						<SlLogout />
						<span className="">Logout</span>
					</div>
				</a>
			</div>
		</div>
	);
};
export default Sidebar;
