import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import classNames from 'classnames'

function App() {

  const [checked, setChecked] = useState(false)

  const onCheck = () => {
    setChecked(!checked)
  }

  const checkStyles = classNames('w-6 h-6 border rounded-md appearance-none', {
    'bg-green-400 border-green-800': checked,
    'bg-white border-gray-800': !checked
  })

  const boxStyles = classNames('flex flex-row border w-[90%] p-2 pl-4 items-center rounded-lg', {
    'bg-green-200 border-green-600': checked,
    'bg-white border-gray-800': !checked
  })

  return (
    <div className='max-w-md w-screen mx-auto'>
      <div id="task" className={boxStyles}>
        <input type="checkbox" onChange={onCheck} className={checkStyles}></input>
        <div className='pl-4 text-left flex flex-col justify-between'>
          <h2 className='text-2xl'>Sweep the Kitchen</h2>
          <p className='text-md text-gray-500'>Get under the cabinets, do a good job</p>
        </div>
      </div>
    </div>
  )
}

export default App
