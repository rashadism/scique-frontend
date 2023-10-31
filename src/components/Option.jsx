/* eslint-disable react/prop-types */
import { AiOutlineClose } from "react-icons/ai";

function Option({ option, idx, options, setOptions, answer }) {
	const ans = answer?.answer_order?.at(0);
	const letter = String.fromCharCode("A".charCodeAt(0) + idx);
	// console.log(letter);
	return (
		<div
			key={option}
			className={
				ans !== letter
					? `flex items-center hover:text-primary hover:bg-primary/[0.04] rounded-lg`
					: `flex items-center text-white bg-success/[0.8] hover:text-white hover:bg-success/[0.96] rounded-lg`
			}
		>
			<div className="relative pl-4 py-2 flex flex-grow text-lg items-center shadow min-h-[64px] hover:shadow-md justify-between">
				<div className="flex">
					<div className="pr-6 pl-1">{letter}</div>
					<div className={ans !== letter ? `text-black` : ""}>
						{option}
					</div>
				</div>
				<div className="absolute top-0 left-0 w-[75%] h-full bg-green"></div>
				<div
					className="flex justify-center h-full py-4 px-1 ml-2 mr-4 cursor-pointer"
					onClick={() => {
						const newOptions = options.filter(
							(opt) => opt !== option
						);
						setOptions(newOptions);
					}}
				>
					<AiOutlineClose />
				</div>
			</div>
		</div>
	);
}

export default Option;
