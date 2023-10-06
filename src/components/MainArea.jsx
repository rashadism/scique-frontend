import Search from "../icons/Search";

const options = [
	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, hic iusto dolorum placeat maiores libero!",
	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, hic iusto dolorum placeat maiores libero!",
	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, hic iusto dolorum placeat maiores libero!",
	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, hic iusto dolorum placeat maiores libero!",
	"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, hic iusto dolorum placeat maiores libero!",
];
const MainArea = () => {
	return (
		<div className="bg-ash p-12 flex flex-grow flex-col justify-center gap-4">
			<form className="flex">
				<textarea
					type="text"
					placeholder="Enter a Science MCQ question with 5 options"
					className="w-full rounded-l-lg bg-smudge resize-none placeholder-secondary/[0.6] text-secondary p-1 pl-4 leading-5 h-32 outline-none"
					style={{
						scrollbarWidth: "thin",
						scrollbarColor: "#3b82f6 #d1d5db",
					}}
				/>
				<button className="bg-smudge pr-2 pt-2 rounded-r-lg text-primary font-medium flex items-start">
					<Search color="primary" />
				</button>
			</form>
			<div className="bg-smudge flex flex-col w-full h-full rounded-lg p-6">
				<div>
					<div className="h-10 font-semibold text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Sit eum porro similique hic est eius aut dolorem ullam
						architecto quisquam?
					</div>
					<div className="flex flex-col p-6">
						{options.map((option, idx) => (
							<div className="flex gap-2 items-center" key={idx}>
								<div className="flex p-4 rounded-lg bg-ash font-bold">
									{idx + 1}
								</div>
								<div
									key={idx}
									className="flex bg-ash text-center my-2 p-4 rounded-lg flex-grow"
								>
									{option}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default MainArea;
