// Discovery Icons
import DiscoveryLight from '../../../public/icons/DiscoveryLight.svg'
import DiscoveryLightHover from '../../../public/icons/DiscoveryLightHover.svg'
import DiscoveryDark from '../../../public/icons/DiscoveryDark.svg'
import DiscoveryDarkHover from '../../../public/icons/DiscoveryDarkHover.svg'

// Friends Icons
import FriendsLight from '../../../public/icons/FriendsLight.svg'
import FriendsLightHover from '../../../public/icons/FriendsLightHover.svg'
import FriendsDarkHover from '../../../public/icons/FriendsDarkHover.svg'
import FriendsDark from '../../../public/icons/FriendsDark.svg'
import { Theme } from '@/AppLayer/providers/ThemeProvider'

const ICONS = {
  [Theme.LIGHT]: {
    icDiscovery: DiscoveryLight,
    icFriends: FriendsLight,
    icDiscoveryHover: DiscoveryLightHover,
    icFriendsHover: FriendsLightHover,
  },
  [Theme.DARK]: {
    icDiscovery: DiscoveryDark,
    icFriends: FriendsDark,
    icDiscoveryHover: DiscoveryDarkHover,
    icFriendsHover: FriendsDarkHover,
  },
}

export default ICONS
