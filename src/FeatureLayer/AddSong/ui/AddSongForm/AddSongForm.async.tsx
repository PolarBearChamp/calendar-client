import { FC, lazy } from 'react'
import { AddSongFormProps } from './AddSongForm'

export const AddSongFormAsync = lazy<FC<AddSongFormProps>>(
  () => import('./AddSongForm'),
)
