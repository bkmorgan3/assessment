import { Button } from '@radix-ui/themes'

type SubmitProps = {
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>
}

export const SubmitSection = ({ handleSubmit }: SubmitProps) => {
  return (
    <section className="flex justify-end bg-white p-4 ">
      <Button
        className="color-indigo-700 cursor-pointer"
        size="3"
        radius="full"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </section>
  )
}
