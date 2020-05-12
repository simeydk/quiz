import React from 'react'

import './pics.css'

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
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
    img08,
    img09,
    img10,
]

function Page() {
    return ( 
    <div>
        <h1>Round 1</h1>
        <div className="img-list">
            {images.map(img => <div className="img-thumb-box">
                <img className="img-thumb" src={img} />
            </div>)}
        </div>
    </div>
    )
}

export default Page