import React, { useState, useEffect } from 'react'
import Clipboard from 'react-clipboard.js'
import './mega.css'

function whatsAppText({ q, a }, includeAnswers = false) {
    return q.map((question, i) => `${i + 1}. ${question}${includeAnswers ? `\n*${a[i]}*` : ''}`).join('\n\n')
}

export default function Page() {
    const [rounds, setRounds] = useState([])
    const [activeNum, setActiveNum] = useState(0)
    const [showAnswers, setShowAnswers] = useState(false)
    const toggleShowAnswers = () => setShowAnswers(!showAnswers)
    const [showWhatsapp, setShowWhatsapp] = useState(false)
    const toggleShowWhatsapp = () => setShowWhatsapp(!showWhatsapp)

    useEffect(() => {
        fetch('/assets/quiz.json').then(res => res.json()).then(setRounds)
    }, [])

    const activeRound = ((activeNum >= 0) && (activeNum < rounds.length)) ? rounds[activeNum] : { q: [], a: [] }
    const wat = whatsAppText(activeRound, showAnswers)
    return <div class="mega">
        <h1>All the quiz</h1>
        <h2>round {activeNum + 1}</h2>
        <div class="round-button-list">
            {rounds.map((_, i) => <button class="round-button" onClick={() => {setActiveNum(i); setShowAnswers(false)}}>{i + 1}</button>)}
        </div>
        <div class="vert-list">
        <button class="round-button" onClick={toggleShowAnswers}>{showAnswers ? 'Hide' : 'Show'} Answers</button>
        <button class="round-button" onClick={toggleShowWhatsapp}>Show {showWhatsapp ? 'Pretty Formatted' : 'Whatsapp Formatted'}</button>
        <Clipboard className="round-button copy-button" data-clipboard-text={wat}>Copy Whatsapp Text to Clipboard</Clipboard>
        </div>
        {showWhatsapp ? 
        <pre className="whatsapp">
            {wat}
        </pre>
        :
        <ol className="pretty">
            {activeRound.q.map((question, i) => <li>
                <p className="question">{question}</p>
                {showAnswers ? <p className="answer" ><b>{activeRound.a[i]}</b></p> : ''}
            </li>)}
        </ol>
        }
    </div>
}
