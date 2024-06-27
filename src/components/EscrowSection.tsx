import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Label from '@radix-ui/react-label'

type EscrowProps = {
  setSelected: React.Dispatch<React.SetStateAction<string>>
}

export const EscrowSection = ({ setSelected}: EscrowProps) => {
  return (
    <section className="bg-white mt-4 rounded-lg m-auto max-w-[880px] min-w-[580px] px-8 py-4 mb-4">
      <h2 className="text-2xl mb-4">Section Title</h2>
      <p className="font-bold text-xs mb-4">Escrow Status</p>

      <RadioGroup.Root className="flex flex-col" onValueChange={setSelected}>
         <div style={{ display: 'flex', alignItems: 'center'}}>
          <RadioGroup.Item  className="w-[25px] h-[25px] rounded-full border-2 border-gray-200/100 border-solid" value="escrowed" id="r1">
            <RadioGroup.Indicator className=" flex justify-center items-center after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-full after:bg-black" />
          </RadioGroup.Item>
          <Label.Root className="pl-2" htmlFor="r1">
            Escrowed
          </Label.Root>
      </div>
         <div style={{ display: 'flex', alignItems: 'center'}}>
          <RadioGroup.Item  className="w-[25px] h-[25px] rounded-full border-2 border-gray-200/100 border-solid" value="non-escrowed" id="r2">
            <RadioGroup.Indicator className=" flex justify-center items-center after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-full after:bg-black" />
          </RadioGroup.Item>
          <Label.Root className="pl-2" htmlFor="r2">
            Non-Escrowed
          </Label.Root>
      </div>
       
      </RadioGroup.Root>
    </section>
  )
}
