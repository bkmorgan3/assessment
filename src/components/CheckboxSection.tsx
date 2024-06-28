import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import * as Label from '@radix-ui/react-label'

type CheckboxProps = {
  borrowers: string[]
  isChecked: boolean[]
  setIsChecked: React.Dispatch<React.SetStateAction<any[]>>
}

export const CheckboxSection = ({
  borrowers,
  isChecked,
  setIsChecked,
}: CheckboxProps) => {
  const handleOnChange = (place: number) => {
    const updateCheckState = isChecked.map((check, i) =>
      i === place ? !check : check,
    )
    setIsChecked(updateCheckState)
  }

  return (
    <section className="m-auto bg-white rounded-lg mt-6 max-w-[880px] min-w-[580px] px-8 py-4">
      <h2 className="mb-4 text-2xl">Section Title</h2>
      <p className="font-bold text-sm mb-4">
        Select all borrowers that were impacted by the disaster
      </p>

      {borrowers.map((borrower, i) => {
        return (
          <div key={i} className="flex mb-1">
            <Checkbox.Root
              className="border-2 border-indigo-500/100 border-solid w-[20px] h-[20px] flex justify-center items-center mr-2"
              onCheckedChange={() => handleOnChange(i)}
              name={borrowers[i]}
              checked={isChecked[i]}
            >
              <Checkbox.Indicator>
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <Label.Root  className="mb-0.5">{borrower}</Label.Root>
          </div>
        )
      })}
    </section>
  )
}
