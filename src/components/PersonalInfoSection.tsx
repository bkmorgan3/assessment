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
  error: boolean
  setError: React.Dispatch<React.SetStateAction<boolean>>
}

export const PersonalInfoSection = ({
  name,
  setName,
  value,
  setValue,
  error,
  setError,
}: NameSectionProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setName(e.target.value)
  }
  return (
    <section className="bg-white mt-4 rounded-lg m-auto max-w-[880px] min-w-[560px] px-8 py-4 grow">
      <h2 className="mb-4 text-2xl">Section Title</h2>
      <div className="flex flex-col 2xl:flex-row xl:justify-between">
        <div className="2xl:w-1/2 xl:mr-2">
          <Label.Root htmlFor="name">Name</Label.Root>
          <TextField.Root
            onChange={(e) => handleOnChange(e)}
            value={name}
            id="name"
            type="text"
          ></TextField.Root>
          <div className="h-[20px] my-3 w-1/2">
            {
              <p className="my- text-slate-600 ">
                {' '}
                {error ? 'Please fill out payees name' : ''}
              </p>
            }
          </div>
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
                <Select.Content className="bg-white text-black rounded-lg cursor-pointer shadow-lg h-[80px] w-[150px]">
                  <Select.ScrollUpButton>
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport>
                    <Select.Group>
                      <div className="flex justify-evenly">
                        <Select.Item value="Category 1">
                          <Select.ItemText>Category 1</Select.ItemText>
                          <Select.ItemIndicator className="inline-flex absolute left-0 w-[25px] justify-center">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                      </div>
                      <div className="flex justify-evenly">
                        <Select.Item value="Category 2">
                          <Select.ItemText>Category 2</Select.ItemText>
                          <Select.ItemIndicator className="inline-flex absolute left-0 w-[25px] justify-center">
                            <CheckIcon />
                          </Select.ItemIndicator>
                        </Select.Item>
                      </div>
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
