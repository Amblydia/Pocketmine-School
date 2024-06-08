import type {ReactNode, CSSProperties} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import FavoriteIcon from '@site/src/pages/tutorials/_components/FavoriteIcon';
import {Tags, TagList, type TagType} from '@site/src/data/tutorials';
import Heading from '@theme/Heading';
import TutorialTagSelect from '../TutorialTagSelect';
import OperatorButton from '../OperatorButton';
import ClearAllButton from '../ClearAllButton';
import {useFilteredUsers, useSiteCountPlural} from '../../_utils';

import styles from './styles.module.css';

function TagCircleIcon({color, style}: {color: string; style?: CSSProperties}) {
  return (
    <span
      style={{
        backgroundColor: color,
        width: 10,
        height: 10,
        borderRadius: '50%',
        ...style,
      }}
    />
  );
}

function TutorialTagListItem({tag}: {tag: TagType}) {
  const {label, description, color} = Tags[tag];
  return (
    <li className={styles.tagListItem}>
      <TutorialTagSelect
        tag={tag}
        label={label}
        description={description}
        icon={
          tag === 'favorite' ? (
            <FavoriteIcon size="small" style={{marginLeft: 8}} />
          ) : (
            <TagCircleIcon
              color={color}
              style={{
                backgroundColor: color,
                marginLeft: 8,
              }}
            />
          )
        }
      />
    </li>
  );
}

function TutorialTagList() {
  return (
    <ul className={clsx('clean-list', styles.tagList)}>
      {TagList.map((tag) => {
        return <TutorialTagListItem key={tag} tag={tag} />;
      })}
    </ul>
  );
}

function HeadingText() {
  const filteredUsers = useFilteredUsers();
  const siteCountPlural = useSiteCountPlural();
  return (
    <div className={styles.headingText}>
      <Heading as="h2">
        <Translate id="tutorial.filters.title">Filters</Translate>
      </Heading>
      <span>{siteCountPlural(filteredUsers.length)}</span>
    </div>
  );
}

function HeadingButtons() {
  return (
    <div className={styles.headingButtons} style={{alignItems: 'center'}}>
      <OperatorButton />
      <ClearAllButton />
    </div>
  );
}

function HeadingRow() {
  return (
    <div className={clsx('margin-bottom--sm', styles.headingRow)}>
      <HeadingText />
      <HeadingButtons />
    </div>
  );
}

export default function TutorialFilters(): ReactNode {
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <HeadingRow />
      <TutorialTagList />
    </section>
  );
}