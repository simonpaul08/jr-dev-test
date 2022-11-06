import React from 'react'

const End = ({ handleStart }) => {
  return (
        <div className="open__card">
            <h3>Guess The Color Code</h3>
            <p>All you have to do is take a guess out of all the given options and make sure you choose the right one.
            </p>

            <button onClick={handleStart}>Reset</button>
        </div>
  )
}

export default End