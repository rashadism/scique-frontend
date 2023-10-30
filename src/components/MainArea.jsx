import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import axios from "axios";

const sample = {
	prompt: "What is Hesse's principle of transfer in geometry?",
	options: [
		"Hesse's principle of transfer is a concept in biology that explains the transfer of genetic information from one generation to another.",
		"Hesse's principle of transfer is a concept in chemistry that explains the transfer of electrons between atoms in a chemical reaction.",
		"Hesse's principle of transfer is a concept in physics that explains the transfer of energy from one object to another.",
		"Hesse's principle of transfer is a concept in economics that explains the transfer of wealth from one individual to another.",
		"Hesse's principle of transfer is a concept in geometry that states that if the points of the projective line P1 are depicted by a rational normal curve in Pn, then the group of the projective transformations of Pn that preserve the curve is isomorphic to the group of the projective transformations of P1.",
	],
};
const MainArea = () => {
	const [options, setOptions] = useState([]);
	const [question, setQuestion] = useState("");
	const [option, setOption] = useState("");
	const [loading, setLoading] = useState(false);
	const [questionMode, setQuestionMode] = useState(true);

	const demo = () => {
		setQuestion(sample.prompt);
		setQuestionMode(false);
		setOptions(sample.options);
	};

	const proceed = async () => {
		setLoading(true);
		try {
			const response = await axios.post(
				"https://hardy-lasting-ghost.ngrok-free.app/predict",
				{
					prompt: question,
					options: {
						A: options.at(0),
						B: options.at(1),
						C: options.at(2),
						D: options.at(3),
						E: options.at(4),
					},
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);
			alert(response.data.answer_order);
			console.log(response.data);
		} catch (error) {
			console.log("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleInput = () => {
		if (questionMode) {
			if (question) {
				setQuestionMode(false);
			}
		} else {
			if (option && options.length < 5) {
				// console.log("option");
				setOptions([...options, option]);
				setOption("");
				// console.log(option);
			}
		}
	};

	return (
		<div className="bg-neutral/[0.2] px-24 py-16 flex flex-grow flex-col justify-start gap-4 max-h-screen overflow-auto">
			<div className="flex flex-col gap-4">
				<div className="flex justify-between items-center px-6">
					<div className="text-xl">
						{questionMode
							? "Enter a Science MCQ question"
							: options.length < 5
							? `Enter option`
							: options.length === 5
							? "Enter context (Optional)"
							: ""}
					</div>
					<div className="flex gap-6">
						<button
							className="px-6 py-1 rounded-full border-2 border-primary hover:bg-primary hover:text-white hover:border-transparent"
							onClick={demo}
						>
							Demo
						</button>
						<button
							className="bg-primary px-6 py-1 rounded-full text-white border-2 border-transparent hover:bg-transparent hover:text-black hover:border-primary disabled:bg-primary/[0.2] disabled:text-white disabled:border-none disabled:cursor-not-allowed"
							disabled={options.length !== 5}
							onClick={proceed}
						>
							Proceed
						</button>
					</div>
				</div>
				{questionMode && (
					<div className="flex flex-col">
						<div className="flex shadow">
							<button
								className="hover:text-primary p-4 hover:bg-primary/[0.04]"
								onClick={handleInput}
							>
								<AiOutlineRight />
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
						<div className="font-medium text-xl px-6 py-2 pb-4">
							{question}
						</div>
					)}
					<div className="flex flex-col gap-4">
						{options.map((option, idx) => (
							<div
								key={option}
								className="flex flex-grow items-center hover:text-primary hover:bg-primary/[0.04]"
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
										<AiOutlineClose />
									</div>
									<div className="text-black">{option}</div>
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
