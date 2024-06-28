import { TextField, Flex } from '@radix-ui/themes'
import * as Select from '@radix-ui/react-select'
import * as Label from '@radix-ui/react-label'
import React from 'react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'

type NameSectionProps = {
  name: string
  value: string
  setName: React.Dispatch<React.SetStateAction<string>>
  setValue: React.Dispatch<React.SetStateAction<string>>
}

export const PersonalInfoSection = ({
  name,
  setName,
  value,
  setValue,
}: NameSectionProps) => {
  return (
    <section className="bg-white mt-4 rounded-lg m-auto max-w-[880px] min-w-[580px] px-8 py-4 grow">
      <h2 className="mb-4 text-2xl">Section Title</h2>
      <div className="flex flex-col 2xl:flex-row xl:justify-between">
        <div className="2xl:w-1/2 xl:mr-2">
          <Label.Root htmlFor="name">Name</Label.Root>
          <TextField.Root
            onChange={(e) => setName(e.target.value)}
            value={name}
            id="name"
            type="text"
          ></TextField.Root>
        </div>

        <div className="2xl:w-1/2">
          <Label.Root htmlFor="category">Category</Label.Root>
          <Flex maxWidth="100%">
            <Select.Root value={value} onValueChange={setValue}>
              <Select.Trigger className="inline-flex items center justify-center rounded  h-8 px-2 w-full border-2 border-gray-200/100 border-solid">
                <Select.Value placeholder="Select a Category" />
                <Select.Icon className="pl-10 pt-1 justify-between">
                  <ChevronDownIcon />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="bg-slate-400 text-white rounded-lg cursor-pointer shadow-lg h-[100px]">
                  <Select.ScrollUpButton>
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport>
                    <Select.Group>
                      <Select.Item value="Category 1">
                        <Select.ItemText>Category 1</Select.ItemText>
                        <Select.ItemIndicator>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                      <Select.Item value="Category 2">
                        <Select.ItemText>Category 2</Select.ItemText>
                        <Select.ItemIndicator>
                          <CheckIcon />
                        </Select.ItemIndicator>
                      </Select.Item>
                    </Select.Group>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Flex>
        </div>
      </div>
    </section>
  )
}
