import React from 'react'

const Open = ({ handleStart }) => {
  return (
        <div className="open__card">
            <h3>Let's see your score</h3>
            <p>All you have to do is take a guess out of all the given options and make sure you choose the right one.
            </p>

            <button onClick={handleStart}>Dive In</button>
        </div>
  )
}

export default Open