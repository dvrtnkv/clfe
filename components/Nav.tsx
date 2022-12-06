import Link from "next/link";
import {useRouter} from "next/router";
const navList = [
	{
		title: "Услуги",
		path: "/service",
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
		title: "Портал",
		path: "/portal",
	},
];
export default function Nav() {
	const router = useRouter();
	return (
		<nav className="nav bg-gray-100 w-64 hidden lg:flex lg:flex-col lg:border-r">
			{navList.map(({title, path}) => (
				<Link
					href={path}
					key={path}
					className={`text-lg border-b hover:underline rounded p-2 px-4 h-12 ${
						router.pathname === path ? "font-bold" : "hover:text-gray-900"
					}`}>
					{title}
				</Link>
			))}
		</nav>
	);
}
