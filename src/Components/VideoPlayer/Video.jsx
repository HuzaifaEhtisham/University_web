import React from 'react'
import './Video.css'
import video from '../../assets/college-video.mp4'

const Video = () => {
  return (
    <div className='video-player hide'>
        <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default Video
