import {Link } from "gatsby"
import React, { useState, useEffect } from 'react';
import './index.css'
import { HomeButton } from "../components/HomeButton";



export function Page() {

    return (<div className="page">
        <HomeButton />
        <div className="main">
            <h1>Let's get quizzical</h1>
            <h4>Farewell Reggie!</h4>
            <Link to="/q1"><h3>Round 1</h3></Link>
            <Link to="/pics"><h3>Pictorial 1</h3></Link>
            <Link to="/q2"><h3>Round 2</h3></Link>
            <Link to="/logos"><h3>Pictorial 2</h3></Link>
            <Link to="/q3"><h3>Round 3</h3></Link>
            <Link to="/audio"><h3>Audio</h3></Link>
        </div>
    </div>)
}

export default Page
