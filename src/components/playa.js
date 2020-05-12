import React, { useEffect, useRef, useState } from "react"

import { Circle } from '@tiaanduplessis/react-progressbar'

import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Playa({ startTime = 0, src = '', autoPlay = false, number = "", ...rest }) {
    const audio = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const startTimeIsNumber = (typeof startTime) === 'number'
        if (startTimeIsNumber) {
            audio.current.currentTime = startTime
            if (autoPlay) audio.current.play()
        }
    }, [startTime, src, audio.current])

    const onChange = () => {
        if (audio.current) {
            setCurrentTime(audio.current.currentTime)
            setDuration(audio.current.duration)
        }
    }

    const playPause = () => {
        if (audio.current.paused) {
            audio.current.play()
        }
        else {
            audio.current.pause()
        }
    }

    const onContextMenu = (e) => {
        e.preventDefault()
        audio.current.pause()
        audio.current.currentTime = 0
    }

    const progressPc = duration == 0 ? 0 : currentTime / duration

    return (
        <div>
            <audio ref={audio} src={src} autoPlay={autoPlay} {...rest} onTimeUpdate={onChange} />
            <button onClick={playPause} onContextMenu={onContextMenu} onDoubleClick={onContextMenu} style={{ width: '100px', height: '100px' }}>
                <CircularProgressbarWithChildren value={progressPc * 100}>
                    <h1>{number}</h1>
                </CircularProgressbarWithChildren>
            </button>
        </div>
    )
}

export default Playa
