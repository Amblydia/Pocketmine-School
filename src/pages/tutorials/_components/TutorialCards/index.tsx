import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {sortedUsers, type User} from '@site/src/data/tutorials';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import TutorialCard from '../TutorialCard';
import {useFilteredUsers} from '../../_utils';

import styles from './styles.module.css';

const favoriteUsers = sortedUsers.filter((user) =>
  user.tags.includes('favorite'),
);

const otherUsers = sortedUsers.filter(
  (user) => !user.tags.includes('favorite'),
);

function HeadingNoResult() {
  return (
    <Heading as="h2">
      <Translate id="tutorial.usersList.noResult">No result</Translate>
    </Heading>
  );
}

function HeadingFavorites() {
  return (
    <Heading as="h2" className={styles.headingFavorites}>
      <Translate id="tutorial.favoritesList.title">Our favorites</Translate>
      <FavoriteIcon size="large" style={{marginLeft: '1rem'}} />
    </Heading>
  );
}

function HeadingAllSites() {
  return (
    <Heading as="h2">
      <Translate id="tutorial.usersList.allUsers">All Tutorials</Translate>
    </Heading>
  );
}

function CardList({heading, items}: {heading?: ReactNode; items: User[]}) {
  return (
    <div className="container">
      {heading}
      <ul className={clsx('clean-list', styles.cardList)}>
        {items.map((item) => (
          <TutorialCard key={item.title} user={item} />
        ))}
      </ul>
    </div>
  );
}

function NoResultSection() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container padding-vert--md text--center">
        <HeadingNoResult />
      </div>
    </section>
  );
}

export default function TutorialCards() {
  const filteredUsers = useFilteredUsers();

  if (filteredUsers.length === 0) {
    return <NoResultSection />;
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredUsers.length === sortedUsers.length ? (
        <>
          {/* <div className={styles.tutorialFavorite}>
            <CardList heading={<HeadingFavorites />} items={favoriteUsers} />
          </div> */}
          <div className="margin-top--lg">
            <CardList heading={<HeadingAllSites />} items={otherUsers} />
          </div>
        </>
      ) : (
        <CardList items={filteredUsers} />
      )}
    </section>
  );
}