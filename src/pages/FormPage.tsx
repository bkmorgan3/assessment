import { useState } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'

export default function FormPage() {
  const [name, setName] = useState('')
   const borrowers = [
    'Alice J Firstimer',
    'Janet P Secondtimer',
    'John H Oldtimer',
  ]

  const [isChecked, setIsChecked] = useState(
    new Array(borrowers.length).fill(false),
  )
  const [value, setValue] = useState('')

  const [selected, setSelected] = useState('')

  return (
    <main className="h-screen bg-gray-50  flex flex-col">
      <Header setName={setName} />
      <Form 
        borrowers={borrowers} 
        isChecked={isChecked} 
        setIsChecked={setIsChecked} 
        name={name} 
        setName={setName}  
        selected={selected}
        setSelected={setSelected}
        value={value}
        setValue={setValue}
        />
    </main>
  )
}
