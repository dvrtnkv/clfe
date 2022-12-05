import {useRouter} from "next/router";
import {GetServerSideProps, GetStaticProps} from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
type Data = {data: IData};
interface IData {
	userId: number;
	id: number;
	title: string;
	body: string;
}
export default function Post({data}: Data) {
	const router = useRouter();
	return (
		<Layout>
			<Head>
				<title>{data.title} | Блог - Collars Lab.</title>
				<meta name="description" content={data.body} />
				<link rel="canonical" href={`https://collarslab.com/posts/${router.query.id}`} />
			</Head>
			<Breadcrumbs
				list={[
					{title: "Блог", path: "/posts"},
					{title: data.title, path: router.query.id},
				]}
			/>
			<article className="prose-lg">
				<h1>{data.title}</h1>
				<p>{data.body}</p>
			</article>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps<{data: Data}> = async (context) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`);
	const data: Data = await res.json();

	return {
		props: {
			data,
		},
	};
};
// export const getStaticProps: GetStaticProps = async (context) => {
// 	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context?.params?.id}`);
// 	const data: Data = await res.json();
// 	return {
// 		props: {
// 			data,
// 		},
// 	};
// };
