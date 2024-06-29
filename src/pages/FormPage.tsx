import { useState } from 'react'
import Form from '../components/Form'
import Header from '../components/Header'

export default function FormPage() {
  const [name, setName] = useState('')
  const borrowers = [
    { name: 'Alice J Firstimer', isChecked: false },
    { name: 'Janet P Secondtimer', isChecked: false },
    { name: 'John H Oldtimer', isChecked: false },
  ]
  const [value, setValue] = useState('')

  const [selected, setSelected] = useState('')
  const [selectedBorrowers, setSelectedBorrowers] = useState(borrowers)
  const [error, setError] = useState(false)

  const clearState = () => {
    setName('')
    setValue('')
    setSelected('')
    setSelectedBorrowers(borrowers)
    setError(false)
  }

  return (
    <main className="h-screen bg-gray-50  flex flex-col">
      <Header clearState={clearState} />
      <Form
        name={name}
        setName={setName}
        selected={selected}
        setSelected={setSelected}
        value={value}
        setValue={setValue}
        selectedBorrowers={selectedBorrowers}
        setSelectedBorrowers={setSelectedBorrowers}
        error={error}
        setError={setError}
      />
    </main>
  )
}
