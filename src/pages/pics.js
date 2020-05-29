import React from 'react'
import { GalleryPage } from '../components/GalleryPage'

import img01 from '../images/faces/01 Rey Star Wars.jpg'
import img02 from '../images/faces/02 Sheldon Cooper.jpg'
import img03 from '../images/faces/03 Jon Snow.jpeg'
import img04 from '../images/faces/04 Abraham Lincoln.jpg'
import img05 from '../images/faces/05 Queen Elizabeth.jpg'
import img06 from '../images/faces/06 Harry Potter.jpg'
import img07 from '../images/faces/07 Hannibal Lecter.jpg'
import img08 from '../images/faces/08 Fast and Furious.jpg'
import img09 from '../images/faces/09 Lock Stock.jpg'
import img10 from '../images/faces/10 Skylord, Parks and Rec.jpg'

const images = [
    'https://www.worldometers.info/img/flags/br-flag.gif',
    'https://www.worldometers.info/img/flags/iv-flag.gif',
    'https://www.worldometers.info/img/flags/ei-flag.gif',
    'https://www.worldometers.info/img/flags/mz-flag.gif',
    'https://www.worldometers.info/img/flags/ni-flag.gif',
    'https://www.worldometers.info/img/flags/no-flag.gif',
    'https://www.worldometers.info/img/flags/mi-flag.gif',
    'https://www.worldometers.info/img/flags/au-flag.gif',
    'https://www.worldometers.info/img/flags/vm-flag.gif',
    'https://www.worldometers.info/img/flags/ri-flag.gif',
]

// const images = [
//     img03,
//     img01,
//     img02,
//     // img04,
//     img05,
//     // img06,
//     img07,
//     // img08,
//     img09,
//     img10,
// ]

export default () => <GalleryPage 
    images={images}
    title={"I need to flag an issue"}
    subtitle={"(just smile and wave)"}    
    />
