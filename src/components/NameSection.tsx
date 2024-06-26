import { TextField, Flex, Select } from "@radix-ui/themes"
import * as Label from "@radix-ui/react-label"
import React from "react"

type NameSectionProps = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
   
}

export const NameSection = ({name, setName}: NameSectionProps) => {
     const data = {
    'Category 1': { label: 'Category 1' },
    'Category 2': { label: 'Category 2' },
  };
  const [value, setValue] = React.useState('Category 1');
    return (
        <section className="bg-white mt-4 rounded-lg m-auto max-w-[880px] min-w-[580px] px-8 py-4">
            <h2 className="mb-4 text-2xl">Section Title</h2>
            <div className="flex flex-col xl:flex-row xl:justify-between">
                <div className="xl:w-1/2 xl:mr-2">
                    <Label.Root htmlFor="name">Name</Label.Root>
                    <TextField.Root onChange={e => setName(e.target.value)} value={name} id="name" type="text"></TextField.Root>
                </div>
                <div className="xl:w-1/2">
                    <Label.Root htmlFor="category">Category</Label.Root>
                    <Flex direction="column" maxWidth="100%">
                     <Select.Root value={value} onValueChange={setValue}>
                        <Select.Trigger placeholder="Select a Category">
                         <Flex as="span" align="center" gap="2">
                          
                         </Flex>
                         </Select.Trigger>
                            <Select.Content position="popper">
                             <Select.Item value="Category 1">Category 1</Select.Item>
                             <Select.Item value="Category 2">Category 2</Select.Item>
                            </Select.Content>
                     </Select.Root>
                    </Flex>
                </div>
            </div>
        </section>
    )
}