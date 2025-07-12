import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([])
  useEffect(() => {
    async function download () {
      const response = await fetch('http://localhost:4000/invites')
      const data = await response.json()
      setList(data.invites)
      setCount(data.invites.length)
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
  function handleClick () {
    setCount(count + 1)
  }
  return (
    <>
      <h2>Home</h2>
      <ul>
        {items}
      </ul>
      <p>There are {list.length} invites</p>
      <button onClick={handleClick}>Count: {count}</button>
    </>
  )
}