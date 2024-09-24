import './App.css'
import Box from './Box'
import Post from './Post'
import Heatgrid from './Heatgrid'

type Task = {
  title: string
  description: string
}


const tasks: Task[] = [
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
    <div className='flex flex-col justify-center items-center'>

      {
        tasks.map((task) => {
          return <Box title={task.title} description={task.description} />
        })
      }

      <Post />
      <br></br>
      <Heatgrid />

    </div>



  )
}

export default App
