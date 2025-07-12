import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'

export default function App () {
  return (
    <BrowserRouter>
      <Link to='/'>
        <h1>Invites</h1>
      </Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/invite/:index' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  )
}
