import React from 'react'
import city from '../assets/city1.png'
import useWebAnimations from '@wellyshen/use-web-animations'

const city1= {
    height: '450px',
    width: '5000%',
    display: 'block',
    backgroundImage: `url(${city})`,
    position: 'absolute',
    bottom: '155px',
    left: '0',
    right: '0',
    zIndex: '1',
    backgroundRepeat: 'repeat-x',
}

export default function City() {

const { ref } = useWebAnimations({
    keyframes: [
        { transform: 'translate(0,0)' },
        { transform: 'translate(-1400px,0)' },
    ],
    timing: {
        duration: 10000,
        iterations: Infinity,
    }
})

    return (
        <div style={city1} ref={ref}>
            
        </div>
    )
}
