import React from 'react'
import plane from '../assets/plane.gif'

import useWebAnimations from '@wellyshen/use-web-animations'

const plane1 = {
    width: '650px',
    position: 'absolute',
    right: '-40%',
    top: '-20px',
    zIndex: 2,
}

export default function Plane() {

    const { ref } = useWebAnimations({
        keyframes: [
            {transform: 'translate(0,0)'},
            {transform: 'translate(-1800px,0)'}
        ],
        timing: {
            duration: 8000,
            iterations: Infinity
        }
    })

    return (
        <div style={plane1}>
            <img src={plane} alt='car' ref={ref}/>
        </div>
    )
}
