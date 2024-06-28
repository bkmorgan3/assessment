import { CheckboxSection } from './CheckboxSection'
import { EscrowSection } from './EscrowSection'
import { NameSection } from './NameSection'
import { SubmitSection } from './Submit'
import { Button } from '@radix-ui/themes'

type Borrower = {
  name: string
  isChecked: boolean
}

type FormProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  value: string
  selected: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  setSelected: React.Dispatch<React.SetStateAction<string>>
  selectedBorrowers: Borrower[]
  setSelectedBorrowers: React.Dispatch<React.SetStateAction<Borrower[]>>
}

export default function Form({
  name,
  setName,
  value,
  selected,
  setSelected,
  setValue,
  selectedBorrowers,
  setSelectedBorrowers,
}: FormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('hi', name, selectedBorrowers, value, selected)
  }
  return (
    <>
      <form className="h-full full max-w-[880px] min-w-[560px] mx-auto flex flex-col justify-start">
        <CheckboxSection
          selectedBorrowers={selectedBorrowers}
          setSelectedBorrowers={setSelectedBorrowers}
        />
        <NameSection
          name={name}
          setName={setName}
          value={value}
          setValue={setValue}
        />
        <EscrowSection selected={selected} setSelected={setSelected} />
        <SubmitSection onSubmit={handleSubmit} />
      </form>
    </>
  )
}
