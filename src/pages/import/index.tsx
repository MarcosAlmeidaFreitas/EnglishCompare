import { translateWorld } from '../../utils/Translate'

export async function Import() {
  const translate = translateWorld('work')
  return <h1 className="text-gray-100">{(await translate).text}</h1>
}
// export function Import() {
//   return <h1>Teste</h1>
// }
