import React from 'react'
import car from '../assets/car1.gif'

import useWebAnimations from '@wellyshen/use-web-animations'

const car1 = {
    width: '300px',
    position: 'absolute',
    right: '-500px',
    bottom: '10px',
    transfrom: 'translateX(-50px)',
    zIndex: 3
}

export default function Car1() {

    const { ref } = useWebAnimations({
        keyframes: [
            {transform: 'translate(0,0)'},
            {transform: 'translate(-2200px,0)'}
        ],
        timing: {
            duration: 4000,
            iterations: Infinity
        }
    })

    return (
        <div style={car1}>
            <img src={car} alt='car' ref={ref}/>
        </div>
    )
}
