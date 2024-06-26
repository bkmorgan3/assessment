import { CheckboxGroup } from "@radix-ui/themes"

export const CheckboxSection = () => {
    return (
        <section className="m-auto bg-white py-8 px-8 rounded-lg">
            <h2 className="mb-4 text-2xl">Section Title</h2>
            <p className="font-bold">Select all borrowers that were impacted by the disaster</p>

            <CheckboxGroup.Root>
                <CheckboxGroup.Item value="1">Alice J Firstimer</CheckboxGroup.Item>
                <CheckboxGroup.Item value="1">Janet P Secondtimer</CheckboxGroup.Item>
                <CheckboxGroup.Item value="1">John H OldTimer</CheckboxGroup.Item>
            </CheckboxGroup.Root>
        </section>
    )
}