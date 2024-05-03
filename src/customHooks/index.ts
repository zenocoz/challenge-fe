import { useState, useEffect } from "react";
import { fetchData } from "../api";
import { SingleCryptoInfo } from "../interfaces";

const useDataFetcher = (symbol: string, minutes: number) => {
	const [data, setData] = useState<SingleCryptoInfo | null>(null);

	useEffect(() => {
		const fetchDataAndSetData = async () => {
			const newData = await fetchData(symbol, minutes);
			setData(newData);
		};

		const intervalId = setInterval(fetchDataAndSetData, 10000); // Fetch data every 60 seconds
		fetchDataAndSetData(); // Fetch data immediately when component mounts

		return () => clearInterval(intervalId);
	}, [symbol, minutes]);

	return data;
};

export default useDataFetcher;
