import React, { useState } from 'react'

const ButtonClick = () => {
    const [clicks, setClicks] = useState(0)

    return (
        <div>
            <button onClick={() => setClicks(clicks + 1)} className="btn-style">
                Clicks counter ({clicks})
            </button>
        </div>
    )
}

export default ButtonClick
