import './App.css'
import Box from './Box'
import Post from './Post'


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

    {
      tasks.map((task) => {
        return <Box title={task.title} description={task.description}/>
      })
    }

    <Post></Post>

    </>
 
  )
}

export default App
