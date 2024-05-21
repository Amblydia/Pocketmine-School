import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
	const {siteConfig} = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<Heading as="h1" className="hero__title">
					{siteConfig.title}
				</Heading>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--secondary button--lg"
						to="/docs/intro">
						Docusaurus Tutorial - 5min ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const {siteConfig} = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="A Website To Teach You Everything About PocketMine-MP"
		>
			{/* <HomepageHeader />
			<main>
				<HomepageFeatures />
			</main> */}
			<div className="hero">
				<div className="container">
					<h2 className="hero__title">Pocketmine School</h2>
					<p className="hero__subtitle">Learn how to use the Pocketmine API!</p>
					<Link href='tutorials' className={clsx('button', styles.heroBtn)}>Get Started</Link>
				</div>
			</div>
		</Layout>
	);
}
