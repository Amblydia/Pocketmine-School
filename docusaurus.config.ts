import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as IdealImageOptions} from '@docusaurus/plugin-ideal-image';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
	title: 'PocketMine-School',
	tagline: 'A Website To Teach Everything About PocketMine-MP',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://pocektmineschool.com',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},
	plugins: [
		[
			'ideal-image',
			{
				quality: 70,
				max: 1030,
				min: 640,
				steps: 2,
				// Use false to debug, but it incurs huge perf costs
				disableInDev: true,
			} satisfies IdealImageOptions,
		],
		tailwindPlugin
	],
	presets: [
		[
			'classic',
			{
				docs: {
					breadcrumbs: false,
					sidebarPath: 'sidebars.ts',
					editUrl: 'https://github.com/Amblydia/Pocketmine-School/tree/main',
				},
				blog: {
					showReadingTime: true,
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: 'img/pocketmineschool.png',
		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false,
			respectPrefersColorScheme: true,
		},
		docs: {
			sidebar: {
				hideable: true,
			},
		},
		navbar: {
			logo: {
				alt: 'Pocketmine School',
				src: 'img/pocketmineschool.png',
				srcDark: 'img/pocketmineschool-wbg.png',
			},
			items: [
				{
					to: 'tutorials', 
					position: 'left',
					label: 'Tutorials',
				},
				{
					to: 'blog', 
					position: 'left',
					label: 'Blogs',
				},
				{
					href: 'https://github.com/Amblydia/Pocketmine-School', 
					position: 'right',
					className: 'github-icon pseudo-icon',
				},
				{
					href: 'https://discord.gg/nhZANhHdBV', 
					position: 'right',
					className: 'discord-icon pseudo-icon',
				},
			],
		},
		footer: {
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'PocketMine School Discord',
							href: 'https://discord.gg/nhZANhHdBV',
						},
						{
							label: 'PocketMine Discord',
							href: 'https://discord.gg/XDugAkJ',
						},
					],
				},
				{
					title: 'Other Links',
					items: [
						{
							label: 'Github',
							href: 'https://github.com/Amblydia/Pocketmine-School',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} <strong><a href="https://github.com/Amblydia">Amblydia</a></strong>.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.vsDark,
			additionalLanguages: ['php'],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;