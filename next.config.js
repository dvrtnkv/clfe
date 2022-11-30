/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
	dest: "public",
});
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["tailwindui.com"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

module.exports = withPWA({nextConfig});
