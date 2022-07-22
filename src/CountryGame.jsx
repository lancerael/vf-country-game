import React, { useState, useMemo, useEffect } from 'react'
import './CountryGame.css'

// type ButtonList = string[]
// type ButtonTuple = [string, string]
// interface CountryGame {
//   data: {
//     [key: string]: string
//   }
// }

const makeButtonList = (data) => Object.entries(data).reduce((buttonArray, buttonTuple) => {
  return [...buttonArray, ...buttonTuple]
}).sort((a,b) => 0.5 - Math.random())


const CountryGame = ({ data }) => {
  const [buttonList, setButtonList] = useState(useMemo(() => makeButtonList(data), [data]))
  const [firstClick, setFirstClick] = useState('')
  const [secondClick, setSecondClick] = useState('')

  const clickHandler = (button) => {
    if (firstClick === button) return
    if (firstClick && secondClick) {
      setFirstClick(button) 
      setSecondClick('')
      return
    }
    if (!firstClick) {  
      setFirstClick(button)
      return
    }
    setSecondClick(button)
  }

  useEffect(() => {
    if(secondClick === data[firstClick] || firstClick === data[secondClick]) {
      setButtonList(buttonList.filter(val => ![firstClick, secondClick].includes(val)))
    }
  }, [secondClick])

  if (!buttonList.length) return <h2>Congratulations</h2>

  return (
    <div>
      {
        buttonList.map((text) => {
          let backgroundColor = ''
          if (firstClick === text && !secondClick) {
            backgroundColor = 'blue'
          } else if (firstClick === text || secondClick === text) {
            backgroundColor = 'red'
          }
          return <button
            style={{backgroundColor}}
            key={text}
            onClick={() => clickHandler(text)}
          >
            {text}
          </button>
        })
      }
    </div> 
  )
}

export default CountryGame