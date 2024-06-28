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
      <header className="bg-white px-3.5">
        <nav className="py-6">
          <ul className="flex justify-between">
            <li>
              <h1 className="text-3xl">Form Title</h1>
            </li>
            <li>
              <Button
                onClick={() => setName('')}
                size="3"
                className="text-indigo-700 bg-slate-100 border-transparent cursor-pointer"
                radius="full"
              >
                Cancel
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <div
        style={{ border: '1px solid green' }}
        className="h-full max-w-[880px] min-w-[560px] self-center"
      >
        <form style={{ border: '1px solid red' }} className="h-full">
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
          <EscrowSection setSelected={setSelected} />
          <SubmitSection onSubmit={handleSubmit} />
        </form>
      </div>
    </>
  )
}
