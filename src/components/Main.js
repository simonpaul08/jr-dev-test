import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Open from './Open'

const Main = ({ setFinished }) => {

    const [run, setRun] = useState(false)
    const [colors] = useState([
        '#624F82',
        '#FD841F',
        '#61764B',
        '#594545',
        '#150050',
        '#251B37',
        '#47B5FF',
        '#4C6793',
        '#FA7070',
        '#367E18'
    ])

    const [remainingColors, setRemainingColors] = useState([])
    const [currentColor, setCurrentColor] = useState('')
    const [options, setOptions] = useState([])
    const [wrongAnswer, setWrongAnswer] = useState(false)


    useEffect(() => {
        setRemainingColors(colors.sort((a, b) => 0.5 - Math.random()))
    }, [])

    // handle Start
    const handleStart = () => {
        getRandomColor()
        setRun(true)
    }


    // get random color
    const getRandomColor = () => {
        const random = Math.floor(Math.random() * (remainingColors.length - 1))
        const randomColor = remainingColors[random]

        if (randomColor) {
            setCurrentColor(randomColor)
        } else {
            setFinished(true)
        }
    }

    useEffect(() => {
        getRandomOptions()
        setRemainingColors((remainingColors) => remainingColors.filter(color => color !== currentColor))
    }, [currentColor])


    // get random options 
    const getRandomOptions = () => {
        let count = 3;
        let copyArr = [...colors]
        let newArr = []
        while (count) {
            const random = Math.floor(Math.random() * copyArr.length)
            const randomEle = copyArr[random]

            if (newArr.indexOf(randomEle) === -1 && randomEle !== currentColor) {
                newArr.push(randomEle)
                count--;
            }
        }

        newArr.push(currentColor)
        newArr = newArr.sort((a, b) => 0.5 - Math.random())
        return setOptions(newArr)
    }



    // handle select option
    const handleSelectOption = (e) => {
        setWrongAnswer(false)
        const option = e.target.textContent
        if (option === currentColor) {
            getRandomColor()
        }else {
           setWrongAnswer(true)
        }
    }
    return (
        <>
            {run ? <Card currentColor={currentColor} options={options} handleSelectOption={handleSelectOption} wrongAnswer={wrongAnswer}/> : <Open handleStart={handleStart} />}
        </>
    )
}

export default Main