import axios from "axios";
import { useEffect, useState } from "react";

const History = () => {
	const [history, setHistory] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		get();
	}, []);

	const get = async () => {
		setLoading(true);
		try {
			const response = await axios.get(
				"https://hardy-lasting-ghost.ngrok-free.app/history",
				{
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"ngrok-skip-browser-warning": "any",
					},
				}
			);
			if (response.data) {
				setHistory(response.data);
				console.log(response.data);
			}
		} catch (error) {
			console.log("Error fetching data:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-neutral/[0.2] px-24 py-16 flex flex-grow flex-col justify-start gap-4 max-h-screen overflow-auto">
			<div className="flex flex-col gap-4">
				{history.map((item) => (
					<div key={item.question}>{item.question}</div>
				))}
			</div>
		</div>
	);
};
export default History;
