'use client'
import React from 'react'
import { FeedItem } from '@/FeatureLayer/Feed/ui/FeedItem'
import { AddSongModal } from '@/FeatureLayer/AddSong'

const data = {
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
}
const Page = () => {
  return (
    <div>
      <FeedItem {...data} />
      <AddSongModal />
    </div>
  )
}

export default Page
