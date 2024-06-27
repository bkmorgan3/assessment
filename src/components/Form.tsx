import { useState } from 'react'
import { CheckboxSection } from './CheckboxSection'
import { EscrowSection } from './EscrowSection'
import { NameSection } from './NameSection'
import { SubmitSection } from './Submit'

type FormProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
}

export default function Form({ name, setName }: FormProps) {
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
  console.log(selected)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('hi', name, isChecked, value, selected)
  }
  return (
    <div style={{border: '1px solid green'}} className="h-full max-w-[880px] min-w-[560px] self-center">
      <form style={{border: '1px solid red'}}className="h-full">
        <CheckboxSection
          borrowers={borrowers}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <NameSection name={name} setName={setName} value={value} setValue={setValue} />
        <EscrowSection selected={selected} setSelected={setSelected} />
        <SubmitSection onSubmit={handleSubmit} />
      </form>
    </div>
  )
}
