import React from 'react'
import runman1 from '../assets/runningman.gif'
import runman2 from '../assets/runningman2.gif'

const man1 = {
    width: '300px',
    position: 'absolute',
    right: '5o%',
    bottom: '100px',
    transfrom: 'translateX(-50px)',
    zIndex: 2
}

const manimg = {
    width: '220px',

}

const man2 = {
    width: '300px',
    position: 'absolute',
    right: '26%',
    bottom: '110px',
    transfrom: 'translateX(-50px)',
    zIndex: 2
}

export default function Man() {


    return (
        <div>
            <div style={man1}>
            <img src={runman1} style={manimg} alt='man1' />
            </div>
            <div style={man2}>
            <img src={runman2} style={manimg} alt='man2' />
            </div>
        </div>
    )
}
