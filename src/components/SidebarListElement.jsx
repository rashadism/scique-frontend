// eslint-disable-next-line react/prop-types
const SidebarListElement = ({ title, icon: Icon }) => {
	return (
		<a className="flex gap-2 items-center text-smudge cursor-pointer bg-black hover:bg-ash hover:text-black m-2 mx-6 rounded-lg">
			<Icon className={`h-6 w-6 m-4 fill-primary`} />
			<span className="text-xl font-medium">{title}</span>
		</a>
	);
};
export default SidebarListElement;
