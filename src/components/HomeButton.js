import React from 'react';
import { Link } from 'gatsby';
import './HomeButton.css'

export function HomeButton() {
    return (<Link to="/"><h4 className="home-button">H</h4></Link>);
}
