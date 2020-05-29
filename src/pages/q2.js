import React from 'react'
import { QuestionPage } from '../components/QuestionPage'

const questions = [
    `The 1972 Olympic Games in which city were marred by a terrorist attack targeted at Israeli athletes?`,
    `In 1917, the British monarch George V changed the family name from Saxe-Coburg and Gotha to begin which new dynasty, in an attempt to avoid any German connotations?`,
    `Krotoa was a translator working for the officials of the Vereenigde Oostindische Compangie (VOC) during the founding of the Cape Colony. What was the name the officials called her?`,
    `Which capital city was previously known as Peking?`,
    `In what year did South Africa become a republic?`,
    `Gene Cernan, in 1972, was the last person (to date) to complete what feat?`,
    `My real name is Farrokh Bulsara and I was born on the island of Zanzibar in 1946. Who am I?`,
]

export default () => <QuestionPage
    questions={questions}
    title={"Round 2"}
    subtitle={"History"}
/>
