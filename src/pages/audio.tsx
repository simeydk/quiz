// Gatsby supports TypeScript natively!
import React, {useState} from "react"
import { PageProps, Link } from "gatsby"

import Playa from "../components/playa"
import './audio.css'

const SecondPage = (props: PageProps) => {
  const sources = getSources()
  const [playingNum, setPlayingNum] = useState(-1)

  return (
    <div className="audio-page">
      <div className="audio-list" >
      {sources.map((src,i) => <div style={{fontSize: '14px'}}>
        <Playa src={src} num={i+1} autoPlay={i === playingNum} preload onClick={() => setPlayingNum(i)}/>
        </div>)}
      </div>
    <div className="audio-page-bg-image"></div>
    </div>
)}

function getSources() {
  // return [
  //   '/assets/audio/01.mp3',
  //   '/assets/audio/02.mp3',
  //   '/assets/audio/03.mp3',
  //   '/assets/audio/05.mp3',
  //   '/assets/audio/06.mp3',
  //   '/assets/audio/07.mp3',
  //   '/assets/audio/08.mp3',
  //   '/assets/audio/09.mp3',
  //   '/assets/audio/10.mp3',
  //   '/assets/audio/11.mp3',
  //   '/assets/audio/12.mp3',
  // ]
  return [

    "/assets/audio/named/Lynyrd Skynyrd - Sweet Home Alabama-ye5BuYf8q4o.mp3",
    "/assets/audio/named/Piekniek oppi Maan-1XtoFgONNYI.mp3",
    "/assets/audio/named/Schindler's List Soundtrack-XNSsv86lsok.mp3",
    "/assets/audio/named/The Weeknd - Blinding Lights (Official Audio)-fHI8X4OXluQ.mp3",
    "/assets/audio/named/Welcome To New York-RfjPHmgBPF0.mp3",
    "/assets/audio/named/3 Doors Down - Kryptonite (Official Video)-xPU8OAjjS4k.mp3",
    "/assets/audio/named/AC_DC - Back In Black (Official Video)-pAgnJDJN4VA.mp3",
    "/assets/audio/named/Beethoven - Für Elise _ Piano Version-_mVW8tgGY_w.mp3",
    "/assets/audio/named/Daft Punk - Get Lucky (Official Audio) ft. Pharrell Williams, Nile Rodgers-5NV6Rdv1a3I.mp3",
    "/assets/audio/named/Dire Straits - Money For Nothing-wTP2RUD_cL0.mp3",
    "/assets/audio/named/FROZEN _ Let It Go Sing-along _ Official Disney UK-L0MK7qz13bU.mp3",
    "/assets/audio/named/Good Riddance (Time Of Your Life) [Official Music Video]-CnQ8N1KacJc.mp3",
    "/assets/audio/named/I Will Wait - Mumford and Sons-mw0jCyH5cZA.mp3",
  ]
  }
  

export default SecondPage
