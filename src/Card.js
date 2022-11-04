import React from 'react'
import Option from './components/Option'

const Card = ({ currentColor, handleStart, options }) => {
  return (
    <div className='card__container'>
        <div className="card__content">
            <div className="color-block">
                <div className="color-wrapper" style={{ backgroundColor: currentColor }}>

                </div>
            </div>
            <div className="option-block">
                <div className="option-wrapper" >
                    {options && options.map(opt => {
                        return <Option handleStart={handleStart} value={opt}/>
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card