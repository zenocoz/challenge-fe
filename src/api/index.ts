import { SingleCryptoInfo } from "../interfaces";

const BACKEND_API = "https://challenge-fullstack.onrender.com";

export const fetchData = async (
	symbol: string,
	minutes: number
): Promise<SingleCryptoInfo> => {
	try {
		const response = await fetch(
			`${BACKEND_API}/price/${symbol}?minutes=${minutes}`
		);

		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}

		const data: SingleCryptoInfo = await response.json();

		return data;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};
