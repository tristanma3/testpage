import React from 'react'
import valorantVideo from '../assets/VALORANT   2022-10-23 16-55-19.mp4'

const Mybackground = () => {
    return (
        <video className='background' src={valorantVideo} autoPlay loop muted/>
    )
}
export default Mybackground