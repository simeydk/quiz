import React, { useState, useEffect } from 'react';

import './GalleryPage.css'

export function GalleryPage({ images, title="Gallery", subtitle="images" }) {
    const [showModal, setShowModal] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [maxSlide, setMaxSlide] = useState(0);
    const setSlide = (n) => {
        setMaxSlide(Math.max(maxSlide, n));
        setActiveSlide(n);
    };
    function clickThumb(i) {
        setShowModal(true);
        setSlide(i);
    }
    function changeSlide(i = 1) {
        setSlide((activeSlide + images.length + i) % images.length);
    }
    const nextSlide = () => changeSlide(+1);
    const prevSlide = () => changeSlide(-1);
    function onKeyPress(e) {
        const {key} = e
        console.log(`pressed ${key}`);
        if (key == 'Escape') {
            setShowModal(false);
        }
        if (key == 'ArrowLeft') {
            prevSlide();
        }
        if (key == 'ArrowRight') {
            nextSlide();
        }
        if (key == ' ') {
            e.preventDefault()
            if (showModal) {
                if (activeSlide >= (images.length-1)) {
                    setShowModal(false)
                } 
                nextSlide()
            } else {
                setSlide(Math.max(activeSlide,0))
                setShowModal(true)
            }
        }
    }
    useEffect(() => {
        document.addEventListener('keydown', onKeyPress);
        return () => document.removeEventListener('keydown', onKeyPress);
    });
    return (<div className="page">
        <div className="main">
            <h1>{title}</h1>
            <h4>{subtitle}</h4>
            <div className="img-list">
                {images.slice(0, maxSlide + 1).map((img, i) => <button onClick={() => clickThumb(i)} className="img-thumb-box">
                    <img className="img-thumb" src={img} />
                    <h4 className="thumb-num">{i + 1}</h4>
                </button>)}
            </div>
            <div className={"modal " + (showModal ? "" : "hidden")}>
                <img className="img-modal" src={images[activeSlide]} />
                <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
                <button className="modal-left" onClick={prevSlide}>{"<"}</button>
                <button className="modal-right" onClick={nextSlide}>{">"}</button>
                <h4 className="modal-num">{activeSlide + 1}</h4>
            </div>

        </div>
    </div>);
}
