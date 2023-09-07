import React, { useCallback, useState } from 'react'
import cls from './FeedSwitcher.module.scss'
import { clsx } from 'clsx'

const FeedSwitcher = () => {
  const [isForYou, setIsForYou] = useState(true)

  const toggleToForYou = useCallback(() => {
    if (!isForYou) {
      setIsForYou((prevState) => !prevState)
    }
  }, [isForYou])

  const toggleToFollowing = useCallback(() => {
    if (isForYou) {
      setIsForYou((prevState) => !prevState)
    }
  }, [isForYou])

  return (
    <div className={cls.container}>
      <span
        className={clsx({ [cls.active]: isForYou })}
        onClick={toggleToForYou}
      >
        For u
      </span>
      <span
        className={clsx({ [cls.active]: !isForYou })}
        onClick={toggleToFollowing}
      >
        Following
      </span>
    </div>
  )
}

export default FeedSwitcher
