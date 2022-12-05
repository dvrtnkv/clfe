import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const dateY = new Date().getFullYear();
	return (
		<footer className="border-t footer flex flex-row flex-wrap content-center justify-center p-2 space-x-1">
			<div>
				<Image
					src="/icons/telegram.svg"
					width={18}
					height={18}
					alt="telegram icon"
					loading="eager"
				/>
			</div>
			<Link href="https://t.me/collarslab" target="_blank" rel="norefferer nofollow" title="Канал">
				collarslab
			</Link>
			<div>
				<Image src="/icons/email.svg" width={18} height={18} alt="email icon" loading="eager" />
			</div>
			<Link href="mailto:dv@collarslab.com" target="_blank" rel="norefferer nofollow" title="Почта">
				dv@collarslab.com
			</Link>
			<div>
				<Image src="/icons/github.svg" width={18} height={18} alt="Github Logo" />
			</div>
			<Link
				href="https://github.com/dvrtnkv/"
				target="_blank"
				rel="norefferer nofollow"
				title="Github">
				dvrtnkv
			</Link>
			<div></div>
		</footer>
	);
}
