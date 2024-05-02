import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Dropdown,
	ButtonGroup,
	Button,
	Table,
	Form,
} from "react-bootstrap";

const PriceTracker = () => {
	const [symbol, setSymbol] = useState("BTC");
	const [minutes, setMinutes] = useState("5");

	const data = {
		symbol: "Bitcoin",
		latestPrice: "Latest Price",
		averagePrice: "average price",
		historicalValues: [
			{
				eur: 0.12223,
			},
			{
				eur: 0.121451,
			},
			{
				eur: 0.121451,
			},
			{
				eur: 0.121451,
			},
			{
				eur: 0.121451,
			},
			{
				eur: 0.121451,
			},
		],
		count: null,
	};

	//  interface SingleValue {
	// 	eur: number;
	// }

	//  interface SingleCryptoInfo {
	// 	symbol: string;
	// 	latestPrice: number;
	// 	average: number;
	// 	historicalValues: SingleValue[];
	// 	count?: number | null;
	// }

	const handleSymbolChange = (newSymbol: string) => {
		setSymbol(newSymbol);
	};

	const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMinutes(e.target.value);
	};

	const submitMinutesChange = () => {};

	return (
		<Container className="mt-5">
			<Row>
				<h1 className="mb-4">Cryptocurrency Price Tracker</h1>

				<Col className="mb-3">
					<Dropdown as={ButtonGroup}>
						<Dropdown.Toggle variant="primary" id="dropdown-symbol">
							{symbol}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item onClick={() => handleSymbolChange("BTC")}>
								BTC
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSymbolChange("ETH")}>
								ETH
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSymbolChange("DOGE")}>
								DOGE
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col>
					{/* <Form.Group className="mb-3">
						<Button variant="primary">Set Minutes</Button>
						<Form.Control
							type="text"
							placeholder="Enter minutes"
							value={minutes}
							onChange={handleMinutesChange}
						/>
					</Form.Group> */}

					<Form>
						<Row className="align-items-center">
							<Col xs="auto">
								<Button variant="primary" onClick={submitMinutesChange}>
									Set Minutes
								</Button>
							</Col>
							<Col xs="auto">
								<Form.Control
									type="text"
									placeholder="Enter minutes"
									value={minutes}
									onChange={handleMinutesChange}
								/>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
			<Row>
				{data ? (
					<div>
						<h2>{data.symbol} Price</h2>
						<p>Latest Price: {data.latestPrice}</p>
						<p>Average Price: {data.averagePrice}</p>
						<h3>Historical Data</h3>
						{data.count && <h3>count</h3>}
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Date</th>
									<th>Price</th>
								</tr>
							</thead>
							<tbody>
								{data.historicalValues.map((item, index) => (
									<tr key={index}>
										<td>{index} day</td>
										<td>{item.eur}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				) : (
					<p>Loading...</p>
				)}
			</Row>
		</Container>
	);
};

export default PriceTracker;
