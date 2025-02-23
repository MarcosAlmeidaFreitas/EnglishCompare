export function Home() {
  return (
    <div className="flex justify-center flex-col gap-8 selection:bg-purple">
      <h1 className="text-gray-100 text-center text-3xl mt-3 font-bold">
        Vamos jogar o{' '}
        <span className="text-blue font-bold selection:text-gray-100">
          English{' '}
        </span>
        <span className="text-purple font-bold selection:text-gray-100">
          Compare
        </span>
        ?
      </h1>
      <p className="text-gray-100 text-justify w-4xl flex m m-auto justify-center selection:bg-purple">
        O objetivo do jogo é cadastrar o máximo de palavras possíveis, depois de
        cadastrado você gera o arquivo e envia para o seu desafiante que vai
        cadastrar as palavras dele e comparar o arquivos gerados. Nessa
        comparação o programa vai mostrar as palavras que ambos colocaram
        diferentes e quem tiver mais palavras que o seu oponente não lembrou
        ganha o jogo.
      </p>
    </div>
  )
}
