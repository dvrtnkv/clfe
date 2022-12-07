import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import type {InferGetStaticPropsType} from "next";

export default function Posts({data}: any) {
	return (
		<Layout>
			<Head>
				<title>Блог | Collars Lab.</title>
				<meta name="description" content="Блог про веб-исследования и код" />
				<link rel="canonical" href="https://collarslab.com/posts" />
			</Head>
			<h1 className="page-header">Блог про веб-исследования и код</h1>
			{data.map(
				({userId, id, title, body}: {userId: number; id: number; title: string; body: string}) => {
					return (
						<article className="prose lg:prose-md" key={id}>
							<Link
								href={"/posts/" + id}
								className="no-underline hover:underline hover:text-blue-400 mt-8">
								<h1 className="hover:text-blue-400">{title}</h1>
							</Link>
							<p>{body}</p>
							<span>Author: {userId}</span>
						</article>
					);
				}
			)}
		</Layout>
	);
}
export async function getStaticProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();
	return {
		props: {
			data: data,
		},
	};
}
