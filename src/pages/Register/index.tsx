import { useState } from 'react'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { IoAddCircleSharp } from 'react-icons/io5'

export function Register() {
  const [words, setWords] = useState<Array<string>>([])

  const [newWord, setNewWord] = useState<string>('')

  const handleAddNewWord = () => {
    setWords((prev) => [...prev, newWord])
    setNewWord('')
  }

  function keyPress(evt: React.KeyboardEvent<HTMLInputElement>) {
    if (evt.key === 'Enter') {
      handleAddNewWord()
    }
  }

  return (
    <div className="p-4 max-w-[1240px] mx-auto">
      <div className="flex flex-col gap-3 ">
        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="Digite uma nova palavra"
            value={newWord}
            onChange={(evt) => {
              setNewWord(evt.target.value)
            }}
            onKeyDown={(evt) => {
              keyPress(evt)
            }}
          />
          <Button
            onClick={handleAddNewWord}
            iconLeft={<IoAddCircleSharp className="text-gray-100 text-2xl" />}
          >
            Adicionar
          </Button>
        </div>
      </div>

      <div className="pt-5 text-gray-100">
        {words.map((word) => (
          <p key={word}>{word}</p>
        ))}
      </div>
    </div>
  )
}
