import Head from "next/head";
import Layout from "../components/Layout";
import AddHouses from "../components/AddHouses";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Дома | Collars Lab.</title>
				<meta name="description" content="Запросить жильё в аренду по параметрам" />
				<link rel="canonical" href="https://collarslab.com/houses" />
			</Head>
			<AddHouses />
		</Layout>
	);
}
