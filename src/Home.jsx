import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Counter from './Counter'

export default function Home () {
  const [list, setList] = useState([])
  useEffect(() => {
    async function download () {
      const response = await fetch('http://localhost:4000/invites')
      const data = await response.json()
      setList(data.invites)
    }
    download()
  }, [])
  const items = list.map((name, index) => {
    const path = `/invite/${index}`
    return (
      <li key={index}>
        <Link to={path}>{name}</Link>
      </li>
    )
  })
  return (
    <>
      <h2>Home</h2>
      <ul>
        {items}
      </ul>
      <p>There are {list.length} invites</p>
      <Counter />
    </>
  )
}