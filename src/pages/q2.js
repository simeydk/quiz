import React from 'react'
import { QuestionPage } from '../components/QuestionPage'

const questions = [
`In 1917, the British monarch George V changed the family name from Saxe-Coburg and Gotha to begin which new dynasty, in an attempt to avoid any German connotations?`,
`The 1972 Olympic Games in which city were marred by a terrorist attack targeted at Israeli athletes?`,
`Krotoa was a translator working for the officials of the Vereenigde Oostindische Compangie (VOC) during the founding of the Cape Colony. What was the name the officials called her?`,
`Gene Cernan, in 1972, was the last person (to date) to complete what feat?`,
`My real name is Farrokh Bulsara and I was born on the island of Zanzibar in 1946. Who am I?`,
`I was an adviser and close friend of Margaret Thatcher and Prince Charles. I was godfather to Prince William and fathered a child with a 14-year-old-girl. I am an South African author. Who am I?`,
`I was delivered through SA's first successful C-section and was named after the cross-dressing doctor who performed the operation. I was prime minister of SA from 1924 to 1939 and a jam tartlet is named after me. Who am I?`,
]

export default () => <QuestionPage 
    questions={questions}
    title={"Round 2"}
    subtitle={"History + WhoAmI"}    
    />
