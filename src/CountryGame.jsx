import React, { useState, useMemo } from 'react'
import './CountryGame.css'

//{ Germany: "Berlin", Azerbaijan: "Baku" }

// type ButtonList = string[]
// type ButtonTuple = [string, string]
// interface CountryGame {
//   data: {
//     [key: string]: string
//   }
// }

//const calculation = useMemo(() => expensiveCalculation(count), [count]);

const makeButtonList = (data) => Object.entries(data).reduce((buttonArray, buttonTuple ) => {
  return [...buttonArray, ...buttonTuple]
}).sort((a,b) => 0.5 - Math.random()) 

const CountryGame = ({ data }) => {
  const [clickedButtons, setClickedButtons] = useState([])

  const buttonList = useMemo(() => makeButtonList(data), [data])

  const clickHandler = (button) => {
    setClickedButtons([...clickedButtons, button])
    console.log(clickedButtons)
  }

  return (
    <div>
      {
        buttonList.map((text) => <button key={text} onClick ={() => clickHandler(text)}> {text} </button>)
      }
    </div>
  )
}

export default CountryGame