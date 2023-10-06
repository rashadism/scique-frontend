// eslint-disable-next-line react/prop-types
const SidebarListElement = ({ title, icon: Icon, className }) => {
	return (
		<a className="flex gap-2 items-center cursor-pointer hover:bg-ash">
			<Icon className={`h-6 w-6 m-4 fill-primary ${className}`} />
			<span className="text-xl font-medium text-smudge">{title}</span>
		</a>
	);
};
export default SidebarListElement;
