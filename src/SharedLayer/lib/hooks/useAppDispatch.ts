import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/AppLayer/providers/StoreProvider'

export const useAppDispatch = () => useDispatch<AppDispatch>()
