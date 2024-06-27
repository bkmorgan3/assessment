import { useState } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'

export default function FormPage() {
  const [name, setName] = useState('')

  return (
    <main className="h-screen bg-gray-50  flex flex-col">
      <Header setName={setName} />
      <Form name={name} setName={setName} />
    </main>
  )
}
