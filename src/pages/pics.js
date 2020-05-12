import React, {useState, useEffect} from 'react'

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
    const [showModal, setShowModal] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0)
    const [maxSlide, setMaxSlide] = useState(0)

    const setSlide = (n) => {
        setMaxSlide(Math.max(maxSlide, n))
        setActiveSlide(n)
    }

    function clickThumb(i) {
        setShowModal(true);
        setSlide(i);
    }

    function changeSlide(i = 1) {
        setSlide((activeSlide + images.length + i) % images.length)
    }

    const nextSlide = () => changeSlide(1)
    const prevSlide = () => changeSlide(1)

    function onKeyPress({key}) {
        console.log(`pressed ${key}`)
        if (key == 'Escape') {
            setShowModal(false)
        }
        if (key == 'ArrowLeft') {
            prevSlide()
        }
        if (key == 'ArrowRight') {
            nextSlide()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onKeyPress)
        return () => document.removeEventListener('keydown',onKeyPress)
    })

    return (
        <div className="page">
            <div className="main">
                <h1>Round 1</h1>
                <div className="img-list">
                    {images.slice(0,maxSlide+1).map((img,i) => <button onClick={() => clickThumb(i)} className="img-thumb-box">
                        <img className="img-thumb" src={img} />
                        <h4 className="thumb-num">{i+1}</h4>
                    </button>)}
                </div>
                <div className={"modal " + (showModal ? "" : "hidden")} >
                    <img className="img-modal" src={images[activeSlide]} />
                    <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
                    <button className="modal-left" onClick={prevSlide}>{"<"}</button>
                    <button className="modal-right" onClick={nextSlide}>{">"}</button>
                    <h4 className="modal-num">{activeSlide+1}</h4>
                </div>
                
            </div>
        </div>
    )
}

export default Page