import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@/AppLayer/providers/StoreProvider'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
