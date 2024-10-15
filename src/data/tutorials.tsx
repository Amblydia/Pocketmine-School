import {translate} from '@docusaurus/Translate';
import {sortBy} from '@site/src/utils/jsUtils';

export type Tutorial = {
  title: string;
  description: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

const Tutorials: Tutorial[] = [
  {
    title: 'Creating Plugins',
    description: 'Learn how to create Pocketmine Plugins',
    website: 'htmap',
    source: '',
    tags: [],
  },
  {
    title: 'FormAPI',
    description: 'Learn how to use FormAPI',
    website: 'form-api',
    source: ' ',
    tags: ['api'],
  },
  {
    title: 'Customies',
    description: 'Learn how to use Customies',
    website: 'customies',
    source: ' ',
    tags: ['api'],
  },
  {
    title: 'Camera System',
    description: '',
    website: 'camera-system',
    source: ' ',
    tags: ['api'],
  },
  {
    title: 'Pharynx',
    description: '',
    website: 'pharynx',
    source: ' ',
    tags: ['api'],
  }
];

export type TagType =
  | 'favorite'
  | 'api'
  | 'development'
  | 'serversetup'
  | 'client';

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: 'Favorite',
    description: 'idk',
    color: '#eeeeee',
  },

  api: {
    label: translate({message: 'Api'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.api.description',
    }),
    color: '#eeeeee',
  },

  development: {
    label: translate({message: 'Development'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.development.description',
    }),
    color: '#4267b2',
  },

  serversetup: {
    label: translate({message: 'Server Setup'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.serversetup.description',
    }),
    color: '#14cfc3',
  },

  client: {
    label: translate({message: 'Client'}),
    description: translate({
      message: '',
      id: 'tutorial.tag.client.description',
    }),
    color: '#ffcfc3',
  },
};

export const TagList = Object.keys(Tags) as TagType[];

function sortTutorials() {
  let result = Tutorials;
  // Sort by site name
  //result = sortBy(result, (user) => user.title.toLowerCase());
  return result;
}

export const sortedUsers = sortTutorials();