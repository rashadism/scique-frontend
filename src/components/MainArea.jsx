import { useState } from "react";
import { SlArrowRight, SlPlus } from "react-icons/sl";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const MainArea = () => {
	const [options, setOptions] = useState([]);
	const [question, setQuestion] = useState("");
	const [option, setOption] = useState("");
	const [questionMode, setQuestionMode] = useState(true);

	const handleInput = () => {
		if (questionMode) {
			if (question) {
				setQuestionMode(false);
			}
		} else {
			if (option && options.length < 5) {
				console.log("option");
				setOptions([...options, option]);
				setOption("");
				console.log(option);
			}
		}
	};

	return (
		<div className="bg-neutral/[0.2] px-24 py-24 flex flex-grow flex-col justify-start gap-4 max-h-screen overflow-auto">
			<div className="flex flex-col gap-4">
				{questionMode && (
					<div className="flex flex-col">
						<div className="">Enter a Science MCQ question</div>

						<div className="flex shadow">
							<button
								className="hover:text-primary p-4 hover:bg-primary/[0.04]"
								onClick={handleInput}
							>
								<SlArrowRight />
							</button>
							<textarea
								type="text"
								className="w-full h-12 leading-4 outline-primary/[0.4] pl-4 py-2 resize-none"
								value={question}
								onChange={(e) => setQuestion(e.target.value)}
							/>
						</div>
					</div>
				)}
				{!questionMode && (
					<div className="flex flex-col">
						<div className="">Add option</div>

						<div className="flex shadow">
							<button
								className="hover:text-primary p-4 hover:bg-primary/[0.04]"
								onClick={handleInput}
							>
								<AiOutlinePlus />
							</button>
							<input
								type="text"
								className="w-full h-12 leading-4 outline-primary/[0.4] pl-4 py-2 resize-none"
								value={option}
								onChange={(e) => setOption(e.target.value)}
							/>
						</div>
					</div>
				)}
				<div className="">
					{!questionMode && (
						<div className="font-medium text-xl">{question}</div>
					)}
					<div className="flex flex-col gap-4">
						{options.map((option, idx) => (
							<div
								key={option}
								className="flex flex-grow items-center"
							>
								<div className="flex flex-grow text-lg items-center shadow min-h-[64px] hover:shadow-md">
									<div
										className="flex justify-center h-full py-4 px-4 ml-2 mr-4 cursor-pointer hover:bg-secondary"
										onClick={() => {
											const newOptions = options.filter(
												(opt) => opt !== option
											);
											setOptions(newOptions);
										}}
									>
										<AiOutlineMinus />
									</div>
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
