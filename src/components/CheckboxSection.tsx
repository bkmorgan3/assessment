import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as Label from '@radix-ui/react-label'

type Borrower = {
  name: string
  isChecked: boolean
}

type CheckboxProps = {
  selectedBorrowers: Borrower[]
  setSelectedBorrowers: React.Dispatch<React.SetStateAction<Borrower[]>>
}

export const CheckboxSection = ({
  selectedBorrowers,
  setSelectedBorrowers,
}: CheckboxProps) => {
  const handleOnChange = (index: number) => {
    setSelectedBorrowers(
      selectedBorrowers.map((borrower, i) =>
        index === i
          ? { ...borrower, isChecked: !borrower.isChecked }
          : borrower,
      ),
    )
  }

  return (
    <section className="m-auto grow bg-white rounded-lg mt-6 max-w-[880px] min-w-[560px] px-8 py-4">
      <h2 className="mb-4 text-2xl">Section Title</h2>
      <p className="font-bold text-sm mb-4">
        Select all borrowers that were impacted by the disaster
      </p>

      {selectedBorrowers.map((borrower, i) => {
        return (
          <div key={i} className="flex mb-1">
            <Checkbox.Root
              className="border-2 border-indigo-500/100 border-solid w-[20px] h-[20px] flex justify-center items-center mr-2"
              onCheckedChange={() => handleOnChange(i)}
              name={selectedBorrowers[i].name}
              checked={selectedBorrowers[i].isChecked}
            >
              <Checkbox.Indicator>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Label.Root className="mb-0.5">{borrower.name}</Label.Root>
          </div>
        )
      })}
    </section>
  )
}
