import React, { useState, useEffect } from 'react'

import './mega.css'

export default function Page() {
    const [rounds, setRounds] = useState([])
    useEffect(() => {
        fetch('/assets/quiz.json').then(res => res.json()).then(setRounds)
    },[])

    return <div>
        <h1>Hello</h1>
        {rounds.map(round => <div><pre>

        {JSON.stringify(round,null,2)}</pre></div>)}
    </div>
}
