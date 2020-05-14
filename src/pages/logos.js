import React from 'react'
import { GalleryPage } from '../components/GalleryPage'

// import img01 from '../images/faces/01 Rey Star Wars.jpg'
// import img02 from '../images/faces/02 Sheldon Cooper.jpg'
// import img03 from '../images/faces/03 Jon Snow.jpeg'
// import img04 from '../images/faces/04 Abraham Lincoln.jpg'
// import img05 from '../images/faces/05 Queen Elizabeth.jpg'
// import img06 from '../images/faces/06 Harry Potter.jpg'
// import img07 from '../images/faces/07 Hannibal Lecter.jpg'
// import img08 from '../images/faces/08 Fast and Furious.jpg'
// import img09 from '../images/faces/09 Lock Stock.jpg'
// import img10 from '../images/faces/10 Skylord, Parks and Rec.jpg'

import img01 from '../images/logos/01 bird.png'
import img02 from '../images/logos/02 vehicle.png'
import img03 from '../images/logos/03 red and blue.jpg'
import img04 from '../images/logos/04 leaves.jpg'
import img05 from '../images/logos/05 keyboards.png'
import img06 from '../images/logos/06 couch.jpg'
import img07 from '../images/logos/07 anchor.jpg'
import img08 from '../images/logos/08 boats.png'
import img09 from '../images/logos/09 badge.png'
import img10 from '../images/logos/10 nest.jpg'

const images = [
    img01,
    img02,
    // img03,
    img04,
    // img05,
    img06,
    img07,
    img08,
    // img09,
    img10,
]

export default () => <GalleryPage 
        images={images}
        title={"It's all about the badge"}
        subtitle={"Name the company"}
    />
