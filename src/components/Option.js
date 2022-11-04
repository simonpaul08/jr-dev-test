import React from 'react'

const Option = ({ handleStart, value }) => {
    return (
        <div className="col-6">
            <p className='option' onClick={handleStart}>{value ? value : 'Option'}</p>
        </div>
    )
}

export default Option