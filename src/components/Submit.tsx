import { Button } from '@radix-ui/themes'

type SubmitProps = {
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void
}

export const SubmitSection = ({ onSubmit }: SubmitProps) => {
  return (
    <section className="flex justify-end bg-white p-4 ">
      <Button
        className="color-indigo-700 cursor-pointer"
        size="3"
        radius="full"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          onSubmit(e)
        }
        form="borrowers"
      >
        Submit
      </Button>
    </section>
  )
}
