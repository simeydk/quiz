import React from 'react'
import { QuestionPage } from '../components/QuestionPage'

const questions = [
    `Luzon is the largest and most populous island in which Southeast Asian nation?`,
    `What is the capital city of the North West Province in South Africa?`,
    `Which city, named after a British general and prime minister, is the southernmost capital in the world?`,
    `Which small country in the horn of Africa - whose capital has the same name - was formerly known, during the colonial period, as French Somaliland?`,
    `Who is the current Springbok coach?`,
    `Who won the men's singles title in the 2020 Australian Open tennis?`,
    `Name the young South African who became the world's youngest record holder (of any sport in any country) at the age of 12 in 1965?`,
]

export default () => <QuestionPage 
    questions={questions}
    title={"Round 3"}
    subtitle={"Geo + WhoAmI"}    
    />
