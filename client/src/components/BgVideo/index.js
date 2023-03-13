import React from 'react'
import './style.css'

function BgVideo() {
  return (
    <>
        <video preload='true' loop autoPlay muted id='bg-video'>
            <source src={require('./flower-loop.mp4')} type='video/mp4' />
        </video>
    </>
  )
}

export default BgVideo
