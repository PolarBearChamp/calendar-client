import { useTheme } from '@/AppLayer/providers/ThemeProvider'
import ICONS from '@/SharedLayer/const/icons'

export const useIcons = () => {
  const { theme } = useTheme()
  return ICONS[theme]
}
