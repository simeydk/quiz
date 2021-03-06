import React, { useEffect, useRef, useState, useCallback } from "react"

import {CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './playa.css'


function Playa({ startTime = 0, src = '', autoPlay = false, num = "", onClick = () => null, ...rest }) {
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

    useEffect(() => {
        if (!audio.current) return
        if (autoPlay) {
            audio.current.play()
        } else {
            audio.current.pause()
        }
    }, [autoPlay])

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
        onClick()
    }

    const onContextMenu = (e) => {
        e.preventDefault()
        audio.current.pause()
        audio.current.currentTime = 0
    }

    const progressPc = duration == 0 ? 0 : currentTime / duration

    return (
        <div>
            <audio ref={audio} src={src} autoPlay={autoPlay} {...rest} onTimeUpdate={onChange} onCanPlay={onChange} />
            <button className = "player-button" onClick={playPause} onContextMenu={onContextMenu} onDoubleClick={onContextMenu} style={{ width: '100px', height: '100px' }}>
                <CircularProgressbarWithChildren value={progressPc * 100} background style={{}}>
                    <h2 className={`button-label ${(audio.current && !audio.current.paused) ? 'playing' : ''}`}>{num}</h2>
                    <div className="button-time">{`${currentTime.toFixed(0)}/${duration.toFixed(0)}`}</div>
                </CircularProgressbarWithChildren>
            </button>
        </div>
    )
}

export default Playa
