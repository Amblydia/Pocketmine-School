import {type ReactNode} from 'react';
import {translate} from '@docusaurus/Translate';
import {useSearchName} from '@site/src/pages/tutorials/_utils';
import styles from './styles.module.css';

export default function TutorialSearchBar(): ReactNode {
  const [searchName, setSearchName] = useSearchName();
  return (
    <div className={styles.searchBar}>
      <input
        placeholder={translate({
          message: 'Search for site name...',
          id: 'tutorial.searchBar.placeholder',
        })}
        value={searchName}
        onInput={(e) => {
          setSearchName(e.currentTarget.value);
        }}
      />
    </div>
  );
}