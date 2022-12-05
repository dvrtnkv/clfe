import Link from "next/link";
import {useRouter} from "next/router";

export default function Breadcrumbs(props: any) {
	const router = useRouter();

	return (
		<nav className="bg-gray-100 px-5 py-3 mb-4 rounded-md w-full">
			<ol className="list-reset flex items-center">
				{router.pathname !== "/" && (
					<li>
						<Link href="/" className="hover:text-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor">
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
						</Link>
					</li>
				)}
				{router.pathname == "/" && (
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor">
							<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
						</svg>
					</li>
				)}
				<li>
					<span className="text-gray-500 mx-2">/</span>
				</li>
				{Object.keys(props.list).length == 1 && (
					<li className="text-gray-500">{props.list[0].title}</li>
				)}
				{Object.keys(props.list).length >= 2 && (
					<>
						<li>
							<Link href={props.list[0].path} className="text-blue-600 hover:text-blue-700">
								{props.list[0].title}
							</Link>
						</li>
						<li>
							<span className="text-gray-500 mx-2">/</span>
						</li>
						<li className="text-gray-500">{props.list[1].title}</li>
					</>
				)}
			</ol>
		</nav>
	);
}
