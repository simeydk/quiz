import React, { useState, useEffect } from 'react';

import './QuestionPage.css'



export function QuestionPage({ questions, title = "Gallery", subtitle = "images" }) {
    const [showModal, setShowModal] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [maxSlide, setMaxSlide] = useState(-1);
    const setSlide = (n) => {
        setMaxSlide(Math.max(maxSlide, n));
        setActiveSlide(n);
    };
    function clickThumb(i) {
        setShowModal(true);
        setSlide(i);
    }
    function changeSlide(i = 1) {
        setSlide((activeSlide + questions.length + i) % questions.length);
    }
    const nextSlide = () => changeSlide(+1);
    const prevSlide = () => changeSlide(-1);

    const onStart = () => {
        setSlide(Math.max(activeSlide, 0))
        setShowModal(true)
    }

    function onKeyPress(e) {
        const { key } = e
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
                if (activeSlide >= (questions.length - 1)) {
                    setShowModal(false)
                }
                nextSlide()
            } else {
                setSlide(Math.max(activeSlide, 0))
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
            {maxSlide < 0 ? <button className="start-button" onClick={onStart}><h3>start</h3></button> : ''}
            <div className="question-list">
                {questions.slice(0, maxSlide + 1).map((question, i) => <button onClick={() => clickThumb(i)} className="question-box">
                    <div className="num-box">
                        <h2 className="question-num">{i + 1}</h2>
                    </div>
                    <h4 className="question-text">{question}</h4>
                </button>)}
            </div>
            <div className={"modal " + (showModal ? "" : "hidden")}>
                <div className="modal-box">
                    <div className="num-box">
                        <h2 className="modal-num">{activeSlide + 1}</h2>
                    </div>
                    <h4 className="modal-text">{questions[activeSlide]}</h4>
                </div>
                <button className="modal-close" onClick={() => setShowModal(false)}>X</button>
                <button className="modal-left" onClick={prevSlide}>{"<"}</button>
                <button className="modal-right" onClick={nextSlide}>{">"}</button>
                <h4 className="modal-num">{activeSlide + 1}</h4>
            </div>

        </div>
    </div>);
}
