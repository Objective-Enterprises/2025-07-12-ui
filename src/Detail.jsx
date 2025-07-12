import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail () {
  const [name, setName] = useState()
  const params = useParams()
  useEffect(() => {
    async function download () {
      const url = `http://localhost:4000/invites/${params.index}`
      const response = await fetch(url)
      const data = await response.json()
      setName(data.invite)
    }
    download()
  }, [params.index])
  return (
    <>
      <h2>Invite #{params.index}</h2>
      <h3>{name}</h3>
    </>
  )
}