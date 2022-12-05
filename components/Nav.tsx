import Link from "next/link";
import {useRouter} from "next/router";
const navList = [
	{
		title: "Collars Lab.",
		path: "/",
	},
	{
		title: "Блог",
		path: "/posts",
	},
	{
		title: "Магазин",
		path: "/shop",
	},
	{
		title: "Услуги",
		path: "/service",
	},
	{
		title: "Портал",
		path: "/portal",
	},
];
export default function Nav() {
	const router = useRouter();
	return (
		<nav className="nav flex flex-col p-8 lg:border-r">
			{navList.map(({title, path}) => (
				<Link
					href={path}
					key={path}
					className={`hover:underline ${
						router.pathname === path ? "text-blue-500" : "hover:text-blue-500"
					}`}>
					{title}
				</Link>
			))}
		</nav>
	);
}
