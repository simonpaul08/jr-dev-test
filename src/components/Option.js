import React from 'react'

const Option = ({ handleSelectOption, value }) => {
    return (
        <div className="col-6">
            <p className='option' onClick={handleSelectOption}>{value ? value : 'Option'}</p>
        </div>
    )
}

export default Option