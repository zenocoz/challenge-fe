import React, { useState } from "react";
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
import useDataFetcher from "../customHooks";

const PriceTracker = () => {
	const [symbol, setSymbol] = useState("bitcoin");
	const [minutes, setMinutes] = useState("60");
	const [inputMinutes, setInputMinutes] = useState("60");

	const data = useDataFetcher(symbol, parseInt(minutes));

	const handleSymbolChange = (newSymbol: string) => {
		setSymbol(newSymbol);
		//call api
	};

	const setMinutesChange = () => {
		setMinutes(inputMinutes);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputMinutes(e.target.value);
	};

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
							<Dropdown.Item onClick={() => handleSymbolChange("bitcoin")}>
								BTC
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSymbolChange("ethereum")}>
								ETH
							</Dropdown.Item>
							<Dropdown.Item onClick={() => handleSymbolChange("dogecoin")}>
								DOGE
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Col>
				<Col>
					<Form>
						<Row className="align-items-center">
							<Col xs="auto">
								<Button variant="primary" onClick={setMinutesChange}>
									Set Minutes
								</Button>
							</Col>
							<Col xs="auto">
								<Form.Control
									type="text"
									placeholder="Enter minutes"
									value={inputMinutes}
									onChange={handleInputChange}
								/>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
			<Row>
				{data ? (
					<div>
						<h2>{data.symbol}</h2>
						<p>Latest Price: {data.latestPrice}</p>
						<p>Average Price: {data.average}</p>
						{data.count && (
							<p>count (less available data than requested): {data.count} </p>
						)}
						<h3>Historical Data</h3>
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
