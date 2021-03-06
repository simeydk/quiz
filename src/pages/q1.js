import React from 'react'
import { QuestionPage } from '../components/QuestionPage'

const questions = [
    `In which 1990s film did Tom Cruise famously want you to "show him the money"?`,
    `"I'll make a man out of you" and "A girl worth fighting for" are songs from the soundtrack of which 1998 Disney movie?`,
    `Who, in 2009, became the first woman to ever win the Academy Award for Best Director, for her war thriller The Hurt Locker?`,
    `Which fictional character, created by the late Tom Clancy, has been played on screen by Alec Baldwin, Harrison Ford, Ben Affleck, Chris Pine, and most recently, John Krasinski?`,
    `Prince Caspian, The Voyage of the Dawn Treader and The Silver Chair are three novels set predominantly in which fictional world?`,
]

export default () => <QuestionPage 
    questions={questions}
    title={"Round 1"}
    subtitle={"Books n' Movies"}    
    />
