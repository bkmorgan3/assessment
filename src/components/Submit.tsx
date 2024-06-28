import { Button } from '@radix-ui/themes'

type SubmitProps = {
  onSubmit: () => void
}

export const SubmitSection = ({ onSubmit }: SubmitProps) => {
  return (
    <section className="flex justify-end bg-white p-4 ">
      <Button
        onClick={onSubmit}
        className="color-indigo-700 cursor-pointer"
        size="3"
        radius="full"
      >
        Submit
      </Button>
    </section>
  )
}
