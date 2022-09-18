import ButtonClick from 'components/Button/ButtonClick'
import { useState } from 'react'
import './clicks.scss'

const Clicks = () => {
    const [clicks, setClicks] = useState(0)
    

    

    return (
        <div className='btn'>
            <ButtonClick/>
            <ButtonClick/>
            <ButtonClick/>
        </div>
    )
}

export default Clicks