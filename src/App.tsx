import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import classNames from 'classnames'
import Box from './Box'


type Task = {
  title: string
  description: string
}


const tasks : Task[] = [
  {
    title: "Vacuuming",
    description: "Vacuum carpets rugs etc."
  },
  {
    title: "Dishwashing",
    description: "wash a lot of dishes"
  }
]



function App() {



  return (
    <>

    Hello

    {
      tasks.map((task) => {
        return <Box title={task.title} description={task.description}/>
      })
    }


    </>
 
  )
}

export default App
