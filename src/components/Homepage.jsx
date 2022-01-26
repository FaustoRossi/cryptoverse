import React from "react";
import Loader from "./Loader";
import millify from "millify";
import { Typography, Row, Col, Statistic, Divider } from "antd";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

function Homepage() {
	const { data, isFetching } = useGetCryptosQuery(10);
	const globalStats = data?.data?.stats;

	if (isFetching) return <Loader />;

	return (
		<>
			<div className="home-container">
				<Title level={2} className="heading ">
					Global Crypto Stats
				</Title>
				<Row>
					<Col span={12}>
						<Divider>
							<Statistic
								title="Total Crypto Currencies"
								value={globalStats.total}
							/>
						</Divider>
					</Col>

					<Col span={12}>
						<Divider>
							<Statistic
								title="Total Exchanges"
								value={millify(globalStats.totalExchanges)}
							/>
						</Divider>
					</Col>
					<Col span={12}>
						<Divider>
							<Statistic
								title="Total Market Cap"
								value={millify(globalStats.totalMarketCap)}
							/>
						</Divider>
					</Col>
					<Col span={12}>
						<Divider>
							<Statistic
								title="Total 24h Volume"
								value={millify(globalStats.total24hVolume)}
							/>
						</Divider>
					</Col>
					<Col span={12}>
						<Divider>
							<Statistic
								title="Total Markets "
								value={millify(globalStats.totalMarkets)}
							/>
						</Divider>
					</Col>
				</Row>
			</div>
			<Divider />
			<div className="home-heading-container">
				<Title level={2} className="home-title">
					Top 10 Crypto Currencies in the world
				</Title>
				<Title level={3} className="show-more">
					<Link to="/cryptocurrencies"> Show More</Link>
				</Title>
			</div>
			<div className="crypto-cards">
				<Cryptocurrencies simplified />{" "}
			</div>
			<Divider />
			<div className="home-heading-container">
				<Title level={2} className="home-title">
					Latest Crypto News
				</Title>
				<Title level={3} className="show-more">
					<Link to="/news"> Show More</Link>
				</Title>
			</div>
			<News simplified />
		</>
	);
}

export default Homepage;
