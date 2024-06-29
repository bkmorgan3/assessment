import { CheckboxSection } from './CheckboxSection'
import { EscrowSection } from './EscrowSection'
import { PersonalInfoSection } from './PersonalInfoSection'
import { SubmitSection } from './Submit'

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
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
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
  error,
  setError,
}: FormProps) {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name === '') {
      setError(true)
      return
    }
    console.log(selectedBorrowers, name, value, selected)
  }
  return (
    <>
      <div className="">
        <form
          onSubmit={handleSubmit}
          className="h-full full max-w-[880px] min-w-[560px] mx-auto flex flex-col justify-start"
          id="borrowers"
        >
          <CheckboxSection
            selectedBorrowers={selectedBorrowers}
            setSelectedBorrowers={setSelectedBorrowers}
          />
          <PersonalInfoSection
            name={name}
            setName={setName}
            value={value}
            setValue={setValue}
            error={error}
            setError={setError}
          />
          <EscrowSection selected={selected} setSelected={setSelected} />
        </form>

        <SubmitSection onSubmit={handleSubmit} />
      </div>
    </>
  )
}
