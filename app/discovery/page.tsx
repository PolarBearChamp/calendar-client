'use client'
import { FeedItem, FeedSwitcher } from '../../src/EntityLayer/Feed'
import cls from './DiscoveryPage.module.scss'
import { UserControls } from '../../src/WidgetLayer/UserControls'
import { WithLogo } from '@/SharedLayer/ui/Layouts'

const DiscoveryPage = () => {
  const testData = [
    {
      userId: '1',
      userName: 'Vitya',
      userLastName: 'Semenov',
      userStatus: 'mchammer',
      userImage:
        'https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg',

      date: 'Dec, 21 2023',

      songId: '2',
      songName: 'King Kunta',
      artistId: '1',
      artist: 'Kendrick Lamar',
      songLine: '“Now I run the game got the whole world talkin’, King Kunta”',
      userNote:
        'I love listening to this song while I watch shark shows on Discovery',

      tags: ['angry', 'motivated'],
    },
    {
      userId: '2',
      userName: 'Vitya',
      userLastName: 'Semenov',
      userStatus: 'mchammer',
      userImage:
        'https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg',

      date: 'Dec, 21 2023',

      songId: '3',
      songName: 'King Kunta',
      artistId: '1',
      artist: 'Kendrick Lamar',
      songLine: '“Now I run the game got the whole world talkin’, King Kunta”',
      userNote:
        'I love listening to this song while I watch shark shows on Discovery',

      tags: ['angry', 'motivated'],
    },
    {
      userId: '3',
      userName: 'Vitya',
      userLastName: 'Semenov',
      userStatus: 'mchammer',
      userImage:
        'https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg',

      date: 'Dec, 21 2023',

      songId: '2',
      songName: 'King Kunta',
      artistId: '1',
      artist: 'Kendrick Lamar',
      songLine: '“Now I run the game got the whole world talkin’, King Kunta”',
      userNote:
        'I love listening to this song while I watch shark shows on Discovery',

      tags: ['angry', 'motivated'],
    },
    {
      userId: '4',
      userName: 'Vitya',
      userLastName: 'Semenov',
      userStatus: 'mchammer',
      userImage:
        'https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg',

      date: 'Dec, 21 2023',

      songId: '2',
      songName: 'King Kunta',
      artistId: '5',
      artist: 'Kendrick Lamar',
      songLine: '“Now I run the game got the whole world talkin’, King Kunta”',
      userNote:
        'I love listening to this song while I watch shark shows on Discovery',

      tags: ['angry', 'motivated'],
    },
  ]
  return (
    <WithLogo>
      <div className={cls.wrapper}>
        <h1 className={cls.header}>Feed</h1>
        <div className={cls.controls}>
          <UserControls />
        </div>
        <div className={cls.content}>
          <div className={cls.feed}>
            <FeedSwitcher />
            {testData && (
              <div className={cls.list}>
                {testData.map((item, i) => {
                  return <FeedItem key={i} {...item} />
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </WithLogo>
  )
}

export default DiscoveryPage
