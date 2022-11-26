import Image from "next/image";
import Link from "next/link";

export default function Footer({styles}) {
	const dateY = new Date().getFullYear();
	return (
		<footer className={styles.footer}>
			<div>
				Copyright &copy; Collars Lab. 2022
				{2022 != dateY && " - " + dateY}
			</div>
			<div className={styles.contacts}>
				<Image
					src="/icons/telegram_icon.svg"
					width={18}
					height={18}
					alt="telegram icon"
					loading="eager"
				/>
				<Link
					href="https://t.me/collarslab"
					target="_blank"
					rel="norefferer nofollow"
					title="Канал"
					className="hover:text-slate-700">
					collarslab
				</Link>
				<Image src="/icons/email.png" width={18} height={18} alt="email icon" loading="eager" />
				<Link
					href="mailto:dv@collarslab.com"
					target="_blank"
					rel="norefferer nofollow"
					title="Почта">
					dv@collarslab.com
				</Link>
				<Image src="/icons/github.svg" alt="Github Logo" width={18} height={18} />
				<Link
					href="https://github.com/dvrtnkv/"
					target="_blank"
					rel="norefferer nofollow"
					title="Github">
					dvrtnkv
				</Link>
			</div>
		</footer>
	);
}
