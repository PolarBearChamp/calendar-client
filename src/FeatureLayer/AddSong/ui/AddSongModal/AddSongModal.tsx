import React, { FC, Suspense } from 'react'
import cls from './AddSongModal.module.scss'
import { Modal } from '@/SharedLayer/ui/Modal'
import { clsx } from 'clsx'
import { AddSongFormAsync } from '@/FeatureLayer/AddSong/ui/AddSongForm/AddSongForm.async'

interface AddSongModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

const AddSongModal: FC<AddSongModalProps> = ({
  className,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      className={clsx(cls.LoginModal, className)}
      isOpen={true}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<div>Loading</div>}>
        <AddSongFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  )
}

export default AddSongModal
