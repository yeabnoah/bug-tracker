import { Link } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <h2>Root screen</h2>
      <Link to='/home'>home</Link>

      <Button>this is shadcn calling</Button>
    </>
  )
}

export default App
