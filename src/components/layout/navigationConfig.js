import {
  NAVIGATION_ITEM_ONE_URL,
  NAVIGATION_ITEM_TWO_URL,
  NAVIGATION_ITEM_THREE_URL,
  NAVIGATION_ITEM_FOUR_URL,
  NAVIGATION_ITEM_FIVE_URL,
} from '../../config/configureRoutes';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

const items = [
  {
    label: 'Item 1',
    value: 'item1',
    icon: RestoreIcon,
    url: NAVIGATION_ITEM_ONE_URL,
  },
  {
    label: 'Item 2',
    value: 'item2',
    icon: FavoriteIcon,
    url: NAVIGATION_ITEM_TWO_URL,
  },
  {
    label: 'Item 3',
    value: 'item3',
    icon: ArchiveIcon,
    url: NAVIGATION_ITEM_THREE_URL,
  },
  {
    label: 'Item 4',
    value: 'item4',
    icon: ArchiveIcon,
    url: NAVIGATION_ITEM_FOUR_URL,
  },
  {
    label: 'Item 5',
    value: 'item5',
    icon: ArchiveIcon,
    url: NAVIGATION_ITEM_FIVE_URL,
  },
];

export default items;
