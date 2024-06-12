import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
import {Tags, TagList, type TagType, type User} from '@site/src/data/tutorials';
import {sortBy} from '@site/src/utils/jsUtils';
import Heading from '@theme/Heading';
import FavoriteIcon from '../FavoriteIcon';
import styles from './styles.module.css';

function TagItem({
  label,
  description,
  color,
}: {
  label: string;
  description: string;
  color: string;
}) {
  return (
    <li className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </li>
  );
}

function TutorialCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        return <TagItem key={index} {...tagObject} />;
      })}
    </>
  );
}

function getCardImage(user: User): string {
  return (
    user.preview ??
    // TODO make it configurable
    `https://slorber-api-screenshot.netlify.app/${encodeURIComponent(
      user.website,
    )}/tutorial`
  );
}

function TutorialCard({user}: {user: User}) {
  const image = getCardImage(user);
  return (
    <li key={user.title} className="card shadow--md">
      <div className={clsx('card__image', styles.tutorialCardImage)}>
        <Image img={image} alt={user.title} />
      </div>
      <div className="card__body">
        <div className={clsx(styles.tutorialCardHeader)}>
          <Heading as="h4" className={styles.tutorialCardTitle}>
            <Link to={`/docs/${user.website}`} className={styles.tutorialCardLink}>
              {user.title}
            </Link>
          </Heading>
          {user.tags.includes('favorite') && (
            <FavoriteIcon size="medium" style={{marginRight: '0.25rem'}} />
          )}
          {user.source && (
            <Link
              href={user.source}
              className={clsx(
                'button button--secondary button--sm',
                styles.tutorialCardSrcBtn,
              )}>
              <Translate id="tutorial.card.sourceLink">source</Translate>
            </Link>
          )}
        </div>
        <p className={styles.tutorialCardBody}>{user.description}</p>
      </div>
      <ul className={clsx('card__footer', styles.cardFooter)}>
        <TutorialCardTag tags={user.tags} />
      </ul>
    </li>
  );
}

export default React.memo(TutorialCard);