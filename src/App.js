import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';

function App() {


  const [colors, setColors] = useState([
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

  const [currentColor, setCurrentColor] = useState('')
  const [options, setOptions] = useState([])

  const handleStart = () => {
    getRandomColor()
  }


  // get random color
  const getRandomColor = () => {
    const random = Math.floor(Math.random() * (colors.length - 1))
    const randomColor = colors[random]

    if(randomColor){
      setCurrentColor(randomColor)
    }else {
      alert('This is the end')
    }

  }



  useEffect(() => {
    getRandomOptions()
    setColors((colors) => colors.filter(color => color !== currentColor))
  }, [currentColor])


  // get random options 
  const getRandomOptions = () => {
    let count = 3;
    let copyArr = [...colors]
    let newArr = []
    while(count) {
      const random = Math.floor(Math.random() * copyArr.length)
      const randomEle = copyArr[random]

      if(randomEle){
        newArr.push(randomEle)
        count--;
      }
    }

    newArr.push(currentColor)

    return setOptions(newArr)
  }


  useEffect(() => {
    console.log(options)
    console.log(currentColor)
  }, [options])


  return (
    <>
    <div className="main">
      <Card currentColor={currentColor} handleStart={handleStart} options={options}/>
    </div>
    </>
  );
}

export default App;

// color

/*

624F82
FD841F
61764B
594545
150050
251B37

*/