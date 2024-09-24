import { react } from 'react'
import './App.css'

// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

function HeatSquare() {
    // randomly generate a value from the set
    const colors = ['bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500']


    return <div className={`${getRandomItem(colors)} w-full aspect-square`}></div>
}

function columnForDay(day: string) {
    return (
        <div className='flex flex-col w-12 gap-2'>
            <div>
                {day}
            </div>
            <HeatSquare />
            <HeatSquare />
            <HeatSquare />
            <HeatSquare />
            <HeatSquare />
        </div>
    )
}

function Heatgrid() {

    const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    return (
        <>
            <div className='flex gap-2'>
                {days.map(columnForDay)}
            </div>
        </>
    )
}

export default Heatgrid;
