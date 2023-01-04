import React from 'react'
//import valorantVideo from '../assets/VALORANT   2022-10-23 16-55-19.mp4'
import chessVideo from '../assets/stefan-levitsky-vs-frank-marshall-1912-the-gold-coin-game-google-chrome-2023-0_9Be7S2vr.mp4'
const Mybackground = () => {
    return (
        <video className='background' src={chessVideo} autoPlay loop muted/>
    )
}
export default Mybackground