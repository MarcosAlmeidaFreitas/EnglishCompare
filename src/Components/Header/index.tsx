import logo from '../../assets/logo.png'

export function Header() {
  return (
    <div className="bg-gray-900 pt-4 flex flex-col justify-between">
      <div className=" flex justify-center items-center gap-3 mx-auto">
        <img src={logo} width={130} />
        <div className="gap-2">
          <h1 className="text-blue font-bold text-4xl">English</h1>
          <span className="text-purple pl-10 text-4xl font-bold">Compare</span>
        </div>
      </div>

      <div className="flex items-end justify-end">
        <a href="" className="text-gray-100">
          Teste
        </a>
      </div>
    </div>
  )
}
