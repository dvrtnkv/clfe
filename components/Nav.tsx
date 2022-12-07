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
		<nav className="nav bg-gray-100 w-56 hidden lg:flex lg:flex-col lg:border-r">
			{navList.map(({title, path}) => (
				<Link
					href={path}
					key={path}
					className={`text-lg border-b hover:underline p-2 px-4 max-h-fit ${
						router.pathname.indexOf(path) === 0 ? "font-bold" : "hover:text-gray-600"
					}`}>
					{title}
				</Link>
			))}
		</nav>
	);
}
