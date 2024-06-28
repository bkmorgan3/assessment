import { CheckboxSection } from './CheckboxSection'
import { EscrowSection } from './EscrowSection'
import { NameSection } from './NameSection'
import { SubmitSection } from './Submit'

type FormProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  borrowers: string[]
  isChecked: boolean[]
  value: string
  selected: string
  setIsChecked: React.Dispatch<React.SetStateAction<any[]>>
  setValue: React.Dispatch<React.SetStateAction<string>>
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export default function Form({
  name,
  setName,
  borrowers,
  isChecked,
  value,
  selected,
  setSelected,
  setIsChecked,
  setValue,
}: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('hi', name, isChecked, value, selected)
  }
  return (
    <div
      style={{ border: '1px solid green' }}
      className="h-full max-w-[880px] min-w-[560px] self-center"
    >
      <form style={{ border: '1px solid red' }} className="h-full">
        <CheckboxSection
          borrowers={borrowers}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <NameSection
          name={name}
          setName={setName}
          value={value}
          setValue={setValue}
        />
        <EscrowSection setSelected={setSelected} />
        <SubmitSection onSubmit={handleSubmit} />
      </form>
    </div>
  )
}
