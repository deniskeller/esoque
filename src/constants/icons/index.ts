import _ from 'lodash';
import { othersIcons, OthersIcons } from './others';
import { socialIcons, SocialIcons } from './social';

export const ALL_ICONS = _.assign({}, SocialIcons, OthersIcons);
export default _.assign({}, socialIcons, othersIcons);
