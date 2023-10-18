import { FC, Suspense } from 'react'
import { clsx } from 'clsx'
import { Modal } from '@/SharedLayer/ui/Modal'
import { AddSongFormAsync } from '../AddSongForm/AddSongForm.async'
import cls from './AddSongModal.module.scss'

interface AddSongModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
  userId: string
  date: string
}

const AddSongModal: FC<AddSongModalProps> = ({
  className,
  isOpen,
  onClose,
  date,
  userId,
}) => {
  return (
    <Modal
      className={clsx(cls.LoginModal, className)}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<div>Loading</div>}>
        <AddSongFormAsync userId={userId} date={date} />
      </Suspense>
    </Modal>
  )
}

export default AddSongModal
