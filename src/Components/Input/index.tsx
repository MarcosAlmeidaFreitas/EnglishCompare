import { ComponentProps } from "react";

interface propsInput extends ComponentProps<'input'> { }

export function Input(props: propsInput) {
  return <input className="bg-gray-500 text-center placeholder:text-gray-300 placeholder:text-center p-4 rounded-md w-full text-gray-100 hover:bg-gray-400 border-none focus:outline-2 focus: -outline-offset-2 focus:outline-purpleDark" {...props}></input>
}
