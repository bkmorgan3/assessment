import { Button } from '@radix-ui/themes'

export const SubmitSection = () => {
  return (
    <section className="flex justify-end bg-white p-4 ">
      <Button
        className="color-indigo-700 cursor-pointer"
        size="3"
        radius="full"
      >
        Submit
      </Button>
    </section>
  )
}
