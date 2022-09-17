import React, { useState } from 'react'
import './clicks.scss'

const Clicks = () => {
    const [clicks, setClicks] = useState(0)

    function increment() {
        setClicks(clicks + 1);
      }

    return (
        <div>
            <button onClick={increment} className='btn-style'>Clicks counter ({clicks})</button>
        </div>
    )
}

export default Clicks