import React, { FC } from 'react'
import cls from './FeedItem.module.scss'
import Image from 'next/image'
import { Button, ButtonTheme } from '@/SharedLayer/ui'
import Link from 'next/link'

interface IProps {
  userId: string
  userName: string
  userLastName: string
  userStatus: string
  userImage: string

  date: string

  songId: string
  songName: string
  artistId: string
  artist: string
  songLine: string
  userNote: string

  tags: string[]
}

const FeedItem: FC<IProps> = ({
  userId,
  userName,
  userLastName,
  userNote,
  userStatus,
  userImage,
  tags,
  artist,
  artistId,
  songName,
  songId,
  songLine,
  date,
}) => {
  return (
    <div className={cls.FeedItem}>
      <div className={cls.song}>
        <div className={cls.song__image}>
          <Image src={userImage} alt={'avatar'} fill />
        </div>
        <div className={cls.song__info}>
          <Link href={`/song/${songId}`} className={cls.song__name}>
            {songName}
          </Link>
          <Link href={`/artist/${artistId}`} className={cls.song__artist}>
            {artist}
          </Link>
        </div>
      </div>
      <div className={cls.post}>
        <div className={cls.post__header}>
          <div className={cls.user}>
            <div className={cls.user__avatar}>
              <Image src={'/songs/1.webp'} alt={'avatar user'} fill />
            </div>
            <div className={cls.user__info}>
              <Link
                className={cls.name}
                href={`/user/${userId}`}
              >{`${userName} ${userLastName}`}</Link>
              <span className={cls.status}>{userStatus}</span>
            </div>
          </div>
          {date}
        </div>
        <div className={cls.post__text}>
          <div className={cls.songLine}>{songLine}</div>
          <div className={cls.note}>{userNote}</div>
        </div>
        <div className={cls.post__footer}>
          <div className={cls.tags}>
            {tags.map((item, i) => {
              return (
                <span key={i} className={cls.tag}>
                  {' '}
                  #{item}
                </span>
              )
            })}
          </div>
          <div className={cls.rate}>
            <Button theme={ButtonTheme.ICON}>
              <Image
                src={'/icons/Dislike.svg'}
                alt={'dislike'}
                height={24}
                width={24}
              />
            </Button>
            <Button theme={ButtonTheme.ICON}>
              <Image
                src={'/icons/Like.svg'}
                alt={'like'}
                height={24}
                width={24}
              />
            </Button>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedItem
