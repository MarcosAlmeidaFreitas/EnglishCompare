import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { IoAddCircleSharp } from 'react-icons/io5'

export function Home() {
  return (
    <div className="gap-3 flex justify-center mt-2">
      <div className="flex flex-row gap-2 mx-auto w-4xl justify-center">
        <Input placeholder="Digite a sua palavra para cadastrar"></Input>
        <Button
          iconRight={<IoAddCircleSharp className="text-gray-100 text-2xl" />}
        >
          teste
        </Button>
      </div>
    </div>
  )
}
