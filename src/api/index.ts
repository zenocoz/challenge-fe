import { SingleCryptoInfo } from "../interfaces";

const API_STRING = "http://localhost:8000";

export const fetchData = async (
	symbol: string,
	minutes: number
): Promise<SingleCryptoInfo> => {
	try {
		const response = await fetch(
			`${API_STRING}/price/${symbol}?minutes=${minutes}`
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
