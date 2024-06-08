import Translate, {translate} from '@docusaurus/Translate';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import TutorialSearchBar from '@site/src/pages/tutorials/_components/TutorialSearchBar';
import TutorialCards from './_components/TutorialCards';
import TutorialFilters from './_components/TutorialFilters';

const TITLE = translate({message: 'A List of Tutorials'});
const DESCRIPTION = translate({
  message: 'Best tutorials to help you create a pocketmine plugim',
});
//const SUBMIT_URL = 'https://github.com/facebook/docusaurus/discussions/7826';

function TutorialHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
    </section>
  );
}

export default function Tutorial(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <TutorialHeader />
        <TutorialFilters />
        <div
          style={{display: 'flex', marginLeft: 'auto'}}
          className="container">
          <TutorialSearchBar />
        </div>
        <TutorialCards />
      </main>
    </Layout>
  );
}