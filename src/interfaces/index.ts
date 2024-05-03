export interface SingleValue {
	eur: number;
}

export interface SingleCryptoInfo {
	symbol: string;
	latestPrice: number;
	average: number;
	historicalValues: SingleValue[];
	count?: number | null;
}
