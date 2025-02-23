import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { IoAddCircleSharp } from 'react-icons/io5';

export function Home() {
  const [words, setWords] = useState<Array<string>>([]);

  const [newWord, setNewWord] = useState<string>("");

  const handleAddNewWord = () => {
    setWords((prev) => [...prev, newWord]);
    setNewWord('')
  };

  return (
    <div className='flex gap-3'>
      <h1 className="text-gray-50">teste</h1>
      <Input placeholder='teste'></Input>
      <Button iconRight={<IoAddCircleSharp className='text-gray-100 text-2xl' />}>teste</Button>
    </div>
  );
}
