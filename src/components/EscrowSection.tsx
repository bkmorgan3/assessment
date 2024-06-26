import { RadioGroup } from "@radix-ui/themes"

export const EscrowSection = () => {
    return (
        <section className="bg-white mt-4 rounded-lg m-auto max-w-[880px] min-w-[580px] px-8 py-4 mb-4">
            <h2 className="text-2xl mb-4">Section Title</h2>
            <p className="font-bold text-xs mb-4">Escrow Status</p>

            <RadioGroup.Root>
                <RadioGroup.Item value="1">Escrowed</RadioGroup.Item>
                <RadioGroup.Item value="2">Non-Escrowed</RadioGroup.Item>
            </RadioGroup.Root>

        </section>
    )
}