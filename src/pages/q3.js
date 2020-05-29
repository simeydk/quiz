import React from 'react'
import { QuestionPage } from '../components/QuestionPage'

const questions = [
    `Luzon is the largest and most populous island in which Southeast Asian nation?`,
    `What is the capital city of the North West Province in South Africa?`,
    `Which city, named after a British general and prime minister, is the southernmost capital in the world?`,
    `Which small country in the horn of Africa - whose capital has the same name - was formerly known, during the colonial period, as French Somaliland?`,
    `What is the Botswana's currency called? (Bonus point: what does the word mean?)`,
    `Who is the current Springbok coach?`,
    `Who won the men's singles title in the 2020 Australian Open tennis?`,
    `Who currently holds the record for the highest total runs scored in Test Cricket?`,
    `Which English Premier League football team was nicknamed the Invincibles after completing a season unbeaten?`
]

export default () => <QuestionPage 
    questions={questions}
    title={"Round 3"}
    subtitle={"Geo + Sport"}    
    />
