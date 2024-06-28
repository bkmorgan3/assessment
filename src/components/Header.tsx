import { Button } from '@radix-ui/themes'

type HeaderProps = {
  clearState: () => void
}

export default function Header({ clearState }: HeaderProps) {
  return (
    <header className="bg-white px-3.5">
      <nav className="py-6">
        <ul className="flex justify-between">
          <li>
            <h1 className="text-3xl">Form Title</h1>
          </li>
          <li>
            <Button
              onClick={() => clearState()}
              size="3"
              className="text-indigo-700 bg-slate-100 border-transparent cursor-pointer"
              radius="full"
            >
              Cancel
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
