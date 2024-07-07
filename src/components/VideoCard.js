import React from 'react'

const VideoCard = ({info}) => {

    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
            <li className='font-bold py-5'>{title}</li>
            <li>{channelTitle}</li>
            <li>{~~(statistics.viewCount / 100000)}M views</li>
        </ul>
    </div>
  )
}

export default VideoCard