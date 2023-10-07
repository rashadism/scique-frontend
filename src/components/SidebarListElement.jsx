// eslint-disable-next-line react/prop-types
const SidebarListElement = ({ title, icon: Icon }) => {
	// Context for active
	const selected = "Ask";

	return (
		<a
			className={`flex gap-4 items-center pl-8 cursor-pointer p-3 hover:bg-primary/[0.04] hover:text-primary ${
				title === selected &&
				"border-l-4 border-primary bg-primary/[0.04] text-primary"
			}`}
		>
			<div className="flex gap-4 items-center">
				<Icon className="" />
				<span className="text-black">{title}</span>
			</div>
		</a>
	);
};
export default SidebarListElement;
