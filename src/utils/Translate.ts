// import { translate } from '@vitalets/google-translate-api'

// export async function translateWorld(world: string) {
//   const response = await translate(world, { to: 'pt-br' })
//   return response.text
// }

import { translate, languages } from 'google-translate-api-x'
import { HttpsProxyAgent } from 'https-proxy-agent'

export async function translateWorld(word: string) {
  const result = await translate(word, {
    to: languages.pt,
  })
  return result
}
