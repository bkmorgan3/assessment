import { CheckboxGroup } from "@radix-ui/themes"

type CheckboxProps = {
    checked: boolean
    setChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export const CheckboxSection = ({checked, setChecked}: CheckboxProps) => {
    return (
        <section className="m-auto bg-white rounded-lg mt-6 max-w-[880px] min-w-[580px] px-8 py-4">
            <h2 className="mb-4 text-2xl">Section Title</h2>
            <p className="font-bold text-sm">Select all borrowers that were impacted by the disaster</p>

            <CheckboxGroup.Root defaultValue={['2']}>
                <CheckboxGroup.Item value="1">Alice J Firstimer</CheckboxGroup.Item>
                <CheckboxGroup.Item value="2">Janet P Secondtimer</CheckboxGroup.Item>
                <CheckboxGroup.Item value="3">John H OldTimer</CheckboxGroup.Item>
            </CheckboxGroup.Root>
        </section>
    )
}